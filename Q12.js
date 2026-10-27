class InvalidCouponCode extends Error{
    constructor(message) {
        super(message)
        this.name= "InvalidCouponCode"
        this.message="coupon is not valid"
    }
}

function checkout(correct){
    try {
        if(correct){
        throw new InvalidCouponCode()
    }else{
        console.log("coupon is valid");
        
    }
    } catch (error) {
        console.log(error.name + " "+ error.message);
    }
}

checkout(true)

