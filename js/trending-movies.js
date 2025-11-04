/* TO DO:

	- Create an array to hold the titles of your favorite movie *and* your partners' favorite movies.

	- Create an array with URLs for each movie poster. 
	  Note: Search Google Images for the movie title with "wiki" (i.e., "Mean Girls wiki") to find the official poster on Wikipedia.
	
	- Create an array with links to the HTML files for each movie page.
	  Note: Name each HTML file after the movie title (e.g., mean-girls.html). 
            Make sure your partners’ movie pages are live before adding links to their favorites.

	- Create an array to store each movie's rating (1 to 5). Try a different rating for each movie!

*/

var movie = ["How To Train Your Dragon", "50 First Dates", "The Lord of the Rings: The Fellowship of the Ring"];
var poster = ["https://upload.wikimedia.org/wikipedia/en/9/99/How_to_Train_Your_Dragon_logo.png", "https://upload.wikimedia.org/wikipedia/en/9/9d/50FirstDates.jpg", "https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg"];
var alt_text = ["How To Train Your Dragon Poster", "50 First Dates Poster", "The Lord of the Rings: The Fellowship of the Ring Poster"];
var page = ["httyd.html", "50-first-dates.html", "lotr.html"];
var my_rating = [5, 4, 3];

/* TO DO:
	
	- Select ALL movie card elements in the index.html file and store in a variable.

	- Loop through each card to update its content with movie information:
	  - Select the current movie image element. 
	  - Set its link to the movie poster link from the array. 
	  - Set its alt text to the movie title from the array. 

	  - Select the current movie link element.
	  - Set its link to the HTML page for that movie from the array. 
	  - Set its text to the movie title from the array.

	  - Select the current movie rating element.
	  - Create a variable that will hold the filled and empty stars. 
	  - Loop to generate star symbols based on the rating:
	    - If current counter is less than the rating, then add "★".
	    - Otherwise, add "☆".
	  - Set the movie rating element's text to display the generated stars. 

*/

var cards = document.querySelectorAll("div.movie-card");
var i = 0;
while (i < 3) {
	cards[i].querySelector("img.movie-image").src = poster[i];
	cards[i].querySelector("img.movie-image").alt = alt_text[i];
	cards[i].querySelector("a.movie-link").href = page[i];
	cards[i].querySelector("a.movie-link").textContent = movie[i];
	var stars = "";
	for (var j = 0; j < 5; j++) {
		if (j < my_rating[i]) {
			stars += "★";
		}
		else {
			stars += "☆";
		}
	}
	cards[i].querySelector("div.rating").textContent = stars;
	i++;
}