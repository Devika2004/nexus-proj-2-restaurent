function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', function(e) {
        e.preventDefault();
        if (this.getAttribute('href') === '#login') {
            openModal('login-modal');
        }
    });
});

document.querySelectorAll('.page-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
        document.getElementById(this.getAttribute('href').substring(1) + '-page').style.display = 'block';
    });
});
