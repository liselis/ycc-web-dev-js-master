let myBtn = document.getElementById('add-btn')
myBtn.addEventListener('click', addItem)

function addItem(data) {
    let myInput = document.getElementById('do-it')
    let myList = document.getElementById('todo-list')

    if (myInput.value !== '') {

        let newblock = 
        `<input class="inp-cbx" id="cbx-15" type="checkbox" style="display: none ;" />
        <label class="cbx" for="cbx-15">
          <div class="todo-body">
            <ul id="todo-list" class="list">
            </ul>
            <div>
              <span>
                <svg width="12px" height="9px" viewbox="0 0 12 9">
                  <polyline points="1 5 4 8 11 1"></polyline>
                </svg>
              </span>
              <span>${myInput.value}</span>
        </label>`;

        let newItem = document.createElement('div');
        newItem.classList.add('checkbox-wrapper-15')
        newItem.innerHTML = newblock;
        
        myList.appendChild(newItem)
        myInput.value = '';
    }


}
document.addEventListener('keyup', keycap)
function keycap(data) {
    if (data.keyCode == 13) {
        addItem()
    }
}

function OnCross() {
    let label = document.getElementsByClassName('')
    let mylabel = label[0];

    console.log(label[0])
}