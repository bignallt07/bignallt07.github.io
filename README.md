# td6-Static-NodeJS-and-Express-Site/Portfolio
This app is a portfolio of my work as a developer, built with Node JS and Express. You can view all of my recent projects and access a live demo and github files. This app handles errors in a friendly way, as well as redirecting visitors in the right direction.

## Motivation
This project was built as a place to store all the work I would like to show others in a simple way.

## Build Status
The project template is built, however there will continously be projects added to this site

## Code Style
Node JS

## Features
* This page has a home, about and error pages
* Project pages are created from Node JS routes and dynamically display depending on the page number

## Notes for Treehouse Reviewer:
* The image_url in package.json is a 2d array. I wanted to add a place to store the alt attribute that would go with the image
* I have added an additional div at the bottom of index.pug. This holds a section for my upcoming projects 
    * For the purpose of this project, no other HTML elements have been added excluding point above, and the error pages which extend the layout template
* The url "localhost:3000/projects redirects to "localhost:3000/projects/0" so that an error page can be avoided

* This project has been created to achieve extra credit. Here are some notes regarding that
    1. package.json was edited to allow "npm start" to run the app. You will notice a link in the console added for user ease.
    2. Error pages "error.pug" and "page-not-found.pug" were created and styled in extension of layout.pug
    3. There are a number of CSS changes (mainly with the error pages) and in an effort follow DRY programming concept and to keep the media quieries at the foot of the stylesheet I have added changes to the following areas (note previous styles are commented out):
        * Line 25: Background-color of the body changed
        * Line 56: Main paragraph color changed
        * Line 143: .sidebar color changed 
        * Line 174: .sidebar paragraph color changed
        * Line 269-277: Additional styles added for the additional homepage div
        * Line 293: .about-bio paragraph padding-top removed
        * Line 322: .btn-link box shadow added
        * Line 325-383: Error Page Styles Added (mobile)
        * Line 447-467: Error Page Styles Added (Desktop)

## Contribution
If you have any suggestions to improve this app, please reach out to me on github

## Credits
Curriculum at teamtreehouse.com

