import createPlayer from './create.js'
import touchOther from './touch_other.js'

export default function(connectionId, scene) {
  scene.otherPlayers[connectionId] = createPlayer(
    (pointer, localX, localY, event, player, scene) => {
      touchOther(player, scene);
    },
    scene
  );
}
