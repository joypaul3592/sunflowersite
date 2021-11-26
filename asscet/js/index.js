let menu = document.querySelector('.menu_icon');
let nav = document.querySelector('.all_main_menu');

menu.onclick = () =>{
    nav.classList.toggle('active'); 
};


  
let list = document.querySelectorAll('.list');
let itemBx = document.querySelectorAll('.divi_card');

for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');


        for( let k = 0; k<itemBx.length; k++){
            itemBx[k].classList.remove('active');
            itemBx[k].classList.add('hide');

            if(itemBx[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                itemBx[k].classList.remove('hide');
                itemBx[k].classList.add('active');
            }
        }
    })
};



let icon = document.querySelector('.search_box');
let card = document.querySelector('.search_box_conatiner');
let cros = document.querySelector('.crox_box')
let body = document.querySelector('.box_body')

icon.onclick = () =>{
    card.classList.add('active');
    body.classList.add('active');
}
cros.onclick = () =>{
    card.classList.remove('active');
    body.classList.remove('active');
}
body.onclick = () =>{
    card.classList.remove('active');
    body.classList.remove('active');
};


let hdlist = document.querySelectorAll('.hd_text');
let hditemBx = document.querySelectorAll('.letest_card');

for(let y = 0; y<hdlist.length; y++){
    hdlist[y].addEventListener('click', function(){
        for(let r = 0; r<hdlist.length; r++){
            hdlist[r].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');


        for( let e = 0; e<hditemBx.length; e++){
            hditemBx[e].classList.remove('active');
            hditemBx[e].classList.add('hide');

            if(hditemBx[e].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                hditemBx[e].classList.remove('hide');
                hditemBx[e].classList.add('active');
            }
        }
    })
};











