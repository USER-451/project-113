function setup() {
    canvas = createCanvas(640,480);
    canvas.position(150,150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,230,150,220,200);
    rect(220 , 230);
}