var champ5;
var champ6;
var res5;
var r;
var res6
var pull;
function read5File(file){
    var f = new XMLHttpRequest();
    f.open("GET", file, true);
    f.onreadystatechange = function (){
        if(f.readyState === 4){
            if(f.status === 200 || f.status == 0){
                res5= f.responseText;
                champ5=res5.split("\n");
            }
        }
    }
    f.send(null);
}
function read6File(file){
    var f = new XMLHttpRequest();
    f.open("GET", file, true);
    f.onreadystatechange = function (){
        if(f.readyState === 4){
            if(f.status === 200 || f.status == 0){
                res6= f.responseText;
                champ6=res6.split("\n");
            }
        }
    }
    f.send(null);
}
function read56Star(){
    read5File("https://djindevstuff.github.io/crystals/champsfive.txt");
    read6File("https://djindevstuff.github.io/crystals/champssix.txt");
}
function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
function get5Champ(n){
    for(var i=0;i<n;i++){
        r=randomInt(0,champ5.length-1);
        return champ5[r];
    }
}
function get6Champ(n){
    for(var i=0;i<n;i++){
        r=randomInt(0,champ6.length-1);
        return champ6[r];
    }
}