/*================ toggle icon navbar =============== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x-circle');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*================ sticky navbar =============== */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*======= remove toggle icon and navbar when click navbar link ========= */
    menuIcon.classList.remove('bx-x-circle');
    navbar.classList.remove('active');
};


/*===== Contact form =====*/

async function sendForm(event) {
    event.preventDefault();

    const data = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        phone: document.querySelector("#phone").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value
    };

    const res = await fetch("http://localhost:5000/api/contact/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const result = await res.json();

    if (result.success) {
        alert("Message sent successfully! ❤️");
        document.querySelector("#contactForm").reset();
    } else {
        alert("Failed to send message!");
    }
}
