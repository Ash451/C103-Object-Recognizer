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

 //Code for identifying the snapshot using classifier

 function identify(){
     var img= document.getElementById("picture")
     classifier.classify(img, gotResult)
 }

 function gotResult(error, result){
     if (error){
         console.log(error)
     }
     else{
         console.log(result)
         document.getElementById("objectresults").innerHTML=result[0].label
         document.getElementById("accuracyresults").innerHTML=result[0].confidence.toFixed(3)

     }



 }
