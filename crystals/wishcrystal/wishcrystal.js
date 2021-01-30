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
                if(cla=="cosmic"){
                    cosmic=res.split("\n");
                }
                else if(cla=="mutant"){
                    mutant=res.split("\n");
                }
                else if(cla=="mystic"){
                    mystic=res.split("\n");
                }
                else if(cla=="science"){
                    science=res.split("\n");
                }
                else if(cla=="skill"){
                    skill=res.split("\n");
                }
                else if(cla=="tech"){
                    tech=res.split("\n");
                }
                else{}
            }
        }
    }
    f.send(null);
}
function makeArray(){
    readFile("/classpool/cosmic.txt","cosmic");
    readFile("/classpool/mutant.txt","mutant");
    readFile("/classpool/mystic.txt","mystic");
    readFile("/classpool/science.txt","science");
    readFile("/classpool/skill.txt","skill");
    readFile("/classpool/tech.txt","tech");
}
function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
function openCrystal(n){
    for(var i=0;i<n;i++){
        r=randomInt(0,wish_pool.length-1);
        totalCount+=1;
        hist="<img class=\"border\" src=\"/featfivepool/frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestarimg\" src=\"/featfivepool/"+wish_pool[r]+".png\" width=\"60px\" height=\"60px\"><br>";
        document.getElementById("dispChamp").innerHTML= hist.concat(document.getElementById("dispChamp").innerHTML);
    }
    document.getElementById("countTotal").innerHTML = totalCount;
}
function clearWindow(){
    p=0;
    totalCount=0;
    document.getElementById("countTotal").innerHTML=0;
    document.getElementById("dispChamp").innerHTML="";
}
function addChamp(){
    document.getElementById("dispChamp").innerHTML=document.getElementById("dispChamp").innerHTML.concat("<img class=\"border\" src=\"../res/frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\"../res/Mister_Sinister.png\" width=\"60px\" height=\"60px\"><br>");
}
function addtoarray(n){
    if(p<10){
        wish_pool[p]=n;
        p++;
        console.log("Added "+p);
    }
    else{
        console.log("Full")
    }
}