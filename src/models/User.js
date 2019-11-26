const { Model, DataTypes } = require('sequelize');

class User extends Model {

    /**
     * 
     * @param {object} sequelize - Conexão com o BD
     */
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING
        },
            {
                sequelize
            }
        )
    }

    static associate(models) {
        this.hasMany(models.Address, {
            foreignKey: 'user_id',
            as: 'addresses' //Nome da associação
        })
        this.belongsToMany(models.Tech, {
            foreignKey: 'user_id',
            through: 'user_techs',
            as: 'techs' //Nome deste relacionamento
        })
    }


}

module.exports = User;