const API_URL = "https://ghibliapi.herokuapp.com";

const databaseCheck = document.getElementsByClassName("search-button");
const display = document.getElementById("display");
let cards;
let insert;
let scroll = document.getElementsByClassName("btn");


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
            for(let button of scroll){
                button.style.opacity = "0";
            }
            getFilms(data);
            // let x = data.map(y=>y.title)
            // console.log(x)
        }

        else if(field === "people"){
            for(let button of scroll){
                button.style.opacity = "0";
            }    
            getPeople(data);
            // for(let i of data){
            //     console.log(i)
                
            // }
        }

        else if(field === "locations"){
            for(let button of scroll){
                button.style.opacity = "0";
            }
            getLocations(data)
        }
        
        else if(field === "species"){
            for(let button of scroll){
                button.style.opacity = "0";
            }
            getSpecies(data)
            // console.log(data)
            // let x = data.map(y=>y.name)
            // console.log(x)
        }
        for(let button of scroll){
        setTimeout(()=>{
            button.style.opacity = "1";
        }, 2000)}
    }
    else{
        console.log("error");
    }

}


//DISPLAY FILMS LIST

function getFilms(data){
    insert = "";
    display.innerHTML = "";
    for(let i of data){
        insert = `<div class='cards'>`
        insert += `<img src="${i.image}" class="image">` 
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
    // for(let i of data){
    //     insert = `<img src="${i.image}">`
    //     display.insertAdjacentHTML('beforeend', insert);
    // }
}


//DISPLAY PEOPLE LIST
function getPeople(data){
    insert = "";
    display.innerHTML = "";
    for(let i of data){
        // let film = getInfo(i.films[0], title);
        // let specie = getInfo(i.species, general);
        insert = `<div class='cards'>`;
        insert += `<h2>Name: ${i.name}</h2>`;
        insert += `<h3>Gender: ${i.gender}</h3>`;
        insert += `<p>Age: ${i.age}</p>`;
        insert += `<p>Eye Color: ${i.eye_color}</p>`;
        insert += `<p>Hair Color: ${i.hair_color}</p>`;
        insert += `<p><a href="${i.species}" target="_blank">Check Specie</a></p>`;
        // insert += `<p>Species: ${specie}</p>`
        insert += `<p><a href="${i.films[0]}" target="_blank">Check Films</a></p>`;
        // insert += `<p>Films featured in: ${film}</p>`
        insert += `</div>`
        display.insertAdjacentHTML("beforeend", insert);
    }
}


//DISPLAY LOCATIONS
function getLocations(data){
    insert = "";
    display.innerHTML = "";
    for(let i of data){
        insert = `<div class='cards'>`;
        insert += `<h2>Name: ${i.name}</h2>`;
        insert += `<h3>Terrain: ${i.terrain}</h3>`;
        insert += `<p>Climate: ${i.climate}</p>`;
        insert += `<p>Surface Water: ${i.surface_water}</p>`;
        insert += `<p><a href='${i.films[0]}' target="_blank">Films featured in</a></p>`;
        insert += `<p><a href='${i.url}' target="_blank">URL</a></p>`;
        insert += `</div>`
        display.insertAdjacentHTML("beforeend", insert);
    }
}


// DISPLAY SPECIES
function getSpecies(data){
    insert = "";
    display.innerHTML = "";
    for(let i of data){
        insert = `<div class='cards'>`;
        insert += `<img src="./assets/images/${i.name}.webp" class="image">`
        insert += `<h2>Name: ${i.name}</h2>`;
        insert += `<h3>Classification: ${i.classification}</h3>`
        insert += `<p>Eye Colors: ${i.eye_color}</p>`
        insert += `<p>Hair Colors: ${i.hair_color}</p>`
        insert += `<p><a href="${i.url}" target="_blank">More Info</p>`
        insert += `</div>`
        display.insertAdjacentHTML("beforeend", insert);
    }
}


// SCROLL BUTTONS
// let scroll = document.getElementsByClassName("btn");
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


// async function getInfo(url, spec){
//     const responseTwo = await fetch(`${url}`);
//     const dataTwo = await responseTwo.json();
//     if(responseTwo.ok){
//         if(spec === "title"){
//             return dataTwo.title;
//         }
//         else{
//             return dataTwo.name;
//         }
//     } 
// }