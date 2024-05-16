import {v4} from 'uuid';

const handleSubmit = (
  newItem,
  newItemPrice,
  newItemImage,
  setNewItem,
  setNewItemPrice,
  setNewItemImage,
  setProductsList
) => {
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

  if (newItem === '' || newItemPrice === '' || !newItemImage) return;
  addItem(newItem, newItemPrice, newItemImage);
  setNewItem('');
  setNewItemPrice('');
  setNewItemImage(null);
};

const handleDelete = (id, productsList, setProductsList) => {
  setProductsList((currentList) =>
    currentList.filter((product) => product.id !== id)
  );
};

export {handleSubmit, handleDelete};
