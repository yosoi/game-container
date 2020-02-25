import Chunk from "./chunk.js"

class World extends Phaser.Scene {
  constructor() {
    super({
      key: "World"
    });

    this.tileScale = 3;
    this.tileSize = 16;
    this.tileSizeScaled = this.tileSize * this.tileScale;

    this.characterFrameSize = 32;
    this.characterFrameRate = 4;
  }

  preload() {
    this.loadTileImages("./assets/map/tiles/sprites/");

    this.load.spritesheet(
      "character",
      "./assets/character/sprites/character_sheet_01.png",
      {
        frameWidth: this.characterFrameSize,
        frameHeight: this.characterFrameSize
      }
    );
  }

  create() {
    console.log("Creating World scene.");
    this.initBackground();
    this.initPlayer();
    this.input.on("pointerdown", (pointer) => this.movePlayer(pointer.x, pointer.y));
  }

  update() {
    // what is the position of the center of the screen
    // what are the row/column coordinates of that position
    // how many cols should be loaded to each side of that column coordinate?
    // how many rows should be loaded above and below that row coordinate?

    // add new tiles when you need them
    // remove old tiles that you don't need anymore
  }

  movePlayer(x, y) {
    this.player.x = x;
    this.player.y = y;
  }

  loadTileImages(dir) {
    this.load.image("grass", dir + "grass_01.png");
    this.load.image("weeds", dir + "weeds_01.png");
    this.load.image("groundcover", dir + "groundcover_01.png");
    this.load.image("flowers", dir + "flowers_01.png");
  }

  addTileImage(row, col) {
    const pos = {
      "x": row * this.tileSizeScaled,
      "y": col * this.tileSizeScaled
    };

    let noiseValue = noise.perlin2(
      pos["x"] / 200,
      pos["y"] / 200
    );

    let key = this.getTileKey(noiseValue);

    const newTile = this.add.image(pos["x"], pos["y"], key);
    newTile.setOrigin(0,0);
    newTile.setScale(this.tileScale);
  }

  getTileKey(value) {
    let key = "grass";
    if (value < -.1) {
      key = "grass";
    } else if (value > 0.25 && value < 0.35) {
      key = "groundcover";
    } else if (value > 0.35) {
      key = "flowers";
    } else {
      key = "weeds";
    }
    return key;
  }

  initBackground() {
    const size = 20;

    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        this.addTileImage(x, y);
      }
    }

    // this.addTileImage(0, 0, "grass");
    // this.addTileImage(1, 0, "weeds");
    // this.addTileImage(2, 0, "groundcover");
    // this.addTileImage(3, 0, "flowers");
  }

  initPlayer() {
    this.createPlayerSprite();
    this.createPlayerAnims();
    this.player.anims.play("frontIdle", true);
  }

  createPlayerSprite() {
    this.player = this.physics.add.sprite(400, 300, "character");
    this.player.setScale(this.tileScale);
  }

  createPlayerAnims() {
    this.createPlayerAnim("frontIdle", "character", 0);
    this.createPlayerAnim("rearIdle", "character", 2);
    this.createPlayerAnim("walkDown", "character", 4);
    this.createPlayerAnim("walkUp", "character", 6);
    this.createPlayerAnim("walkLeft", "character", 8);
    this.createPlayerAnim("walkRight", "character", 10);
  }

  createPlayerAnim(animKey, sheetKey, startFrame) {
    this.anims.create({
      key: animKey,
      frames: this.anims.generateFrameNumbers(
        sheetKey,
        {
          frames: [startFrame, startFrame + 1]
        }
      ),
      frameRate: this.characterFrameRate,
      repeat: -1
    });
  }
}

export default World;
