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
                    for(var i=0;i<=cosmic.length-1;i++){
                        t="<img class=\"border\" id=\"bimage"+cosmic[i]+"\" src=\"https://djindevstuff.github.io/crystals/featfivepool/frame5.png\" width=\"72px\" height=\"60px\"><img onclick=\"addtoarray("+cosmic[i]+")\" class=\"fivestar\" id=\"chimage"+cosmic[i]+"\" src=\""+"https://djindevstuff.github.io/crystals"+"/featfivepool/"+cosmic[i]+".png\" width=\"60px\" height=\"60px\">";
                        document.getElementById("reveal_champ").innerHTML= t.concat(document.getElementById("reveal_champ").innerHTML);
                    }
                }
                else if(cla=="mutant"){
                    mutant=res.split("\n");
                    for(var i=0;i<=mutant.length-1;i++){
                        t="<img class=\"border\" id=\"bimage"+mutant[i]+"\" src=\"https://djindevstuff.github.io/crystals/featfivepool/frame5.png\" width=\"72px\" height=\"60px\"><img onclick=\"addtoarray("+mutant[i]+")\" class=\"fivestar\" id=\"chimage"+mutant[i]+"\" src=\""+"https://djindevstuff.github.io/crystals"+"/featfivepool/"+mutant[i]+".png\" width=\"60px\" height=\"60px\">";
                        document.getElementById("reveal_champ").innerHTML= t.concat(document.getElementById("reveal_champ").innerHTML);
                    }
                }
                else if(cla=="mystic"){
                    mystic=res.split("\n");
                    for(var i=0;i<=mystic.length-1;i++){
                        t="<img class=\"border\" id=\"bimage"+mystic[i]+"\" src=\"https://djindevstuff.github.io/crystals/featfivepool/frame5.png\" width=\"72px\" height=\"60px\"><img onclick=\"addtoarray("+mystic[i]+")\" class=\"fivestar\" id=\"chimage"+mystic[i]+"\" src=\""+"https://djindevstuff.github.io/crystals"+"/featfivepool/"+mystic[i]+".png\" width=\"60px\" height=\"60px\">";
                        document.getElementById("reveal_champ").innerHTML= t.concat(document.getElementById("reveal_champ").innerHTML);
                    }
                }
                else if(cla=="science"){
                    science=res.split("\n");
                    for(var i=0;i<=science.length-1;i++){
                        t="<img class=\"border\" id=\"bimage"+science[i]+"\" src=\"https://djindevstuff.github.io/crystals/featfivepool/frame5.png\" width=\"72px\" height=\"60px\"><img onclick=\"addtoarray("+science[i]+")\" class=\"fivestar\" id=\"chimage"+science[i]+"\" src=\""+"https://djindevstuff.github.io/crystals"+"/featfivepool/"+science[i]+".png\" width=\"60px\" height=\"60px\">";
                        document.getElementById("reveal_champ").innerHTML= t.concat(document.getElementById("reveal_champ").innerHTML);
                    }
                }
                else if(cla=="skill"){
                    skill=res.split("\n");
                    for(var i=0;i<=skill.length-1;i++){
                        t="<img class=\"border\" id=\"bimage"+skill[i]+"\" src=\"https://djindevstuff.github.io/crystals/featfivepool/frame5.png\" width=\"72px\" height=\"60px\"><img onclick=\"addtoarray("+skill[i]+")\" class=\"fivestar\" id=\"chimage"+skill[i]+"\" src=\""+"https://djindevstuff.github.io/crystals"+"/featfivepool/"+skill[i]+".png\" width=\"60px\" height=\"60px\">";
                        document.getElementById("reveal_champ").innerHTML= t.concat(document.getElementById("reveal_champ").innerHTML);
                    }
                }
                else if(cla=="tech"){
                    tech=res.split("\n");
                    for(var i=0;i<=tech.length-1;i++){
                        t="<img class=\"border\" id=\"bimage"+tech[i]+"\" src=\"https://djindevstuff.github.io/crystals/featfivepool/frame5.png\" width=\"72px\" height=\"60px\"><img onclick=\"addtoarray("+tech[i]+")\" class=\"fivestar\" id=\"chimage"+tech[i]+"\" src=\""+"https://djindevstuff.github.io/crystals"+"/featfivepool/"+tech[i]+".png\" width=\"60px\" height=\"60px\">";
                        document.getElementById("reveal_champ").innerHTML= t.concat(document.getElementById("reveal_champ").innerHTML);
                    }
                }
                else{}
            }
        }
    }
    f.send(null);
}
function makeArray(){
    readFile("https://djindevstuff.github.io/crystals/classpool/cosmic.txt","cosmic");
    readFile("https://djindevstuff.github.io/crystals/classpool/mutant.txt","mutant");
    readFile("https://djindevstuff.github.io/crystals/classpool/mystic.txt","mystic");
    readFile("https://djindevstuff.github.io/crystals/classpool/science.txt","science");
    readFile("https://djindevstuff.github.io/crystals/classpool/skill.txt","skill");
    readFile("https://djindevstuff.github.io/crystals/classpool/tech.txt","tech");
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
        document.getElementById("bimage"+wish_pool[l]).style.filter = 'grayscale(0%)';
        document.getElementById("chimage"+wish_pool[l]).style.filter = 'grayscale(0%)';
    }
    wish_pool=[];
}
function addChamp(){
    document.getElementById("dispChamp").innerHTML=document.getElementById("dispChamp").innerHTML.concat("<img class=\"border\" src=\"../res/frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\"../res/Mister_Sinister.png\" width=\"60px\" height=\"60px\"><br>");
}
function addtoarray(n){
    if(p<10){
        wish_pool[p]=n;
        p++;
        console.log("Added "+p);
        document.getElementById("selectedPool").innerHTML= (document.getElementById("selectedPool").innerHTML).concat("<img class=\"border\" src=\"https://djindevstuff.github.io/crystals/featfivepool/frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\"https://djindevstuff.github.io/crystals/featfivepool/"+n+".png\" width=\"60px\" height=\"60px\">");
        document.getElementById("bimage"+n).style.filter = 'grayscale(70%)';
        document.getElementById("chimage"+n).style.filter = 'grayscale(70%)';
    }
    else{
        console.log("Full")
    }
}