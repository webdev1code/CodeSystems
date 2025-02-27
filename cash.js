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



document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const openButton = document.querySelector(".sidebar-button");
    const closeButton = document.createElement("button");

    // إنشاء زر إغلاق القائمة وإضافته داخل القائمة
    closeButton.innerText = "إغلاق";
    closeButton.classList.add("close-sidebar");
    sidebar.insertBefore(closeButton, sidebar.firstChild);

    // عند الضغط على زر الفتح
    openButton.addEventListener("click", function () {
        sidebar.classList.add("active");
    });

    // عند الضغط على زر الإغلاق
    closeButton.addEventListener("click", function () {
        sidebar.classList.remove("active");
    });

    // إغلاق القائمة عند الضغط خارجها
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !openButton.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });
});
