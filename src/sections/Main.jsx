import {useState} from 'react';

const Main = () => {
  const [products, setProducts] = useState([
    {name: 'Producto 1', price: 100},
    {name: 'Producto 2', price: 200},
    {name: 'Producto 3', price: 300},
    {name: 'Producto 4', price: 400},
  ]);

  return (
    <section className="flex justify-evenly max-container max-sm:flex-col-reverse">
      <div className="flex flex-col w-[50%] mb-6 max-sm:w-full">
        <div className="text-center h-[10%]">
          <h2 className="font-VT323 text-2xl">MIS PRODUCTOS:</h2>
        </div>
        <div className="w-full h-full">
          {products.map((product) => (
            <div
              key={product.name}
              className="flex justify-between items-center w-full h-20 border-b border-gray-300"
            >
              <p>{product.name}</p>
              <p>{product.price}</p>
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
