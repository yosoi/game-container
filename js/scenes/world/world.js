import preloadPlayerAssets from './player/preload.js'
import createPlayer from './player/create.js'
import touchOther from './player/touch_other.js'
import touchSelf from './player/touch_self.js'
import updatePlayer from './player/update.js'

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
  }

  update() {
    updatePlayer(this.me);
  }
}

export default World;
