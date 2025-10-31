document.body.insertAdjacentHTML('beforeend', `
  <div class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h3>Info</h3>
      </div>
      <div class="modal-body">
        <p></p>
      </div>
      <div class="modal-footer">
        <span class="close-modal-btn">close</span>
      </div>
    </div>
  </div>
`);

const close_btn = document.querySelector('.close-modal-btn');
const modal = document.querySelector('.modal');
const modal_content = document.querySelector('.modal-body');
const modal_header = document.querySelector('.modal-header');

close_btn.addEventListener('click', (event)=>{
    modal.style.display = 'none';
})

window.onclick = function(event){
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function openModal(type, msg){
    modal_header.querySelector('h3').innerHTML = type;
    modal_content.querySelector('p').innerHTML = msg
    modal.style.display = 'block';
}