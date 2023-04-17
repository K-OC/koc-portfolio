const { ChronikClient } = require('chronik-client');
// For XEC, eCash chain:
const chronik = new ChronikClient('https://chronik.be.cash/xec');

// Listen to updates on scripts:
const ws = chronik.ws({
    onMessage: msg => {
      console.log("Got update: ", msg)
    },
    onReconnect: e => {
      // Fired before a reconnect attempt is made:
      console.log("Reconnecting websocket, disconnection cause: ", e)
    },
  })

export async function wsSubScription(publickey) {
    let result;
    try {
 // Wait for WS to be connected:
await ws.waitForOpen()
// Subscribe to scripts (on Lotus, current ABC payout address):
// Will give a message on avg every 2 minutes
ws.subscribe("p2pkh", "b8ae1c47effb58f72f7bca819fe7fc252f9e852e")
// Unsubscribe:
ws.unsubscribe("p2pkh", "b8ae1c47effb58f72f7bca819fe7fc252f9e852e")
    } catch (err) {
        console.log(`Error in chronik.utxos(${publickey})`);
        console.log(err);
    }
    return result
}