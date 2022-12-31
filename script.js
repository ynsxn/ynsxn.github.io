let img=document.getElementsByClassName('img');
let next_btn=document.getElementById('btn1');
let pre_btn=document.getElementById('btn2');
let len=img.length;
let i=0;
let n=true
next_btn.addEventListener('click',next);
pre_btn.addEventListener('click',pre);
function next(){
 if(i<=(len-1)){ 
     i++;
      if(i==len){
        i=0;
     }
     img[i].style.zIndex = "1";
     for (let j = 0; j<=len-1; j++) {
      if(j!=i){
        img[j].style.zIndex = "0";
      } 
     } console.log(i)
    
 }
 else{
     i=0;
 }
}

function pre(){
    if(i!=0){ i=i-1;
        img[i].style.zIndex = "1";
         for (let j = 0; j<=len-1; j++) {
          if(j!=i){
            img[j].style.zIndex = "0";
          } }
        console.log(i);
        }

   else if(i==0){
i=len-1;
img[i].style.zIndex = "1";
         for (let j = 0; j<=len-1; j++) {
          if(j!=i){
            img[j].style.zIndex = "0";
          } }
          console.log(i)
   }
    
}
//*************************************************************

document.getElementById("y_btn_leavmsg").addEventListener('click', wAnimation);
function wAnimation(){document.getElementById("y_popwindow").style.display="block"
    document.getElementById("y_popwindow").className = "Wanime";  
    document.getElementById("y_popwindow").style.width="40%" ;

    y_popwindow.style.top="7%"
    y_popwindow.style.left="50%";
    y_popwindow.style.width="40%";
    y_popwindow.style.height="80%";
    n=0;
  //  document.getElementById("content").style.visibility="hidden"
}

document.getElementById("y_btn_pop_close").addEventListener('click', contrwAnimation);
function contrwAnimation($event){
  $event.preventDefault();
  document.getElementById("y_popwindow").className = "contre_Wanime";  
    document.getElementById("y_popwindow").style.width="0%" ;
   setTimeout(() => {
    document.getElementById("y_popwindow").style.display="none"
   },200);
    
   // document.getElementById("content").style.visibility="visible"
}  /******************************************************* */
let y_popwindow=document.getElementById('y_popwindow');

/***************************************** */

(function(){ 
 
  var offset = { x: 0, y: 0 };
  document.getElementById("y_block_btn_close_pop").addEventListener('mousedown',mouseDown, false);
  window.addEventListener('mouseup', mouseUp, false);
  
  function mouseUp()
  {
    window.removeEventListener('mousemove', y_popwindowMove, true);
  }
  function mouseDown(e){
    offset.x = e.clientX - y_popwindow.offsetLeft;
    offset.y = e.clientY - y_popwindow.offsetTop;
    window.addEventListener('mousemove', y_popwindowMove, true);
  }
  function y_popwindowMove(e){
    var top = e.clientY - offset.y;
    var left = e.clientX - offset.x;
   
 
    y_popwindow.style.top = top + 'px';
    y_popwindow.style.left = left + 'px';}
  /**************************************************************** */
  document.getElementById("y_btn_pop_fullwindow").addEventListener("click",()=>{
 
    if(n){
     y_popwindow.style.top="0px";
     y_popwindow.style.left="0px";
     y_popwindow.style.width="100%";
     y_popwindow.style.height="100%";
     n=false;
    }
    else{
     y_popwindow.style.top="7%"
     y_popwindow.style.left="50%";
     y_popwindow.style.width="40%";
     y_popwindow.style.height="80%";
      n=true;
    }
   })
}());


