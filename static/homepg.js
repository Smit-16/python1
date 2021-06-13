// var video = document.getElementById('vdo1')
// if (video.isIntersecting) {
//     video.target.play();
// }
// else {
//     video.target.pause();
// }


{
    let option = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    let callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.target.id == 'vdo11') {
                if (entry.isIntersecting) {
                    entry.target.play();
                } else {
                    entry.target.pause();
                }
            }
        });

    }
    let observer = new IntersectionObserver(callback, option);
    observer.observe(document.querySelector('#vdo11'));
}


{
    let option1 = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    let callback1 = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.target.id == 'vdo2') {
                if (entry.isIntersecting) {
                    entry.target.play();
                } else {
                    entry.target.pause();
                }
            }
        });

    }
    let observer1 = new IntersectionObserver(callback1, option1);
    observer1.observe(document.querySelector('#vdo2'));
}

{
    let option2 = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    let callback2 = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.target.id === 'vdo3') {
                if (entry.isIntersecting) {
                    entry.target.play();
                } else {
                    entry.target.pause();
                }
            }
        });

    }
    let observer2 = new IntersectionObserver(callback2, option2);
    observer2.observe(document.querySelector('#vdo3'));
}

{
    let option3 = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    let callback3 = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.target.id === 'vdo4') {
                if (entry.isIntersecting) {
                    entry.target.play();
                } else {
                    entry.target.pause();
                }
            }
        });

    }
    let observer3 = new IntersectionObserver(callback3, option3);
    observer3.observe(document.querySelector('#vdo4'));
}

function toggleHide() {

    let pr1 = document.getElementById("msg");
    if (pr1.style.display != 'block') {
        pr1.style.display = 'block';
    } else {
        pr1.style.display = 'none';
    }
}



function toggleHide1() {

    let pr1 = document.getElementById("crtact");
    if (pr1.style.display != 'block') {
        pr1.style.display = 'block';
    } else {
        pr1.style.display = 'none';
    }
}




function toggleHide2() {

    let pr1 = document.getElementById("noti");
    if (pr1.style.display != 'block') {
        pr1.style.display = 'block';
    } else {
        pr1.style.display = 'none';
    }
}




function toggleHide3() {

    let pr = document.getElementById("viewstry1");
    if (pr.style.display != 'block') {
        pr.style.display = 'block';
    } else {
        pr.style.display = 'none';
    }
}






function toggleHide13() {

    let pr1 = document.getElementById("msg01");
    if (pr1.style.display != 'block') {
        pr1.style.display = 'block';
    } else {
        pr1.style.display = 'none';
    }
}





function toggleHide14() {

    let pr1 = document.getElementById("msg02");
    if (pr1.style.display != 'block') {
        pr1.style.display = 'block';
    } else {
        pr1.style.display = 'none';
    }
}


function toggleHide15() {

    let pr1 = document.getElementById("msg03");
    if (pr1.style.display != 'block') {
        pr1.style.display = 'block';
    } else {
        pr1.style.display = 'none';
    }
}

function toggleHide16() {

    let pr1 = document.getElementById("updtppht1");

    if (pr1.style.display != 'block') {
        pr1.style.display = 'block';
        // pr1.style.filter = 'opacity(1)';
        // pr2.style.filter = 'blur(5px)';

    } else {
        pr1.style.display = 'none';
        // pr2.style.filter = 'opacity(1)'

    }
    setTimeout(() => {
        pr1.style.display = 'none';
    }, 3000);

}




function toggleHide34() {

    let pr1 = document.getElementById("box211");
    let pr7 = document.getElementById("box1");
    let pr8 = document.getElementById("yp1");
    if (pr1.style.display != 'block') {
        pr1.style.display = 'block';
        pr7.style.display = "block"
        pr8.style.display = "block"
    } else {
        pr1.style.display = 'block';
        pr7.style.display = "block"
        pr8.style.display = "block"
    }

    let pr2 = document.getElementById("box221")
    if (pr2.style.display = "block") {
        pr2.style.display = "none"
    }

    let pr3 = document.getElementById("box231")
    if (pr3.style.display = "block") {
        pr3.style.display = "none"
    }
    let pr9 = document.getElementById("myprofile1")
    if (pr9.style.display = "block") {
        pr9.style.display = "none"
    }
    let pr4 = document.getElementById("navhome")
    if (pr4.style.display = 'block') {
        pr4.style.color = 'blue';
        pr4.style.borderBottom = "solid blue"


    }

    let pr5 = document.getElementById("navplay")
    if (pr1.style.display = "block") {
        pr5.style.color = "black";
        pr5.style.borderBottom = "none"
    }
    let pr6 = document.getElementById("navtv")
    if (pr1.style.display = "block") {
        pr6.style.color = "black";
        pr6.style.borderBottom = "none"
    }
    let pr10 = document.getElementById("navuser");
    if (pr1.style.display = "block") {
        pr10.style.color = "black";
        pr10.style.borderBottom = "none"
    }


}




