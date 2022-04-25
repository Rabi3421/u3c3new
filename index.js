// Store the wallet amount to your local storage with key "amount"
// let newprice = localStorage.getItem("amount")|| null;
// newprice= Number(newprice);
// document.querySelector("form").addEventListener("submit", addToWallet);
function addToWallet(){
    let price = document.querySelector("#amount").value;
    price= Number(price);
    let newprice = localStorage.getItem("amount")
    newprice= Number(newprice);
    price = newprice + price;
    console.log(newprice)
    localStorage.setItem("amount",price);
    let wallet = document.querySelector("#wallet");
    wallet.append(price);
}
