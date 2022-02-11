document.getElementById('start-journey-btn').addEventListener('click', displayForm)

function displayForm() {
    let a = document.getElementById('content');
    let b = document.getElementById('user-form');

    a.style.display = 'none';
    b.style.display = 'block';
}

document.getElementById('submit-form-button').addEventListener('click', displayCourses)

function displayCourses() {
    let b = document.getElementById('user-form')
    let c = document.getElementById('courses');

    b.style.display = 'none';
    c.style.display = 'block';
}