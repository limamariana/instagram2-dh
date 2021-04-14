const { Usuario, sequelize } = require('../models/');

const usuariosController = {
    index: async (request, response) => {
        let usuarios =  await Usuario.findAll();
        
        return response.json(usuarios);
    },

    create: async (req, res) => {
        const { nome, email, senha } = req.body;
        // const {nome: _nome, email: _email, senha: _senha} = req.body;
        const usuario = await Usuario.create({
            nome,
            email,
            senha
        });
        // const usuario = await Usuario.create({
        //     nome:_nome,
        //     email: _email,
        //     senha: _senha
        // });
        return res.json(usuario);
    },

    update: async (req,res) => {
        const { id } = req.params;
        const { nome, email, senha } = req.body;
        // const {id: _id} = req.params;
        // const {nome: _nome, email:_email, senha: _senha} = req.body;

        const usuario = await Usuario.update({
            nome,
            email,
            senha
        }, {
            where: 
                { id }
            
        });
    return res.json(usuario)    
},
delete: async (req, res) => {
    const { id } = req.params;
    //const {id: _id} = req.params;
    const usuario = await Usuario.destroy({
        where: { id }
    });
    // const usuario = await Usuario.destroy({
    //     where: {
    //         id: _id
    //     }
    // });

    return res.json(usuario);
    },
// show: async (req, res) => {
//     const { id } = req.body;
//     const usuario = await Usuario.show ({
//         where: { id }
//     });
// return res.json(usuario);
// }
}

module.exports = usuariosController;







