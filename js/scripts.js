let addListDrop = document.getElementById('add-list');
let addListBtn = document.querySelector('.add-btn');
let addCardBtn = document.querySelector('.add-card-btn');
let input = document.querySelector('.inpt');
let nbrCard = 0;

//Animation reveal Input
function revealInput() {
    event.target.nextElementSibling.classList.toggle('reveal-input');
}
addListDrop.addEventListener('click', revealInput);

//Add List
function addList() {
    let liste = document.querySelector('.liste');

    if (input.value != '') {
        let divList = document.createElement('div');
        divList.setAttribute("id", "list-"+input.value);
        divList.innerHTML = `
        <div class="card border-secondary mb-3" style="max-width: 18rem;">
            <div>
                <h4 contenteditable="true" class="card-header position-relative">${input.value}</h4>
                <div onclick="removeCard('${"list-"+input.value}');" class="text-end text-decoration-underline" role="button"><i class="far fa-trash-alt"></i> Supprimer</div>
            </div>
            <div class="card-body text-secondary">
                <form class="form-card row d-flex flex-wrap flex-column align-items-start">
                    <div class="input-group mb-3">
                        <textarea class="form-control" placeholder="Ajouter une carte"
                        aria-describedby="button-addon2"></textarea>
                        <button onclick="addCard('${input.value}'); nbrCard++;" class="btn add-card-btn text-dark" type="button">+ Ajouter</button>
                    </div>
                </form>
                <p class="card-text" id="${input.value}"></p>
            </div>
        </div>
          `;
        liste.appendChild(divList);
        input.value = '';
        event.target.parentNode.classList.remove("reveal-input");
    }
}

//Add Card
function addCard(e) {
    let textarea = document.querySelectorAll('textarea');
    let cards = document.getElementById(e);
console.log(cards)
    for (let i = 0; i < textarea.length; i++) {
        if (textarea[i].value != '') {
            let divCard = document.createElement('div');
            divCard.setAttribute("id", nbrCard);
            divCard.innerHTML = `
            <div class="card border-secondary" style="max-width: 18rem;">
                <div class="card-body text-secondary">
                    <p contenteditable="true" class="card-text">${textarea[i].value}</p>
                </div>
            </div>
            <div class=" mb-3">
            <div onclick="removeCard(${nbrCard});"class="text-end text-decoration-underline" role="button">
            <i class="far fa-trash-alt"></i> Supprimer</div>
            </div>
            `;
            cards.appendChild(divCard);
            textarea[i].value = '';
        }
    }
}

//Remove Element
function removeCard(event) {
    console.log(event)
    let element = document.getElementById(event);
    element.remove();
}

// Add list with Enter Key
$(document).on("keypress", "input", function (enterKey) {
    if (enterKey.which == 13) {
        enterKey.preventDefault();
        document.getElementById("myBtn").click();
    }
});