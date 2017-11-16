
function setup() {
    createCanvas(512, 512);
    // pixelDensity(1)
    background(255);
}

var last_x = -1;
var last_y = -1;

function mouseDragged() {

    if (mouseButton != LEFT){
        console.log("left");
        return;
    }
    if (last_x > 0) {
        line(last_x, last_y, mouseX, mouseY);
    }
    last_x = mouseX;
    last_y = mouseY;
}

function mouseReleased() {
    last_x = last_y = -1;
    if (mouseButton == RIGHT) {
        console.log("right");
        loadPixels();

        flood_fill(mouseX, mouseY);
        updatePixels();
    }
}

function set_pixel(x, y, c) {
    idx = (y * 512 + x) * 4;
    pixels[idx] = c;
    pixels[idx + 1] = c;
    pixels[idx + 2] = c;
    pixels[idx + 3] = 255;
}

function get_pixel(x, y) {
    idx = (y * 512 + x) * 4;
    return pixels[idx];
}

//właściwa funkcja do wypełniania
function flood_fill(x, y) {

    var stack = [];
    stack.push([x, y]);
    cnt = 100000;
    while (stack.length > 0) {
        cnt--;
        var pop = stack.pop();
        if (pop[0] < 0 && pop[0] > 512
            && pop[1] < 0 && pop[1] > 512) {
            // console.log("outside canavas");
            continue;
        }
        var pixel = get_pixel(pop[0],pop[1]);
        if(pixel!=255){
            // console.log(x);
            // console.log(y);
            // console.log("wrong color");

            continue;
        }
        set_pixel(pop[0], pop[1], 100);
        stack.push([pop[0], pop[1]-1]);
        stack.push([pop[0], pop[1]+1]);
        stack.push([pop[0]-1, pop[1]]);
        stack.push([pop[0]+1, pop[1]]);

    }

}