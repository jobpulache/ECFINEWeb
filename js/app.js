// Open section header
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-drop-target]');
    const sections = document.querySelectorAll('.content-comunidad-hover');

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            const targetId = this.getAttribute('data-drop-target');
            const targetSection = document.getElementById(targetId);
            const icon = this.querySelector('.rotate');

            if (targetSection) {
                if (targetSection.style.display === 'flex') {
                    targetSection.style.display = 'none';
                    if (icon) {
                        icon.style.transform = 'rotate(0deg)';
                    }
                } else {
                    targetSection.style.display = 'flex';
                    if (icon) {
                        icon.style.transform = 'rotate(180deg)';
                    }
                }
            }

            sections.forEach(section => {
                if (section.id !== targetId) {
                    section.style.display = 'none';
                    const otherIcon = section.previousElementSibling.querySelector('.rotate');
                    if (otherIcon) {
                        otherIcon.style.transform = 'rotate(0deg)';
                    }
                }
            });

            event.stopPropagation();
        });
    });

    // Hide sections when clicking anywhere outside the button and section
    document.addEventListener('click', () => {
        sections.forEach(section => {
            section.style.display = 'none';
            const icon = section.previousElementSibling.querySelector('.rotate');
            if (icon) {
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
});



// slider comments home
document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.comments-slider')) {
        var splide = new Splide('.comments-slider', {
            type: 'loop',
            padding: '1rem',
            snap: true,
            perPage: 4,
            focus: 'center',
            autoplay: 'true',
            breakpoints: {
                560: {
                    perPage: 1,
                },
                640: {
                    perPage: 2,
                },
                1090: {
                    perPage: 2,
                },
                1800: {
                    perPage: 4,
                },
                2300: {
                    perPage: 5,
                },
            }
        });
        splide.mount();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.talleres-slider')) {
        var splide = new Splide('.talleres-slider', {
            type: 'loop',
            padding: '1rem',
            snap: true,
            perPage: 4,
            focus: 'center',
            autoplay: 'true',
            breakpoints: {
                560: {
                    perPage: 1,
                },
                640: {
                    perPage: 2,
                },
                1090: {
                    perPage: 3,
                },
                1800: {
                    perPage: 3,
                },
                2300: {
                    perPage: 4,
                },
            }
        });
        splide.mount();
    }
});


// Tooltip
var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
