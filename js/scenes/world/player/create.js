import anims from './anims.js'
import createAnim from './create_anim.js'

export default function(onPointerDown, scene) {
  const sheetKey = scene.playerSheetKey;
  const scale = scene.playerScale;
  const player = scene.physics.add.sprite(400, 300, sheetKey);
  anims.forEach((anim, i) => {
    createAnim(
      sheetKey,
      anim["key"],
      anim["start"],
      scene
    );
  });
  player.setScale(scale);
  player.anims.play("frontIdle");
  player.setInteractive().on("pointerdown", function(pointer, localX, localY, event) {
    onPointerDown(pointer, localX, localY, event, player);
  });
  return player;
}
