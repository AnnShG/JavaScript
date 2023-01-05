import "../css/element.css";
import "../css/main.css";
import {todayFormatted} from './moment';
import {secretButton, secretParagraph, time} from './dom-loader'
import '../../node_modules/bootstrap/scss/bootstrap.scss';

var showSecret = false;

secretButton.addEventListener('click', toggleSecretState);
time.addEventListener('click', setTime);
updateSecretParagraph();

function toggleSecretState() {
    showSecret = !showSecret;
    updateSecretParagraph();
    updateSecretButton()
}

function updateSecretButton() {
    if (showSecret) {
        secretButton.textContent = 'Hide the Secret';
    } else {
        secretButton.textContent = 'Show the Secret';
    }
}

function updateSecretParagraph() {
    if (showSecret) {
        secretParagraph.style.display = 'block';
    } else {
        secretParagraph.style.display = 'none';
    }
}
function setTime()
{
    document.querySelector('#time').innerHTML=todayFormatted;
}
