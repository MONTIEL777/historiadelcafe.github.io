document.addEventListener('DOMContentLoaded', function() {
    var menuIcono = document.getElementById('menuIcono');
    var navbar = document.getElementById('navbar');

    menuIcono.addEventListener('click', function() {
        if (navbar.style.display === 'none' || navbar.style.display === '') {
            navbar.style.display = 'block';
        } else {
            navbar.style.display = 'none';
        }
    });
});
