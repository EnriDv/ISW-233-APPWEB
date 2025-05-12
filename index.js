/*

// TODO: Use the DOM API to create the card components
const html = `<article class="card">
<h3 class="card__title"></h3>
<div class="card__body">
  <div class='card__body__image'>_content_</div>
  <section class='card__body__content'>
  </section>
</div>
</article>`;

// 1. Seleccione el container

const container = document.getElementById("content");


// 2. cree una funciotn createCardComponent.
/**
 * @param {string} title
 * @param {string} body
 *
 * @return {HTMLElement}
 

function createCardComponent(title, body)
{
  card = html.replace("_title_,", title)
  card = html.replace("_content_,", body)
  
  return card;
}

// 3. Cree un componente

const cardComponent = createCardComponent("Hola", "Algo");

// 4. Agrege este nuevo componente al container

document.appendChild(cardComponent)


*/

// TODO: Use the DOM API to create the card components
// 1. Seleccione el container

const container = document.getElementById("content");

// 2. cree una funciotn createCardComponent.
/**
 * @param {string} title
 * @param {string} body
 *
 * @return {HTMLElement}
 */

function createCardComponent(title, body)
{
  const template = document.getElementById("card__template");
  const element = template.content.cloneNode(true).firstElementChild;
  const elTitle = document.querySelector(".card__tittle");
  const sect = document.getElementsByTagName("section");
  elTitle.textContent = title;
}
// 3. Cree un componente

const cardComponent = createCardComponent("Hola", "Algo");

// 4. Agrege este nuevo componente al container

document.appendChild(cardComponent)
