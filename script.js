document.addEventListener('DOMContentLoaded', function () {
    // Expandable descriptions
    document.querySelectorAll('.read-more').forEach(function (element) {
        element.addEventListener('click', function () {
            const detailedDesc = this.parentElement.nextElementSibling;
            detailedDesc.style.display = detailedDesc.style.display === 'none' ? 'block' : 'none';
            this.textContent = detailedDesc.style.display === 'none' ? 'Read More' : 'Read Less';
        });
    });

    // Progress bar
    const progressBar = document.querySelector('.progress-bar div');
    window.addEventListener('scroll', function () {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;
        progressBar.style.height = scrolled + '%';
    });
});
