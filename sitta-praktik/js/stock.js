const kode_modul = document.querySelector('#kode-modul');
const btn = document.querySelector('.btn');


btn.addEventListener('click', (event)=>{
    const kode = kode_modul.value;
    if(!kode) return openModal('Warning','Isi Kode Bahan Ajar terlebih dahulu');

    const data = dataBahanAjar.find(bahanAjar => {
        return bahanAjar.kodeBarang === kode;
    })

    if(!data) return openModal('Error','Bahan Ajar tidak ditemukan');

    document.querySelector('.book-cover > img').src = data.cover;
    document.querySelector('#kode-lokasi').value = data.kodeLokasi;
    document.querySelector('#kode-barang').value = data.kodeBarang;
    document.querySelector('#nama-barang').value = data.namaBarang;
    document.querySelector('#jenis-barang').value = data.jenisBarang;
    document.querySelector('#edisi').value = data.edisi;
    document.querySelector('#stok').value = data.stok;
})