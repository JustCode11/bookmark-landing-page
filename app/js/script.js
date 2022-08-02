const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('#header');
const overlay = document.querySelector('#overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const mobileNav = document.querySelector('#mobile-nav');
const selectLinks = document.querySelectorAll('.selectLink');
const body = document.querySelector('body');

const firstTab = document.querySelector('.bookmarking-item');
const secondTab = document.querySelector('.searching-item');
const thirdTab = document.querySelector('.sharing-item');

const questions = document.querySelectorAll('.question');

const submit = document.querySelector('#form_submit_button');

btnHamburger.addEventListener('click', () => {
    if (header.classList.contains('open')) {
        // Close Mobile Menu
        header.classList.remove('open');
        header.classList.remove('fade-in');
        header.classList.add('fade-out');
        overlay.classList.remove('open');
        mobileNav.style.visibility = "hidden";
        body.classList.remove('noScrollY');
        fadeElems.forEach((element) => {
            element.classList.remove('fade-in-and-dissapear');
            element.classList.add('fade-out-and-dissapear');
        });
    } else {
        // Open Mobile Menu
        header.classList.add('open');
        header.classList.remove('fade-out');
        header.classList.add('fade-in');
        overlay.classList.add('open');
        mobileNav.style.visibility = "visible";
        body.classList.add('noScrollY');
        fadeElems.forEach((element) => {
            element.classList.remove('fade-out-and-dissapear');
            element.classList.add('fade-in-and-dissapear');
        });
    }
});

selectLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        selectLinks.forEach(sl => {
            if (event.target == sl) {
                sl.classList.add('selected');
            } else {
                sl.classList.remove('selected');
            }
            if (event.target.classList.contains('firstTab')) {
                firstTab.classList.add('show');
                secondTab.classList.remove('show');
                thirdTab.classList.remove('show');
            } else if (event.target.classList.contains('secondTab')) {
                firstTab.classList.remove('show');
                secondTab.classList.add('show');
                thirdTab.classList.remove('show');
            } else {
                firstTab.classList.remove('show');
                secondTab.classList.remove('show');
                thirdTab.classList.add('show');
            }
        });
    });
});

questions.forEach(question => {
    question.addEventListener('click', (event) => {
        const answer = question.nextElementSibling;
        if (question.classList.contains('open')) {
            // close tab
            question.classList.remove('open');
            answer.classList.remove('open');
        } else {
            // open tab
            questions.forEach(q => {
                q.classList.remove('open');
                q.nextElementSibling.classList.remove('open');
            });
            question.classList.add('open');
            answer.classList.add('open');
        }
    });
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.querySelector('.input_field');
    const errorMessage = document.querySelector('.errorMessage');
    const inputValue = input.value;
    const mail_regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (inputValue.match(mail_regex)) {
        input.classList.remove('error');
        errorMessage.classList.remove('show');
        input.value = "";
    } else {
        input.classList.add('error');
        errorMessage.classList.add('show');
        input.focus();
    }
});