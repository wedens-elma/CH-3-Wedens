import { Binar } from "./binar.js";
import { Car } from "./car.js";

document.addEventListener("DOMContentLoaded", async () => {
  const cars = await Binar.listCars();
  Car.init(cars);
  displayCars(); // Menampilkan semua mobil saat halaman dimuat

  const searchButton = document.getElementById("btn-search");
  searchButton.addEventListener("click", searchCars); // Menambahkan event listener ke tombol pencarian
});

function searchCars() {
  const driverType = document.getElementById("driverType").value;
  const tanggal = document.getElementById("tanggal").value;
  const wktJemput = document.getElementById("wkt_jemput").value;
  const jmlhPenumpang = document.getElementById("jmlhPenumpang").value;

  // Lakukan filter berdasarkan kriteria pencarian
  const filteredCars = Car.list.filter((car) => {
    // Sesuaikan dengan kriteria pencarian yang diinginkan
    return (
      (driverType === "true" && car.driverType === "Dengan Sopir") ||
      (driverType === "false" && car.driverType === "Tanpa Sopir") ||
      // Tambahkan kriteria lain sesuai kebutuhan
      (car.availableAt >= new Date(`${tanggal} ${wktJemput}`) &&
        car.capacity >= jmlhPenumpang)
    );
  });

  // Tampilkan hasil pencarian
  displayCars(filteredCars);

  // Tampilkan atau sembunyikan pesan jika tidak ada hasil
  const alertSection = document.querySelector(".warning");
  alertSection.classList.toggle("visually-hidden", filteredCars.length > 0);
}

function displayCars(filteredCars = Car.list) {
  const jumbotronContainer = document.getElementById("root");
  jumbotronContainer.innerHTML = "";

  filteredCars.forEach((car) => {
    const carInstance = new Car(car);
    jumbotronContainer.innerHTML += carInstance.render(); // Menambahkan setiap mobil ke jumbotron
  });
}
