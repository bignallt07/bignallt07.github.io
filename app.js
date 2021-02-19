// Require necessary files and modules
const express = require("express");

const data = require("./data.json");

// Start app
const app = express();

// Set up middleware
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

// routes
// home route
app.get("/", (req, res) => {
    res.locals = data.projects;
    res.render("index", {projects: res.locals});
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get('/projects', (req, res) => {
    res.redirect("/projects/0");
});

app.get("/projects/:id", (req, res, next) => {
    const id = req.params.id;
    if (id < data.projects.length) {
        const project = data.projects[id];
        res.render("project", project);
    }  else {
        next(); // Include middlewear to skip to another page
    }
});

// Error Routes
// Creating 404 error
app.use((req, res, next) => {
    const err = new Error("There was an Error");            // Create error and message
    err.status = 404;                                   // Defines the 404 = not found
    next(err);                                          // Sends the error to the next middlewear
});

// Global Error
app.use((err, req, res, next) => {
    res.locals.error = err;                             // Set locals to error, whether it be 404 or global
    res.status(err.status);                             // Whatever the response status code is, is set  
    console.error(`Error Occured... Status: ${err.status} - ${err.message}`);                         
    res.render("error");                // Open page
});


app.listen(3000, () => {
    console.log("The app is listening on port 3000");
});