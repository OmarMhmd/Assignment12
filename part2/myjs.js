"use strict";
document.getElementById("button").onclick=function()
{
  var width=document.getElementById("width").value;
  console.log(width);
  var growth=document.getElementById("growthAmount").value;
  console.log(growth);
  var rate=document.getElementById("grwothRate").value;
  console.log(rate);
  var circleNo=document.getElementById("noOfCircle").value;
  console.log(circleNo);
  var myCircle=document.getElementById("mycircle");
  var arr=["red","green","blue","yellow","black","yellow"];
  var i=0;
   var set=setInterval(myFunction,1000);
   var j=0;
   
   function myFunction()
   {
    console.log(i);
    var ww=document.createElement(`circle${i}`);
    ww.textContent="";
    ww.style.backgroundColor=arr[i];
    ww.style.padding=width+"px";
    ww.style.borderRadius="50%";
    document.getElementById("mycircle").appendChild(ww); 
    
    if(circleNo>i)
    {
     i++;
    }
    else
    {
      clearInterval(set);
    }
    }
}
// window.onload=function()
// {
//     x=60;
//    let y = setInterval(changeSize,250);
//    function changeSize()
//    {

//     document.getElementsByClassName("c1")[0].style.width=x+"px";
//     document.getElementsByClassName("c1")[0].style.height=x+"px";
//     x=x+10;
//    }
   
//  document.getElementsByClassName("c1")[0].onclick=function()
//  {

//    document.getElementsByClassName("c1")[0].remove("c1");

//  }

// }