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
    stroke(0);
    var table = new Array(256);
    table.fill(0);

    img.filter('gray');
    for(x=0;x<img.width;x++)
        for(y=0;y<img.height;y++) {
            pos=4*(y*img.width+x);
            m = img.pixels[pos];//red
            // console.log(m);
            table[m]= table[m]+1;
        }

    for(i =0; i<256; i++) {
        if(table[i] > 256){
            line(i, 256, i, 0);

        }else {
            line(i, table[i], i, 0);
        }
        console.log(table[i]);
    }
    for(i = 0; i<256;i++)
    console.log(i + " " +table[i]);
    // console.log(sum);
    // img.updatePixels();
    // image(img, 0, 0);
}
