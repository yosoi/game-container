export default function(scene) {
  scene.load.spritesheet(
    "thinking",
    "./assets/messages/sprites/think_01.png",
    {
      frameWidth: 16,
      frameHeight: 16
    }
  )
  scene.load.image("brb", "./assets/messages/sprites/brb_01.png");
  scene.load.image("bye", "./assets/messages/sprites/bye_01.png");
  scene.load.image("heart", "./assets/messages/sprites/heart_01.png");
  scene.load.image("hey", "./assets/messages/sprites/hey_01.png");
  scene.load.image("poke", "./assets/messages/sprites/poke_01.png");
  scene.load.image("poop", "./assets/messages/sprites/poop_01.png");
  scene.load.image("um", "./assets/messages/sprites/um_01.png");
}
