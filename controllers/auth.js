exports.getLogin = (req, res, next) => {
  //console.log(req.get("Cookie").split(";")[1].trim().split("=")[1]);
  //isLoggedIn = req.get("Cookie").split(";")[1].trim().split("=")[1] === 'true';
  // console.log(req.get('Cookie'));
  console.log(req.session.isLoggedIn);
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  //res.setHeader('Set-Cookie',{loggedin:true,test:true})  ;
  //cookie settings
  req.session.isLoggedIn=true;
  req.session.testCase= '123';
  res.redirect("/");
};
