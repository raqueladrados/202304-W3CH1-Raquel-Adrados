import "./style.css";
import { arrayCharacters } from "./arrayCharacters.ts";

const charactersTemplates = arrayCharacters();
const template = document.querySelector(".characters-list")!;

const cardJoffrey = `
      <li class="character col">
        <div class="card character__card">
          <img src="img/joffrey.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${charactersTemplates[0].name}${charactersTemplates[0].house}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${charactersTemplates[0].age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Años de reinado: ${charactersTemplates[0].rulingYears}</li>
                <li>Arma: XXX</li>
                <li>Destreza: X</li>
                <li>Peloteo: X</li>
                <li>Asesora a: X</li>
                <li>Sirve a: X</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>`;

const cardJamie = `
 <li class="character col">
        <div class="card character__card">
          <img src="img/no-one.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${charactersTemplates[1].name}${charactersTemplates[2].house}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad:${charactersTemplates[1].age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Arma: XXX</li>
                <li>Destreza: X</li>
                <li>Peloteo: X</li>
                <li>Asesora a: X</li>
                <li>Sirve a: X</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>
`;

template.innerHTML = cardJoffrey;
