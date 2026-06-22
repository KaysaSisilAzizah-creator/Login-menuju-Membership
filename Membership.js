const form = document.getElementById("membershipForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (nama === "" || email === "" || password === "") {
        alert("Semua data harus diisi!");
        return;
    }

    let dataMember = JSON.parse(localStorage.getItem("member")) || [];

    dataMember.push({
        nama: nama,
        email: email,
        password: password
    });

    localStorage.setItem("member", JSON.stringify(dataMember));

    alert("Pendaftaran berhasil!");

    console.log(dataMember);

    form.reset();
});
