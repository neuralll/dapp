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
    const saveButton = document.getElementById('save-button');
    const saveMessage = document.querySelector('.save-message');

    if (saveButton && saveMessage) {
        saveButton.addEventListener('click', function () {
            // Show the save message when the Save button is clicked
            saveMessage.style.display = 'block';

            // Hide the message after a few seconds (e.g., 3 seconds)
            setTimeout(function () {
                saveMessage.style.display = 'none';
            }, 3000); // 3000 milliseconds = 3 seconds
        });
    }
});
