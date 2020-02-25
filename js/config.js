import Init from './scenes/init/init.js'
import World from './scenes/world/world.js'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: 0x000000,
  parent: "phaser-container",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 }
    }
  },
  scene: [
    Init,
    World
  ],
  pixelArt: true,
  roundPixels: true
}

export default config;
