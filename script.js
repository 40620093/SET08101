document.addEventListener("DOMContentLoaded", function() {
    // Get counters from localStorage
    let visitCount = localStorage.getItem('visit-counter') ? parseInt(localStorage.getItem('visit-counter')) : 0;
    visitCount++;
    localStorage.setItem('visit-counter', visitCount);
    document.getElementById('visit-counter').textContent = `Webpage visits: ${visitCount}`;

    let miniDndCount = localStorage.getItem('mini-dnd-counter') ? parseInt(localStorage.getItem('mini-dnd-counter')) : 0;
    let higherOrLowerCount = localStorage.getItem('higher-or-lower-counter') ? parseInt(localStorage.getItem('higher-or-lower-counter')) : 0;
    let snakeCount = localStorage.getItem('snake-counter') ? parseInt(localStorage.getItem('snake-counter')) : 0;

    // Update the counters on page load
    document.getElementById('mini-dnd-counter').textContent = `Times Played: ${miniDndCount}`;
    document.getElementById('higher-or-lower-counter').textContent = `Times Played: ${higherOrLowerCount}`;
    document.getElementById('snake-counter').textContent = `Times Played: ${snakeCount}`;

    // Function to increment the counter and save it to localStorage
    function incrementCounter(game) {
        if (game === 'mini-dnd') {
            miniDndCount++;
            localStorage.setItem('mini-dnd-counter', miniDndCount);
            document.getElementById('mini-dnd-counter').textContent = `Times Played: ${miniDndCount}`;
        } else if (game === 'higher-or-lower') {
            higherOrLowerCount++;
            localStorage.setItem('higher-or-lower-counter', higherOrLowerCount);
            document.getElementById('higher-or-lower-counter').textContent = `Times Played: ${higherOrLowerCount}`;
        } else if (game === 'snake') {
            snakeCount++;
            localStorage.setItem('snake-counter', snakeCount);
            document.getElementById('snake-counter').textContent = `Times Played: ${snakeCount}`;
        }
    }

    // Event listeners for when a game is clicked
    document.getElementById('mini-dnd-link').addEventListener('click', function() {
        incrementCounter('mini-dnd');
    });

    document.getElementById('higher-or-lower-link').addEventListener('click', function() {
        incrementCounter('higher-or-lower');
    });

    document.getElementById('snake-link').addEventListener('click', function() {
        incrementCounter('snake');
    });
});
 // Search functionality - on button click or pressing 'Enter'

    function searchGames() {
        //const searchTerm = searchInput.textContent

        const gameBoxes = document.getElementsByClassName("game-box");
        const searchInput = document.getElementById('game_search');

        for(box in gameBoxes){
            console.log(searchInput.value)
            console.log(gameBoxes[box].textContent)
            if (searchInput.value === gameBoxes[box].textContent){
                gameBoxes[box].style.visibility = "hidden"
            }
        }

}
    const searchButton = document.getElementById("search-btn")
    // Button click event to trigger search
    searchButton.addEventListener('click', searchGames());