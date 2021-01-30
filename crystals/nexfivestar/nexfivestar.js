var totalCount=0;
var champ;
var champNex=[3];
var r=[3];
var res;
var hist="";
function readFile(file){
    var f = new XMLHttpRequest();
    f.open("GET", file, true);
    f.onreadystatechange = function (){
        if(f.readyState === 4){
            if(f.status === 200 || f.status == 0){
                res= f.responseText;
                champ=res.split("\n");
            }
        }
    }
    f.send(null);
}
function read5Star(){
    readFile("https://djindevstuff.github.io/crystals/champsfive.txt");
}
function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
function getChamp(len){
    r[0]=randomInt(0,len);
    r[1]=randomInt(0,len);
    r[2]=randomInt(0,len);
    while(r[0]==r[1]){
        r[1]=randomInt(0,len);
    }
    while(r[2]==r[0] || r[2]==r[1]){
        r[2]=randomInt(0,len);
    }
    champNex[0] = champ[r[0]];
    champNex[1] = champ[r[1]];
    champNex[2] = champ[r[2]]; 
}
function open1Crystal(n){
    for(var i=0;i<n;i++){
        totalCount+=1;
        hist=document.getElementById("showChamp").innerHTML;
        document.getElementById("showChamp2").innerHTML=hist+"<br>"+document.getElementById("showChamp2").innerHTML;
        getChamp(champ.length-1);
        document.getElementById("showChamp").innerHTML = "-------------<br>"+champNex[0]+"<br>OR<br>"+champNex[1]+"<br><e>OR</e><br>"+champNex[2];
    }
    document.getElementById("countTotal").innerHTML = totalCount;
}
function clearWindow(){
    totalCount=0;
    document.getElementById("countTotal").innerHTML=0;
    document.getElementById("showChamp").innerHTML="";
    document.getElementById("showChamp2").innerHTML="";
}