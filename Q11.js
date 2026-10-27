class Product{
    name
    productId
    price

    constructor(name,productId,price) {
        this.name=name
        this.productId=productId
        this.price=price

    }
    displayDetails(){
        console.log(this.name);
        console.log(this.productId);
        console.log(this.price);
        
    }
}
const ob = new  Product("lenevo",1,50000)
ob.displayDetails()