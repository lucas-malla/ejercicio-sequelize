module.exports = (sequelize, dataTypes) => {
    let alias = 'Genre';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        ranking: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'genres',
        timestamps: false
    };
    const Genre = sequelize.define(alias, cols, config)

    //Relaciones
    Genre.associate = function (models){ // lo relacionamos con las peliculas (MOVIES.JS)
        Genre.hasMany(models.Movie, {//.hasMany ltine mucas peliculas
            as: 'movies', //nombre de fantacioa
            foreignKey: 'genre_id'//clabe FORANEA, esto es la columna que une las dos tablas. las misma quew esta en MOVIES.
        });
 }

    return Genre
}