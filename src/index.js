import './style.css';
import Menu from '../Images/menu.svg';
import Close from '../Images/close-thick.svg';

display

function display() {
    let header = document.querySelector('header');
    let background = document.querySelector('#background');
    let menu = document.createElement('img');
    menu.src = Menu;
    header.textContent = '';
    header.appendChild(menu)
    header.appendChild(background);
}