var totalCount=0;
var skill;var mutant;var tech;
var cosmic;var mystic;var science;
var wish_pool=[10];
var p=0;
var res;
var r;
var hist="";
function readFile(file,cla){
    var f = new XMLHttpRequest();
    f.open("GET", file, true);
    f.onreadystatechange = function (){
        if(f.readyState === 4){
            if(f.status === 200 || f.status == 0){
                res= f.responseText;
                switch(cla){
                    case 1 : skill=res.split("\n"); addchamps(skill,1); break;
                    case 2 : mutant=res.split("\n"); break;
                    case 3 : mystic=res.split("\n"); break;
                    case 4 : science=res.split("\n"); break;
                    case 5 : cosmic=res.split("\n"); break;
                    case 6 : tech=res.split("\n"); break;
                }
            }
        }
    }
    f.send(null);
}

function addchamps(thisclass, cnum){
    document.getElementById("reveal_champ").innerHTML="";
    for(var i=0;i<=thisclass.length-1;i++){
        t="<img class=\"border\" id=\"bimage"+thisclass[i]+"\" src=\"https://djindevstuff.github.io/crystals/featfivepool/frame5.png\" width=\"72px\" height=\"60px\"><img onclick=\"addtoarray("+thisclass[i]+")\" class=\"fivestar\" id=\"chimage"+thisclass[i]+"\" src=\""+"https://djindevstuff.github.io/crystals"+"/featfivepool/"+thisclass[i]+".png\" width=\"60px\" height=\"60px\">";
        document.getElementById("reveal_champ").innerHTML= t.concat(document.getElementById("reveal_champ").innerHTML);
    }
    document.getElementById("ib1").style.backgroundColor= "rgb(61,61,61)";
    document.getElementById("ib2").style.backgroundColor= "rgb(61,61,61)";
    document.getElementById("ib3").style.backgroundColor= "rgb(61,61,61)";
    document.getElementById("ib4").style.backgroundColor= "rgb(61,61,61)";
    document.getElementById("ib5").style.backgroundColor= "rgb(61,61,61)";
    document.getElementById("ib6").style.backgroundColor= "rgb(61,61,61)";
    document.getElementById("ib"+cnum).style.backgroundColor= "rgb(80,80,80)";
}

function makeArray(){
    readFile("https://djindevstuff.github.io/crystals/classpool/skill.txt",1);
    readFile("https://djindevstuff.github.io/crystals/classpool/mutant.txt",2);
    readFile("https://djindevstuff.github.io/crystals/classpool/mystic.txt",3);
    readFile("https://djindevstuff.github.io/crystals/classpool/science.txt",4);
    readFile("https://djindevstuff.github.io/crystals/classpool/cosmic.txt",5);
    readFile("https://djindevstuff.github.io/crystals/classpool/tech.txt",6);
}
function putchamps(j){
    for(var i=0;i<=j.length-1;i++){
        t="<img class=\"border\" id=\"bimage"+j[i]+"\" src=\"https://djindevstuff.github.io/crystals/featfivepool/frame5.png\" width=\"72px\" height=\"60px\"><img onclick=\"addtoarray("+j[i]+"); hidechimage("+j[i]+")\" class=\"fivestar\" id=\"chimage"+j[i]+"\" src=\""+"https://djindevstuff.github.io/crystals"+"/featfivepool/"+j[i]+".png\" width=\"60px\" height=\"60px\">";
        document.getElementById("reveal_champ").innerHTML= t.concat(document.getElementById("reveal_champ").innerHTML);
    }
}
function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
function openCrystal(n){
    for(var i=0;i<n;i++){
        r=randomInt(0,wish_pool.length-1);
        totalCount+=1;
        hist="<img class=\"border\" src=\"https://djindevstuff.github.io/crystals/featfivepool/frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\"https://djindevstuff.github.io/crystals/featfivepool/"+wish_pool[r]+".png\" width=\"60px\" height=\"60px\"><br>";
        document.getElementById("dispChamp").innerHTML= hist.concat(document.getElementById("dispChamp").innerHTML);
    }
    document.getElementById("countTotal").innerHTML = totalCount;
}
function clearWindow(){
    p=0;
    totalCount=0;
    document.getElementById("countTotal").innerHTML=0;
    document.getElementById("dispChamp").innerHTML="";
    document.getElementById("selectedPool").innerHTML="";
    for(l=0;l<wish_pool.length;l++){
        try {
            document.getElementById("bimage"+wish_pool[l]).style.filter = 'grayscale(0%)';
            document.getElementById("chimage"+wish_pool[l]).style.filter = 'grayscale(0%)';
        }
        catch{}
    }
    wish_pool=[];
}
function addtoarray(n){
    if(p<10){
        wish_pool[p]=n;
        p++;
        console.log("Added "+p);
        document.getElementById("selectedPool").innerHTML= (document.getElementById("selectedPool").innerHTML).concat("<img class=\"border\" src=\"https://djindevstuff.github.io/crystals/featfivepool/frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\"https://djindevstuff.github.io/crystals/featfivepool/"+n+".png\" width=\"60px\" height=\"60px\">");
        document.getElementById("bimage"+n).style.filter = 'grayscale(95%)';
        document.getElementById("chimage"+n).style.filter = 'grayscale(95%)';
    }
    else{
        console.log("Full")
    }
}