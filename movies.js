// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let newprice = localStorage.getItem("amount")
    let wallet = document.querySelector("#wallet");
    wallet.append(newprice);;

// url = "http://www.omdbapi.com/?apikey=f7e9f4a4&s=thor"
let movies_div = document.getElementById("movies");
let id;
async function searchMovies(){
    try{
        const querry = document.querySelector("#search").value;
        const res = await fetch(`https://www.omdbapi.com/?apikey=f7e9f4a4&s=${querry}`);
        const data = await res.json();
        const movies = data.Search;
        console.log("data:", data)
        return movies;
    }
    catch{
        console.log("err:",err);
    }
}
function appendMovies(data){
    movies_div.innerHTML = null;
    data.forEach(function(el){
        let image = document.createElement("img");
        image.src= el.Poster;
        let p=document.createElement("p");
        p.innerText = el.Title;
        let btn = document.createElement("button");
        btn.innerText="book now";
        let div = document.createElement("div")
        div.append(image,p,btn);
        movies_div.append(div);
        
    });
}
async function main(){
    let data = await searchMovies();
    if(data === undefined){
        return false;
    }
    appendMovies(data);
}
function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function (){
        func();
    },delay);
}