/* const router = require("./routes/movies");
const db = require("./database/models");

router.get('/', (req,res)=>{
    var body = { //req.body
        actor_id:1,
        movie_id:10
    }
db.Actor.findByPk(body.actor_id)
    .then(actor=>{
        if (actor) {
            actor.addMovie(body.movie_id)
        }
    })




}) */

//.addproduct(model)
//.removeProduct(model)
//.getProduct()