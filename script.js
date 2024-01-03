const massInput = document.getElementById("mass")
const kg = document.getElementById("kg")
const newton = document.getElementById("newton")
const img = document.getElementById("img")
const btn = document.querySelector(".btn")
const planetSelector = document.getElementById("select")
const sntnc = document.getElementById("sntnc")
const planetContainer = document.querySelector(".planet-container")

const planets = [
    { 
        id: "earth",
        img: "./assets/earth.png",
       gravity: 9.81
    },

    {
        id: "jupiter",
        img: "./assets/jupiter.png",
       gravity: 24.79
    },

    {
        id: "mars",
        img: "./assets/mars.png",
       gravity: 3.71
    },

    {
        id: "mercury",
        img: "./assets/mercury.png",
       gravity: 3.7
    },

    {
        id: "moon",
        img: "./assets/moon.png",
       gravity: 1.625
    },

    {
        id: "neptune",
        img: "./assets/neptune.png",
       gravity: 11.15
    },

    {
        id: "pluto",
        img: "./assets/pluto.png",
       gravity: 0.62
    },

    {
        id: "saturn",
        img: "./assets/saturn.png",
       gravity: 10.44
    },

    {
        id: "uranus",
        img: "./assets/uranus.png",
       gravity: 8.69
    },

    {
        id: "venus",
        img: "./assets/venus.png",
       gravity: 8.87
    },
]

function calcN(){
    btn.addEventListener("click", () => {
        const selectedPlanet = planetSelector.value
        const mass = parseFloat(massInput.value)
        console.log(selectedPlanet)
        
        if(!isNaN(mass)){
           const SelectedPlanetData = planets.find(planet => selectedPlanet === planet.id)
                if(SelectedPlanetData){
                    const weight = mass * SelectedPlanetData.gravity
                    const firstLetter = SelectedPlanetData.id.slice(0,1)
                    const capsOn = firstLetter.toUpperCase()
                    const rest = SelectedPlanetData.id.slice(1)
                    const capsOff = rest.toLowerCase()
                    const fullPlanetName = capsOn + capsOff

                    sntnc.textContent = `The weight of an object on planet ${fullPlanetName}`
                    newton.textContent = `${weight.toFixed(2)}N`
                    img.setAttribute("src", SelectedPlanetData.img)
    
                }
        }else{

            newton.style.display = "none"
            img.style.display = "none"


            planetContainer.innerHTML = `
            <div class="d-flex justify-content-center w-100">
                <div class="text-light fs-6 weigth-container px-5 py-3 w-75">
                    <h2 class="text-center">Mass is required.</h2>
                </div>
            </div>
            `
        }
    })
}

console.log(calcN())