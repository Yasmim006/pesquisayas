const products = [
    { name: "Rosas Vermelhas", price: "R$ 250,00", image: "https://www.donaflorindafloricultura.com.br/wp-content/uploads/2019/05/buque-flores-vermelhas-2.jpeg" },
    { name: "Buquê misto", price: "R$ 280,00", image: "https://cactusfloricultura.com.br/wp-content/uploads/2020/01/20200316_185845-scaled.jpg" },
    { name: "Rosas e Gipsofilas", price: "R$ 300,00", image: "https://floriculturaflorianopolis.com.br/wp-content/uploads/2022/05/Buque-de-Flores-Florianopolis-Rosas-Importadas-977x1024.jpeg" },
    { name: "Flores Tropicais", price: "R$ 290,00", image: "https://www.cestaeflor.com.br/wp-content/uploads/2018/01/Buque-flores-nobres-color.jpg" },
    { name: "Suspiro do  Amor", price: "R$ 280,00", image: "https://static.novaflor.com.br/images/product/25590gg.jpg" },
    { name: "Buquê Elegância Branca", price: "R$ 230,00", image: "https://taquariflores.com.br/wp-content/uploads/2022/09/buque-de-flores-com-12-lirios-brancos2.jpg" },
    { name: "Rosas do Encanto", price: "R$ 300,00", image: "https://cactusfloricultura.com.br/wp-content/uploads/2022/04/9ad9bc0c-af4f-4783-8149-a102266dfbd2.jpg" },
    { name: "Buquê Rosas Mista", price: "300,00", image: "https://floriculturabellavita.com.br/634-thickbox_default/buque-de-flores-mistas-com-rosas.jpg" },
    { name: "Buquê Noite romântica", price: "R$ 350,00", image: "https://www.uniflores.com.br/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/1/0/101_colour2.jpg" },
    { name: "Buquê Amor Clássico", price: "R$ 450,00", image: "https://patriciaflores.com.br/wp-content/uploads/2023/03/buque_de_flores_rosas_classic_linha_premium_franca_sp.webp" },
]; 
function displayProducts(filteredProducts) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    if (filteredProducts.length === 0) {
        document.getElementById("message").textContent = "Nenhum produto encontrado!";
        return;
    }

    document.getElementById("message").textContent = "";

    filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        productList.appendChild(productDiv);
    });
}

function searchProduct() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    
    if (searchTerm === "") {
        document.getElementById("message").textContent = "Por favor, digite um termo de pesquisa!";
        return;
    }

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );

    displayProducts(filteredProducts);
}

// Exibir todos os produtos ao carregar a página
window.onload = () => displayProducts(products);

