let availableKeywords = [
    {'number': 21971},
    {'number': 2818},
    {'number': 2836},
    {'number': 149},
    {'number': 187},
    {'number': 542},
    {'number': 2901},
    {'number': 3116},
    {'number': 3479},
    {'number': 3415},
    {'number': 3658},
    {'number': 3737},
    {'number': 3738},
    {'number': 2916},
    {'number': 4149},
    {'number': 4720},
    {'number': 4780},
    {'number': 5009},
];

document.addEventListener("DOMContentLoaded", function() {
    const resultBox = document.querySelector(".result-box");
    const inputBox = document.getElementById("input-box");
    const form = document.querySelector(".search-bar");

    let team = 21971;

    form.onsubmit = (e)=> {
        e.preventDefault();

        team = inputBox.value.trim();

        if (team !== "") {
            window.location.href = `search.html?team=${encodeURIComponent(team)}`;
        }
    }

    inputBox.onkeyup = function() {
        let result = [];
        let input = inputBox.value;

        if(input.length) {
            result = availableKeywords.filter((keyword)=>{
                return keyword.number.toString().includes(input);
            });
            console.log(result);
        }
        display(result);
        
        if(!result.length) {
            resultBox.innerHTML = "";
        }
    }

    function display(result) {
        const content = result.map(team => 
            `<li>${team.number}</li>`
        ).join('');
        
        resultBox.innerHTML = `<ul>${content}</ul>`;

        const items = resultBox.querySelectorAll("li");

        items.forEach(item => {
            item.addEventListener("click", () => {
                // Set the input to show the formatted team info
                inputBox.value = item.textContent;
                resultBox.innerHTML = "";
                
                // Extract team number and name from the text
                const teamText = item.textContent;
                team = teamText;

                console.log('Redirecting to insights for team:', team);
                window.location.href = `insights.html?team=${encodeURIComponent(team)}`;
            });
        });
    }

    function selectInput(list) {
        inputBox.value = list.innerHTML;
        resultBox.innerHTML = "";
    }
});