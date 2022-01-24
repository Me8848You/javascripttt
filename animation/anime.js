document.getElementById("thulo").addEventListener("click",shift,true);
function shift(e)
{
    var x=e.clientX-100;
    var y=e.clientY-100;
    document.getElementById("sano").style.top=y+"px";
    document.getElementById("sano").style.left=x+"px";
}
// shift();