const { Usuario, sequelize } = require('../models');

module.exports = async (req, res, next) => {
    
    const { nome, email, senha } = req.body;
    
    if (nome == null || email == null || senha == null) {
        res.status(400).json({erro: "Por favor, forneça os dados requisitados!"})
    }

    let users = await Usuario.findAll({ where: { email } });
    if (users.length) {
        res.status(400).json({ erro: "Email já cadastrado" })
        return;
    } else {
        if(!email) {
            res.status(400).json({erro:"Por favor, forneça seu email"})
        } else {
            if (senha.length < 6 || senha.length >12) {
                res.status(400).json({erro:"Sua senha precisa ter entre 6-12 dígitos!"})
            } else {
                next();
            }
        }
       
    }
}

// const { Usuario } = require('../models')
// ​
// module.exports = async (request, response, next) => {
//     let { email } = request.body;
//     let users = await Usuario.findAll({ where: { email } });
//     if (users.length) {
//         response.status(400).json({ erro: "Email já cadastrado" })
//         return;
//     } else {
//         next();
//     }
// ​
// }

