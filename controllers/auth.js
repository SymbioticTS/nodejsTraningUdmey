exports.getLogin = (req, res, next) => {
  console.log(req.get("Cookie").split(";")[1].trim().split("=")[1]);
  isLoggedIn = req.get("Cookie").split(";")[1].trim().split("=")[1] === 'true';
  // console.log(req.get('Cookie'));
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  //res.setHeader('Set-Cookie',{loggedin:true,test:true})  ;
  //cookie setting
  var cookieString = "";
  if (cookieString) {
    cookieString += ";";
  }
  cookieString +=  `loggedin=true;test=false`;
  // `loggedin=true;Max-Age=10;Secure;test=false`;
  res.setHeader("Set-Cookie", cookieString);
  res.redirect("/");
};
