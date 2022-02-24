function preload() {}

function setup() {
    canvas = createCanvas(300,300);
    canvas.position(530,330);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/riF7yRdH1/model.json',modelLoaded);
}

function draw() {
    image(video,0,0,300,300);
    classifier.classify(video,gotResult);
}

function modelLoaded() {
    console.log("Model Loaded!!");
}

function gotResult(error,results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_span").innerHTML=results[0].label;
        document.getElementById("accuracy_span").innerHTML=results[0].confidence.toFixed(3);
    }
}