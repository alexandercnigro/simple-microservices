let getTax = (preTaxPrice) => {
    const tax = preTaxPrice * .75;

    return ({
        tax,
        preTaxPrice,
        postTaxPrice: tax + preTaxPrice
    })
}

module.exports = getTax;