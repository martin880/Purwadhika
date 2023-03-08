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
      this.products = {};
    }
  
    addToCart(product, qty) {
      if (!this.products[product.name]) {
        this.products[product.name] = { price: product.price, qty: qty };
      } else {
        this.products[product.name].qty += qty;
      }
      this.total += product.price * qty;
    }
  
    showTotal() {
      console.log(`Total: $${this.total.toFixed(2)}`);
    }
  
    checkout() {
      const transactionData = {
        total: this.total,
        products: this.products,
        timestamp: new Date().toISOString(),
      };
      console.log("Transaction Completed!");
      console.log(transactionData);
      return transactionData;
    }
  }
  
  // Create some sample products
  const product1 = new Product("Apple", 0.5);
  const product2 = new Product("Banana", 0.3);
  const product3 = new Product("Orange", 0.4);
  
  // Create a new transaction
  const transaction = new Transaction();
  
  // Add some products to the cart
  transaction.addToCart(product1, 2);
  transaction.addToCart(product2, 3);
  transaction.addToCart(product3, 1);
  
  // Show the total of the current transaction
  transaction.showTotal();
  
  // Checkout and finalize the transaction
  const transactionData = transaction.checkout();

  console.log(transactionData.products);
  