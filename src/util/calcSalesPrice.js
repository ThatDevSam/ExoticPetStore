//Function that takes the price of the product and the sales percentage as a decimal and returns a float rounded to two decimal places.
function calcSalesPrice(price, saleAmount){
    return (price - (price * saleAmount)).toFixed(2)
}

export default calcSalesPrice