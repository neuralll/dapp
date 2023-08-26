// JavaScript to handle menu item clicks
document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('nav ul li');
    const sections = document.querySelectorAll('section');

    menuItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Hide all sections
            sections.forEach((section) => {
                section.style.display = 'none';
            });

            // Show the corresponding section
            sections[index].style.display = 'block';

            // Set the clicked menu item as active
            menuItems.forEach((menuItem) => {
                menuItem.classList.remove('active');
            });
            item.classList.add('active');
        });
    });
});
