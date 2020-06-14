let db = require('../database/models');
let Op = require('sequelize').Op

module.exports = {
    list(req, res) {
        db.Actor.findAll({
            include: [{association: 'movies'}]
        })
            .then(actors => {
                res.render('actors', { actors, title: 'Listado de actores' });
            })

    },
    create(req,res) {
        res.render('createActor', {title: `Crea un actor`})
    },
    load(req, res) {
       db.Actor.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            rating: req.body.rating,
        });
        res.redirect('/actors');
    },
    edit(req, res){
        db.Actor.findByPk(req.params.id)
            .then(actor => {
                res.render('editActor', { actor, title: 'Edita un actor' })
            })
    },
    update(req, res){
        db.Actor.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            rating: req.body.rating,
        }, {
            where: {
                id: req.params.id
            }
        }).then(()=>{
            res.redirect(`/actors/bio/${req.params.id}`);
        });

    },
    delete(req, res) {
        db.Actor.destroy({
            where: {
                id: req.params.id
            }
        }).then(()=> {
            res.redirect('/actors')
        });

    },
    bio(req, res) {
        db.Actor.findByPk(req.params.id, {
            include: [{association: 'movies'}]
        })
            .then(actor => {
                let actors = [actor]
                res.render('actors', { actors, title: 'Biografia del actor' })
            })
    },
    search(req, res) {
        db.Actor.findAll({
            where: {
                first_name: {
                    [Op.substring]: req.query.q
                },
                last_name: {
                    [Op.substring]: req.query.q
                }
            },
            include: [{association: 'movies'}]
        }).then(actors => {
                res.render('search', { actors, title: 'Resultado de busqueda' })
            })

    }

}