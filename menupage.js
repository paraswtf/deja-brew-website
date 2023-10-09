const page = window.location.search.slice(1).split("&").find(param=>param.startsWith("page")).split("=")[1];
fetch("/api/menudata.json").then(res => res.json()).then(data => {
    if(!data || !data[page]) {
        document.getElementById("pizzas-list").innerHTML = `
        <div class="menu-card dark-pattern-bg">
            <img src="/assets/item404.png" class="menu-card-image">
            <div class="menu-item-details-box">
                <h2>No items found :(</h2>
                <p style="font-size: 2vw; color: var(--almost-white);">
                    An error might have occured while fetching data!
                </p>
                <p style="font-size: 2vw; color: var(--orange); margin-top:1vw;">
                    Try refreshing the page
                </p>
            </div>
            <div>
                <p class="price">(.)(.)</p>
            </div>
        </div>`
    }
    else document.getElementById("pizzas-list").innerHTML = data[page].map(item => `
        <div class="menu-card dark-pattern-bg">
            <img src="${item.image}" class="menu-card-image">
            <div class="menu-item-details-box">
                <h2>${item.name} ${item.specials?`<img src="/assets/star-icon.svg" class="specials-img"/>`:''}</h2>
                <p style="font-size: 2vw; color: var(--almost-white);">
                    ${item.description}
                </p>
                <p style="font-size: 2vw; color: var(--orange); margin-top:1vw;">
                    Toppings: ${item.toppings.join(", ")}
                </p>
            </div>
            <div>
                <p class="price">${item.price}</p>
            </div>
        </div>
`).join("");
});