const db = require('../../database/models');
const Op = require('sequelize').Op

module.exports = {
    list(req, res) {
        db.Movie.findAll({
            include: [{association: 'actor'}]
        }).then(resultadoMovies => {
            for (let resultadoMovie of resultadoMovies){
                resultadoMovie.setDataValue('endpoint', '/api/movies/' + resultadoMovie.id)
            }
            let movies = {
                meta: {
                    status: 200,
                    total: resultadoMovies.length,
                    url: '/api/movies'
                },
                data: resultadoMovies
            };
            res.json(movies);
        })
    },
    find(req, res) {
        db.Movie.findByPk(req.params.id, {
            include: [{association: 'actor'}]
        }).then(movie => {
            res.json(movie);
        })
    },
    create(req, res) {
        db.Movie.create({
            title: req.body.title,
            awards: req.body.awards,
            rating: req.body.rating,
            length: req.body.length,
            release_date: '2020-11-11',
            genre_id: req.body.genre_id
         })
         res.json({
             status: 200
         });
     }
};