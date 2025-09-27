let poki = async () => {
    api_url = await fetch("https://pokeapi.co/api/v2/pokemon")
    poki_data = await api_url.json()
    poki_data.results.forEach(async (element) => {

        let data_poki = await fetch(element.url);
        let data_poki_in = await data_poki.json()


        let pokemonlist = document.querySelector("#pokemon-list")


        let card = document.createElement("div")
        card.classList.add("card")


        let img = document.createElement("img")
        img.src = data_poki_in.sprites.front_shiny

        let name = document.createElement("h2")
        name.innerText = `${element.name}`


        let types_list = document.createElement("div")
        types_list.classList.add("types_list")





        pokemonlist.appendChild(card)
        card.appendChild(img)
        card.appendChild(name)
        card.appendChild(types_list)
        // console.log(data_poki_in.id);
        data_poki_in.types.forEach((ele) => {
            let types = document.createElement("aside")
            types.innerText = `${ele.type.name}`
            if (ele.type.name == "grass") {
                types.style.background = "green"
            }
            else if (ele.type.name == "poison") {
                types.style.background = "purple"
            }
            else if (ele.type.name == "fire") {
                types.style.background = "red"
            }
            else if (ele.type.name == "water") {
                types.style.background = "blue"
            }
            else if (ele.type.name == "bug") {
                types.style.background = "lightgreen"
            }
            else if (ele.type.name == "normal") {
                types.style.background = "gray"
            }
            else if (ele.type.name == "flying") {
                types.style.background = "skyblue"
            }

            types_list.append(types)
        }
        );
    });
    
}
poki()

// let pokemonlist = document.querySelector("#pokemon-list")
// pokemonlist.addEventListener("click",(ele)=>{
//     let name =ele.target.querySelector("h2")
//     console.log(name);
// })
