const baseURL = "https://www.songsterr.com/a/ra/songs/byartists.json";

let url;

const searchTerm = document.querySelector(".search");
const submitBtn = document.querySelector(".submit");
const nav = document.querySelector("nav")
const section = document.querySelector("section");
const searchForm = document.querySelector("form");

searchForm.addEventListener("submit", fetchResults);

function fetchResults(i) {
    i.preventDefault();
    console.log(i);
    url = `${baseURL}?artists=${searchTerm.value}`;
    console.log("URL", url);
    
    fetch(url)
    .then(function (result) {
        console.log(result);
        return result.json();
    })
    .then(function (json) {
        console.log(json);
        displayResults(json);
    })
    
    function displayResults(json) {

    for (let i = 0; i < json.length; i++) {
        console.log(json[i].id);
        
        

    }
    }

}



    





    






    








