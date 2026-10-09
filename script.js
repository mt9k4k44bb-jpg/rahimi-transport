
const contactButton = document.getElementById("contactButton");
const message = document.getElementById("message");

// Contact Us button
if (contactButton && message) {
    contactButton.addEventListener("click", function() {
        if (message.textContent === "") {
            message.textContent =
                "Thank you for contacting Rahimi Transport!";
            contactButton.textContent = "Hide Message";
        } else {
            message.textContent = "";
            contactButton.textContent = "Contact Us";
        }
    });
}

// Customer form → WhatsApp
const customerForm = document.getElementById("customerForm");
const formResponse = document.getElementById("formResponse");

if (customerForm && formResponse) {
    customerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name =
            document.getElementById("customerName").value.trim();
        const phone =
            document.getElementById("customerPhone").value.trim();
        const customerMessage =
            document.getElementById("customerMessage").value.trim();

        if (!name || !phone || !customerMessage) {
            formResponse.textContent = "Please complete all fields.";
            return;
        }

        const businessNumber = "93749202053";

        const text =
            "Hello Rahimi Transport!%0A" +
            "Customer name: " + encodeURIComponent(name) + "%0A" +
            "Customer phone: " + encodeURIComponent(phone) + "%0A" +
            "Transport request: " +
            encodeURIComponent(customerMessage);

        const whatsappURL =
            "https://wa.me/" + businessNumber + "?text=" + text;

        window.open(whatsappURL, "_blank");

        formResponse.textContent =
            "WhatsApp is opening. Please press Send to submit your request.";
    });
}
