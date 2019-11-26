const User = require('../models/User');

module.exports = {

    async fetch(req, res) {

        const users = await User.findAll()

        return res.json(users)
    },

    //Armazenar um usuário
    async store(req, res) {

        const { name, email } = req.body

        const user = await User.create({ name, email });

        return res.json(user)

    }

}