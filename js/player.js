class Player extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, "player");
    config.scene.add.existing(this);
  }

  moveTo(x, y) {
    console.log(x, y);
  }
}

export default Player;
