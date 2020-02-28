export default function(player, messageKey, scene) {
  const duration = 3000;
  const x = player.x + 32;
  const y = player.y - 64;
  let message = undefined;
  if (messageKey === "think") {
    message = scene.add.sprite(x, y, "thinking");
    scene.anims.create({
      key: "thinkAnim",
      frames: scene.anims.generateFrameNumbers(
        "thinking",
        {
          start: 0,
          end: 2
        },
      ),
      frameRate: 4,
      repeat: -1
    });
    message.anims.play("thinkAnim");
  } else {
    message = scene.add.image(
      x,
      y,
      messageKey
    );
  }
  message.setScale(3);
  scene.time.delayedCall(duration, function() {
    message.destroy()
    message = null;
  });
  return message;
}
