document.getElementById("div").addEventListener("click",function22,true);
function function22(e)
{
    var a=e.clientX-50;
    var b=e.clientY-50;
    document.getElementById("div2").style.top=b+"px";
    document.getElementById("div2").style.left=a+"px";
    document.getElementById("div2").style.Color=red;
}
document.getElementById("div").addEventListener("click",ani,true);
function ani(a)
{
    var x=a.clientX;
    var y=a.clienty;
    document.getElementById("div2").style.backgroundColor=red;
}