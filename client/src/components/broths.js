import PostService from "../lib/PostService";
import { setBrothSelected, onBrothChange } from '../lib/StateDatas';

export async function listBroths(element) {
    //datas
    let broths = [];
    let linkApi = '/api/broths'
    let linkLocal = 'http://localhost:3000/api/broths'

    //methods
    async function get(){
        try{
            broths = await PostService.getPosts(linkLocal);
        } catch(err){
            console.log(err)
        }
    }

    function clearSelection(containerId) {
        const container = document.getElementById(containerId);
        container.querySelectorAll('.card').forEach(card => {
            card.classList.remove('selected-card');
        });
        container.querySelectorAll('.title-card').forEach(titleCard => {
            titleCard.classList.remove('selected-title-card');
        });
        container.querySelectorAll('.description-card').forEach(descriptionCard => {
            descriptionCard.classList.remove('selected-description-card');
        });
        container.querySelectorAll('.price-card').forEach(priceCard => {
            priceCard.classList.remove('selected-price-card');
        });
    }

    function selecionarBroth(cardSelected) {
        setBrothSelected(cardSelected.id);

        broths.forEach(broth => {
            const imgElement = document.querySelector(`img[src="${broth.ImageActive}"]`);
            if (imgElement) {
                imgElement.src = broth.imageInactive;
            }
        });

        clearSelection('container_select_broth');
        cardSelected.cardPrincipal.classList.add('selected-card');
        cardSelected.titleCard.classList.add('selected-title-card');
        cardSelected.descriptionCard.classList.add('selected-description-card');
        cardSelected.priceCard.classList.add('selected-price-card');
        cardSelected.imgElement.src = cardSelected.imageActive;
    }
   
    //template
    const setTemplateCards = () => {
        for(let i = 0; i < broths.length; i++){
            let cardPrincipal = document.createElement('div');
            cardPrincipal.classList.add('card');
            
            let imgCard = document.createElement('div');
            imgCard.classList.add('image-card');
            let imgElement = document.createElement('img');
            imgElement.src = broths[i].imageInactive;

            let titleCard = document.createElement('div');
            titleCard.classList.add('title-card');
            titleCard.innerHTML = broths[i].name

            let descriptionCard = document.createElement('div');
            descriptionCard.classList.add('description-card');
            descriptionCard.innerHTML = broths[i].description

            let priceCard = document.createElement('div');
            priceCard.classList.add('price-card');
            priceCard.innerHTML = `US$ ${broths[i].price}`

            cardPrincipal.appendChild(imgCard);
            imgCard.appendChild(imgElement)
            cardPrincipal.appendChild(titleCard);
            cardPrincipal.appendChild(descriptionCard);
            cardPrincipal.appendChild(priceCard);
            element.appendChild(cardPrincipal);

            let selectCard = {
                id: broths[i].id,
                cardPrincipal: cardPrincipal,
                imageActive: broths[i].ImageActive,
                imageInactive: broths[i].imageInactive,
                imgElement: imgElement,
                titleCard: titleCard,
                descriptionCard: descriptionCard,
                priceCard: priceCard
            }
            cardPrincipal.addEventListener('click', 
                () => selecionarBroth(selectCard)
            )
        }
    }

    //mounted
    await get();
    setTemplateCards();
}
  