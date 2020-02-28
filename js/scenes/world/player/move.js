export default function(player, x, y, scene) {
  const distanceX = Math.abs(player.x - x);
  const distanceY = Math.abs(player.y - y);
  const distance = Phaser.Math.Distance.Between(
    player.x, player.y,
    x, y
  );
  const pixelsPerSecond = 60;
  const moveDuration = (distance / pixelsPerSecond) * 1000;
  let animKey = "";
  if (distanceX >= distanceY) {
    console.log("horizontal");
    animKey = player.x >= x ? "leftWalk" : "rightWalk";
  } else {
    console.log("vertical");
    animKey = player.y >= y ? "rearWalk" : "frontWalk";
  }
  player.anims.play(animKey);
  scene.physics.moveTo(player, x, y, pixelsPerSecond);
  scene.time.delayedCall(moveDuration, function() {
    const tolerance = 5;
    const distanceToTarget = Phaser.Math.Distance.Between(
      player.x, player.y,
      x, y
    );
    if (distanceToTarget <= tolerance) {
      player.body.reset(x, y);
      player.anims.play("frontIdle");
    }
  });
}
