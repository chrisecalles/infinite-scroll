const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

// creater global variable photosArray using let because it will constantly change 
let photosArray = [];
// UNSPLASH API 
const count = 10;
const apiKey = `R-fkZQTyJDf-NOwu6Ia5uNwD8_hmSjV4gFG5ty7h57o`;
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`

//Helper function to set Attributes on DOM elements 
function setAttributes(element, attributes) {
    for(const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}



// Create Elements for links and photos, Add to DOM
function displayPhotos() {
    //run function for each object in photosArray 
    photosArray.forEach((photo) => {
        // Create <a> to link to unsplash
        const item = document.createElement('a');
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        // Create <img>
        const img = document.createElement('img');
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description)
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        //Put img inside anchor element abd both inside imageContainer 
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}
// Get Photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        //catch error here
    }
}

// on Load 
getPhotos();