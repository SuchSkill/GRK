var imgA;
var imgB;
function setup() {
    createCanvas(512,512);
    background(255);
    imgA = createImage(512,512);
    imgB = createImage(512,512);
    imgA.loadPixels();
    imgB.loadPixels();
    var d = pixelDensity();
    for(var i=0; i<512*512*4*d; i+=4) {
        imgA.pixels[i]=240;
        imgA.pixels[i+1]=250;
        imgA.pixels[i+2]=240;
        imgA.pixels[i+3]=255;
        imgB.pixels[i]=240;
        imgB.pixels[i+1]=240;
        imgB.pixels[i+2]=250;
        imgB.pixels[i+3]=255;
    }
    imgA.updatePixels();
    imgB.updatePixels();
}
function draw() {
    if (!keyIsDown(32)) {
        image(imgA,0,0);
        text('Image A',10,20);
    } else {
        image(imgB,0,0);
        text('Image B',10,20);
    }
}
function makeVector(x ,y){
    var tab=[x , y, 1];
    return tab;
}
function drawVector(img , vec){
    // imgA.set
    img.set(vec[0], vec[1], 0 );
    img.updatePixels();
}
function mouseDragged(x){
    console.log(x.clientX);
    console.log(x.clientY);
    var vector = makeVector(x.clientX, x.clientY);
    drawVector(imgA, vector);
    var matrixMultiplication0 = matrixMultiplication(makeScalingMatrix(2,2), makeTranslationMatrix(62,117));
    var matrixMultiplication1 = matrixMultiplication(makeRotationMatrix(20), matrixMultiplication0);
    var matrixMultiplication2 = matrixMultiplication(vector, matrixMultiplication1);
    console.log(matrixMultiplication2._data);
    drawVector(imgB, matrixMultiplication2._data);

}
function makeIdentityMatrix (){
    return [[1,0,0],
            [0,1,0],
            [0,0,1]];
}
function makeTranslationMatrix (x,y){
    return [[1,0,x],
            [0,1,y],
            [0,0,1]];
}
function makeScalingMatrix (x,y){
    return [[x,0,0],
            [0,y,0],
            [0,0,1]];
}
function makeRotationMatrix (angle){
    var angleRadian = angle/180*Math.PI;
    var cos = Math.cos(angleRadian);
    var sin = Math.sin(angleRadian);
    return [[cos,-sin,0],
            [sin, cos,0],
            [ 0,   0, 1]];
}
function makeShearMatrix (x,y){
    return [[1, x, 0],
            [y, 1, 0],
            [0, 0, 1]];
}
function matrixMultiplication(matrix, vector) {
    var m1 = math.matrix(matrix);
    var m2 = math.matrix(vector);
    var multiply = math.multiply(m1, m2);
    // console.log(multiply);
    return multiply;

}