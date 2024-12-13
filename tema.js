//pt1
const pt1 = document.getElementById(`pt1`)


//ícone de lampada
const lamp = document.getElementById(`lamp`)
lamp.style.border=`1px solid black`

//h1
const h1pt1 = document.getElementById(`h1pt1`)

//p
const ppt1 = document.getElementById(`ppt1`)


//Função para alternar o tema
function tema(){
    pt1.classList.toggle(`dark-theme`)
    pt1.classList.toggle(`light-theme`)

    if(pt1.classList.contains(`dark-theme`)){
        lamp.style.border = '1px solid white';
        lamp.src = 'img/lampbranca.png';
        pt1.style.backgroundColor= `#333333`
        h1pt1.style.color = `#e4e4e4`
        ppt1.style.color= `#e4e4e4`
    }else{
        lamp.style.border = '1px solid black';
        lamp.src = 'img/Desk_table_study_electic_electrical_lamp_light_1_icon-icons.com_53497.png';
        pt1.style.backgroundColor= `#e4e4e4`
        h1pt1.style.color = `#333333`
        ppt1.style.color= `#333333`
    }
}