window.onload=function()
{
    x=60;
   let y = setInterval(changeSize,250);
   function changeSize()
   {

    document.getElementsByClassName("c1")[0].style.width=x+"px";
    document.getElementsByClassName("c1")[0].style.height=x+"px";
    x=x+10;
   }
   
 document.getElementsByClassName("c1")[0].onclick=function()
 {

   document.getElementsByClassName("c1")[0].remove("c1");

 }

}