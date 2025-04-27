const checkbox = document.getElementById("shipping_address_checkbox");
const formRes = document.getElementById("shippingAddressForm");

function toggleShippingAddress() {
  if (checkbox.checked) {
    formRes.style.display = "block";
  } else {
    formRes.style.display = "none";
  }
}
toggleShippingAddress();
