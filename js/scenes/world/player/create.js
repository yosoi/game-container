import anims from './anims.js'
import createAnim from './create_anim.js'

export default function(onPointerDown, scene, x = 0, y = 0) {
  const player = scene.physics.add.sprite(x, y, "player");
  anims.forEach((anim, i) => {
    createAnim(
      "player",
      anim["key"],
      anim["start"],
      scene
    );
  });
  player.setScale(3);
  player.setOrigin(0,0);
  player.anims.play("frontIdle");
  player.setInteractive().on("pointerdown", function(pointer, localX, localY, event) {
    onPointerDown(pointer, localX, localY, event, player);
  });
  return player;
}
