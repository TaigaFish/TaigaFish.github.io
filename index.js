const backToTop = document.querySelector(".back-to-top");
const observerTarget = document.querySelector("#top")

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            backToTop.style.visibility="visible";
            backToTop.classList.add("shown");
        }
        else {
            backToTop.style.visibility="hidden";
            backToTop.classList.remove("shown");
        }
    })
}, {});

observer.observe(observerTarget);