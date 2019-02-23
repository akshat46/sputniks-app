// Controller file

const templates = require("../../public");
const path=require('path');

var registeredUsers = [];
var userDetails = [];

module.exports.root = function(req, res, next){
  var context = {
    name: "Frank",
    count: 30,
    colors: ["red", "green", "blue"]
  };
  console.log('Cookies: ', req.cookies);
  res.marko(templates.home, context);
}

module.exports.get_auth = function(req, res){
  res.marko(templates.auth);
};

// middleware
module.exports.loggedIn = function(req, res, next)
{
    console.log("Checking if logged in:");
    if (req.session.user)
    {
        // Proceed if the user is logged in.
        console.log("Logged in: "); console.log(req.session.user);
        next();
    }
    else
    {
        console.log("Not logged in");
        res.send("You must first log in.");
    }
};

// module.exports.index = function(req, res, next)
// {
//     res.render('index', { title: 'Authentication Demo' });
//
// };

module.exports.get_register = function(req, res, next)
{
    res.marko(templates.register,
               { message: "Please register!" });
};

/*
 * POST registration page.
 */
module.exports.post_register = function(req, res)
{
    if(!req.body.username || !req.body.password)
    {
        res.status("400");
        res.send("Invalid details!");
    }
    else
    {
        // Create an array of users with matching usernames.
        var matches = registeredUsers.filter(function(user)
                      {
                          return user.username === req.body.username;
                      });

        // If there is a match, the user has already registered.
        if (matches.length > 0)
        {
            res.marko(templates.register, {message: "User already registered!"});
        }

        // Register a new user.
        else
        {
            var newUser = { username: req.body.username,
                            password: req.body.password };
            registeredUsers.push(newUser);
            console.log("New user:"); console.log(newUser);
            console.log("Registered users:"); console.log(registeredUsers);
            /**/
            req.session.user = newUser;
            console.log("Sucessfully logged in:");
            console.log(req.session.user.username);

            res.marko(templates.auth);

            // res.marko(templates.loggedIn,
            //   { name: req.session.user.username });
            /**/
            // res.redirect('/');
        }
    }
};

/*
 * GET login page.
 */
module.exports.get_login = function(req, res)
{
   res.marko(templates.login, { message: "Please log in!" });
};

/*
 * POST login page.
 */
module.exports.post_login = function(req, res)
{
    console.log("Registered users:"); console.log(registeredUsers);
    console.log("Logging in: " + req.body.username + "/" + req.body.password);

    // Create an array of users with matching credentials.
    var matches = registeredUsers.filter(function(user)
                  {
                      return    (user.username === req.body.username)
                             && (user.password === req.body.password);
                  });

    console.log("Matching credentials: "); console.log(matches);

    if (matches.length === 0)
    {
        res.marko(templates.login, {message: "Invalid credentials!"});
    }
    else
    {
        // The user is logged in for this session.
        req.session.user = matches[0];
        console.log("Sucessfully logged in:");
        console.log(req.session.user.username);

        res.redirect('/details');
    }
};

/*
 * GET logout page.
 */
module.exports.get_logout = function(req, res)
{
    console.log("Logging out:");

    if (req.session.user)
    {
        var name = req.session.user.username;
        console.log(name);

        req.session.destroy(function()
        {
            console.log(name + " logged out.");
        });

        res.send(name + " is now logged out.");
    }
    else
    {
        console.log("Nobody is currently logged in!");
        res.send("Nobody is currently logged in!");
    }
};

/*
 * GET protected page.
 */
module.exports.get_protected = function(req, res)
{
    res.marko(templates.protected, { name: req.session.user.username });
};


/*
* GET Dashbaord page
 */

module.exports.dashboard = function(req, res) {
    userDetails.push(req.body);
    console.log(userDetails[0].city);
    res.marko(templates.dashboard, {city:userDetails[0].city});
}

module.exports.details = function(req, res) {
    res.marko(templates.details);
}


module.exports.dataentry = function(req, res) {
    console.log(req.body);
    res.redirect('/dashboard');
}


module.exports.data_search = function(req, res)
{
    console.log("Displaying Data:");

    // if (req.session.user)
    // {
        res.marko(templates.datasearch);
    // }
    // else
    // {
        console.log("Nobody is currently logged in!");
    //     res.redirect("/login");
    // }
};
