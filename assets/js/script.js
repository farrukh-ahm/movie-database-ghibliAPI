const API_URL = "https://ghibliapi.herokuapp.com";

const databaseCheck = document.getElementsByClassName("search-button");
const display = document.getElementById("display");
let cards;
let insert;


for(let button of databaseCheck){
    button.addEventListener("click", e=>statusCheck(e));
    // button.addEventListener("click", ()=>{
    //     let type = button.getAttribute("data-cat");
    //     console.log(type)
    // })
}


async function statusCheck(e){
    let field = e.target.getAttribute("data-cat")
    const response = await fetch(`${API_URL}/${field}`);
    const data = await response.json();
    if(response.ok){
        if(field === "films"){
            getFilms(data);
            // let x = data.map(y=>y.title)
            // console.log(x)
        }
    }
    else{
        console.log("error");
    }

}


//GET FILMS LIST

function getFilms(data){
    for(let i of data){
        insert = `<div class='cards'>` 
        insert += `<h2>Title: ${i.title}</h2>`;
        insert += `<h3>Original Title: ${i.original_title}</h3>`
        insert += `<p class='description'>Description: ${i.description}</p>`
        insert += `<p>Director: ${i.director}</p>`
        insert += `<p>Producer: ${i.producer}</p>`
        insert += `<p>Release Date: ${i.release_date}</p>`
        insert += `<p>Running Time: ${i.running_time}</p>`
        insert += `</div>`
        display.insertAdjacentHTML('beforeend', insert)   
    }
}


// SCROLL BUTTONS
let scroll = document.getElementsByClassName("btn");
for(let button of scroll){
    button.addEventListener("click", e=>{
        let direction = e.target.getAttribute("data-scroll");
        // let direction = this.getAttribute("data-scroll");
        if(direction === "next"){
            display.scrollLeft += 500;
            console.log("right")
        }
        else{
            console.log("left")
            display.scrollLeft -= 500;
        }
    })
}