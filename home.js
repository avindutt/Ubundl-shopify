const cardData = [
    {
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP._UpPcjRxrTTTVTiAmhDvqwHaHa%26pid%3DApi&f=1&ipt=1e490983eb5827229c67b8c52dea4ba32bbe4180378438020b1101ebce6ce39a&ipo=images',
        productName: 'Assorted Cocktail Mixer Pack',
        price: '899',
        qty: 1,
        id: 1
    },
    {
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.trendhunterstatic.com%2Fthumbs%2Fcocktail-mixers.jpeg&f=1&nofb=1&ipt=ccb211c2fcaf5eada23689af488917c8037ac2737d75d5b46dd4acf4ecb3f295&ipo=images',
        productName: 'Bloody Mary Cocktail Mixer',
        price: '599',
        qty: 1,
        id: 2
    },
    {
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6ZVC8SUD9w0uAIlSfnaEjgHaHa%26pid%3DApi&f=1&ipt=f2e4a5021283fc92fda076a697b568ef76b168bc1694115b6cad00054aec87f7&ipo=images',
        productName: 'Assorted Cocktail Mixer Pack',
        price: '999',
        qty: 1,
        id: 3
    },
    {
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.q5efWcF-21eALGgqiv16eAHaHa%26pid%3DApi&f=1&ipt=aa3cdd942e4724ad7ef1063fd60498fa2799c5e020e5942888b2177d6d75f7dc&ipo=images',
        productName: 'Assorted Cocktail Mixer Pack',
        price: '1799',
        qty: 1,
        id: 4
    },
    {
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.lEMxm3-o15K7p4CjrL0LAQHaHa%26pid%3DApi&f=1&ipt=43eec76dbdacb50c86f8fd4a479d126afea38cf32df4933a460810ebcadb315a&ipo=images',
        productName: 'Assorted Cocktail Mixer Pack',
        price: '1599',
        qty: 1,
        id: 5
    },
    {
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Y2LVOb11oqvIvWFp4dtzlQHaHa%26pid%3DApi&f=1&ipt=9eed87c749b10d38134d51827f67a17bc0d6b32f197a48acf6ae9e6f502dc5f3&ipo=images',
        productName: 'Assorted Cocktail Mixer Pack',
        price: '299',
        qty: 1,
        id: 6
    },
    {
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.hGURBLA05L0zh5G7kY1oGgHaHa%26pid%3DApi&f=1&ipt=590d55af8fc0847ddb9b462f915ac765080a83bbdb12685dbb7ae539eae9ca16&ipo=images',
        productName: 'Assorted Cocktail Mixer Pack',
        price: '799',
        qty: 1,
        id: 7
    },
    {
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.398BOWIIc-u2p1E7V0cvgQHaHa%26pid%3DApi&f=1&ipt=02d3f4cce0c63bb76c902e97b99c6705649569973c5e94f71e23c0bf84c73c8c&ipo=images',
        productName: 'Assorted Cocktail Mixer Pack',
        price: '599',
        qty: 1,
        id: 8
    },
    {
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Lvulw2anwBoYbnimV4-N_gAAAA%26pid%3DApi&f=1&ipt=e2aedf9660e6a7236f73acf8a65497e5cbb687f2bae4b72eaebbad0e5349cbea&ipo=images',
        productName: 'Assorted Cocktail Mixer Pack',
        price: '1199',
        qty: 1,
        id: 9
    },
    {
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Sxtzs3xjQUmgLd5_Cwr9pAAAAA%26pid%3DApi&f=1&ipt=0763ac87f3a0ea474d1eed99f82e86bd95318fd1f088b666b1ae4dd6d5a85a61&ipo=images',
        productName: 'Assorted Cocktail Mixer Pack',
        price: '699',
        qty: 1,
        id: 10
    },
    {
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.fALFkgxrH5UbkZ13Hvvi1AHaHa%26pid%3DApi&f=1&ipt=6c00ea4b3ce81c9677451e77442f0abf3e2fa448083989882ef1ddb33a8eaff0&ipo=images',
        productName: 'Assorted Cocktail Mixer Pack',
        price: '799',
        qty: 1,
        id: 11
    },
    {
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QWZfAX8tSVGfNhTTA4baVgHaHa%26pid%3DApi&f=1&ipt=e65fe118e4e619bc77ab4f820a86684ae64288bc8c024914d40853d886241798&ipo=images',
        productName: 'Assorted Cocktail Mixer Pack',
        price: '999',
        qty: 1,
        id: 12
    },
    {
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.kxyVtecXQ5ly-vNyK1QWLgAAAA%26pid%3DApi&f=1&ipt=7166a3bd3d9539bb3bd791fe38658c11062ca57b218625cb5c838fe4ea068698&ipo=images',
        productName: 'Assorted Cocktail Mixer Pack',
        price: '1799',
        qty: 1,
        id: 13
    },
    {
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.u_kWBxEFh1Twradq0BlnAwHaHZ%26pid%3DApi&f=1&ipt=2d8a7a7636f48833faf3d571f1c5f7561a128a6791609e4b5d31293b277ab037&ipo=images',
        productName: 'Assorted Cocktail Mixer Pack',
        price: '1799',
        qty: 1,
        id: 14
    },
    {
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.zwaPnKXz7ocMQ7kz9Ir-_wHaHa%26pid%3DApi&f=1&ipt=0f2ffb42d8956bd518a60fa95f3ddc2d54a71fe3207014481fb6341c3a328d03&ipo=images',
        productName: 'Assorted Cocktail Mixer Pack',
        price: '1899',
        qty: 1,
        id: 15
    },
    {
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.hJgABVTEVJlaGp7gdorLaQHaHa%26pid%3DApi&f=1&ipt=a88a635322762bd429968a9360817fae75f8c87c1fdabdfa6c9e47564e1cba94&ipo=images',
        productName: 'Assorted Cocktail Mixer Pack',
        price: '199',
        qty: 1,
        id: 16
    }
];

