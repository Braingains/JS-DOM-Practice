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

const createBandListItem = function (form) {
    const bandListItem = document.createElement('li');
    bandListItem.classList.add('band-list-item');

    const name = document.createElement('h2');
    name.textContent = form.name.value;
    bandListItem.appendChild(name);

    const genre = document.createElement('p');
    genre.textContent = form.genre.value;
    bandListItem.appendChild(genre);

    const country = document.createElement('p');
    country.textContent = form.country.value;
    bandListItem.appendChild(country);

    const rating = document.createElement('p');
    rating.textContent = form.rating.value;
    bandListItem.appendChild(rating);

    return bandListItem;
}