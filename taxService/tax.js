let getTax = (preTaxPrice) => {
    const tax = roundUp(preTaxPrice * .25);

    return ({
        tax,
        preTaxPrice,
        postTaxPrice: tax + preTaxPrice
    })
}

let roundUp = cost => Math.round(cost * 100) / 100



module.exports = getTax;