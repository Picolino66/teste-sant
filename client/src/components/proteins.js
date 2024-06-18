import PostService from "../lib/PostService";
import { setProteinSelected, onProteinChange } from '../lib/StateDatas';

export async function listProteins(element) {
    //datas
    let proteins = [];
    let linkApi = '/api/proteins'
    let linkLocal = 'http://localhost:3000/api/proteins'

    //methods
    async function get(){
        try{
            proteins = await PostService.getPosts(linkLocal);
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

    function selecionarProtein(cardSelected) {
        setProteinSelected(cardSelected.id)

        proteins.forEach(broth => {
            const imgElement = document.querySelector(`img[src="${broth.ImageActive}"]`);
            if (imgElement) {
                imgElement.src = broth.imageInactive;
            }
        });

        clearSelection('container_select_protein');
        cardSelected.cardPrincipal.classList.add('selected-card');
        cardSelected.titleCard.classList.add('selected-title-card');
        cardSelected.descriptionCard.classList.add('selected-description-card');
        cardSelected.priceCard.classList.add('selected-price-card');
        cardSelected.imgElement.src = cardSelected.imageActive;
    }
   
    //template
    const setTemplateCards = () => {
        for(let i = 0; i < proteins.length; i++){
            let cardPrincipal = document.createElement('div');
            cardPrincipal.classList.add('card');
            
            let imgCard = document.createElement('div');
            imgCard.classList.add('image-card');
            let imgElement = document.createElement('img');
            imgElement.src = proteins[i].imageInactive;

            let titleCard = document.createElement('div');
            titleCard.classList.add('title-card');
            titleCard.innerHTML = proteins[i].name

            let descriptionCard = document.createElement('div');
            descriptionCard.classList.add('description-card');
            descriptionCard.innerHTML = proteins[i].description

            let priceCard = document.createElement('div');
            priceCard.classList.add('price-card');
            priceCard.innerHTML = `US$ ${proteins[i].price}`

            cardPrincipal.appendChild(imgCard);
            imgCard.appendChild(imgElement)
            cardPrincipal.appendChild(titleCard);
            cardPrincipal.appendChild(descriptionCard);
            cardPrincipal.appendChild(priceCard);
            element.appendChild(cardPrincipal);

            let selectCard = {
                id: proteins[i].id,
                imageActive: proteins[i].ImageActive,
                imageInactive: proteins[i].imageInactive,
                imgElement: imgElement,
                titleCard: titleCard,
                descriptionCard: descriptionCard,
                priceCard: priceCard,
                cardPrincipal: cardPrincipal,
            }
            cardPrincipal.addEventListener('click', 
                () => selecionarProtein(selectCard)
            )
        }
    }

    //mounted
    await get();
    setTemplateCards();
}
  