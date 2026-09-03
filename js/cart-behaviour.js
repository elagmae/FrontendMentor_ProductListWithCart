class CartBehaviour
{
    constructor()
    {

        if(!localStorage.getItem("cart")) 
            localStorage.setItem("cart", []);
    }

    static cart = new Map(); // Is map the right type ?
    static cartCount = 0;

    static AddToCart(dessert)
    {
        this.dessertNumber++;
        this.UpdateCartVisual();
    }

    static RemoveFromCart()
    {
        this.dessertNumber--;
        this.UpdateCartVisual();
    }

    static UpdateCartVisual()
    {
        const cartCountText = document.getElementById("cart-count");
        cartCountText.textContent = "Your Cart (" + this.cartCount + ")";
    }
}

