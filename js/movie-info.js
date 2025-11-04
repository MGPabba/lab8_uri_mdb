/* TO DO:

    - Create an array to hold the title of your favorite movie, URL for movie poster, your rating, and synopsis.

    - Select the movie image element.
    - Set its link to the movie poster link from the array. 
    - Set its alt text to the movie title from the array.

    - Select the movie name element.
    - Set its text to the movie title from the array.

    - Select the movie description element.
    - Set its text to the movie synopsis from the array.

    - Select the movie rating element.
    - Create a variable that will hold the filled and empty stars. 
    - Loop to generate star symbols based on the rating:
        - If current counter is less than your rating, then add "★".
        - Otherwise, add "☆".
    - Set the movie rating element's text to display the generated stars. 

*/

var movie = ["How To Train Your Dragon", "50 First Dates", "The Lord of the Rings: The Fellowship of the Ring"];
var poster = ["https://upload.wikimedia.org/wikipedia/en/9/99/How_to_Train_Your_Dragon_logo.png", "https://upload.wikimedia.org/wikipedia/en/9/9d/50FirstDates.jpg", "https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg"];
var alt_text = ["How To Train Your Dragon Poster", "50 First Dates Poster", "The Lord of the Rings: The Fellowship of the Ring Poster"];
var my_rating = [5, 4, 3];
var synopsis = ["Set in the mythical Viking village of Berk, the story revolves around Hiccup Horrendous Haddock III, the son of the village chief, Stoick the Vast. The village is plagued by frequent dragon attacks that steal livestock and threaten the villagers. Unlike his fellow Vikings, Hiccup is not strong or skilled in combat, which makes him feel like an outsider in his own community. He aspires to prove himself as a dragon slayer, following the tradition of his ancestors. During a dragon raid, Hiccup manages to shoot down a rare dragon known as a Night Fury. Instead of killing it, he finds the dragon injured in the woods and names it Toothless. Hiccup forms a bond with Toothless, learning that dragons are not the fearsome creatures his village believes them to be. He discovers that Toothless has a retractable set of teeth and is capable of flight, but needs help to fly properly due to an injured tail."];


document.querySelector("img.movie-image").src = poster[0];
document.querySelector("img.movie-image").alt = alt_text[0];
document.querySelector("h2.movie-name").textContent = movie[0];
document.querySelector("p.description").textContent = synopsis[0];