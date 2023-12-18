const APILINK = "https://api.themoviedb.org/3/movie/now_playing?api_key=1f54bd990f1cdfb230adb312546d765d&language=en-US&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?api_key=1f54bd990f1cdfb230adb312546d765d&query=";
// 41ee980e4b5f05f6693fda00eb7c4fd4

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

function getMovies(url) {
    fetch(url).then(res => res.json())
    .then(function(data) {
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement("div");
            div_card.setAttribute('class', 'card');

            const div_row = document.createElement("div");
            div_row.setAttribute('class', 'row');
            
            const div_column = document.createElement("div");
            div_column.setAttribute('class', 'column');
            
            const image = document.createElement("img");
            image.setAttribute('class', 'thumbnail');
            image.setAttribute('id', 'image');
            
            const title = document.createElement("h3");
            title.setAttribute('id', 'title');
            
            const center = document.createElement("center");    
            
            title.innerHTML = `${element.title}`; // Use special quotes for this to work
            image.src = IMG_PATH + element.poster_path;

            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);

            main.appendChild(div_row);
        });
    });
}

getMovies(APILINK);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    main.innerHTML = "";

    const searchTerm = search.value;

    if(searchTerm) {
        getMovies(SEARCHAPI + searchTerm);
        search.value = "";
    }
}); 