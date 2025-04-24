//les variable dont on a besoin 
var sp, btn_com,  t, ms, s, min, h;

//fonction pour initialiser les variables quand la parge se charge 
window.onload = function () {
    sp = document.getElementsByTagName('span');
    btn_com = document.getElementById('comm');
    btn_pau = document.getElementById('pause');
    btn_rep = document.getElementById('rep');
    t;
    ms = 0, s = 0, min = 0, h = 0;


}

//Md fonction pour mettre à jour l'affichage
//insertion des valeurs dans les spans 
// [0] selectionne le 1er span 
// [1] selectionne le 2em span ...
function miseAjours(){
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = min + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}

//mettre en place le compteur
function chrono(){
    ms+=1;
    if(ms == 10){
        ms=0;
        s+=1
    } 
    if(s == 60){
        s=0;
        min+=1
    }
    if (min == 60) {
        min=0;
        h+=1
    }
    miseAjours();
}

//mettre en place la fonction du boutton commmencer 
function commencer(){
    //cette lingne de code execute 
    //la fonction chrono() chaque 100ms
    t = setInterval(chrono, 100);
    btn_com.disabled = true;
}

function pause(){
    clearInterval(t);
    btn_com.disabled = false;
    
}

function reprendre(){
    clearInterval(t);
    btn_com.disabled = false;
    ms = 0, s = 0, min = 0, h = 0;
    miseAjours();
}