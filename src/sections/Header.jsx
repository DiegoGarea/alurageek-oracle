import headerimage from '../assets/headerimage.png';

const Header = () => {
  return (
    <div className="bg-primary-purple flex justify-center items-center w-full h-20">
      <div>
        <img src={headerimage} alt="AluraGeek-Logo" />
      </div>
    </div>
  );
};

export default Header;
