///Scaling page 80%///
function scalePage() {
    document.body.style.transform = 'scale(0.8)';
    document.body.style.width = (100 / 0.8) + '%';
    document.body.style.height = (100 / 0.8) + '%';
}

window.addEventListener('load', scalePage);
window.addEventListener('resize', scalePage);

///Making Arrow respond to clicks///
document.querySelector('.scroll-down-arrow').addEventListener('click', function() {
    // Example: Scroll to a section with id 'features' on click
    const featuresSection = document.getElementById('features');
    featuresSection.scrollIntoView({ behavior: 'smooth' });
});
