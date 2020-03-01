export default function(connectionId, scene) {
  console.log("finding...");
  return scene.otherPlayers[connectionId];
}
