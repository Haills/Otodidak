const nama = "HaicHal AdiayatsHa";
let usia = 10;

let biodata = document.getElementById("biodata");
console.log(biodata);

function generateBiodata() {
  let generasi;

  if (usia > 10 && usia <= 18) {
    generasi = "enerasi remaja";
  } else if (usia > 18 && usia < 30) {
    generasi = "generasi Dewasa";
  } else if (usia >= 30) {
    generasi = "generasi Tua";
  } else if (usia > 2 && usia < 10) {
    generasi = "generasi anak anak";
  } else {
    generasi = "generasi bayi";
  }
  return (biodata.innerHTML = generasi);
}

console.log(nama);
console.log(usia);

generateBiodata();
