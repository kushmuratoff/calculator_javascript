//document.getElementById("demo").innerHTML = 5 + 6;
var Fga = document.forms["forma"];
var s = "", s1 = "";
var amal = "", amal1 = "",amal2="";
var a = 0, b = 0, c = 0;
var xabar = "";
function okkk(p1)
{
   // var p1 = Fga.elements["1"].value;
   //var p1 = document.getElementById("1").value;
   // alert(p1);

    if(p1=='1')
    {
        alert(1);
    }
    else  if(p1=='2')
    {
        alert(2);
    }
}
function bir()
{

    s += 1;
    xabar += 1;
    document.getElementById("demo").innerHTML = xabar;

    document.getElementById("text_b").value = s;
    raqamlar();

}
function ikki() {
    //alert(Number(Number(Fga.elements["text"].value)+12));
    s += 2;
    document.getElementById("text_b").value = Number(s);
    xabar += 2;
    document.getElementById("demo").innerHTML = xabar;
    raqamlar();

}
function uch() {
    s += 3;
    document.getElementById("text_b").value = s;
    xabar += 3;
    document.getElementById("demo").innerHTML = xabar;
    raqamlar();

}
function turt() {
    s += 4;
    document.getElementById("text_b").value = s;
    xabar += 4;
    document.getElementById("demo").innerHTML = xabar;
    raqamlar();

}
function besh() {
    s += 5;
    document.getElementById("text_b").value = s;
    xabar += 5;
    document.getElementById("demo").innerHTML = xabar;
    raqamlar();

}
function olti() {
    s += 6;
    document.getElementById("text_b").value = s;
    xabar += 6;
    document.getElementById("demo").innerHTML = xabar;
    raqamlar();

}
function yetti() {
    s += 7;
    document.getElementById("text_b").value = s;
    xabar += 7;
    document.getElementById("demo").innerHTML = xabar;
    raqamlar();
}
function sakkiz() {
    s += 8;
    document.getElementById("text_b").value = s;
    xabar += 8;
    document.getElementById("demo").innerHTML = xabar;
    raqamlar();

}
function tuqqiz() {
    s += 9;
    document.getElementById("text_b").value = s;
    xabar += 9;
    document.getElementById("demo").innerHTML = xabar;
    raqamlar();

}
function nul() {
    s += 0;
    document.getElementById("text_b").value = s;
    xabar += 0;
    document.getElementById("demo").innerHTML = xabar;
    raqamlar();
}
function raqamlar() {
    
   // alert(xabar.length);
    var suz = "<pre>", suz1 = "<pre>", suz2 = "<pre>", suz3 = "<pre>", suz4 = "<pre>";
    for(i=0;i<xabar.length;i++)
    {
        if(xabar[i]=='1')
        {
            suz+= "    1  ";
           suz1+= "    1  ";
           suz2+= "    1  ";
           suz3+= "    1  ";
           suz4+= "    1  ";

        }
        else if (xabar[i] == '2') {
            suz  += " 2 2 2  ";
            suz1 += "     2  ";
            suz2 += " 2 2 2  ";
            suz3 += " 2      ";
            suz4 += " 2 2 2  ";

        }
        else if (xabar[i] == '3') {
            suz  += " 3 3 3  ";
            suz1 += "     3  ";
            suz2 += " 3 3 3  ";
            suz3 += "     3  ";
            suz4 += " 3 3 3  ";

        }
        else if (xabar[i] == '4') {
            suz  += " 4   4  ";
            suz1 += " 4   4  ";
            suz2 += " 4 4 4  ";
            suz3 += "     4  ";
            suz4 += "     4  ";

        }
        else if (xabar[i] == '5') {
            suz  += " 5 5 5  ";
            suz1 += " 5      ";
            suz2 += " 5 5 5  ";
            suz3 += "     5  ";
            suz4 += " 5 5 5  ";

        }
        else if (xabar[i] == '6') {
            suz  += " 6 6 6  ";
            suz1 += " 6      ";
            suz2 += " 6 6 6  ";
            suz3 += " 6   6  ";
            suz4 += " 6 6 6  ";
        }
        else if (xabar[i] == '7') {
            suz  += " 7 7 7  ";
            suz1 += "     7  ";
            suz2 += "     7  ";
            suz3 += "     7  ";
            suz4 += "     7  ";
        }
        else if (xabar[i] == '8') {
            suz  += " 8 8 8  ";
            suz1 += " 8   8  ";
            suz2 += " 8 8 8  ";
            suz3 += " 8   8  ";
            suz4 += " 8 8 8  ";
        }
        else if (xabar[i] == '9') {
            suz  += " 9 9 9  ";
            suz1 += " 9   9  ";
            suz2 += " 9 9 9  ";
            suz3 += "     9  ";
            suz4 += " 9 9 9  ";
        }
        else if (xabar[i] == '0') {
            suz  += " 0 0 0  ";
            suz1 += " 0   0  ";
            suz2 += " 0   0  ";
            suz3 += " 0   0  ";
            suz4 += " 0 0 0  ";
        }
        else if (xabar[i] == '+') {
            suz  += "        ";
            suz1 += "   +    ";
            suz2 += " + + +  ";
            suz3 += "   +    ";
            suz4 += "        ";
        }
        else if (xabar[i] == '-') {
            suz  += "        ";
            suz1 += "        ";
            suz2 += " - - -  ";
            suz3 += "        ";
            suz4 += "        ";
        }
        else if (xabar[i] == '*') {
            suz  += "        ";
            suz1 += " *   *  ";
            suz2 += "   *    ";
            suz3 += " *   *  ";
            suz4 += "        ";
        }
        else if (xabar[i] == '/') {
            suz  += "        ";
            suz1 += "     /  ";
            suz2 += "   /    ";
            suz3 += " /      ";
            suz4 += "        ";
        }
    }
    suz += "</pre>"; suz1 += "</pre>"; suz2 += "</pre>", suz3 += "</pre>", suz4 += "</pre>";
    document.getElementById("suz").innerHTML = suz;
    document.getElementById("suz1").innerHTML = suz1;
    document.getElementById("suz2").innerHTML = suz2;
    document.getElementById("suz3").innerHTML = suz3;
    document.getElementById("suz4").innerHTML = suz4;


}
function ortga()
{
    s = s.substring(0, s.length - 1);
    document.getElementById("text_b").value = s;

    
}
function butun()
{
    s += ".";
    document.getElementById("text_b").value = s;
    xabar += ".";
    document.getElementById("demo").innerHTML = xabar;
}
function ishora()
{
    var k = Number(s);
    k = k * (-1);
    //alert(22 + k);
    s = k.toString();
    document.getElementById("text_b").value = s;
    }

