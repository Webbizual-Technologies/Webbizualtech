if (window.location.pathname === "/index.html") {
  window.location.href = "https://www.webbizualtech.in";
}

//cursor animation
document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".custom-cursor");

  document.addEventListener("mousemove", function (e) {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  });
});

//Accordion Item
const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

    //     const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    //     if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //        currentlyActiveAccordionItemHeader.classList.toggle("active");
    //        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    //      }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

//contact form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Validate required fields
    const name = document.getElementById("name-contact").value.trim();
    const email = document.getElementById("email-contact").value.trim();
    const contact = document.getElementById("contact-num").value.trim();
    const message = document.getElementById("message-contact").value.trim();

    if (name === "" || email === "" || contact === "" || message === "") {
      alert("Please fill in all required fields.");
      return;
    }

    // If all fields are filled, submit the form
    form.submit();
  });
});
