var champ;
var x;
var nex=[3];
var git="https://djindevstuff.github.io/crystals/";


function readjson(level){
    x=level;
    let requestURL =git+'script/poolinfo.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        champ = request.response;
        //champ=superHeroes;
        //console.log(champ['fivestarbasicpool'].length);
        //console.log(superHeroes['fivestarbasicpool'][5]);
        //populateHeader(superHeroes);
        //showHeroes(superHeroes);
        //makeArray2(superHeroes);
      }
}

function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function getFiveStarChamp(){
    var r=randomInt(0,champ['fivestarbasicpool'].length-1);
    return champ['fivestarbasicpool'][r];
}

function getSixStarChamp(){
    var r=randomInt(0,champ['sixstarbasicpool'].length-1);
    return champ['sixstarbasicpool'][r];
}

function getChamp(len){
    nex[0]=randomInt(0,len);
    nex[1]=randomInt(0,len);
    nex[2]=randomInt(0,len);
    while(nex[0]==nex[1]){
        nex[1]=randomInt(0,len);
    }
    while(nex[2]==nex[0] || nex[2]==nex[1]){
        nex[2]=randomInt(0,len);
    }
}

function get3NexFiveChamp(){
    getChamp(champ['fivestarbasicpool'].length-1);
    var nexpool=[champ['fivestarbasicpool'][nex[0]], champ['fivestarbasicpool'][nex[1]],champ['fivestarbasicpool'][nex[2]]];
    return nexpool;
}
function get3NexSixChamp(){
    getChamp(champ['sixstarbasicpool'].length-1);
    var nexpool=[champ['sixstarbasicpool'][nex[0]], champ['sixstarbasicpool'][nex[1]],champ['sixstarbasicpool'][nex[2]]];
    return nexpool;
}