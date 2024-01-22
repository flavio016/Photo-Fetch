// script.js
function toggleGreyscale() {
    document.body.classList.toggle("grayscale");
}

function fetchRandomPhotos() {
    
    fetch('https://picsum.photos/v2/list')
        .then(response => {
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then(data => {
            
            const randomIndexes = [];
            while (randomIndexes.length < 4) {
                const randomIndex = Math.floor(Math.random() * data.length);
                if (!randomIndexes.includes(randomIndex)) {
                    randomIndexes.push(randomIndex);
                }
            }

            
            const photoContainer = document.getElementById("photoContainer");
            photoContainer.innerHTML = ''; 
            randomIndexes.forEach(index => {
                const randomPhoto = data[index];

                const imgElement = document.createElement("img");
                imgElement.src = randomPhoto.download_url;
                imgElement.alt = "Random Photo";
                imgElement.style.width = "calc(50% - 16px)";
                imgElement.style.height = "300px";
                imgElement.style.margin = "8px";
                imgElement.style.boxSizing = "border-box";
                imgElement.style.transition = "filter 0.4s ease";

                
                photoContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
}

