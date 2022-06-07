const { Post, sequelize } = require("../models");

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

      const posts = await Post.findAll({
        limit,
        offset: offset - 1,
        attributes: {
          exclude: ["id", "createdAt", "updatedAt"],
        },
      });

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
          id
        }
      })

      if (!post) throw {name: "POST_NOT_FOUND"}

      await Post.destroy({
        where: {
          id,
        },
      });
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
          id
        }
      })

      if (!post) throw {name: "POST_NOT_FOUND"}

      await Post.update(
        {
          title,
          content,
          category,
          status,
        },
        {
          where: {
            id
          }
        }
      );
      res.status(200).json({});
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PostController;
