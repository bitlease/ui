async function getDeposit(contract, currency) {
    try {
        const deposit = await contract.query.get_deposit(currency, { value: 0, gasLimit: -1})
        console.log(deposit)
    } catch (error) {
        console.log("Error getting deposit", error);
    }
}
export default getDeposit;