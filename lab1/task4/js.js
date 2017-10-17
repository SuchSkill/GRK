function setup() {
    createCanvas(400, 300);
    noLoop();
}
function Apple () {

}


function draw() {//noprotect
    background(0,0,255);

    for (var x = 0; x < width; x++) {
        for (var y = 200; y < height; y++) {
            set(x, y, color(0,255,0));
        }
    }
    for (var x = 100; x < width-100; x++) {
        for (var y = 100; y < height-100; y++) {
            set(x, y, color(165,42,42));
        }
    }
    for (var x = 100; x < width-100; x++) {
        for (var y = 100; y < height-100; y++) {
            set(x, y, color(165,42,42));
        }
    }
    for(x=200,y=50, k = 200, j = 200; y<100; x+=3,y++, k-=3, j+=3){
        for (z = k; z < j;z++){
            set(z, y, color(255,0,0));
        }
        set(x, y, color(255));
    }
    var x = 0;
    while(x<1000){
        set(floor(random(0,400)), floor(random(200,300)),
            color(floor(random(0,255), floor(random(0,255)), floor(random(0,255)))))
        floor(random(10,20));

        x++;
    }
    updatePixels();

    function isInTriangle(x, y){


    }
}