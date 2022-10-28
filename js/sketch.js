//setup function runs once at the start
function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}
//the draw funcion runs 60 times per second in a continuous loop
var x2 = 800;
var y2 = 400;
var w2 = 300;
var x3 = 0;
var x = 400
var direction = 1;

function draw() {
    background(220);

    fill(0,0,0);
    square(150,150,500)

    fill(255, 255, 255);
    ellipse(x, 400, 300);
    //fill(200, 255, 255);
    //square(300, 300, 200);
    ellipse(x2, y2, w2);
    ellipse(x3, y2, w2);
    if (direction == 1){
        if (x != (x2 - w2)){
            x += 1;
        }
        else{
            direction = 2;
        }
    }
    if (direction == 2){
        if (x != (x3 + w2)){
            x -= 1;
        }
        else{
            direction = 1;
        }
    }
}