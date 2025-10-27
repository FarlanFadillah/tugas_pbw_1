const lacak_btn = document.querySelector('.btn');
const nomor_do = document.querySelector('#nomor_do');

lacak_btn.addEventListener('click', (event)=>{
    const no_do = nomor_do.value;
    if(!no_do) return;

    const data_tracking = dataTracking[no_do];
    if(!data_tracking) return alert('Data not found');
    console.log(data_tracking);

    // info card section
    const info_card = document.querySelector('.info-card');

    info_card.querySelector('.info-row .info-mahasiswa').innerHTML = `
        <h3>${data_tracking.nama}</h3>
        <h4>No DO/Billing : ${data_tracking.nomorDO}</h4>
    `
    info_card.querySelector('.info-row .info-date').innerHTML = `
        <p>Tangal Kirim : ${data_tracking.tanggalKirim}</p>
    `
    info_card.querySelector('.status').innerHTML = `
        ${data_tracking.status}
    `
    info_card.querySelector('.ekspedisi').innerHTML = `
        ${data_tracking.ekspedisi} ${data_tracking.paket}
    `

    // perjalanan section
    const timeline = document.querySelector('.timeline');
    timeline.innerHTML = '';
    for(const data of data_tracking.perjalanan.reverse()){
        timeline.innerHTML += `
            <li>
            <div class="dot"></div>
            <div class="content">
                <p>${data.keterangan}</p>
                <span>${data.waktu}</span>
            </div>
            </li>
        `
    }

})
