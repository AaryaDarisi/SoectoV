const products = [
    {
        id: 1,
        name: 'AR Headset',
        description: 'Experience augmented reality like never before.',
        image: 'vr1.jpg'
    },
    {
        id: 2,
        name: 'VR Gaming System',
        description: 'Immerse yourself in virtual worlds and gaming experiences.',
        image: 'https://plus.unsplash.com/premium_photo-1682123725103-75b18625c59d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
];

function renderProductCards() {
    const productGrid = document.querySelector('.grid');
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" >
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        `;
        productGrid.appendChild(card);
    });
}

window.addEventListener('DOMContentLoaded', renderProductCards);