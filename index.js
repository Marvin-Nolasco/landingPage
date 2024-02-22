  // Seleccionar elementos del DOM
  const counterElement = document.getElementById('counter');
  const decrementButton = document.getElementById('decrementButton');
  const incrementButton = document.getElementById('incrementButton');

  
  const ItemsCarrito = document.getElementById('ItemsCarrito');
  const counterItemCart = document.getElementById('ButtonAddToCard');
  // Valor inicial del contador
  let count = 0;
  let countItem = 0;

  // Actualizar el texto del contador
  function updateCounter() {
    counterElement.textContent = count;
  }

  // Manejador de eventos para el botón "Menos"
  decrementButton.addEventListener('click', function() {
    count--;
    updateCounter();
  });

  // Manejador de eventos para el botón "Más"
  incrementButton.addEventListener('click', function() {
    count++;
    updateCounter();
  });

  // Actualizar el contador inicial
  updateCounter();

  function updateCounterItems (){
    if (countItem == 0){
      ItemsCarrito.style.display = none
    }
    ItemsCarrito.textContent = countItem ;

  }
  counterItemCart.addEventListener('click', function() {
    countItem++;
    updateCounterItems();
  });

  updateCounterItems();