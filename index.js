  // Seleccionar elementos del DOM
  const counterElement = document.getElementById('counter');
  const decrementButton = document.getElementById('decrementButton');
  const incrementButton = document.getElementById('incrementButton');

  
  const ItemsCarrito = document.getElementById('ItemsCarrito');
  const counterItemCart = document.getElementById('ButtonAddToCard');
  // Valor inicial del contador
  let count = 0;

  // Actualizar el texto del contador
  function updateCounter() {
    counterElement.textContent = count;
  }

  // Manejador de eventos para el botón "Menos"
  decrementButton.addEventListener('click', function() {
    if (count > 0) {
      count--;
      updateCounter();
    }else{
      counterElement.textContent = "0";
    }
  });

  // Manejador de eventos para el botón "Más"
  incrementButton.addEventListener('click', function() {
    count++;
    updateCounter();
  });

  // Actualizar el contador inicial
  updateCounter();

  function updateCounterItems (){
    if (count == 0){
      ItemsCarrito.style.display = none
    }
    ItemsCarrito.textContent = count;

  }
  counterItemCart.addEventListener('click', function() {
    updateCounterItems();
  });

  updateCounterItems();