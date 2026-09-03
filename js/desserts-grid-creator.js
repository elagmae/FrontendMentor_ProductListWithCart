LoadDessertsData();

async function LoadDessertsData()
{
    const response = await fetch("./data.json");
    const json = await response.json();

    CreateDessertsGrid(json);
}

function CreateDessertsGrid(json)
{
    const dessertGrid = document.getElementById("desserts");

    for(var i = 0; i < json.length; i++)
    {
        
        var dessert = json[i];
        var dessertContainer = document.createElement("div");
        dessertContainer.classList.add("dessert-container");

        var dessertPreview = document.createElement("div");
        dessertPreview.classList.add("dessert-preview");

        var dessertImage = document.createElement("img");
        dessertImage.classList.add("dessert-image")
        dessertImage.src = dessert.image.thumbnail;

        var dessertCartButton = document.createElement("button");
        dessertCartButton.classList.add("dessert-cart-button");
        dessertCartButton.innerHTML = 
        `
            <img src="./assets/images/icon-add-to-cart.svg">
            <h2>Add to Cart</h2>
        `;

        dessertCartButton.onclick = CartBehaviour.AddToCart(dessert);

        dessertPreview.appendChild(dessertImage);
        dessertPreview.appendChild(dessertCartButton);

        var dessertDescription = document.createElement("div");
        dessertDescription.classList.add("dessert-description");

        var dessertType = document.createElement("h3");
        dessertType.classList.add("dessert-type")
        dessertType.innerHTML = dessert.category;

        var dessertName = document.createElement("h4");
        dessertName.classList.add("dessert-name");
        dessertName.innerHTML = dessert.name;

        var dessertPrice = document.createElement("h5");
        dessertPrice.classList.add("dessert-price");

        var price = new Intl.NumberFormat
        (
            "en-US", 
            { style: "currency", currency: "USD" }, 
            {maximumSignificantDigits: 2 }
        )
        .format(dessert.price);

        dessertPrice.innerHTML = price;

        dessertDescription.appendChild(dessertType);
        dessertDescription.appendChild(dessertName);
        dessertDescription.appendChild(dessertPrice);

        dessertContainer.appendChild(dessertPreview);
        dessertContainer.appendChild(dessertDescription);

        dessertGrid.appendChild(dessertContainer);
    }
}