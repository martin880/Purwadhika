class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

class Transaction {
    constructor(total, products){
        this.total = total;
        this.products = products;
    }
}

class TransactionProduct extends Product{
    constructor(name, price, qty){
        super(name, price)
        this.qty = qty
    }
}

const barang1 = new Product("Pulpen",1200);
const barang2 = new Product("Buku",2000);

let total = barang1.price + barang2.price;
console.log(total);
// const transaction = new Transaction();
