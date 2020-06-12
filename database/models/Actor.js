module.exports = (sequelize, dataTypes) => {
    let alias = "Actor";

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
        },
        first_name: {
            type: dataTypes.STRING(100),
        },
        last_name: {
            type: dataTypes.STRING(100),
        },
        rating: {
            type: dataTypes.DECIMAL(3,1),
        }
    };

    let config = {
        tableName: "actors",
        underscored: true, //para que reconosca los guiones bajos
        timestamps: true, // no poner false, para que sequelize autocomplete los campos de timestamp, si no uso created_ad y updated_ad uso false
    }

    const Actor = sequelize.define(alias, cols, config);

    Actor.associate = (models) => {
        Actor.belongsToMany(models.Movie, {
            as: 'movies',
            through: 'actor_movie',
            foreignKey: 'actor_id', //siempre el foreignKey va a ser la de la tabla que estamos configurando
            otherKey: 'movie_id', //siempre el otherKey va a ser de la otra tabla que estamos configurando
            timestamps: false
        });
    }
    return Actor;
}