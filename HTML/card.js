document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.footer a');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.add('fade-out');
                    setTimeout(() => {
                        section.classList.remove('fade-out');
                        section.classList.add('fade-in');
                    }, 500); // 等待渐隐动画完成
                } else {
                    section.classList.remove('fade-in');
                    section.classList.remove('active');
                }
            });

            // 切换链接的激活状态
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var cardButton = document.querySelector('.card-button');
    
    cardButton.addEventListener('click', function() {
        var customUrl = 'https://www.example.com'; // 自定义链接
        window.location.href = customUrl; // 跳转到自定义链接
    });
});
