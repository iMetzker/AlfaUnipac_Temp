document.addEventListener("DOMContentLoaded", function () {
    const text = "Desenvolvedora Web  ";
    let index = 0;
    let isDeleting = false;
    const element = document.getElementById("typing-effect");

    function type() {
        if (isDeleting) {
            element.innerHTML = text.substring(0, index);
            index--;
            if (index === 0) {
                isDeleting = false;
            }
        } else {
            element.innerHTML = text.substring(0, index);
            index++;
            if (index === text.length) {
                isDeleting = true;
            }
        }
        setTimeout(type, isDeleting ? 100 : 200);
    }

    type();
});