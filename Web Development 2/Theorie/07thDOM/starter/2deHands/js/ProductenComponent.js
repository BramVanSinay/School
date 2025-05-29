import ProductenRepository from './ProductenRepository.js';

export default class ProductenComponent {
  #productenRepository;
  constructor() {
    this.#productenRepository = new ProductenRepository();
    this.#initialiseerHtml();
  }

  // deze methode intialiseert de pagina
  #initialiseerHtml() {
    this.#productenToHtml(this.#productenRepository.producten);
    this.#categorieenToHtml(this.#productenRepository.geefAlleCategorieen());

    // voeg een event handler toe aan de keuzelijst categorie
    document.getElementById("categorie").onchange = () => {
      const gefilterdeProd = 
      this.#productenRepository.geefProductenUitCategorie(
        document.getElementById("categorie").value);
      this.#productenToHtml(gefilterdeProd);

      document.getElementById("productDetails").classList.add("verbergen");
    };
  }

  // voegt de gegeven categorieën toe aan de selectlist #categorie
  #categorieenToHtml(categorieen) {
    categorieen.forEach((categorie) => {
      document
        .getElementById("categorie")
        .insertAdjacentHTML(
          "beforeend",
        `<option value ="${categorie}">${categorie}</option>`
      );
    });
  }

  // toont het aantal producten in div#aantalProducten
  // en de producten in div#overzichtProducten
  #productenToHtml(producten) {
    const divAantalProducten = document.getElementById("aantalProducten");
    divAantalProducten.innerHTML = `<h4> Aantal Producten: ${producten.length}</h4>`;

    const divOverzichtProducten = document.getElementById("overzichtProducten");

    divOverzichtProducten.innerHTML = "";
    producten.forEach((product) => {
      const divEl = document.createElement("div");
      const imgEl = document.createElement("img");
      const pEl = document.createElement("p");

      divEl.id = product.id;
      imgEl.src = `images/${product.id}/thumbs/thumb_${product.afbeeldingen[0]}.jpg`;
      imgEl.alt = product.titel;
      pEl.textContent = product.titel;

      divEl.onclick = () => {
        this.#zetProductVetjes(divEl);
        this.#productDetailsToHtml(product);
      }

      divEl.appendChild(imgEl);
      divEl.appendChild(pEl);
      divOverzichtProducten.appendChild(divEl);
    });
  }

  // zet in het productoverzicht, het gekozen product vetjes
  #zetProductVetjes(divElement) {
    document.querySelector("#overzichtProducten .tekstVet")?.classList.remove("tekstVet") // verwijdert het vetgedrukte
    divElement.classList.add("tekstVet"); // maakt de nieuwe vet gedrukt
  }

  // toont de details van het gegeven product in de div #productDetails
  #productDetailsToHtml(product) {
    // maak het element #productDetails zichtbaar en leeg
    const divProductDetails = document.getElementById('productDetails');
    divProductDetails.classList.remove('verbergen');
    divProductDetails.innerHTML = '';

    // creëer de 'descendants' voor div#productDetails en voeg ze toe

    const h2Element = document.createElement('h2');
    h2Element.textContent = product.titel;

    const pElement = document.createElement('p');
    pElement.textContent = product.omschrijving;

    const h4Element = document.createElement('h4');
    h4Element.textContent = 'Prijs: €' + product.prijs;

    const divElement = document.createElement('div');
    divElement.id = 'afbeeldingen';

    // voeg de grote afbeelding toe aan divElement
    const imgGroteAfbeelding = document.createElement('img');
    imgGroteAfbeelding.id = 'groteAfbeelding';
    imgGroteAfbeelding.src = `images/${product.id}/${product.afbeeldingen[0]}.jpg`;
    imgGroteAfbeelding.alt = product.titel;
    divElement.appendChild(imgGroteAfbeelding);

    // voeg de 'thumbnails' toe aan het divElement
    const asideElement = document.createElement('aside');
    asideElement.id = 'thumbnails';
    product.afbeeldingen.forEach((afbeelding) => {
      const imgElement = document.createElement('img');
      imgElement.src = `images/${product.id}/thumbs/thumb_${afbeelding}.jpg`;
      imgElement.onclick = () => {
        // wijzig de grote afbeelding als er geklikt
        // wordt op één van de 'thumbnails'
        document.getElementById(
          'groteAfbeelding'
        ).src = `images/${product.id}/${afbeelding}.jpg`;
      };
      asideElement.appendChild(imgElement);
    });
    divElement.appendChild(asideElement);

    divProductDetails.appendChild(h2Element);
    divProductDetails.appendChild(pElement);
    divProductDetails.appendChild(h4Element);
    divProductDetails.appendChild(divElement);
  }
}
