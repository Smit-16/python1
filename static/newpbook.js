let gotoprf = document.getElementById('profileiconid');
let home = document.getElementById('homeiconid');
let tvicn = document.getElementById('tviconid');
let shplay = document.getElementById('playiconid');


let box21 = document.getElementById('box21id')
let box23 = document.getElementById('box23id')

let myprofile = document.getElementById('myprofile1')
let box1 = document.getElementById('box1id')
let box3 = document.getElementById('box3id')

gotoprf.addEventListener('click',function(){

    if(myprofile.style.display != "block"){
        myprofile.style.display = "block";
        box1.style.display = "none";
        box3.style.display = "none";
        box21.style.display = "none"
        box23.style.display = "none"
    }
    else{
        myprofile.style.display = "block";
        
    }
});
home.addEventListener('click', function(){

    if(box21.style.display != 'block'){
        box21.style.display = 'block'
        box1.style.display = "block";
        box3.style.display = "block";
        myprofile.style.display = "none"
        box23.style.display = "none"

    }
    else{
        box21.style.display = 'block'
    }
})

shplay.addEventListener('click', function(){
    if(box23.style.display != "block"){
        box23.style.display = "block"
        box21.style.display = 'none'
        box1.style.display = "block";
        box3.style.display = "block";
        myprofile.style.display = "none"
    }
    else{
        box23.style.display = "block"
    }
})