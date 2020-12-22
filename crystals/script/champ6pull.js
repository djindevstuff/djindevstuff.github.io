var champ;
var res;
var r;
var pull;
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
function read4Star(){
    readFile("champs4.txt");
}
function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
function getChamp(n){
    for(var i=0;i<n;i++){
        r=randomInt(0,champ.length-1);
        return champ[r];
    }
}