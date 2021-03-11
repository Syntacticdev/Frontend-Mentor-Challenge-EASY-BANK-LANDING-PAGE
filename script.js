const toggle_btn = document.querySelector('.dropdown-toggle');
const navigation = document.querySelector('header .navigation');

toggle_btn.addEventListener('click',()=>{
    if(navigation.classList.contains('active')){
        navigation.classList.remove('active')
    } else {
        navigation.classList.add('active')
    }
})


document.querySelector('.height').innerHTML = window.innerWidth

