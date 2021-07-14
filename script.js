// UNSPLASH API 
const count = 10;
const apiKey = `R-fkZQTyJDf-NOwu6Ia5uNwD8_hmSjV4gFG5ty7h57o`;
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`


// Get Photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        //catch error here
    }
}

// on Load 
getPhotos();