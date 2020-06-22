let db = require('../database/models');
let Op = require('sequelize').Op

module.exports = {
    list(req, res) {
        db.Movie.findAll({
            include: [{association: 'actor'}]
        })
            .then(movies => {
                res.render('Movies', { movies, title: 'Listado de peliculas' });
            })

    },
    create(req,res) {
        db.Genre.findAll()
            .then(genres => {
                res.render('createMovie', {genres, title: `Crea tu pelicula`})
            })
    },
    load(req, res) {
       db.Movie.create({
            title: req.body.title,
            awards: req.body.awards,
            rating: req.body.rating,
            length: req.body.length,
            release_date: '2020-11-11',
            genre_id: req.body.genre_id
        })
        res.redirect('/movies');
    },
    edit(req, res){
        db.Movie.findByPk(req.params.id)
            .then(movie => {
                res.render('editMovie', { movie, title: 'Edita una pelicula' })
            })
    },
    update(req, res){
        db.Movie.update({
            title: req.body.title,
            awards: req.body.awards,
            rating: req.body.rating,
            length: req.body.length,
            release_date: '2020-11-11'

            /* genre_id: req.body.genre_id, */
        }, {
            where: {
                id: req.params.id
            }
        }).then(()=>{
            res.redirect(`/movies/detail/${req.params.id}`);
        });

    },
    delete(req, res) {
        db.Movie.destroy({
            where: {
                id: req.params.id
            }
        }).then(()=> {
            res.redirect('/movies')
        })

    },
    new(req, res) {
        db.Movie.findAll({
            include: [{association: 'actor'}],
            order: [
                ['release_date', 'DESC']
            ],
            limit: 5            
        }).then(movies => {
            /* res.json(movies) */
            res.render('movies', { movies, title: 'Ultimos estrenos' })
        })
    },
    recomend(req, res) {
        db.Movie.findAll({
            where: {
                rating: { [Op.gt]: 8 }
            },
            include: [{association: 'actor'}]
        }).then(movies => {
            res.render('movies', { movies, title: 'Peliculas recomendadas' })
        })
    },
    detail(req, res) {
        db.Movie.findByPk(req.params.id, {
            include: [{association: 'actor'}]
        })
            .then(movie => {
                let movies = [movie]
                res.render('movies', { movies, title: 'Detalle de la palicula' })
            })
    },
    search(req, res) {
        db.Movie.findAll({
            where: {
                title: {
                    [Op.substring]: req.query.q,
                }
            },
            include: [{association: 'actor'}]
        }).then(movies => {
                res.render('search', { movies, title: 'Resultado de busqueda' })
            })

    }

}