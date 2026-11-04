
const form = document.getElementById("profilForm");

// Mengambil data profil yang sudah tersimpan
const dataLama = localStorage.getItem("profilNiuhh");

if (dataLama) {
    try {
        const profil = JSON.parse(dataLama);

        document.getElementById("nim").value = profil.nim || "";
        document.getElementById("nama").value = profil.nama || "";
        document.getElementById("alamat").value = profil.alamat || "";
        document.getElementById("hobi").value = profil.hobi || "";
        document.getElementById("instagram").value = profil.instagram || "";

    } catch (error) {
        console.error("Data tidak dapat dibaca:", error);
    }
}

// Menyimpan profil
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const profil = {
        nim: document.getElementById("nim").value.trim(),
        nama: document.getElementById("nama").value.trim(),
        alamat: document.getElementById("alamat").value.trim(),
        hobi: document.getElementById("hobi").value.trim(),
        instagram: document.getElementById("instagram").value.trim()
    };

    try {
        localStorage.setItem("profilNiuhh", JSON.stringify(profil));

        alert("Yeay! Profil berhasil disimpan ♡");

        // Pindah ke halaman profil yang sudah tersimpan
        window.location.href = "profil-tampil.html";

    } catch (error) {
        alert("Maaf, profil gagal disimpan. Silakan coba lagi.");
        console.error(error);
    }
});

```javascript
// PREVIEW FOTO
const foto = document.getElementById("foto");
const previewFoto = document.getElementById("previewFoto");

let fotoBase64 = "";

foto.addEventListener("change", function() {

    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            fotoBase64 = e.target.result;
            previewFoto.src = fotoBase64;
        };

        reader.readAsDataURL(file);
    }

});


// SIMPAN DATA PROFIL
document.getElementById("profilForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const profil = {
        nim: document.getElementById("nim").value,
        nama: document.getElementById("nama").value,
        alamat: document.getElementById("alamat").value,
        hobi: document.getElementById("hobi").value,
        instagram: document.getElementById("instagram").value,
        deskripsi: document.getElementById("deskripsi").value,
        foto: fotoBase64
    };

    localStorage.setItem("dataProfil", JSON.stringify(profil));

    alert("Profil berhasil disimpan!");

    window.location.href = "profil-tampil.html";

});
```
