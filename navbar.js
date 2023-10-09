document.body.innerHTML =
	document.body.innerHTML +
	`
        <nav>
            <a href="/"><img src="/assets/Logo.webp" class="navlovo" /></a>
            <ul class="navlinks">
                <li><a href="/" class="link-effect">Home</a></li>
                <li><a href="/about.html" class="link-effect">About</a></li>
                <li><a href="/menu.html" class="link-effect">Menu</a></li>
                <li><a href="/locations.html" class="link-effect">Locations</a></li>
        </nav>
`;

const stylesheet = document.createElement("link");
stylesheet.setAttribute("rel", "stylesheet");
stylesheet.setAttribute("href", "/stylesheets/navbar.css");
document.head.appendChild(stylesheet);
