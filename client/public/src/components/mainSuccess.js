import '../../styles.css';
import {order} from './order';
import {setSVG} from '/public/svg/bowing.js';
import {buttonPlaceNewOrder} from './buttonNewOrder';

document.querySelector('#app').innerHTML = `
  <div>    
    <section>
      <div id="container_principal_sucess">
      <div id="resp_title_message_order">
        ramenGo!
      </div>
        <div id="container_capa_sucess"></div>
      </div>
    </section>
    <div id="container_body">
      <div id="svg_bowing_men"></div>
      <div id="title_icon_client">
        どもありがとうございます。
      </div>
      <div id="resp_title_message_order">
        Your order is being prepared
      </div>
      <div id="resp_description_message_order">
        Hold on, when you least expect you will be eating your rámen.
      </div>
      <section>
        <div id="button_order_container"></div>
      </section>
    </div>
  </div>
`
order(document.querySelector('#container_capa_sucess'));
setSVG(document.querySelector('#svg_bowing_men'));
buttonPlaceNewOrder(document.querySelector('#button_order_container'))

