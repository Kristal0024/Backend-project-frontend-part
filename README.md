[Live Demo](https://kristal0024.github.io/Backend-project-frontend-part/)


Overview

This is the frontend part of a social post application built with React.js.
It allows users to:

Create posts with an image and caption

View all posts in a feed

Delete posts

The frontend communicates with a live backend hosted on Renderer
.

Technologies Used

React.js – frontend framework

React Router – for navigation between pages (Home, Create Post, Feed)

Axios – for making HTTP requests to the backend

React Icons – for UI icons

CSS – basic styling

Features

Create Post

Upload an image

Add a caption

Submit to backend via axios POST request

Redirect to feed after successful submission

Feed Page

Displays all posts fetched from the backend via axios GET request

Delete posts with a click on the cross icon (RxCross2)

Updates the feed immediately without page reload

Live Backend Integration

All API requests point to the live backend URL via a config file (BACKEND_URL)

Supports HTTPS for GitHub Pages deployment

Project Structure
src/
 ├─ pages/
 │   ├─ CreatePost.jsx
 │   ├─ Feed.jsx
 │   └─ Home.jsx
 ├─ config.js
 └─ App.jsx
