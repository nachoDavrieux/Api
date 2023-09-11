
const searchInput = document.getElementById('searchInput');
const cocktailResults = document.getElementById('cocktailResults');

function searchCocktails() {
    const searchTerm = searchInput.value.trim();

    if (searchTerm === '') {
        alert('Por favor, ingrese un término de búsqueda.');
        return;
    }

    // Llamada a la API de TheCocktailDB
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            cocktailResults.innerHTML = '';

            if (data.drinks) {
                data.drinks.forEach(cocktail => {
                    const cocktailDiv = document.createElement('div');
                    cocktailDiv.classList.add('cocktail');

                    const cocktailName = document.createElement('h2');
                    cocktailName.textContent = cocktail.strDrink;
                    cocktailDiv.appendChild(cocktailName);

                    const cocktailImage = document.createElement('img');
                    cocktailImage.src = cocktail.strDrinkThumb;
                    cocktailDiv.appendChild(cocktailImage);

                    const cocktailCategory = document.createElement('p');
                    cocktailCategory.textContent = `Categoría: ${cocktail.strCategory}`;
                    cocktailDiv.appendChild(cocktailCategory);

                    const cocktailInstructions = document.createElement('p');
                    cocktailInstructions.textContent = `Instrucciones: ${cocktail.strInstructions}`;
                    cocktailDiv.appendChild(cocktailInstructions);

                    cocktailResults.appendChild(cocktailDiv);
                });
            } else {
                cocktailResults.innerHTML = 'No se encontraron resultados.';
            }
        })
        .catch(error => {
            console.error('Error en la búsqueda:', error);
            cocktailResults.innerHTML = 'Hubo un error en la búsqueda.';
        });
}
