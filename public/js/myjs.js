document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.querySelector('.hero__categories__all');
    var categoryList = document.getElementById('category_list');

    toggleButton.addEventListener('click', function () {
        if (categoryList.style.maxHeight) {
            categoryList.style.maxHeight = null;
        } else {
            categoryList.style.maxHeight = categoryList.scrollHeight + "px";
        }
    });
});