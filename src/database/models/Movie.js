
module.exports = (sequelize, dataTypes) => {
    let alias = 'Movie';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.INTEGER
        },
        length: {
            type: dataTypes.INTEGER
        },
        awards: {
            type: dataTypes.INTEGER
        },
        release_date: {
            type: dataTypes.DATE
        }
    };
    let config = {
        tableName: 'movies',
        timestamps: false
    };
    const Movie = sequelize.define(alias, cols, config);

    //Relaciones de uno a muchos
    Movie.associate = function (models){ //.associen, llama a las tablas a associarce.
           Movie.belongsTo(models.Genre, {//aca adentro digo que relaciones voy hacer.
               as: 'genero', //nombre de fantacioa
               foreignKey: 'genre_id'//clabe FORANEA, esto es la columna que une las dos tablas.
           });
           // RElacion de Muchos a Muchos
           Movie.belongsToMany(models.Actor, { //con que modelos me quiero relacionar ('Actor)
               as: 'actores', //apodo
               through: 'actor_movie', //le indicamos como se llam la tabla intermedia.
               foreignKey: 'movie_id', //tabla de referencia
               otherKey: 'actor_id', //la otra tabla foreanea
               timestamps: false // no tiene create edad
           })
    }

    return Movie
}