document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-item-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);



});

const handleNewItemFormSubmit = function (event) {
    event.preventDefault();

    const bandListItem = createBandListItem(event.target);
    const bandList = document.querySelector('#band-list');
    bandList.appendChild(bandListItem);

    event.target.reset();
}