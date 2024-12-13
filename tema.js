//pt1
var pt1 = document.getElementById(`pt1`)
pt1.style.backgroundColor=`#e4e4e4`

//ícone de lampada
var lamp = document.getElementById(`lamp`)
lamp.style.border=`1px solid black`

//h1
var h1pt1 = document.getElementById(`h1pt1`)

//p
var ppt1 = document.getElementById(`ppt1`)


function tema(){
    if (pt1.style.backgroundColor= `#e4e4e4`){
        pt1.style.backgroundColor= `#333333`
        //
        lamp.style.border=`1px solid white`
        lamp.src=`img/lampbranca.png`
        //
        h1pt1.style.color=`#e4e4e4`
        //
        ppt1.style.color=`#e4e4e4`

    }else if(pt1.style.backgroundColor= `#333333`){
        pt1.style.backgroundColor= `#e4e4e4`
    }
}