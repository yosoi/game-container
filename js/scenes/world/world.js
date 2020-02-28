import createPlayer from './player/create.js'
import movePlayer from './player/move.js'
import preloadMessageAssets from './messages/preload.js'
import preloadPlayerAssets from './player/preload.js'
import touchOther from './player/touch_other.js'
import touchSelf from './player/touch_self.js'

class World extends Phaser.Scene {
  constructor() {
    super({
      key: "World"
    });
  }

  preload() {
    preloadPlayerAssets(this);
    preloadMessageAssets(this);
  }

  create() {
    this.me = createPlayer(
      (pointer, localX, localY, event, player, scene) => {
        touchSelf(player, this);
      },
      this
    );

    this.input.on("pointerup", function(pointer) {
      movePlayer(this.me, pointer.x, pointer.y, this);
    }, this);
  }
}

export default World;
