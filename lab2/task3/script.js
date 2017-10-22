function preload() {
    img = loadImage("img/astronaut.png");
    img_h=createImage(256,256);
    img_s=createImage(256,256);
    img_v=createImage(256,256);
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
            // img_h.pixels[pos]=img.pixels[pos] // R value
            // img_h.pixels[pos+3]=255;
            // img_s.pixels[pos+1] = img.pixels[pos+1] // G value
            // img_s.pixels[pos+3]=255;
            // img_v.pixels[pos+2]=img.pixels[pos+2] // B value
            // img_v.pixels[pos+3]=255;
            // img.pixels[pos+3] // A value

            r=img.pixels[pos]/255;
            g=img.pixels[pos+1]/255;
            b=img.pixels[pos+2]/255;
            cmax = Math.max(r,g,b);
            cmin = Math.min(r,g,b);
            l=(cmax+cmin)/2;
            v=cmax;
            c = cmax-cmin;
            sz=c/(1-Math.abs(2*l-1));
            j=(pos/4)%256;//indeks kolumny wewnątrz wiersza
            k=(pos/4)/256;//indeks wiersza
            img_v.set(j,k,255*v);
            img_s.set(j,k,255*sz)



        }
    img_h.updatePixels();
    img_s.updatePixels();
    img_v.updatePixels();
    img.updatePixels();
    // img.blend(img_h,0,0,256,256,0,0,256,256,ADD);
    // img.blend(img_v,0,0,256,256,0,0,256,256,ADD);
    // img.blend(img_s,0,0,256,256,0,0,256,256,ADD);
    image(img_h, 0, 0);
    image(img_s, 256, 0);
    image(img_v, 0, 256);
    image(img, 256, 256);

}
