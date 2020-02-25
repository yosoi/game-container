import Chunk from "./chunk.js"

class World extends Phaser.Scene {
  constructor() {
    super({
      key: "World"
    });

    this.tileScale = 3;
    this.tileSize = 16;
    this.tileSizeScaled = this.tileSize * this.tileScale;
  }

  preload() {
    this.loadTileImages("./assets/map/tiles/sprites/");
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

  create() {
    console.log("Creating World scene.");

    for (let x = 0; x < 5; x++) {
      for (let y = 0; y < 5; y++) {
        this.addTileImage(x, y);
      }
    }

    // this.addTileImage(0, 0, "grass");
    // this.addTileImage(1, 0, "weeds");
    // this.addTileImage(2, 0, "groundcover");
    // this.addTileImage(3, 0, "flowers");
  }

  update() {
    // what is the position of the center of the screen
    // what are the row/column coordinates of that position
    // how many cols should be loaded to each side of that column coordinate?
    // how many rows should be loaded above and below that row coordinate?

    // add new tiles when you need them
    // remove old tiles that you don't need anymore
  }
}

export default World;
