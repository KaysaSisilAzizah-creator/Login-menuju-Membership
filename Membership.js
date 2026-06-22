const form = document.getElementById("membershipForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;

    if (nama === "" || email === "" || pesan === "") {
        alert("Semua data harus diisi!");
        return;
    }

    let dataMember = JSON.parse(localStorage.getItem("member")) || [];

    dataMember.push({
        nama: nama,
        email: email,
        pesan: pesan
    });

    localStorage.setItem("member", JSON.stringify(dataMember));

    alert("Pendaftaran berhasil!");

    console.log(dataMember);

    form.reset();
});
