const User = require('../models/User')
const Address = require('../models/Address');

module.exports = {

    async fetch(req, res) {

        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: "addresses" }  //Incluir uma associação
        })

        return res.json(user)

        return res.json(user.addresses) // Retorna somente os endereços

    },

    //Armazenar um usuário
    async store(req, res) {

        const { user_id } = req.params;

        const { street, zipcode, number } = req.body

        const user = await User.findByPk(user_id)

        if (!user) {
            return res.status(400).json({ erro: "User not found" })
        }

        const address = await Address.create({
            zipcode,
            street,
            number,
            user_id
        })

        return res.json(address)

    }

}