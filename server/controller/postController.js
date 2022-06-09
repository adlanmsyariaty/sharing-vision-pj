const { Post } = require("../models");
const { Op } = require('sequelize')

class PostController {
  static async addPostData(req, res, next) {
    try {
      const { title, content, category, status } = req.body;
      await Post.create({
        title,
        content,
        category,
        status,
      });
      res.status(201).json({});
    } catch (error) {
      next(error);
    }
  }

  static async getArticle(req, res, next) {
    try {
      const limit = req.params.limit;
      const offset = req.params.offset;
      const status = req.query.status;

      let options = {
        where: {},
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      };

      if (status) {
        options.where = {
          ...options.where,
          status: {
            [Op.iLike]: `%${status}%`,
          },
        };
      }
      if (Number(limit)) {
        options.limit = limit;
      }

      if (Number(offset)) {
        options.offset = offset;
      }

      const posts = await Post.findAll(options);
      res.status(200).json(posts);
    } catch (error) {
      next(error);
    }
  }

  static async detailArticle(req, res, next) {
    try {
      const id = +req.params.id;

      const detailPost = await Post.findOne({
        where: { id },
        attributes: {
          exclude: ["id", "createdAt", "updatedAt"],
        },
      });

      res.status(200).json(detailPost);
    } catch (error) {
      next(error);
    }
  }

  static async deleteArticle(req, res, next) {
    try {
      const id = +req.params.id;

      const post = await Post.findOne({
        where: {
          id,
        },
      });

      if (!post) throw { name: "POST_NOT_FOUND" };

      await Post.update(
        {
          status: "Thrash"
        },
        {
          where: {
            id,
          },
        }
      );
      res.status(200).json();
    } catch (error) {
      next(error);
    }
  }

  static async editArticle(req, res, next) {
    try {
      const id = +req.params.id;
      const { title, content, category, status } = req.body;

      const post = await Post.findOne({
        where: {
          id,
        },
      });

      if (!post) throw { name: "POST_NOT_FOUND" };

      await Post.update(
        {
          title,
          content,
          category,
          status,
        },
        {
          where: {
            id,
          },
        }
      );
      res.status(200).json({});
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PostController;
