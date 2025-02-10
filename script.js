// Hàm thay đổi màu nền của các mục danh sách khi di chuột qua
document.querySelectorAll('li').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#e0e0e0';
    });

    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = 'white';
    });
});
