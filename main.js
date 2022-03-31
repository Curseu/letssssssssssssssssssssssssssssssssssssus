function piggydied(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/wRGBcn-y8/model.json',modelready);
}
function modelready(){
    classifier.classify(gotresults);
}
function gotresults(error,results){
    if(error){
        console.error(error);
    }else{

    
    console.log('gotresults');
    r=Math.floor(Math.random()*255)+1;
   b=Math.floor(Math.random()*255)+1;
   g=Math.floor(Math.random()*255)+1;
   
   document.getElementById("result_label").innerHTML='I can hear '+results [0].label;
   document.getElementById("result_confidence").innerHTML='Accuracy '+(results[0].confidence*100)+" %";

   document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
   document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")";

   img1=document.getElementById("alein1");
   img2=document.getElementById("alein2");
   img3=document.getElementById("alein3");
   img4=document.getElementById("alein4");

   if(results[0].label=="claps"){
       img1.src="aliens-01.gif";
       img2.src="aliens-02.png";
       img3.src="aliens-03.png"; 
       img4.src="aliens-04.png";  
   }   else  if(results[0].label=="bell"){
    img1.src="aliens-01.png";
    img2.src="aliens-02.gif";
    img3.src="aliens-03.png"; 
    img4.src="aliens-04.png";  
}   
else  if(results[0].label=="snap"){
    img1.src="aliens-01.png";
    img2.src="aliens-02.png";
    img3.src="aliens-03.gif"; 
    img4.src="aliens-04.png";  
}   
else{
    img1.src="aliens-01.png";
    img2.src="aliens-02.png";
    img3.src="aliens-03.png"; 
    img4.src="aliens-04.gif";
}
    }
}                                                                    