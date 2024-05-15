import trash from '../assets/trash.png';

const ProductCard = ({id, name, price, image, handleDelete}) => {
  return (
    <div
      key={name}
      className="p-2 bg-primary-purple border-4 border-black rounded-md shadow-md shadow-black"
    >
      <div className="border-4 border-black rounded-md mb-2 min-h-32 flex items-center justify-center">
        <img src={image} alt="IMAGEN" className="max-h-full max-w-full" />
      </div>
      <div className="flex justify-between items-end">
        <div className="text-white">
          <p>{name}</p>
          <p className="font-bold">${price}</p>
        </div>
        <div>
          <button>
            <img
              src={trash}
              alt="remove-icon"
              width={24}
              height={24}
              onClick={() => handleDelete(id)}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
