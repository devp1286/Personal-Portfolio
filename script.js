// ===== Smooth scroll to Contact =====
document.getElementById('hireBtn').addEventListener('click', function(){
    document.getElementById('contact').scrollIntoView({behavior: 'smooth', block:'center'});
});

// ===== Progress bar animation =====
const progressBars = document.querySelectorAll('.progress span');
const progressObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const bar = entry.target;
            bar.style.width = bar.dataset.width;
            observer.unobserve(bar);
        }
    });
}, {threshold: 0.5});
progressBars.forEach(bar => progressObserver.observe(bar));

// ===== Reveal elements on scroll =====
const reveals = document.querySelectorAll('.reveal, .card, .strength-card');
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {threshold: 0.15});
reveals.forEach(el => revealObserver.observe(el));
