//Code for setting camera

Webcam.set({
    height: 300,
    width: 300,
    image_format:'png',
    png_quality:90
}) 

//Code for triggering webcam

Webcam.attach("camera")

//Code for taking snapshot

function capture(){
   Webcam.snap(
       function (snap) {
           document.getElementById("snapshot").innerHTML=`<img src=${snap} id="picture">`
       }
   )
}

//checking version of ML5

console.log("The version of ML5 is " + ml5.version)

//Importing model via model classifier

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Yr9zHxSaO/model.json", ModelLoaded)
 function ModelLoaded(){
     console.log ("Successfully Loaded Model!")
 }