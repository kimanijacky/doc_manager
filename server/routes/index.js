module.exports = function(app) {
  require('./roles')(app);
  require('./documents')(app);
  require('./users')(app);

  app.get('/', function(req, res) {
    res.send({ message: 'Welcome to my API' });
  });
};
