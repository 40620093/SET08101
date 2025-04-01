document.addEventListener("DOMContentLoaded", function() {
    // Get counters from localStorage, if they exist
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
    const searchInput = document.getElementById('game-search');
    const searchButton = document.getElementById('search-btn');
    const gameBoxes = document.querySelectorAll('.game-box');

    function searchGames() {
    const searchTerm = searchInput.value.toLowerCase();
    
    gameBoxes.forEach(function(box) {
        const gameTitle = box.textContent.trim().toLowerCase();
        if (gameTitle.includes(searchTerm)) {
            box.style.display = 'block'; // Show game box if it matches the search term
        } else {
            box.style.display = 'none'; // Hide game box if it doesn't match
        }
    });
}

    // Button click event to trigger search
    searchButton.addEventListener('click', function() {
    searchGames();
});

    // Trigger search on 'Enter' key press
    searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchGames();
    }
});