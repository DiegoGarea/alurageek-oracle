import trash from '../assets/trash.png';

const ProductCard = ({name, price, image}) => {
  return (
    <div
      key={name}
      className="p-2 bg-primary-purple border-4 border-black rounded-md shadow-md shadow-black"
    >
      <div className="border-4 border-black rounded-md mb-2">
        <img src={image} alt={name} />
      </div>
      <div className="flex justify-between items-end">
        <div className="text-white">
          <p>{name}</p>
          <p className="font-bold">${price}</p>
        </div>
        <div>
          <button>
            <img src={trash} alt="remove-icon" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
