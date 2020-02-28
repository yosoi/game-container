import createPlayer from './player/create.js'
import movePlayer from './player/move.js'
import preloadPlayerAssets from './player/preload.js'
import touchOther from './player/touch_other.js'
import touchSelf from './player/touch_self.js'

class World extends Phaser.Scene {
  constructor() {
    super({
      key: "World"
    });

    this.playerScale = 3;
    this.playerSheetKey = "player";
  }

  preload() {
    preloadPlayerAssets(this);
  }

  create() {
    this.me = createPlayer(
      (pointer, localX, localY, event, player) => {
        touchSelf();
      },
      this
    );

    this.input.on("pointerup", function(pointer) {
      movePlayer(this.me, pointer.x, pointer.y, this);
    }, this);
  }
}

export default World;
