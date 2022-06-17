# Board Game Fun

[Board game fun](https://charlotte-board-game.netlify.app/) is a website where users can review, comment and vote on board games.

The front end is made in React and makes calls to my [backend API](https://github.com/321jellyfish/nc-games) which serves up the requested information.

### Overview

The homepage of Board Game Fun displays a full list of reviews with images, served by the API. The user is able to navigate to categories using the main drop down navigation component. This routes to individual category pages, which uses the same component as the homepage to display all the reviews under that category.

Reviews on both the homepage and category pages can be sorted by date created and votes received - in both ascending and descending order. From the homepage and category pages users are able to follow links to an individual page for each review. Here users are able to upvote or downvote reviews as well as leaving comments. Users are also able to delete their comments.

A theme button allows user to toggle between light and dark themes. For demo purposes this website has a default user of 'jessjelly.'

Any errors in the URL are routed to an error page.

### Running locally

To run this project locally:

`git clone https://github.com/321jellyfish/board-game-fun.git`

`cd board-game-fun`

`npm install`

`npm start`

Please note this project requires Node.js v17.8.0 or higher.
