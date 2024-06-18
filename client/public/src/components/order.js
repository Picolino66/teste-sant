export async function order(element) {
    //datas
    let orderSelected = [];

    //methods
    function getDataSessionStorage() {
        const orderData = sessionStorage.getItem('orderData');
        orderSelected = JSON.parse(orderData);
        console.log(orderSelected)
    }

    //template
    const setTemplateOrder = () => {
        console.log(orderSelected)

        element.innerHTML = `
            <div class="image-broth-selected_sucess">
                <img src="${orderSelected.image}">
            </div>
            <div class="title-broth-selected_sucess">
                Your Order:
            </div>
            <div class="name-broth-selected-sucess">
                ${orderSelected.description}
            </div>
        `
    }

    //mounted
    await getDataSessionStorage();
    setTemplateOrder();
}
  