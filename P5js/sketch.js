let osc;
let counter = 0;

function setup() {

    // size
    createCanvas(800,600);

    // 
    osc = new OSC();
    osc.open();

    osc.on('/mymessage', message => {
        console.log("/mymessage: "+message.args); // prints the message arguments
      });

    osc.on('*', message => {
        console.log("all:"+message.args); // prints the message arguments
    });    

}   

function draw() {

    // background
    background(0);

    // text
    fill(255);
    text('click to send random number', 10, 10);

    // OSC
    let message = new OSC.Message('/fast', counter++);
    osc.send(message);

}

function mousePressed(){
    let message = new OSC.Message('/whatever', Math.random());
    osc.send(message);
}