let searchKeywords = [
    {'name': "Pangea", 'number': 21917},
    {'name': "G-FORCE", 'number': 2818},
    {'name': "Trobots", 'number': 2836},
    {'name': "Hawks", 'number': 149},
    {'name': "Phoenix", 'number': 187},
    {'name': "WHS Robotics", 'number': 542},
    {'name': "Purple Gears", 'number': 2901},
    {'name': "Robo Warriors", 'number': 3116},
    {'name': "Generals", 'number': 3479},
    {'name': "Lancers", 'number': 3415},
    {'name': "The BOSONS", 'number': 3658},
    {'name': "Hank's Tanks", 'number': 3737},
    {'name': "The Error Codes", 'number': 3738},
    {'name': "Apex Robotics", 'number': 2916},
    {'name': "Terabytes", 'number': 4149},
    {'name': "STEAM Newton", 'number': 4720},
    {'name': "Robolution", 'number': 4780},
    {'name': "Helios", 'number': 5009},
];

document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const resultBox = document.querySelector(".search-results-container");

    let result = [];
    let input = params.get("team") || "NULL";

    if(input.length) {
        result = searchKeywords.filter((keyword)=>{
            return keyword.name.toLowerCase().includes(input.toLowerCase()) || keyword.number.toString().includes(input);
        });
        console.log(result);
    }
    display(result);

    if(!result.length) {
        resultBox.innerHTML = "";
    }

    function display(result) {
        const content = result.map(team => 
            `<li>#${team.number} ${team.name}</li>`
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