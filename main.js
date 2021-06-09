Webcam.set({
    width: 310,
    height: 300,
    dest_width: 310,
    dest_height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90,
    force_flash: false,
   
    constraints:{
        facingMode: "environment"
    }
});

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src=" + data_uri + ">";
    });
}
console.log("ml5 version:", ml5.version);

classifier = ml5.imageClassifier('MobileNet', modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
    }
}