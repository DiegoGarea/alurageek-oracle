import {useEffect, useState} from 'react';
import {v4} from 'uuid';
import ProductCard from '../components/ProductCard';

const Main = () => {
  const [newItem, setNewItem] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');
  const [newItemImage, setNewItemImage] = useState();
  const [productsList, setProductsList] = useState(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts === null) return [];

    return JSON.parse(storedProducts);
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(productsList));
  }, [productsList]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newItem === '' || newItemPrice === '' || !newItemImage) return;
    addItem(newItem, newItemPrice, newItemImage);
    setNewItem('');
    setNewItemPrice('');
    setNewItemImage(null);
  };

  const addItem = (title, price, image) => {
    setProductsList((currentList) => [
      ...currentList,
      {
        id: v4(),
        name: title,
        price: price,
        image: URL.createObjectURL(image),
      },
    ]);
  };

  const handleDelete = (id) => {
    setProductsList((currentList) =>
      currentList.filter((product) => product.id !== id)
    );
  };

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
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col mb-6 items-center w-[30%] max-sm:w-full">
        <div className="mb-4">
          <h2 className="font-VT323 text-2xl">AGREGAR PRODUCTO:</h2>
        </div>
        <form
          className="flex flex-col items-center w-[60%]"
          onSubmit={handleSubmit}
        >
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            placeholder="nombre..."
            className="input"
            required
          />
          <input
            value={newItemPrice}
            pattern="[0-9]*\.?[0-9]*"
            onChange={(e) => setNewItemPrice(e.target.value)}
            type="text"
            placeholder="precio..."
            className="input"
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNewItemImage(e.target.files[0])}
            className="input"
          />
          <div className="flex w-[60%] justify-center max-sm:justify-evenly">
            <button className="px-5 py-1 rounded-md bg-primary-blue text-white">
              Agregar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Main;
