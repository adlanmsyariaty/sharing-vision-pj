'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Title shall be filled"
        },
        notEmpty: {
          msg: "Title shall be filled"
        },
        len: {
          args: [20],
          msg: "Min. character of title is 20"
        }
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Content shall be filled"
        },
        notEmpty: {
          msg: "Content shall be filled"
        },
        len: {
          args: [200],
          msg: "Min. character of content is 200"
        }
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Category shall be filled"
        },
        notEmpty: {
          msg: "Category shall be filled"
        },
        len: {
          args: [3],
          msg: "Min. character of category is 3"
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Status shall be filled"
        },
        notEmpty: {
          msg: "Status shall be filled"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};