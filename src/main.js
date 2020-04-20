// game configuration object
// Jiabin Zhang
// Create a new scrolling tile sprite for the background (10)
// Allow the player to control the Rocket after it's fired (10)
// Replace the UI borders with new artwork (15)
// Implement parallax scrolling (15)
// Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (25)
// Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (25) 
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

// main game object
let game = new Phaser.Game(config);

// define game settings
game.settings = {
    spaceshipSpeed: 3,
    gameTimer: 60000   
}

// reserve keyboard vars
let keyF, keyLEFT, keyRIGHT;