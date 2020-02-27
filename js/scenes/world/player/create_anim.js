export default function(spriteKey, animKey, startFrame, scene) {
  scene.anims.create({
    key: animKey,
    frames: scene.anims.generateFrameNumbers(
      spriteKey,
      {
        start: startFrame,
        end: startFrame + 1
      }
    ),
    frameRate: 4,
    repeat: -1
  });
}
