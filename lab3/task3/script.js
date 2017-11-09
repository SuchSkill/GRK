function setup() {
    createCanvas(512, 512);
    // pixelDensity(1)
    background(255);
    // for (i = 0; i<100; i++){
    //
    //     set_pixel(i,i,0)
    // }
}

var x0 = -1;
var y0 = -1;
var x1 = -1;
var y1 = -1;

function mousePressed() {
    x0 = mouseX;

    y0 = mouseY;
    // console.log(x0)
}

function mouseDragged() {
    x1 = mouseX;
    y1 = mouseY;
    background(255);
    noStroke();
    fill('red');
    ellipse(x0 - 3, y0 - 3, 6);
    fill('green');
    ellipse(x1 - 3, y1 - 3, 6);
}

function mouseReleased() {
    background(255);

    loadPixels();
    draw_line();
    updatePixels();
}

function set_pixel(x, y, c) {
    idx = (y * 512 + x) * 4;
    pixels[idx] = c;
    pixels[idx + 1] = c;
    pixels[idx + 2] = c;
    pixels[idx + 3] = 255;
}

function draw_line() {
    dx = x1 - x0;
    dy = y1 - y0;
    Dp = (2*dy)-dx;
    Deq  = 2*dy;
    Dinc = (2*dy-(2*dx));
    a = dy / dx;
    b = y0 - (a * x0);

    Dhat = (2*dy)-dy;
    for (x = 0; x < 512; x++) {
        for (y = 0; y < 512; y++) {
            midpoint = (dy/dx) - (1/2);

            set_pixel(x, y, D);
            if(D<0){
                D+=Deq;
            }else{
                D+=Dinc;
                y+=1;
            }
        }
    }


}