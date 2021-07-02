var totalCount=0;
var champ;
var res;
var r;
var hist="";
var curpulls="";
var cloudinary="https://res.cloudinary.com/dtpybxseq/image/upload/pfp_mcoc/";


function openCrystal(n){
    document.getElementsByClassName("pulledChamp")[0].style.display = 'block';
    document.getElementById("showChamp2").innerHTML ="";
    for(var i=0;i<n;i++){
        totalCount+=1;
        var champname = getFiveStarChamp();
        hist=document.getElementById("showChamp").innerHTML;
        hist2=document.getElementById("showChamp2").innerHTML;
        //document.getElementById("showChamp2").innerHTML+="<img class=\"border\" src=\""+cloudinary+"frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+champ[r]+"\"><span class=\"dot\" id=\"champ"+r+"\">"+Number(document.getElementById("champ"+r).innerHTML)+"</span>";
        //curpulls="<img class=\"border\" src=\""+cloudinary+"frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+champ[r]+"\">";
        if(document.getElementById(""+champname)== 'undefined' || document.getElementById(""+champname)== null){
            document.getElementById("showChamp").innerHTML =hist+"<div class=\"framewithport\"><a class=\"ani\" id=\""+champname+"i\"><img class=\"border\" src=\""+cloudinary+"frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+champname+".png\"><span class=\"dot\" id=\""+champname+"\">1</span></a></div>";
        }
        else{
            var newc=Number(document.getElementById(""+champname).innerHTML);
            newc=newc+1;
            document.getElementById(""+champname).innerHTML=newc;
            //document.getElementById("showChamp").innerHTML ="<img class=\"border\" src=\""+cloudinary+"frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+champ[r]+"\"><span class=\"dot\" id=\"champ"+r+"\">0</span"+hist;
        }
        if(document.getElementById("x"+champname)== 'undefined' || document.getElementById("x"+champname)== null){
            document.getElementById("showChamp2").innerHTML=hist2+"<div class=\"framewithport showpopup\"><img class=\"border\" src=\""+cloudinary+"frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+champname+".png\"><span class=\"popup\" id=\"x"+champname+"\">"+document.getElementById(champname).innerHTML+"</span></div>";
        }
        hist2="";
        //document.getElementById("showChamp2").innerHTML+="<div class=\"framewithport showpopup\"><img class=\"border\" src=\""+cloudinary+"frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+champname+".png\"><span class=\"popup\">"+document.getElementById(champname).innerHTML+"</span></div>";
    }
    document.getElementById("countTotal").innerHTML = totalCount;
    //document.getElementById("showChamp2").innerHTML = curpulls;
    //curpulls="";
}
function clearWindow(){
    totalCount=0;
    document.getElementById("countTotal").innerHTML=0;
    document.getElementById("showChamp").innerHTML="";
    document.getElementById("showChamp2").innerHTML="";
    document.getElementsByClassName("pulledChamp")[0].style.display = 'none';
}
var id=null;
var preele='undefined';
function highlight(elid){
    if(preele!='undefined'){
        preele.style.filter = 'brightness(100%)';
    }
    //console.log(elid.getAttribute('id'));
    //document.getElementById(elid.getAttribute('id')+"i").style.filter='brightness(150%)';
    var elem = document.getElementById(elid.getAttribute('id')+"i");
    preele=elem;
    elem.scrollIntoView(top);
    elem.setAttribute("class", "highlight");
    setTimeout(function (){
        elem.setAttribute("class", "ani");
    }, 2000);
    //clearInterval(id);
    //var bri=100;
    //id = setInterval(frame, 15);
    //function frame() {
    //if (bri == 200) {
    //    clearInterval(id);
    //    elem.style.filter = 'brightness(100%)';
    //}
    //else {
    //    bri++; 
    //    elem.style.filter = 'brightness('+bri+'%)'; 
    //    //elem.style.left = pos + 'px'; 
    //}
}
