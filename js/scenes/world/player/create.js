import anims from './anims.js'
import createAnim from './create_anim.js'

export default function(onPointerDown, scene) {
  const player = scene.physics.add.sprite(400, 300, "player");
  anims.forEach((anim, i) => {
    createAnim(
      "player",
      anim["key"],
      anim["start"],
      scene
    );
  });
  player.setScale(3);
  player.anims.play("frontIdle");
  player.setInteractive().on("pointerdown", function(pointer, localX, localY, event) {
    onPointerDown(pointer, localX, localY, event, player);
  });
  return player;
}
