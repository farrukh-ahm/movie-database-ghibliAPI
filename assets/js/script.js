const API_URL = "https://ghibliapi.herokuapp.com";

const databaseCheck = document.getElementsByClassName("search-button");
const display = document.getElementById("display");


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
        console.log(data)
        let movies = data.map(x=>x.title);
        display.innerText = movies;
    }
    else{
        console.log("error");
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