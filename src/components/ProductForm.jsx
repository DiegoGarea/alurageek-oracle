// ProductForm.js

import {useState} from 'react';
import {handleSubmit} from '../utils/handlers';

const ProductForm = ({setProductsList}) => {
  const [newItem, setNewItem] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');
  const [newItemImage, setNewItemImage] = useState(null);

  return (
    <form
      className="flex flex-col items-center w-[60%]"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(
          newItem,
          newItemPrice,
          newItemImage,
          setNewItem,
          setNewItemPrice,
          setNewItemImage,
          setProductsList
        );
      }}
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
  );
};

export default ProductForm;
