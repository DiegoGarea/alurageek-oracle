import {useState} from 'react';
import {nintendoSwitch, gameboy, trash} from '../assets';

const Main = () => {
  const [products, setProducts] = useState([
    {name: 'Producto 1', price: 100, image: gameboy},
    {name: 'Producto 2', price: 200, image: nintendoSwitch},
    {name: 'Producto 3', price: 100, image: gameboy},
    {name: 'Producto 4', price: 200, image: nintendoSwitch},
    {name: 'Producto 5', price: 100, image: gameboy},
    {name: 'Producto 6', price: 200, image: nintendoSwitch},
    {name: 'Producto 7', price: 100, image: gameboy},
    {name: 'Producto 8', price: 200, image: nintendoSwitch},
    {name: 'Producto 9', price: 100, image: gameboy},
  ]);

  return (
    <section className="flex justify-evenly max-container max-sm:flex-col-reverse max-sm:p-2">
      <div className="flex flex-col w-[50%] mb-6 max-sm:w-full">
        <div className="text-center h-[10%]">
          <h2 className="font-VT323 text-2xl">MIS PRODUCTOS:</h2>
        </div>
        <div className="w-full h-full grid grid-cols-3 gap-2 max-sm:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.name}
              className="p-2 bg-primary-purple border-4 border-black rounded-md shadow-md shadow-black"
            >
              <div className="border-4 border-black rounded-md mb-2">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="flex justify-between items-end">
                <div className="text-white">
                  <p>{product.name}</p>
                  <p className="font-bold">$ {product.price.toFixed(2)}</p>
                </div>
                <div>
                  <img src={trash} alt="remove-icon" width={24} height={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col mb-6 items-center w-[30%] max-sm:w-full">
        <div className="mb-4">
          <h2 className="font-VT323 text-2xl">AGREGAR PRODUCTO:</h2>
        </div>
        <div className="flex flex-col items-center w-[60%]">
          <input type="text" placeholder="nombre..." className="input" />
          <input type="text" placeholder="precio..." className="input" />
          <input type="text" placeholder="imagen..." className="input" />
        </div>
        <div className="flex w-[60%] justify-between max-sm:justify-evenly">
          <button className="px-5 py-1 rounded-md bg-primary-blue text-white">
            Agregar
          </button>
          <button className="px-5 py-1 rounded-md border border-primary-blue text-primary-blue">
            Limpiar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Main;
