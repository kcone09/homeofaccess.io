var btnMenu = document.getElementById('btnMenu');
var page = document.getElementById('page');
var container = document.getElementById('container');
var content = document.querySelector('.content');
var home = document.querySelector('.fa-home');
var phone = document.querySelector('.fa-phone');
var logo = document.querySelector('#logo');

var main = `
<div id="twitch" >  
<div>HOUNTED<span>MOVIE</span></div>
<div>We HAVE<span>DATAS</span></div>
<div><span>THUNDER</span> Glitches </div>
<div>We LOVE<span>you</span></div>
<div>HORROR<span>atmosphere</span></div>
<div><span>Stay</span> OPENED EYE </div>
<div>BIG<span>THUNDER</span></div>
<div><span>Look</span>BACK NOW</div>
</div>
`

var contact = `
<h1>Contact</h1>
<br><br><br>
<div class="redes">
	<i class="icon_redes fa fa-facebook"></i>
	<i class="icon_redes fa fa-twitter"></i>
	<i class="icon_redes fa fa-linkedin"></i>
	<i class="icon_redes fa fa-behance"></i>
	<i class="icon_redes fa fa-youtube"></i>
	<i class="icon_redes fa fa-instagram"></i>
</div>
<p>El <strong>elemento HTML main</strong> representa el container principal del de un documento o aplicación. El área principal del container consiste en el container que está directamente relacionado, o se expande sobre el tema central de
	un documento o la funcionalidad central de una aplicación. Este container debe ser único al documento, excluyendo cualquier container que se repita a través de un conjunto de documentos como barras laterales, enlaces de navegación,
	información de derechos de autor, logos del sitio y formularios de búsqueda (a menos, claro, que la función principal del documento sea un formulario de búsqueda).</p>

<p>
	Nota: no debe haber más de un elemento main en un documento, y este no debe ser descendiente de un elemento article, aside, footer, header, o nav. Nota: no debe haber más de un elemento main en un documento, y este no debe ser descendiente de un elemento
	article, aside, footer, header, o nav.
</p>
<p>
	Nota: no debe haber más de un elemento main en un documento, y este no debe ser descendiente de un elemento article, aside, footer, header, o nav. Nota: no debe haber más de un elemento main en un documento, y este no debe ser descendiente de un elemento
	article, aside, footer, header, o nav.
</p>
`;

var about = `
<h1>About</h1>
<br><br><br>
<div class="redes">
	<i class="icon_redes fa fa-facebook"></i>
	<i class="icon_redes fa fa-twitter"></i>
	<i class="icon_redes fa fa-linkedin"></i>
	<i class="icon_redes fa fa-behance"></i>
	<i class="icon_redes fa fa-youtube"></i>
	<i class="icon_redes fa fa-instagram"></i>
</div>
<br><br>
<p>El <strong>elemento HTML main</strong> representa el container principal del de un documento o aplicación. El área principal del container consiste en el container que está directamente relacionado, o se expande sobre el tema central de
	un documento o la funcionalidad central de una aplicación. Este container debe ser único al documento, excluyendo cualquier container que se repita a través de un conjunto de documentos como barras laterales, enlaces de navegación,
	información de derechos de autor, logos del sitio y formularios de búsqueda (a menos, claro, que la función principal del documento sea un formulario de búsqueda).</p>

<p>
	Nota: no debe haber más de un elemento main en un documento, y este no debe ser descendiente de un elemento article, aside, footer, header, o nav.
</p>
<p>El <strong>elemento HTML main</strong> representa el container principal del de un documento o aplicación. El área principal del container consiste en el container que está directamente relacionado, o se expande sobre el tema central de
	un documento o la funcionalidad central de una aplicación. Este container debe ser único al documento, excluyendo cualquier container que se repita a través de un conjunto de documentos como barras laterales, enlaces de navegación,
	información de derechos de autor, logos del sitio y formularios de búsqueda (a menos, claro, que la función principal del documento sea un formulario de búsqueda).</p>

<p>
	Nota: no debe haber más de un elemento main en un documento, y este no debe ser descendiente de un elemento article, aside, footer, header, o nav. Nota: no debe haber más de un elemento main en un documento, y este no debe ser descendiente de un elemento
	article, aside, footer, header, o nav.
</p>
<p>
	Nota: no debe haber más de un elemento main en un documento, y este no debe ser descendiente de un elemento article, aside, footer, header, o nav. Nota: no debe haber más de un elemento main en un documento, y este no debe ser descendiente de un elemento
	article, aside, footer, header, o nav.
</p>
<p>
	Nota: no debe haber más de un elemento main en un documento, y este no debe ser descendiente de un elemento article, aside, footer, header, o nav.
</p>
<p>El <strong>elemento HTML main</strong> representa el container principal del de un documento o aplicación. El área principal del container consiste en el container que está directamente relacionado, o se expande sobre el tema central de
	un documento o la funcionalidad central de una aplicación. Este container debe ser único al documento, excluyendo cualquier container que se repita a través de un conjunto de documentos como barras laterales, enlaces de navegación,
	información de derechos de autor, logos del sitio y formularios de búsqueda (a menos, claro, que la función principal del documento sea un formulario de búsqueda).</p>

<p>
	Nota: no debe haber más de un elemento main en un documento, y este no debe ser descendiente de un elemento article, aside, footer, header, o nav. Nota: no debe haber más de un elemento main en un documento, y este no debe ser descendiente de un elemento
	article, aside, footer, header, o nav.
</p>
<p>
	Nota: no debe haber más de un elemento main en un documento, y este no debe ser descendiente de un elemento article, aside, footer, header, o nav. Nota: no debe haber más de un elemento main en un documento, y este no debe ser descendiente de un elemento
	article, aside, footer, header, o nav.
</p>
`;




var displayMenu = function() {
    page.classList.toggle("real");
}
var rotatePage = function() {
    page.classList.remove("real");
}

var displayHome = function() {
    content.innerHTML = main;
    container.classList.toggle("twitch");
    rotatePage();
}

removeHome = function() {
    container.classList.remove("twitch");
}

displayHome();

btnMenu.addEventListener('click', displayMenu);
container.addEventListener('click', rotatePage);

logo.addEventListener('click', () => {
    displayHome();
});


home.addEventListener('click', () => {
    content.innerHTML = about;
    removeHome();
    rotatePage();
});

phone.addEventListener('click', () => {
    content.innerHTML = contact;
    removeHome();
    rotatePage();
});