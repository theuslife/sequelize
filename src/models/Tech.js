const { Model, DataTypes } = require('sequelize');

class Tech extends Model {

    /**
     * 
     * @param {object} sequelize - Conexão com o BD
     */
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
                sequelize
            })
    }

    /**
     * @description - Relacionamento
     * @param {object} models - Retorna todos os models
     */
    static associate(models) {
        this.belongsToMany(models.User, {
            foreignKey: 'tech_id',
            through: 'user_techs',
            as: 'users' //Nome deste relacionamento
        })
    }

}

module.exports = Tech;