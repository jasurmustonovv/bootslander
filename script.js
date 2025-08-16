document.addEventListener("DOMContentLoaded", () => {
    // 1. About Section va GridBox
    const aboutSection = document.querySelector(".about_us");
    const gridBox = document.querySelector(".gridbox");

    const observer1 = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    observer1.observe(aboutSection);
    observer1.observe(gridBox);

    // 2. Gridbox2
    const boxes = document.querySelectorAll(".gridbox2 > div");
    const observer2 = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );
    boxes.forEach((box) => observer2.observe(box));

    // 3. Stat Cards (counter)
    const statCards = document.querySelectorAll(".stat-card");
    const observer3 = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    card.classList.add("show");

                    const valueEl = card.querySelector("h2");
                    const target = parseInt(
                        valueEl.textContent.replace(/\s/g, "")
                    );
                    let count = 0;
                    const step = Math.ceil(target / 100);

                    const counter = setInterval(() => {
                        count += step;
                        if (count >= target) {
                            count = target;
                            clearInterval(counter);
                        }
                        valueEl.textContent = count.toLocaleString("en-US");
                    }, 20);

                    obs.unobserve(card);
                }
            });
        },
        { threshold: 0.3 }
    );
    statCards.forEach((card) => observer3.observe(card));

    // 4. Our Details (delay bilan)
    const blocks = document.querySelectorAll(".our_details");
    const observer4 = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = [...blocks].indexOf(entry.target);
                    setTimeout(
                        () => entry.target.classList.add("show"),
                        index * 500
                    );
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );
    blocks.forEach((el) => observer4.observe(el));

// 5. Gallery smoothY
const rows = [
    document.querySelectorAll(".smoothY1"),
    document.querySelectorAll(".smoothY2"),
    document.querySelectorAll(".gallery-title") // title ni ham qo‘shib qo‘yamiz
  ];
  
  const observer5 = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          rows.forEach((row) => {
            row.forEach((el, i) =>
              setTimeout(() => el.classList.add("active"), i * 200)
            );
          });
          // obs.disconnect(); ❌ buni olib tashla, chunki boshqa elementlarga ham ishlashi kerak
        }
      });
    },
    { threshold: 0.2 }
  );
  
  const galleryGrid = document.querySelector(".gallery-grid");
  if (galleryGrid) observer5.observe(galleryGrid);
  

    // 6. Testimonials
    const testimonials = document.querySelector(".testimonials");
    if (testimonials) {
        function checkScroll() {
            const rect = testimonials.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                testimonials.classList.add("show");
                window.removeEventListener("scroll", checkScroll);
            }
        }
        window.addEventListener("scroll", checkScroll);
        checkScroll();
    }

    // 7. Team Items
    const teamItems = document.querySelectorAll(".team_items");
    const observer6 = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(
                        () => entry.target.classList.add("show"),
                        index * 300
                    );
                }
            });
        },
        { threshold: 0.2 }
    );
    teamItems.forEach((item) => observer6.observe(item));

    // 8. Plan Boxes
    const plans = document.querySelectorAll(".plan_box div");
    const observer7 = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(
                        () => entry.target.classList.add("show"),
                        index * 200
                    );
                }
            });
        },
        { threshold: 0.2 }
    );
    plans.forEach((plan) => observer7.observe(plan));

    // 9. FAQ (asked + image)
    const askedElements = document.querySelectorAll(
        ".asked h1, .asked p, .frequently_questions_div, .frequently_image img"
    );
    const observer8 = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(
                        () => entry.target.classList.add("show"),
                        index * 200
                    );
                }
            });
        },
        { threshold: 0.1 }
    );
    askedElements.forEach((el) => observer8.observe(el));

    // 10. Contact Section (gallery title → contacts → form)
    const gallery = document.querySelector(".check_our_contact .gallery-title");
    const contacts = document.querySelectorAll(".contact_our");
    const formElements = document.querySelectorAll(
        ".contact-form input, .contact-form textarea, .contact-form button"
    );

    let delay = 0;
    if (gallery) {
        setTimeout(() => gallery.classList.add("show"), delay);
        delay += 500;
    }
    contacts.forEach((item, i) =>
        setTimeout(() => item.classList.add("show"), delay + i * 400)
    );
    delay += contacts.length * 400;
    formElements.forEach((el, i) =>
        setTimeout(() => el.classList.add("show"), delay + i * 300)
    );

    // 11. Contact Form (scroll bilan show)
    const form = document.querySelector(".contact-form");
    const observer9 = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) form.classList.add("show");
            });
        },
        { threshold: 0.2 }
    );
    if (form) observer9.observe(form);
});
