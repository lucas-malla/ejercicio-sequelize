module.exports = (sequelize, dataTypes) => {
    let alias = 'Actor';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'actors',
        timestamps: false
    };
    const Actor = sequelize.define(alias, cols, config)

// Relacion de muchos a muchos
    Actor.associate = function(models){  //voy a definir Asociaciones
          Actor.belongsToMany(models.Movie, { //relacion de muchos a muchos para llegar a la peliculas
            as: 'peliculas', //alias
            through: 'actor_movie',
            foreignKey: 'actor_id', //habla del actor
            otherKey: 'movie_id', //habla de peliculas
            timestamps: false
          });
    }

    return Actor
}