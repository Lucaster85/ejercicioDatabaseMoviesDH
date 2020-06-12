module.exports = (sequelize, dataTypes) => {
    let alias = "Movie";
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false,
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false
        },
        awards: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0
        },
        length: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
        release_date: {
            type: dataTypes.DATE
        },
        genre_id: {
            type: dataTypes.INTEGER.UNSIGNED
        }
    };

    let config = {
        tableName: "movies",
        underscored: true, //para que reconosca los guiones bajos
        timestamps: true, // no poner false, para que sequelize autocomplete los campos de timestamp, si no uso created_ad y updated_ad uso false
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }

    const Movie = sequelize.define(alias, cols, config);

    Movie.associate = (models) => {
        Movie.belongsTo(models.Genre, {
            as: 'genres', //cambiar a singular
            foreignKey:'genre_id'
        });
        Movie.belongsToMany(models.Actor, {
            as: 'actor',
            through: 'actor_movie',
            foreignKey: 'movie_id',
            otherKey: 'actor_id',
            timestamps: false
        });
    }
        return Movie;
}