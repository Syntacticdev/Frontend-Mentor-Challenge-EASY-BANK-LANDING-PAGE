const toggle_btn = document.querySelector('.dropdown-toggle');
const navigation = document.querySelector('.navigation');

toggle_btn.addEventListener('click',()=>{
    if(!navigation.classList.contains('active')){
        navigation.classList.add('active')
    } else {
        navigation.classList.remove('active')
    }
})