let searchKeywords = [
    {'number': 21917},
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
    const params = new URLSearchParams(window.location.search);
    const resultBox = document.querySelector(".search-results-container");

    let result = [];
    let input = params.get("team") || "NULL";

    if(input.length) {
        result = searchKeywords.filter((keyword)=>{
            return keyword.number.toString().includes(input);
        });
        console.log(result);
    }
    display(result);

    if(!result.length) {
        resultBox.innerHTML = "";
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
                resultBox.innerHTML = "";
                
                // Extract team number and name from the text
                const teamText = item.textContent;
                team = teamText; // display text as per format "#21917 Pangea"

                console.log('Redirecting to insights for team:', team);
                window.location.href = `insights.html?team=${encodeURIComponent(team)}`;
            });
        });
    }
});