function toggleHide35() {

    let pr1 = document.getElementById("box221");
    let pr7 = document.getElementById("box1");
    let pr8 = document.getElementById("yp1");
    if (pr1.style.display != 'block') {
        pr1.style.display = 'block';
        pr7.style.display = "block"
        pr8.style.display = "block"
    } else {
        pr1.style.display = 'block';
        pr7.style.display = "block"
        pr8.style.display = "block"
    }

    let pr2 = document.getElementById("box211")
    if (pr2.style.display = "block") {
        pr2.style.display = "none"
    }

    let pr3 = document.getElementById("box231")
    if (pr3.style.display = "block") {
        pr3.style.display = "none"
    }
    let pr9 = document.getElementById("myprofile1")
    if (pr9.style.display = "block") {
        pr9.style.display = "none"
    }

    let pr4 = document.getElementById("navtv")
    if (pr1.style.display = 'block') {
        pr4.style.color = 'blue';
        pr4.style.borderBottom = "solid blue"
    }
    let pr5 = document.getElementById("navplay")
    if (pr1.style.display = "block") {
        pr5.style.color = "black";
        pr5.style.borderBottom = "none"

    }
    let pr6 = document.getElementById("navhome")
    if (pr1.style.display = "block") {
        pr6.style.color = "black";
        pr6.style.borderBottom = "none"

    }
    let pr10 = document.getElementById("navuser");
    if (pr1.style.display = "block") {
        pr10.style.color = "black";
        pr10.style.borderBottom = "none"
    }



}


function toggleHide36() {

    let pr1 = document.getElementById("box231");
    let pr7 = document.getElementById("box1");
    let pr8 = document.getElementById("yp1");
    if (pr1.style.display != 'block') {
        pr1.style.display = 'block';
        pr7.style.display = "block"
        pr8.style.display = "block"
    } else {
        pr1.style.display = 'block';
        pr7.style.display = "block"
        pr8.style.display = "block"
    }

    let pr2 = document.getElementById("box221")
    if (pr2.style.display = "block") {
        pr2.style.display = "none"
    }

    let pr3 = document.getElementById("box211")
    if (pr3.style.display = "block") {
        pr3.style.display = "none"
    }
    let pr9 = document.getElementById("myprofile1")
    if (pr9.style.display = "block") {
        pr9.style.display = "none"
    }

    let pr4 = document.getElementById("navplay")
    if (pr1.style.display = "block") {
        pr4.style.color = "blue";
        pr4.style.borderBottom = "solid blue"
    }
    let pr5 = document.getElementById("navhome")
    if (pr1.style.display = "block") {
        pr5.style.color = "black";
        pr5.style.borderBottom = "none"

    }
    let pr6 = document.getElementById("navtv")
    if (pr1.style.display = "block") {
        pr6.style.color = "black";
        pr6.style.borderBottom = "none"

    }
    let pr10 = document.getElementById("navuser");
    if (pr1.style.display = "block") {
        pr10.style.color = "black";
        pr10.style.borderBottom = "none"
    }

}

function toggleHide37() {

    let pr1 = document.getElementById("myprofile1");
    let pr2 = document.getElementById("box211");
    let pr3 = document.getElementById("box221");
    let pr4 = document.getElementById("box231");
    let pr5 = document.getElementById("box1");
    let pr6 = document.getElementById("yp1");
    let pr7 = document.getElementById("navplay");
    let pr8 = document.getElementById("navhome");
    let pr9 = document.getElementById("navtv");
    let pr10 = document.getElementById("navuser");



    if (pr1.style.display != 'block') {
        pr1.style.display = 'block';
        pr2.style.display = "none"
        pr3.style.display = "none"
        pr4.style.display = "none"
        pr5.style.display = "none"
        pr6.style.display = "none"
        pr7.style.color = "black";
        pr8.style.color = "black";
        pr9.style.color = "black";
        pr10.style.color = "blue";
        pr10.style.borderBottom = "solid blue"
        pr7.style.borderBottom = "none"
        pr8.style.borderBottom = "none"
        pr9.style.borderBottom = "none"


    } else {
        pr1.style.display = 'block';

    }

}

function toggleHide38() {
    let pr1 = document.getElementById("prfpostid");
    let pr2 = document.getElementById("prfvideoid");
    let pr3 = document.getElementById("postphotoid");
    let pr4 = document.getElementById("postvideoid");
    let pr5 = document.getElementById("prfthid");
    let pr6 = document.getElementById("posttvid");




    if (pr1.style.display != 'block') {
        pr1.style.display = 'block'
        pr4.style.color = 'black'
        pr3.style.color = 'blue'
        pr2.style.display = 'none'
        pr5.style.display = 'none'
        pr6.style.color = 'black'

    } else {
        pr1.style.display = 'block'
    }
}

function toggleHide39() {
    let pr1 = document.getElementById("prfvideoid");
    let pr2 = document.getElementById("prfpostid");
    let pr3 = document.getElementById("postphotoid");
    let pr4 = document.getElementById("postvideoid");
    let pr5 = document.getElementById("prfthid");
    let pr6 = document.getElementById("posttvid");




    if (pr1.style.display != 'block') {
        pr1.style.display = 'block'
        pr4.style.color = 'blue'
        pr3.style.color = 'black'
        pr2.style.display = 'none'
        pr5.style.display = 'none'
        pr6.style.color = 'black'

    } else {
        pr1.style.display = 'block'
    }


}

function toggleHide40() {
    let pr1 = document.getElementById("prfvideoid");
    let pr2 = document.getElementById("prfpostid");
    let pr3 = document.getElementById("postphotoid");
    let pr4 = document.getElementById("postvideoid");
    let pr5 = document.getElementById("prfthid");
    let pr6 = document.getElementById("posttvid");



    postphotoid

    if (pr5.style.display != 'block') {
        pr5.style.display = 'block'
        pr6.style.color = 'blue'
        pr4.style.color = 'black'
        pr3.style.color = 'black'
        pr2.style.display = 'none'
        pr1.style.display = 'none'
    } else {
        pr5.style.display = 'block'
    }
}