import Init from './scenes/init.js'
import World from './scenes/world.js'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: 0xff00ff,
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
  ]
}

export default config;
