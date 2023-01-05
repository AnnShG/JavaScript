////webpack-dev-server --mode development --open & node server.js
import Modal from './components/Modal'
import Form from './components/Form'
import Table from './components/Table'
import style from './style.css'

/**
 * here we will make a JS code for HTML code
 */

const table = new Table() // we connect it with table.js
document.querySelector('body').appendChild(table.init())
// got our body element and added the child element (table)

const modalBackdrop = document.querySelector('.backdrop')
const modalCloseBtn = document.querySelector('.modal-close')
const userID = window.location.pathname.substring(1)

// front-end routing
if (userID !== '') {
    Modal.show();
    fetch(`http://localhost:3000/items/${parseInt(userID)}`)
        .then(response => response.json())
        .then(json => {
            Form.init(json, `http://localhost:3000/items/${json.id}`, "edit")
        })
}

//open a modal when a table row is clicked
const getModal = (event) => {
    Modal.show()
    fetch(`http://localhost:3000/items/${event.target.parentElement.id}`)
        .then(response => response.json())
        .then(json => {
            history.pushState({}, "", `/${event.target.parentElement.id}`)
            Form.init(json, `http://localhost:3000/items/${json.id}`, "edit")
        })
} // the url also needs to be changed

//populate the table with data (items)
fetch('http://localhost:3000/items') //feth request
    .then(response => response.json())
    .then(json => {

        //for every data we will create a data row
        json.map(row => {
            document.querySelector('table')
                .appendChild(table.row(row))
                .addEventListener('click', getModal)
        });
    })

document.querySelector('.fab').addEventListener('click', event => {
    Modal.show()
    fetch('http://localhost:3000/items')
        .then(response => response.json())
        .then(json => {
            Form.init(json, `http://localhost:3000/items`, "create")
        })
})

// close the modal when backdrop is clicked
modalBackdrop.addEventListener('click', event => {
    if (event.target === modalBackdrop) {
        Modal.hide()
    }
})

// close the modal when 'X' button is clicked
modalCloseBtn.addEventListener('click', () => Modal.hide())

