
// 显示提示框的函数
function showNotification(text) {
    var notification = document.getElementById('notification');
    notification.innerHTML = text; // 更新提示框内容
    notification.style.display = 'block'; // 显示提示框
    // 重新开始动画
    notification.style.animation = 'none';
    notification.offsetHeight; /* trigger reflow */
    notification.style.animation = null;
}
