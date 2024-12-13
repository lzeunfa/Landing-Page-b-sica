var pt1 = document.getElementById(`pt1`)

pt1.style.background=`#e4e4e4`

var lamp = document.getElementById(`lamp`)
lamp.style.border=`1px solid black`

function tema(){
    if (pt1.style.background= `#e4e4e4`){
        pt1.style.background= `#333333`
        lamp.style.border=`1px solid white`

    }else if(pt1.style.background= `#333333`){
        pt1.style.background= `#e4e4e4`
    }
}