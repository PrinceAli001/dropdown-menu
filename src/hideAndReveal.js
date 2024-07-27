export default function hideAndReveal(parent,child,element,pictureOne,pictureTwo) {
    if (parent.contains(child)) {
        element.setAttribute('style','display: block;');
        parent.removeChild(pictureOne);
        parent.appendChild(pictureTwo);
        
    } else {
        element.setAttribute('style','display: none;');
        parent.removeChild(pictureTwo);
        parent.appendChild(pictureOne);
    }
    
};