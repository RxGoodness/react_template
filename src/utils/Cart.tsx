interface Item {
    name: string;
    price: number;
    quantity?: number;
    }
    
    let cart: Item[] = [];
    
    export function addToCart(item: Item) {
    cart.push(item);
    }
    
    export function viewCart(): Item[] {
    return cart;
    }
    
    export function deleteFromCart(index: number) {
    cart.splice(index, 1);
    }
    
    export function updateQuantity(index: number, quantity: number) {
    cart[index].quantity = quantity;
    }