const User = require('../models/user');
exports.getLogin = (req, res, next) => {
  //   const isLoggedIn = req
  //     .get('Cookie')
  //     .split(';')[1]
  //     .trim()
  //     .split('=')[1] === 'true';
  console.log(req.session.isLoggedIn);
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
    User.findById('5f1432bb67cc8c2a331d7b69')
      .then(user => {
        req.user = user;
        req.session.isLoggedIn = true;
      })
  res.redirect('/');
};
