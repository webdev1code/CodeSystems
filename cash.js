// فتح/إغلاق قائمة ترتيب حسب عند المرور بالماوس
const sortBtn = document.querySelector('.sort-btn');
const sortOptions = document.querySelector('.sort-options');

sortBtn.addEventListener('mouseover', () => {
    sortOptions.style.display = 'block';
});

sortBtn.addEventListener('mouseout', () => {
    sortOptions.style.display = 'none';
});
// الحصول على الزر والقائمة الجانبية
const sidebarButton = document.querySelector('.sidebar-button');
const sidebar = document.querySelector('.sidebar');

// إضافة حدث عند الضغط على الزر
sidebarButton.addEventListener('click', () => {
    sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
});