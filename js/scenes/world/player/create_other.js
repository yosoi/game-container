import createPlayer from './create.js'
import touchOther from './touch_other.js'

export default function(connectionId, scene, x, y) {
  console.log("creating other player...");
  console.log(connectionId, scene, x, y);
  scene.otherPlayers[connectionId] = createPlayer(
    (pointer, localX, localY, event, player, scene) => {
      touchOther(player, scene);
    },
    scene,
    x,
    y
  );
}