function qushish()
{
    amal = "+";
    b = Number(s);

    if (amal == amal1)
    {
        a = a + b;
    }
    else
    {

        if (amal1 == "")
        { a = Number(s); }
        else if(amal1=='-')
        {
            a = a - b;
        }
        else if (amal1 == '*') {
            a = a * b;
        }
        else if (amal1 == '/') {
            a = a / b;
        }
    }
    //alert(a);

    amal1 = "+";
    xabar +=amal;
    s = "";
    document.getElementById("text_b").value = a;
    document.getElementById("demo").innerHTML = xabar;

    
}
function ayrish()

{
    amal = "-";
    b = Number(s);

    if (amal == amal1) {
        a = a - b;
    }
    else {

        if (amal1 == "")
        { a = Number(s); }
        else if (amal1 == '+') {
            a = a + b;
        }
        else if (amal1 == '*') {
            a = a * b;
        }
        else if (amal1 == '/') {
            a = a / b;
        }
    }
   
    amal1 = "-";
    s = "";
    xabar += amal;
    document.getElementById("text_b").value = a;
    document.getElementById("demo").innerHTML = xabar;


}
function kupp()
{

    amal = "*";
    b = Number(s);

    if (amal == amal1) {
        a = a * b;
    }
    else {

        if (amal1 == "")
        { a = Number(s); }
        else if (amal1 == '+') {
            a = a + b;
        }
        else if (amal1 == '-') {
            a = a - b;
        }
        else if (amal1 == '/') {
            a = a / b;
        }
    }
    //alert(a);

    amal1 = "*";
    xabar += amal;
    s = "";
    document.getElementById("text_b").value = a;
    document.getElementById("demo").innerHTML = xabar;

}


