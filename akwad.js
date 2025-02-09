// 🌟 تفعيل زر القائمة في الموبايل
document.querySelector(".navbar-hamburger").addEventListener("click", function() {
    document.querySelector(".navbar-links").classList.toggle("open");
});

// 🌟 القوائم الفرعية تفتح عند الضغط في الموبايل
document.querySelectorAll(".dropdown > a").forEach(item => {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        this.parentElement.classList.toggle("open");
    });
});
function toggleMenu() {
    var menu = document.getElementById("navbar-links");
    menu.classList.toggle("open");
}
function showMore() {
    let hiddenImages = document.querySelector('.hidden-images');
    hiddenImages.style.display = 'grid';
    hiddenImages.style.gridTemplateColumns = 'repeat(auto-fit, minmax(180px, 1fr))'; 
    document.querySelector('.more-button').style.display = 'none';
  }
  