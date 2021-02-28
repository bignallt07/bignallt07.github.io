/*************************************
 * Basic Node and Express Set up
 *      1. Require Express
 *      2. Require Data from data.json
 *      3. Create Express AppRequiring Files and Modules 
 ************************************/
const express = require("express");
const data = require("./data.json");

const app = express();

// Port Variable
const port = process.env.PORT || 3000;

/*************************************
 * Middlewear Set up
 *      1. Setting view engine to pug
 *      2. Set up static files
 ************************************/

app.set('view engine', 'pug');
app.use('/static', express.static('public'));


/*************************************
 * Declaring Routes
*************************************/ 

/**
 * 1. Home Route
 * 
 * Stores data to route locals and renders index page
 */
app.get("/", (req, res) => {
    res.locals = data.projects;
    res.render("index", {projects: res.locals});
});

/**
 * About Route
 */
app.get("/about", (req, res) => {
    res.render("about");
});

/**
 * project redirect route
 * 
 * This redirects user if they don't add an id parmeter
 */
app.get('/projects', (req, res) => {
    res.redirect("/projects/0");
});

/**
 * Projects Route
 * 
 * 1. Listens for a ID parameter and renders the correct project page
 * 2. This also reacts to incorrect id's and sends to error middlewear
 */
app.get("/projects/:id", (req, res, next) => {
    const id = req.params.id;
    if (id < data.projects.length) {
        const project = data.projects[id];
        res.render("project", project);
    }  else {
        next(); // redirect to error middlewear
    }
});

/*************************************
 * Error Handling
*************************************/ 

/**
 * Middlewear to create 404 error.
 *        1. Creates a new error, with message. 
 *        2. Sets the status, and sends to the global error handler
 */
app.use((req, res, next) => {
    const err = new Error("There has been an error loading the page");           
    err.status = 404;                                  
    next(err);                                         
});

/**
 * Global Error Handler
 * 
 *        1. Listens for error status type and stores it in the response locals 
 *        2. Checks the status of the error and renders the correct error page. With Error objects parameters
 *        3. Logs error to the console     
 */
app.use((err, req, res, next) => {
    res.locals.error = err;                            
    res.status(err.status);                           
    console.error(`Error Occured... Status: ${err.status} - ${err.message}`);
    if (err.status === 404) {                         
        res.render("page-not-found", err);    
    } else {                      
        res.render("error", err);  
    }
});

/*************************************
 * Set up server on port: 3000 with console message
*************************************/ 

// Port now added
app.listen(port, () => {
    console.log(`The app is listening on port 3000 - Follow Link: http://localhost:3000/`);
});