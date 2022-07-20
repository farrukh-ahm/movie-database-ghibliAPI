const API_URL = "https://ghibliapi.herokuapp.com";

let connectionCheck = document.getElementById("status");

connectionCheck.addEventListener("click", e=>statusCheck(e));

async function statusCheck(e){
    const response = await fetch(`${API_URL}/films`);
    const data = await response.json();
    if(response.ok){
        console.log(data)
        let movies = data.map(x=>x.title);
        console.log(movies)
    }
    else{
        console.log("error");
    }

}