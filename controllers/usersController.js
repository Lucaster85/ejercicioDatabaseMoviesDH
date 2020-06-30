module.exports = {
    user(req, res) {
        res.render('user')
    },
    login(req, res) {
        res.render('login', {title: 'Login'})
    },
    register(req, res) {
        res.render('register')
    },
    create(req, res) {
        res.redirect('/users/{id}')
    }
}