import '/public/src/css/styles.css';
import  {listBroths}  from '/public/src/components/broths.js';
import {listProteins} from '/public/src/components/proteins.js';
import {scrollWidgetBroth} from '/public/src/components/widgetbroth.js';
import {scrollWidgetProtein} from '/public/src/components/widgetprotein.js';
import {buttonPlaceMyOrder} from '/public/src/components/buttonPlaceMyOrder.js'

document.querySelector('#app').innerHTML = `
  <div>    
    <section>
      <div id="container_principal">
          <div class="logo"></div>
          <div id="container_capa">
            <div class="circulo-marrom">
              <div class="entregadora"></div>
            </div>
            <div class="balaoAzul"></div>
            <div class="balaoAmarelo"></div>
            <div class="letras-amarelas"> ラーメン </div>
            <div class="title-go">GO!</div>
            <div class="description"></div>
             <button id="button_order_now">
                <div class="text-button-place-order-now">ORDER NOW</div>
                <div>
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7115 7.23199L13.3586 0.298656C12.9845 -0.11041 12.3878 -0.0976104 12.0278 0.326923C11.6673 0.751457 11.6786 1.42666 12.0532 1.83519L16.7247 6.93333H0.941176C0.421176 6.93333 0 7.41119 0 7.99999C0 8.58933 0.421176 9.06666 0.941176 9.06666H16.7247L12.0532 14.1653C11.6786 14.5739 11.6673 15.2491 12.0278 15.6736C12.2127 15.8907 12.4588 16 12.7059 16C12.9407 16 13.176 15.9013 13.3586 15.7019L19.7115 8.76853C19.896 8.56746 20 8.29013 20 7.99999C20 7.71039 19.896 7.43306 19.7115 7.23199Z" fill="#FFC024"/>
                    </svg>
                </div>
            </button>
          </div>
      </div>
    </section>
    <section>
      <div id="container_body">
        <section>
          <div id="title_select_broth">
            First things first: select your favorite broth.
          </div>
          <div id="subtitle_select_broth">
            It will give the whole flavor on your ramen soup. 
          </div>
        </section>
        <section>
          <div id="container_select_broth"></div>
        </section>
        <section>
          <div class="container-widget">
            <div id="select-broth-widget-container"></div>
          </div>
        </section>
        <section>
          <div id="title_select_broth">
            It’s time to choose (or not) your meat!
          </div>
          <div id="subtitle_select_broth">
            Some people love, some don’t. We have options for all tastes. 
          </div>
        </section>
        <section>
          <div id="container_select_protein"></div>
        </section>
        <section>
          <div class="container-widget">
            <div id="select-protein-widget-container"></div>
          </div>
        </section>
        <section>
          <div id="button_new_order_container"></div>
        </section>
      </div>
    </section>
  </div>
`

listBroths(document.querySelector('#container_select_broth'));
listProteins(document.querySelector('#container_select_protein'));
scrollWidgetBroth(document.querySelector('#select-broth-widget-container'));
scrollWidgetProtein(document.querySelector('#select-protein-widget-container'));
buttonPlaceMyOrder(document.querySelector('#button_new_order_container'))

