let bagItems =[];
onLoad();

function onLoad(){
let bagItemsStr = localStorage.getItem('bagItems');
bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
displayItemOnHomePage();
displayBagIcon();
}
function addToBag(itemId){
     bagItems.push(itemId);
     localStorage.setItem('bagItems', JSON.stringify(bagItems));
     displayBagIcon();
}


function displayBagIcon(){
  let  bagitemcountElement =document.querySelector('.bag-item-count');

  if(bagItems.length >0){
    bagitemcountElement.style.visibility ='visible';
  bagitemcountElement.innerText =bagItems.length;
  }
  else{
  bagitemcountElement.style.visibility ='hidden';

  }
}

function displayItemOnHomePage(){

    let itemsContainerElement = document.querySelector('.items-contnaier');
      if(!itemsContainerElement){
        return ;
      }
    let innerHtml =''
    items.forEach(item => {
    
        innerHtml +=  `
        <div class="item-contnaier">
        <img  class="item-images" src="${item.image}"
        alt="item image">
        <div class="rating">
         ${item.rating.stars} ⭐ | ${item.rating.count}
        </div>
    <div class="company-name">${item.company}</div>
       <div class="item-name">${item.item_name} </div>
      <div class="price">
         <span class="current-price"> Rs ${item.current_price}</span>
         <span class="Original-price"> Rs ${item.original_price}</span>
         <span class="discount">${item.discount_percentage}%OFF</span>
     </div>
     <button class="btn-add-bag" onclick="addToBag(${item.id})">
     Add to Bag</button>
    
    </div>`
    });
    itemsContainerElement.innerHTML = innerHtml;
     
}


 