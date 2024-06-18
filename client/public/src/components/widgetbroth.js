export async function scrollWidgetBroth(element) {
    //datas
    const scrollContainer = document.getElementById('container_select_broth');
    let widgetsContainer = null;

    //methods
    function setClassWidgetSelected(indiceSelected){
        widgetsContainer.forEach(widget => {
            widget.classList.remove('widget-selected');
        });
        const widgetSelected = `.widget-circle-select-broths[data-index="${indiceSelected}"]`;
        const widgetSelectedElement = document.querySelector(widgetSelected);
        widgetSelectedElement.classList.add('widget-selected');
    }

    function onScroll() {
        const scrollLeft = scrollContainer.scrollLeft;
        console.log(scrollLeft)
        if(scrollLeft >= 0 && scrollLeft < 176){
            setClassWidgetSelected(1)
        }
        else if(scrollLeft >= 738 && scrollLeft < 1515) {
            setClassWidgetSelected(2)
        }
        else{
            setClassWidgetSelected(3)
        }
    }

    //template
    function setTemplateWidget(){
        document.querySelector('#select-broth-widget-container').innerHTML = `
        <ul class="widget-scroll-cards">
          <li 
            class="widget-circle-select-broths widget-selected" 
            data-index="1" 
            data-scroll="0"
          ></li>
          <li 
            class="widget-circle-select-broths" 
            data-index="2" 
            data-scroll="738"
          ></li>
          <li 
            class="widget-circle-select-broths" 
            data-index="3" 
            data-scroll="1515"
          ></li>
        </ul>`
    }

    function setClickWidget (){
        widgetsContainer = document.querySelectorAll('.widget-circle-select-broths');
        widgetsContainer.forEach(element => {
            element.addEventListener('click', (event) => {
                const scrollTo = event.target.getAttribute('data-scroll');
                scrollContainer.scrollTo(scrollTo, 0);
            });
        });
    }

    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }
    
    //mounted
    setTemplateWidget();
    setClickWidget();
    scrollContainer.addEventListener('scroll', debounce(onScroll, 100));
}
