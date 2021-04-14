const { Post, sequelize } = require('../models/');

const postsController = {
    index: async (req,res) => {
        let posts = await Post.findAll();

        return res.json(posts);
    },

    create: async (req,res) => {
        const {texto: _texto, img: _img, usuarios_id: _usuarios_id, n_likes: _n_likes} = req.body;

        const post = await Post.create({
            texto: _texto,
           img:_img,
           usuarios_id: _usuarios_id,
           n_likes: _n_likes 
        });
        return res.json(post);
    },

    update: async (req,res) => {
        const {id: _id} = req.params;
        const {texto: _texto, img:_img, usuarios_id:_usuarios_id, n_likes:_n_likes} = req.body;

        const post = await Post.update({
            texto: _texto,
            img: _img,
            usuarios_id:_usuarios_id,
            n_likes:_n_likes
        }, {
            where: {
                id:_id
            }
        });
        return res.json(post);
    },

    delete: async (req, res) => {
        const {id: _id} = req.params;

        const post = await Post.destroy({
            where: {
                id: _id
            }
        });
        return res.json(post);
    }

}

module.exports = postsController;