function preload() {
    img = loadImage("img/astronaut.png");
    img_h=createImage(256,256);
    img_s=createImage(256,256);
    img_v=createImage(256,256);
}
function setup() {
//
    createCanvas(256,256);
    img.resize(256,256);
    img.loadPixels();
    background(0)
    stroke(255);
    var table = new Array(256);
    table.fill(0);

    img.filter('gray');
    // img.updatePixels();
    img.loadPixels();

    for(x=0;x<img.width;x++)
        for(y=0;y<img.height;y++) {
            pos=4*(y*img.width+x);
            m = img.pixels[pos];//red
            // console.log(m);
            table[m]= table[m]+1;
        }
    for(i =0; i<256; i++){
        table[i] = table[i]/5;
    }
    // line(0,256,0,60)
    for(i =0; i<256; i++) {
        if(table[i] > 256){
            // line(i, 256, i, 0);
            console.log(i);

        }else {
            line(i, 0, i, 256-table[i]);
            console.log(table[i]);
        }
    }
    // for(i = 0; i<256;i++)
    // console.log(i + " " +table[i]);
    // image(img, 0, 0);
}
