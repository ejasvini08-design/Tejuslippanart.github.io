document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Product Search Logic ---
    const searchBar = document.getElementById('searchBar');
    if (searchBar) {
        searchBar.addEventListener('keyup', () => {
            const searchInput = searchBar.value.toLowerCase();
            const cards = document.querySelectorAll('.product-card');

            cards.forEach(card => {
                const nameAttr = card.getAttribute('data-name');
                if (nameAttr && nameAttr.includes(searchInput)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

    // --- 2. Direct Marketplace Order System ---
    const orderButtons = document.querySelectorAll('.order-btn');
    orderButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productName = e.target.getAttribute('data-product');
            const message = encodeURIComponent(`Hello! I would like to order the pre-designed piece: "${productName}". Please guide me through payment and shipping.`);
            
            // NOTE: Replace 1234567890 with your actual contact phone number
            window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
        });
    });

    // --- 3. Custom Order Form Submission System ---
    const customForm = document.getElementById('customOrderForm');
    if (customForm) {
        customForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const name = document.getElementById('custName').value;
            const shape = document.getElementById('shape').value;
            const size = document.getElementById('size').value;
            const details = document.getElementById('details').value;

            // Formats markdown message nicely for you to read on your device
            const baseMessage = `*NEW CUSTOM LIPPAN ORDER REQUEST*\n\n` +
                                `*Customer Name:* ${name}\n` +
                                `*Earthy Base Shape:* ${shape}\n` +
                                `*Preferred Size:* ${size}\n` +
                                `*Design Patterns & Details:* ${details}`;
            
            const whatsappMessage = encodeURIComponent(baseMessage);
            
            // NOTE: Replace 1234567890 with your actual contact phone number
            window.open(`https://wa.me/1234567890?text=${whatsappMessage}`, '_blank');
            
            alert("Thank you! Your unique Lippan requirements have been gathered. Proceeding to securely text them over to our artist studio.");
        });
    }
});
