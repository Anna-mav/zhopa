
document.querySelectorAll('.animated-svg').forEach(svg => {
    svg.addEventListener('mouseenter', () => {
        svg.style.transform = 'scale(1.2)';
    });
    svg.addEventListener('mouseleave', () => {
        svg.style.transform = 'scale(1)';
    });
});
