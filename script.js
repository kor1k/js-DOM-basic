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


function toggleClassFirstItem() {
    const firstItem = document.querySelectorAll('.list .list-item')[0];
    firstItem.classList.toggle('active');

}

toggleClassFirstItem();