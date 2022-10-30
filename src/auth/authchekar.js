   var authChecker = function(req, res, next){
        if(req.query && (req.query.userName || req.query.username)){ // if api query is dependent on the user, validate its token.
          try{
            var authToken;
            req.headers.authorization.split(' ')[0] == "Bearer" ? authToken = req.headers.authorization.split(' ')[1] : "";
            var user = jwt.verify(authToken, 'secretkey');
            if(req.query.userName == user.username){
              next();
            }
            else{
              res.cookie('username', '', {expires: new Date(0)});
              res.cookie('token', '', {expires: new Date(0)});
              return res.status(401).json({"msg": "Authentication required."});
            }
          }
          catch(err){ // if not able to validate the token, then expire all the available token
            res.cookie('username', '', {expires: new Date(0)});
            res.cookie('token', '', {expires: new Date(0)});
            return res.status(401).json({"msg": "Authentication required."})
          }
        }
        else{
          next();
        }
      };
