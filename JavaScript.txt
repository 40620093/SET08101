
<script>
// Function to update the "times played" counter for a game

function updateGameCounter(gameId) {
    let count = localStorage.getItem(gameId) || 0;
    count++;
    localStorage.setItem(gameId, count);
    document.getElementById(gameId + "-count").innerText = "Times Played: " + count;
}

// Update counters for each game
document.getElementById('mini-dnd').addEventListener('click', function() {
    updateGameCounter('mini-dnd');
});

document.getElementById('higher-or-lower').addEventListener('click', function() {
    updateGameCounter('higher-or-lower');
});

document.getElementById('snake').addEventListener('click', function() {
    updateGameCounter('snake');
});

// Initialize the counters on page load

window.onload = function() {
    ['mini-dnd', 'higher-or-lower', 'snake'].forEach(gameId => {
        let count = localStorage.getItem(gameId) || 0;
        document.getElementById(gameId + "-count").innerText = "Times Played: " + count;
    });
};
</script>