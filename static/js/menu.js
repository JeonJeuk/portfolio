const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')

hamburger.addEventListener('click', function() {
    menu.classList.add('active');
})

document.querySelector('.logo').addEventListener('click', function() {
    window.location.href = '/'; // 클릭 시 index.html로 이동
});