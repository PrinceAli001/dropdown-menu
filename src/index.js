import './style.css';
import Menu from '../Images/menu.png';
import Close from '../Images/close-thick.svg';

display()

function display() {
    let menu = document.querySelector('#menu');
    let background = document.querySelector('#background');
    let backgroundDivs = document.querySelectorAll('.divs');
    let imgOne = document.createElement('img');
    let imgTwo = document.createElement('img');
    
    imgOne.src = Menu;
    imgTwo.src = Close;

    menu.appendChild(imgOne);


    function hideAndReveal(parent,child,element,pictureOne,pictureTwo) {
        if (parent.contains(child)) {
            element.setAttribute('style','display: block;');
            parent.removeChild(pictureOne);
            parent.appendChild(pictureTwo);
            
        } else {
            element.setAttribute('style','display: none;');
            parent.removeChild(pictureTwo);
            parent.appendChild(pictureOne);
        }
        
    }

    backgroundDivs.forEach(element => {
        element.addEventListener('click', () => {
            alert('You clicked on one of the menu from the dropdown');
        })
    })
    menu.addEventListener('click', () => {
        hideAndReveal(menu,imgOne,background,imgOne,imgTwo);
    });
}