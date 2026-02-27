let msg="I Love You So Much ❤️";
let i=0;

function typing(){
 if(i<msg.length){
  document.getElementById("text").innerHTML += msg.charAt(i);
  i++;
  setTimeout(typing,100);
 }
}

typing();