module.exports = (sequelize, dataTypes) => {
    let alias = "Genre"; //cambiar a singular

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false,
        }
    };

    let config = {
        tableName: "genres",
        underscored: true, //para que reconosca los guiones bajos
        timestamps: true, // no poner false, para que sequelize autocomplete los campos de timestamp, si no uso created_ad y updated_ad uso false
    }

    const Genre = sequelize.define(alias, cols, config);

    Genre.associate = (models) => {
        Genre.hasMany(models.Movie, {
            as: 'movie', //cambiar a plural
        })
    }
    return Genre;
}