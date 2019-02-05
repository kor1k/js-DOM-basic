// item.innerHTML += '<h1>aadasd</h1>'
// console.log(item.innerHTML)


// item.style.color = 'orange';
// item.style.fontSize = '123px';
// item.style.textAlign = 'left';

// function toggleClassFirstItem() {
//     let element = document.getElementById("list");
//     element.classList.toggle("active");
// }
// toggleClassFirstItem();

// function myFunction() {
//     let element = document.getElementById("element");
//     element.classList.toggle("active");
// }

//
// function toggleClassFirstItem() {
//     const firstItem = document.querySelectorAll('.list .list-item')[0];
//     firstItem.classList.toggle('active');
//
// }
// toggleClassFirstItem();

                                                // 05.02

//
const button = document.getElementsByTagName('button')[0];
// function buttonClick() {
//     console.log('clicked')
// }
//
// console.dir(button)
//
// button.onclick = function () {
//     console.log('button clicked again')
// }
//

document.addEventListener('click', function (event) {
    // console.dir(event);
    const allButtons = document.getElementsByTagName('button');
    let isButton = false;
    for (let i = 0; i < allButtons.length; i++) {
        if (event.target === allButtons[i]) {
            isButton = true;
            break;
        }
    }
    if (isButton){
        console.log('clicked on button')
    } else {
        console.log('clicked on document page');
    }
});

//TODO
// `eventListener, .dir, onclick in html, onclick in js, event`