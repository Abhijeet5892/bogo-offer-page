const radios = document.querySelectorAll("input[name='unit']");
const totalPrice = document.getElementById("totalPrice");

radios.forEach(radio => {
    radio.addEventListener("change", () => {
        let price = radio.getAttribute("data-total");
        totalPrice.textContent = Number(price).toFixed(2);
    });
});
