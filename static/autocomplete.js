let availableKeywords = [
    'Pangea',
    'TIS',
    'NASA',
    'Matrix',
    'Apex Robotics',
    'Robo Lobo',
    'Atomic Theory',
    'Cyberhawks',
    'Aluminati',
    'R.A.B.B.I', 
    'Robosharks',
    'STEAM Newton',
    'Robolution',
    'Anonymous Autonomous',
    'Ammonites',
    'Warriors',
    'Helios',
    'Nuts & Bolts',
    'DICE'
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
const form = document.querySelector(".search-bar");
let team = "Pangea";

form.onsubmit = (e)=> {
    e.preventDefault();

    team = inputBox.value.trim();

    if (team !== "") {
        window.location.href = `insights.html?team=${encodeURIComponent(team)}`;
    }
}

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;

    if(input.length) {
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
    
    if(!result.length) {
        resultBox.innerHTML = "";
    }
}

function display(result) {
    resultBox.innerHTML = "<ul>" + result.map(list => `<li>${list}</li>`).join('') + "</ul>";

    const items = resultBox.querySelectorAll("li");

    items.forEach(item => {
        item.addEventListener("click", () => {
            inputBox.value = item.innerHTML;
            resultBox.innerHTML = "";
            team = inputBox.value.trim();

            console.log('Redirecting to insights for team:', team);
            window.location.href = `insights.html?team=${encodeURIComponent(team)}`;
        });
    });
}

function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = "";
}