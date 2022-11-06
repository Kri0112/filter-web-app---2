mustacheX=0;
mustacheY=0;
function preload(){
    
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

}
function modelLoaded() {
    console.log('poseNet Is Initialized');
}

function draw(){

}

function take_snapshot(){
    save('mustache.png')
}
function modelLoaded() {
    console.log('poseNet Is Initialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);

    }
}