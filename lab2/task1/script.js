function preload() {
    img = loadImage("img/astronaut.png");
    img_h=createImage(256,256);
    img_s=createImage(256,256);
    img_v=createImage(256,256);
    img_rgb=createImage(256,256);
    img_sum=createImage(256,256);
}
function setup() {
    createCanvas(512,512);
    img.resize(256,256);
    img.loadPixels();
    img_h.loadPixels();
    img_s.loadPixels();
    img_v.loadPixels();
    for(x=0;x<img.width;x++)
        for(y=0;y<img.height;y++) {
            pos=4*(y*img.width+x);
            img_h.pixels[pos]=img.pixels[pos] // R value
            img_h.pixels[pos+3]=255;
            img_s.pixels[pos+1] = img.pixels[pos+1] // G value
            img_s.pixels[pos+3]=255;
            img_v.pixels[pos+2]=img.pixels[pos+2] // B value
            img_v.pixels[pos+3]=255;
            img.pixels[pos+3] // A value
        }
    img_h.updatePixels();
    img_s.updatePixels();
    img_v.updatePixels();
    image(img_h, 0, 0);
    image(img_s, 256, 0);
    image(img_v, 0, 256);
    // img.updatePixels();
    img_sum.blend(img_h,0,0,256,256,0,0,256,256,ADD);
    img_sum.blend(img_s,0,0,256,256,0,0,256,256,ADD);
    img_sum.blend(img_v,0,0,256,256,0,0,256,256,ADD);
// image(img, 256, 256);
    image(img_sum, 256, 256);

}
