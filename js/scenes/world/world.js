import connect from './multiplayer/connect.js'
import createOther from './player/create_other.js'
import createPlayer from './player/create.js'
import getConnectionIds from './multiplayer/get_connection_ids.js'
import movePlayer from './player/move.js'
import preloadMessageAssets from './messages/preload.js'
import preloadPlayerAssets from './player/preload.js'
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
    this.otherPlayers = {};
    getConnectionIds().then((connectionId) => {
      createOther(connectionId, this);
    });
    console.log(this.otherPlayers);
    this.me = createPlayer(
      (pointer, localX, localY, event, player, scene) => {
        touchSelf(player, this);
      },
      this
    );
    this.input.on("pointerup", function(pointer) {
      movePlayer(this.me, pointer.x, pointer.y, this);
    }, this);
    this.connection = connect(this);
  }
}

export default World;
