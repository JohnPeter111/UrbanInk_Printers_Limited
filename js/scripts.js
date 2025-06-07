function handleQuote() {
  alert("Redirecting to quote form...");

}
 
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.classList.add('in-view');
      } else {
        el.classList.remove('in-view');
      }
    });
  }, {
    threshold: 0.1
  });


  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });


document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("testimonialSlider");
  const leftBtn = document.querySelector(".arrow.left");
  const rightBtn = document.querySelector(".arrow.right");

  const scrollAmount = 320; 

  leftBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  rightBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("testimonialSlider");
  const leftBtn = document.querySelector(".arrow.left");
  const rightBtn = document.querySelector(".arrow.right");

  const scrollAmount = 320;

  leftBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  rightBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });


  let autoScrollInterval = setInterval(() => {
    slider.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });


    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, 4000);


  slider.addEventListener("mouseenter", () => clearInterval(autoScrollInterval));
  slider.addEventListener("mouseleave", () => {
    autoScrollInterval = setInterval(() => {
      slider.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 4000);
  });
});

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.toggle-icon').textContent = '+';
    });


    if (!isOpen) {
      item.classList.add('open');
      button.querySelector('.toggle-icon').textContent = '−';
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form form");
  const messageBox = document.getElementById("form-message");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.querySelector("input[type='text']").value;
    const email = contactForm.querySelector("input[type='email']").value;
    const message = contactForm.querySelector("textarea").value;

    if (!name || !email || !message) {
      messageBox.textContent = "Please fill out all fields.";
      messageBox.style.color = "red";
      messageBox.style.display = "block";
      return;
    }

    // Show success message
    messageBox.textContent = "✅ Your message has been sent successfully!  We will contact you soon";
    messageBox.style.color = "green";
    messageBox.style.display = "block";

    // Clear form
    contactForm.reset();
  });
});
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-menu a');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});
