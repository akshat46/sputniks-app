// Controller file
var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const templates = require("../../public");
const path=require('path');

var registeredUsers = [];
var userDetails = [];


module.exports.root = function(req, res, next){
var logged;
  if (req.session.user){
    logged = true;
  }
  else{
    logged = false;
  }
  console.log('Cookies: ', req.cookies);
  console.log(logged);
  res.marko(templates.home, {logged: logged});
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
    res.marko(templates.auth,
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
        let User = mongoose.model('app_users');

        User.findOne({ username: req.body.username }, function (err, data) {
            if (err) {
                res.marko(templates.auth);
            }
            if (data && data.username == req.body.username) {
                res.marko(templates.auth, {message: "User already registered!"});
            }
            else {
                User.create({ username: req.body.username, password: req.body.password, zipcode: '', city: '', state: '', notification: '', food: '', firstname: '', lastname: '' });

                res.marko(templates.auth);
            }
        })


        // // Create an array of users with matching usernames.
        // var matches = registeredUsers.filter(function(user)
        //               {
        //                   return user.username === req.body.username;
        //               });
        //
        // // If there is a match, the user has already registered.
        // if (matches.length > 0)
        // {
        //     res.marko(templates.auth, {message: "User already registered!"});
        // }
        //
        // // Register a new user.
        // else
        // {
        //     var newUser = { username: req.body.username,
        //                     password: req.body.password };
        //     registeredUsers.push(newUser);
        //     console.log("New user:"); console.log(newUser);
        //     console.log("Registered users:"); console.log(registeredUsers);
        //     /**/
        //     req.session.user = newUser;
        //     console.log("Sucessfully logged in:");
        //     console.log(req.session.user.username);
        //
        //     res.marko(templates.auth);
        //
        //     // res.marko(templates.loggedIn,
        //     //   { name: req.session.user.username });
        //     /**/
        //     // res.redirect('/');
        // }
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

    let user = req.body;

    let User = mongoose.model('app_users');


    User.find({username: user.username, password: user.password}, function (err, data) {

        console.log("DATA", data);
        if (!data) {
            res.marko(templates.auth, {message: "Invalid credentials!"});
        }
        else {
            console.log("USER FOUND", data);
            // The user is logged in for this session.
            req.session.user = data;
            console.log(req.session.user.username);
            res.redirect('/dashboard');
        }
    });
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

        // res.send(name + " is now logged out.\nRedirecting you to home page");
        res.redirect("/authentication");
    }
    else
    {
        console.log("Nobody is currently logged in!");
        // res.send("Nobody is currently logged in!\nRedirecting you to login page");
        // await sleep(5);
        res.redirect("/authentication");
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
    if (req.session.user){
        userDetails.push(req.body);
        console.log(userDetails[0].city);
        res.marko(templates.dashboard, { city:userDetails[0].city});
    }else{
        res.marko(templates.dashboard);
        console.log("Nobody is currently logged in!");
        res.redirect("/authentication");
    }
}


module.exports.editUser = function(req, res) {
    let User = mongoose.model('app_users');
    let currentUser = req.session.user[0];
    console.log("METHOD TYPE", req.method);
    console.log('BODY', req.body);
    if (req.method == 'POST') {

        let user = req.body;

        User.findOneAndUpdate({username: req.session.user[0].username}, {
            firstname: user.firstname,
            lastname: user.lastname,
            city: user.city,
            state: user.state,
            zipcode: user.zipcode,
            food: user.food,
            notification: user.notification
        }, function (err, data) {
            console.log("ERROR", err);
            console.log("DATA", data);
            res.marko(templates.details, {user: data, message: err ? 'Problem saving' : 'User details updated'});
        });

    }
    else {

        User.findOne({username: currentUser.username}, function (err, data) {
            if (!data) {
                res.redirect('/');
            }
            else {
                console.log("EDIT DATA",data);
                res.marko(templates.details, {user: data});
            }
        });
    }
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

module.exports.get_about = function(req, res) {
    res.marko(templates.about);
};
