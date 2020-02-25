class Init extends Phaser.Scene {
  constructor() {
    super({
      key: "Init"
    });
  }

  preload() {
    console.log("Preloading Init scene.");
  }

  create() {
    this.scene.start("World");
  }
}

export default Init;
