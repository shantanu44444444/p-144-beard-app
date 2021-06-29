var x = 0;
var y = 0;

function preload(){
    mushtach = loadImage('https://i.postimg.cc/0QSX4CTb/beard-png-pic-8.png');
}

function setup(){
    canvas = createCanvas(440 , 440)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(440,440);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses );
}

function modelLoaded(){
    console.log(' PoseNet Model Has Loaded!! ');
}

function gotPoses(results){
    if(results.length > 0);{
        console.log(results);
        x = results[0].pose.nose.x-77;
        y = results[0].pose.nose.y-10;


        console.log("nose x = "+ results[0].pose.nose.x);
         console.log("nose y = "+ results[0].pose.nose.y);
    }
    }


function draw (){
    image(video, 0 , 0, 440 , 440);
    image(mushtach , x , y , 150 , 130);
}

function take_snapshot(){
    save('myFilterImage.png');
}