console.log("Hola mundo")

fetch ('https://apimocha.com/json-logitech-s8/all-products')
.then(response => response.json())
.then(product => console.log(product))

async function localProducts() {
    let response = await fetch('https://apimocha.com/json-logitech-s8/all-products')
    let products = await response.json()

    obtainInfo(products)
}

function obtainInfo(arrayList) {
    console.log(arrayList[0].name)
    arrayList.forEach(element => console.log(element.name));
}



localProducts()