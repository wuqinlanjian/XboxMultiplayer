document.querySelectorAll('.footer a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.footer a.active').classList.remove('active');
        this.classList.add('active');

        document.querySelector('section.active').classList.remove('active');
        document.querySelector(this.getAttribute('href')).classList.add('active');
    });
});
let lastScrollTop = 0;
const footer = document.querySelector('.footer');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // 向下滑动
        footer.style.transform = 'translateY(100%)';
    } else {
        // 向上滑动
        footer.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
}, false);
