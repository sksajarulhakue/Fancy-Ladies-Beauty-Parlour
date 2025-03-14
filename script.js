document.getElementById('call-button').addEventListener('click', function() {
    const phoneNumber = document.getElementById('phone-number').textContent;
    window.location.href = `tel:${phoneNumber}`;
});