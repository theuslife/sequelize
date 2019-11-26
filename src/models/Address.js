const { Model, DataTypes } = require('sequelize');

class Address extends Model {

    /**
     * 
     * @param {object} sequelize - Conexão com o BD
     */
    static init(sequelize) {
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
        }, {
                sequelize
            })
    }

    /**
     * @description - Relacionamento
     * @param {object} models - Retorna todos os models
     */
    static associate(models) {
        this.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'theUser' //Nome para o relacionamento
        })
    }

}

module.exports = Address;