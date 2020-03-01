import Sockette from '../../../../lib/sockette/index.js'
import onClose from './callbacks/on_close.js'
import onError from './callbacks/on_error.js'
import onMaximum from './callbacks/on_maximum.js'
import onMessage from './callbacks/on_message.js'
import onOpen from './callbacks/on_open.js'
import onReconnect from './callbacks/on_reconnect.js'

export default function(scene) {
  return new Sockette(
    "wss://bgazjwo2mg.execute-api.us-east-2.amazonaws.com/dev",
    {
      timeout: 5e3,
      maxAttempts: 10,
      onopen: e => onOpen(e, scene),
      onmessage: e => onMessage(e, scene),
      onreconnect: e => onReconnect(e, scene),
      onmaximum: e => onMaximum(e, scene),
      onclose: e => onClose(e, scene),
      onerror: e => onError(e, scene)
    }
  );
}
