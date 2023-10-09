const page = window.location.search.slice(1).split("&").find(param=>param.startsWith("page")).split("=")[1];

const specialsIcon = `
<div class="tooltip">
    <img src="/assets/star-icon.svg" class="specials-img"/>
    <span class="tooltiptext"><p>Bestseller</p></span>
</div>
`;

fetch("/api/menudata.json").then(res => res.json()).then(data => {
    if(!data || !data[page] || !data[page].length) {
        document.getElementById("items-list").innerHTML = `
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
                <p class="price">&gt;-_-&lt;</p>
            </div>
        </div>`
    }
    else document.getElementById("items-list").innerHTML = data[page].map(item => `
        <div class="menu-card dark-pattern-bg">
            <img src="${item.image}" class="menu-card-image">
            <div class="menu-item-details-box">
                <h2>${item.name} ${item.specials?specialsIcon:''}</h2>
                <p style="font-size: 2vw; color: var(--almost-white);">
                    ${item.description}
                </p>
                <p style="font-size: 2vw; color: var(--orange); margin-top:1vw;">
                    ${item.subtext}
                </p>
            </div>
            <div>
                <p class="price">${item.price}</p>
            </div>
        </div>
`).join("");
});