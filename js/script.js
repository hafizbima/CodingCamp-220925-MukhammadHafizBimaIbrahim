
// Show welcome prompt and greeting on page load
document.addEventListener('DOMContentLoaded', function() {
    let nama = prompt("Masukkan nama kamu:");
    const greetingEl = document.getElementById("nama");
    if (nama && nama.trim() !== "") {
        greetingEl.innerText = "Welcome, " + nama + "!";
    } else {
        greetingEl.innerText = "Welcome, Guest!";
    }

    // Show message from input in .pesan box
    const form = document.querySelector('.message form');
    const pesanBox = document.getElementById('hasil');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = form.querySelector('input[name="name"]').value.trim();
        const date = form.querySelector('input[name="date"]').value;
        const genderRadio = form.querySelectorAll('input[name="gender"]');
        let gender = '';
        genderRadio.forEach(r => { if (r.checked) gender = r.value; });
        const message = form.querySelector('textarea[name="message"]').value.trim();
        if (!name) {
            alert('Nama tidak boleh kosong!');
            form.querySelector('input[name="name"]').focus();
            return;
        }
        if (!date) {
            alert('Tanggal lahir tidak boleh kosong!');
            form.querySelector('input[name="date"]').focus();
            return;
        }
        if (!gender) {
            alert('Jenis kelamin harus dipilih!');
            return;
        }
        if (!message) {
            alert('Pesan tidak boleh kosong!');
            form.querySelector('textarea[name="message"]').focus();
            return;
        }
        pesanBox.innerHTML = `<strong>${name}</strong><br>Tanggal Lahir: ${date}<br>Jenis Kelamin: ${gender}<br>Pesan: ${message}`;
    });
});