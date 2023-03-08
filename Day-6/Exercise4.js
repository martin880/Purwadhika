// Create a program to create transaction
// Product Class
// Properties
// Name
// Price
// Transaction Class
// Properties
// Total
// Product
// All product data
// Qty
// Add to cart method → Add product to transaction
// Show total method → Show total current transaction
// Checkout method → Finalize transaction, return transaction data

class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class Transaction {
    constructor() {
      this.total = 0;
      this.products = [];
    }
  
    addToCart(product, qty) {
      const item = {
        product: product,
        qty: qty
      };
      this.products.push(item);
      this.total += product.price * qty;
    }
  
    showTotal() {
      console.log(`Total: Rp${this.total.toFixed(2)}`);
    }
  
    checkout() {
      return {
        total: this.total,
        products: this.products
      };
    }
  }
  
  const apple = new Product("Apple", 1200);
  const orange = new Product("Orange", 2100);

  const transaction = new Transaction();

  transaction.addToCart(apple, 2);
  transaction.addToCart(orange, 3);
  transaction.showTotal();

  const transactionData = transaction.checkout();
  console.log(transactionData);
  