// Smallship prefab
class Smallship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue, speed) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene, displayList, updateList
        this.points = pointValue;   // store pointValue
        this.speed = speed;
    }

    update() {
        this.x -= this.speed;
        // wraparound from left to right edge
        if (this.x <= 0-this.width) {
            this.reset();
        }
    }

    reset() {
        this.x = game.config.width;
    }
}