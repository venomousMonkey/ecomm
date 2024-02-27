import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;

  //document.querySelector('#dev-products').innerHTML = products;
};

// Context/Situation #1
// We are running this file in development in isolation
// we are using our local index.html file
// which definitely has an element iwth an id of 'dev-products'
// we want to immediately render our app into that eleemnt
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  // Assuming our container doesn't have an element
  // with id 'dev-products'...
  if (el) {
    // we are probably running in isolation
    mount(el);
  }
}

// Context/Situation #2
// We are running this file in development or production
// through the container app
// no guarantee that an element with an id of 'dec-products' exists
// we do not want to try to immediately render  the app
export { mount };