const cardContainer = document.querySelector('.card-container');

cardData.forEach((data) => {
    const card = document.createElement('div');
    card.classList.add('text-center', 'cards', 'p-1', 'm-1', 'mb-5');

    card.innerHTML = `
            <img class="mb-3" src="${data.imageUrl}" alt="product-logo">
            <br>
            <span class="text-sm">${data.productName}</span>
            <br>
            <span>&#x20B9; ${data.price}</span>
            <br>
            <button data-product-id="${data.id}" class="cart-btn mt-2 w-100 font-weight-bold border-0 p-2 custom-bg custom-white">Add to cart</button>
        `;

        const cartBtn = card.querySelector('.cart-btn');
        cartBtn.addEventListener('click', () => {
            const productId = cartBtn.getAttribute('data-product-id');
            const selectedProduct = cardData.find((product) => product.id.toString() === productId);
            addToCart(selectedProduct);
        });

        cardContainer.appendChild(card);
});

let selectedItems = [];
const maxAllowedItems = 8;

function addToCart(product){

    let sum = 0;

    selectedItems.forEach((item) => {
        sum += item.qty; // Add each item's quantity to the sum
    });

     // Check if the total number of unique products in the cart is less than 8
     if (selectedItems.length < maxAllowedItems && sum < 8) {
        const existingItem = selectedItems.find((item) => item.id === product.id);

        if (existingItem) {
            // If the same product is already in the cart, increase its quantity
            existingItem.qty++;
        } else {
            // If it's a new product, add it to the cart
            product.qty = 1;
            selectedItems.push(product);
        }

        updateCartCount();
        localStorage.setItem('selectedItems', JSON.stringify(selectedItems));

    } else {
        alert('You have reached the maximum limit of 8 items in your custom pack.');
    }
}

function updateCartCount() {
    const cart = document.querySelector('.cart');
    const count = document.createElement('p');
    count.classList.add('cart-item-count');
    count.innerHTML = `${selectedItems.length}`;

    // Remove any existing count element before appending the updated count
    const existingCount = cart.querySelector('.cart-item-count');
    if (existingCount) {
        cart.removeChild(existingCount);
    }

    cart.appendChild(count);
}

function loadSelectedItemsFromLocalstorage() {
    const savedItems = localStorage.getItem('selectedItems');
    if (savedItems) {
        selectedItems = JSON.parse(savedItems);
        updateCartCount();
    }
}

loadSelectedItemsFromLocalstorage();


const cartItemList = document.querySelector('.cart-item-list');
let totalPrice = 0;
selectedItems.forEach((items) => {
    const cartItems = document.createElement('div');
    cartItems.classList.add('mb-5','cart-items');

    cartItems.innerHTML = `
    <div class = 'd-flex justify-content-around w-25'>
        <img src=${items.imageUrl} class = 'cart-img'>
        <div class='product-details'>
            <p>${items.productName}</p>
            <p>&#x20B9; ${items.price}</p>
        </div>
    </div>
    <div>
        <p>${items.qty}</p>
    </div>
    <div class='total-price'>
        <p>&#x20B9;${items.qty * items.price}</p>
    </div>
    `;

    cartItemList.appendChild(cartItems);

    // update the total price
    totalPrice += items.qty * items.price;
});

const Total = document.querySelector('.total');
// Total.classList.add('total');
Total.innerHTML = `You will pay &#x20B9; ${totalPrice}`;