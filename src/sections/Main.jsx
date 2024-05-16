import {useEffect, useState} from 'react';
import ProductCard from '../components/ProductCard';
import ProductForm from '../components/ProductForm';
import {handleDelete} from '../utils/handlers';

const Main = () => {
  const [productsList, setProductsList] = useState(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts === null) return [];

    return JSON.parse(storedProducts);
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(productsList));
  }, [productsList]);

  return (
    <section className="flex justify-evenly max-container max-sm:flex-col-reverse max-sm:p-2">
      <div className="flex flex-col w-[50%] mb-6 max-sm:w-full">
        <div className="text-center h-[10%]">
          <h2 className="font-VT323 text-2xl">MIS PRODUCTOS:</h2>
        </div>
        <div className="w-full h-full grid grid-cols-3 gap-2 max-sm:grid-cols-2">
          {productsList.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              handleDelete={() =>
                handleDelete(product.id, productsList, setProductsList)
              }
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col mb-6 items-center w-[30%] max-sm:w-full">
        <div className="mb-4">
          <h2 className="font-VT323 text-2xl">AGREGAR PRODUCTO:</h2>
        </div>
        <ProductForm setProductsList={setProductsList} />
      </div>
    </section>
  );
};

export default Main;
