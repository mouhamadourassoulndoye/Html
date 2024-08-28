document.addEventListener('DOMContentLoaded', () => {
    const tags = document.querySelectorAll('.tag');
    const courseList = document.querySelector('.course-list');
    const courseItems = document.querySelectorAll('.course-item');
    const leftButton = document.querySelector('.carousel-left');
    const rightButton = document.querySelector('.carousel-right');

    function filterCourses(filter) {
        courseList.scrollLeft = 0; // Reset scroll position
        courseItems.forEach(course => {
            if (filter === 'all' || course.getAttribute('data-category') === filter) {
                course.style.display = 'block';
            } else {
                course.style.display = 'none';
            }
        });

        tags.forEach(t => t.classList.remove('active'));
        document.querySelector(`.tag[data-filter="${filter}"]`).classList.add('active');
    }

    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            const filter = tag.getAttribute('data-filter');
            filterCourses(filter);
        });
    });

    // Ajustement du défilement pour afficher un cours à chaque clic
    leftButton.addEventListener('click', () => {
        const courseWidth = courseItems[0].offsetWidth + parseInt(window.getComputedStyle(courseItems[0]).marginRight);
        courseList.scrollBy({
            left: -courseWidth,
            behavior: 'smooth'
        });
    });

    rightButton.addEventListener('click', () => {
        const courseWidth = courseItems[0].offsetWidth + parseInt(window.getComputedStyle(courseItems[0]).marginRight);
        courseList.scrollBy({
            left: courseWidth,
            behavior: 'smooth'
        });
    });

    filterCourses('all'); // Show all courses by default
});
