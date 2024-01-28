function toggleGreyscale() {
    document.body.classList.toggle("grayscale");
}

function fetchRandomPhotos() {

    fetch('https://picsum.photos/v2/list')//esht nje kerkes per te aksesuar apin
        .then(response => {

            if (!response.ok) {
                throw new Error('Network response was not ok');//ben nje kontrroll nese mund te merren  fotot
            }
            return response.json(); 
        })
        .then(data => {

            const randomIndexes = [];//krijohet  nje array per te mbajtiur index e reja
            while (randomIndexes.length < 4) {// ne kete zgjidhen 4 indexe te e rasesihsme the kushti stopon kur behen 4 indexe
                const randomIndex = Math.floor(Math.random() * data.length);
                if (!randomIndexes.includes(randomIndex)) {//kontrrollon nese 1 index esht i pereseriturr nese je i ben push
                    randomIndexes.push(randomIndex);
                }
            }


            const photoContainer = document.getElementById("photoContainer");//kjo bn lidhjen me conatinerin  e faqes se html
            photoContainer.innerHTML = ''; 
            randomIndexes.forEach(index => {//perdoret motda for each per te iteruar ne cdo index
                const randomPhoto = data[index];//per secilen indeks kthehet fotoja  e caktuar

                const imgElement = document.createElement("img");
                imgElement.src = randomPhoto.download_url;
                imgElement.alt = "Random Photo";
                imgElement.style.width = "calc(50% - 16px)";
                imgElement.style.height = "300px";
                imgElement.style.margin = "8px";
                imgElement.style.boxSizing = "border-box";
                imgElement.style.transition = "filter 0.4s ease";


                photoContainer.appendChild(imgElement);//pas perpunimit te te dhenave me an te metodes append shtohen fotot ne fund te conetinerit me id photo conteiner
            });
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
}