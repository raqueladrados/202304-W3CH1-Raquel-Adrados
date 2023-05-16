import "./style.css";
import { arrayCharacters } from "./arrayCharacters.ts";

const charactersTemplates = arrayCharacters();
const template = document.querySelector(".characters-list")!;

const cardJoffrey = `
      <li class="character col">
        <div class="card character__card">
          <img src="img/joffrey.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${charactersTemplates[0].name} ${charactersTemplates[0].house}</h2>
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
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji" href="👑"></i>
        </div>
      </li>`;

const cardJamie = `
 <li class="character col">
        <div class="card character__card">
          <img src="img/jaime.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4"> ${charactersTemplates[1].name} ${charactersTemplates[2].house}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${charactersTemplates[1].age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Arma: ${charactersTemplates[1].weapon}</li>
                <li>Destreza: ${charactersTemplates[1].skills}</li>
                <li>Peloteo: X</li>
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

const cardDaenerys = `<li class="character col">
        <div class="card character__card">
          <img src="img/daenerys.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${charactersTemplates[2].name} ${charactersTemplates[2].house}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${charactersTemplates[2].age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Arma: ${charactersTemplates[2].weapon}</li>
                <li>Destreza: ${charactersTemplates[2].skills}</li>
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

const cardTyrion = `<li class="character col">
        <div class="card character__card">
          <img src="img/tyrion.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${charactersTemplates[3].name} ${charactersTemplates[0].house}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${charactersTemplates[3].age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Asesora a: ${charactersTemplates[3].characterAdviced}</li>
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

const cardBron = `<li class="character col">
        <div class="card character__card">
          <img src="img/bronn.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${charactersTemplates[4].name} ${charactersTemplates[0].house}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${charactersTemplates[4].age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Peloteo: ${charactersTemplates[4].pelotismo}</li>
                <li>Sirve a: ${charactersTemplates[4].knight}</li>
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

template.innerHTML =
  cardJoffrey + cardJamie + cardDaenerys + cardTyrion + cardBron;
