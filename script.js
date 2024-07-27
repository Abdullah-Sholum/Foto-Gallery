function myFunction(imgs) {                                     //buat fungsi dengan parameter imgs
    var expandImg = document.getElementById("expandedImg");     //inisiasi dengan fungsi memanggil elemen dengan id expandedImg
    var imgText = document.getElementById("imgText");           //inisiasi dengan fungsi memanggil elemen dengan id imgText
    expandImg.src = imgs.src;                                   //mengambil sumber imgs kemudian ditampilkan oleh expandImg
    imgText.innerHTML = imgs.alt;                               //mengambil nilai alt ari imgs kemudian ditampilkan sebagai konten oleh imgText
    expandImg.parentElement.style.display = "block";            //merubah parent elemen expandImg *container dengan style display block
}