// osc_p5draw
// TouchOSC phone app (mix2 layout, tab 3) sends OSC messages. 
// Chataigne maps the OSC messages to Websockets.
// p5js draws using the coordinates from OSC.

var waveHeights = []; // variable for array of wave heights

var host = '127.0.0.1:8080'; // address of the websockets server
var socket; // the websocket connection

function setup() {
    // connect to server...
    socket = new WebSocket('ws://' + host);
    socket.onopen = openHandler;
    socket.onmessage = messageHandler;
}

function openHandler() {
    console.log("Connected to socket server at " + host);
}

function messageHandler(event) {
    var msg = event.data; // read data from the onmessage event
    //waveHeights = msg; // puts osc message in wave number variable
    waveHeights.push(msg);
    console.log(msg);
}

function findPeaksAndTroughs(waveHeights) {
    for (let i = 1; i < waveHeights.length - 1; i++) {
        if (waveHeights[i] > waveHeights[i - 1] && waveHeights[i] > waveHeights[i + 1]) {
            // here put action that peak will initiate;
        } else if (waveHeights[i] < waveHeights[i - 1] && waveHeights[i] < waveHeights[i + 1]) {
            // here put action that trough will initiate;
        }
    }
}