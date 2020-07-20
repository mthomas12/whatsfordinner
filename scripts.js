//create new fetch request
const fetch = require("node-fetch");

fetch("https://webknox-recipes.p.rapidapi.com/recipes/search?type=main%20course&offset=0&number=10&cuisine=italian&diet=vegetarian&intolerances=egg%252C%20gluten&excludeIngredients=coconut&query=burger", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "webknox-recipes.p.rapidapi.com",
            "x-rapidapi-key": "eaafe25e6amshca40267f3aeeeeep174726jsnaddf34d9ffc6"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });



/* Begin accessing JSON data here
var data = JSON.parse(this.response)
if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        const h1 = document.createElement('h1')
        h1.textContent = movie.title

        const p = document.createElement('p')
        movie.description = movie.description.substring(0, 300)
        p.textContent = `${movie.description}...`

        container.appendChild(card)
        card.appendChild(h1)
        card.appendChild(p)
    })
} else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
}


request.send() */