var ifo = "", ifo1 = "", ifo2 = "",ifo3="",ifo4="";
var son1 = 0, son2 = 0, son3 = 0, son4 = 0, son5 = 0, son6 = 0, son7 = 0, son8 = 0;
function natija() {

    if(ifo=='+')
    {
        qush();
    }
    else if(ifo=='-')
    {
        ayr();
    }
    else if(ifo1=='*')
    {
        kup();
    }
    else if(ifo3=='/')
    {
        bulish();
    }
}
function qush()
{
   
    if (ifo == '') {
        
        if (ifo1 == '*')
        {
            son2 *= Number(s);
            son1 += son2;

        }
        else if (ifo3 == '/') {
            son4 /= Number(s);
            son1 += son4;

        }
        else{
            son1 = Number(s);
        }
    }
   

    if (ifo2 == '*')
    {
        son3 = Number(s);
        son2 *= son3;
        if(ifo=='+')
        { son1 += son2; }
        else if (ifo == '-')
        {
            son1 -= son2;
        }
        ifo1 = "";
    }
    else if (ifo2 == '/') {
        son5 = Number(s);
        son4 /= son5;
        if (ifo == '+')
        { son1 += son4; }
        else if (ifo == '-') {
            son1 -= son4;
        }
        ifo3 = "";
    }
    else if (ifo2 == '-') {
        son1 -= Number(s);
    }
    else if (ifo2 == '+')
    {
        son1 += Number(s);
    }
    
   

    ifo = "+";
    ifo2 = "+";
    xabar += "+";
    document.getElementById("text_b").value = son1;
    document.getElementById("demo").innerHTML = xabar;
    raqamlar();

    s = "";
   // alert(2);
}
function ayr()
{
    if (ifo == '') {
        if (ifo1 == '*') {
            son2 *= Number(s);
            son1 = son2-son1;

        }
        else if (ifo3 == '/') {
            son4 /= Number(s);
            son1 = son4-son1;







        }
        else {
            son1 = Number(s);
        }
       
    }
    if (ifo2 == '*') {
        son3 = Number(s);
        son2 *= son3;
        if (ifo == '+')
        { son1 += son2; }
        else if (ifo == '-') {
            son1 -= son2;
        }
        ifo1 = "";
    }
    else if (ifo2 == '/') {
        son5 = Number(s);
        son4 /= son5;
        if (ifo == '+')
        { son1 += son4; }
        else if (ifo == '-') {
            son1 -= son4;
        }
        ifo3 = "";
    }
    else if (ifo2 == '+') {
        son1 += Number(s);
    }
    else if (ifo2 == '-') {
        son1 -= Number(s);
    }
    
    ifo = "-";
    ifo2 = "-";
    xabar += "-";
    document.getElementById("text_b").value = son1;
    document.getElementById("demo").innerHTML = xabar;
    raqamlar();

    s = "";

}
function kup()
{
    if (ifo1 == "")
    {
        if (ifo3 == '/')
        {
            son4 /= Number(s);
            son2 = son4;
            ifo3 = "";
        }
        else{
            son2 = Number(s);
        }
        //alert(s);
    }
    else {
        son3 = Number(s);
        //alert(s);
    }
    ifo1 = "*";
    if(ifo2=='*')
    {
        son2 = son3 * son2;
        //ifo1 = "";
    }
    ifo2 = "*";
    s = "";
    xabar += "*";
    document.getElementById("text_b").value = son2;
    document.getElementById("demo").innerHTML = xabar;
    raqamlar();

   // alert(3);
}
function bulish()
{
    if (ifo3 == "") {
        
        if (ifo1 == '*') {
            son2 *= Number(s);
            son4 = son2;
            ifo1 = "";
        }
        else {
            son4 = Number(s);
        }

      //  son4 = Number(s);
        //alert(s);
    }
    else {
        son5 = Number(s);
        //alert(s);
    }
    ifo3 = "/";
    if (ifo2 == '/') {
        son4 = son4 / son5;
        //ifo1 = "";
    }
    ifo2 = "/";
    s = "";
    xabar += "/";
    document.getElementById("text_b").value = son4;
    document.getElementById("demo").innerHTML = xabar;
    raqamlar();

}
function ildiz()
{
    var k = Number(s);
    s = Math.sqrt(k).toString();
    xabar += s;
    document.getElementById("text_b").value = s;
}
function taqsim()
{
    var k = Number(document.getElementById("text_b").value);
    s = (1/k).toString();
    xabar += s;
    document.getElementById("text_b").value = s;
}
function nov()
{
     ifo = "", ifo1 = "", ifo2 = "", ifo3 = "", ifo4 = "";
     son1 = 0, son2 = 0, son3 = 0, son4 = 0, son5 = 0, son6 = 0, son7 = 0, son8 = 0;
     xabar = "";
     s = "";
     document.getElementById("text_b").value = s;
     document.getElementById("demo").innerHTML = xabar;


}

function tekshirish()
{
    var aa = junatish('1');
}
function junatish(par)
{
    if (par == '/') { alert("das");}

}
function plus()
{


}
function minus()


{

}
function divv()
{

}
function mul()
{

}
var hisob="",yig1=0,yig2=0,ekran;
function q()
{
    if (hisob == "") {
        ekran = document.getElementById("text_b").value;
        yig1 = Number(ekran);
    }
    hisob = "+";
}
function ay()
{
    if (hisob == "") {
        ekran = document.getElementById("text_b").value;
        yig1 = Number(ekran);
    }
    hisob = "-";
}
function k()
{
    if (hisob == "") {
        ekran = document.getElementById("text_b").value;
        yig1 = Number(ekran);
    }
    hisob = "*";
}
function bu()
{
    if (hisob == "") {

        ekran = document.getElementById("text_b").value;
        yig1 = Number(ekran);
    }
    hisob = "/";
}