function index(req, res, next) {
    res.render('index.ejs', { title: 'Soccer' });
  }

module.exports = {
    index
}