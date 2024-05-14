import headerimage from '../assets/headerimage.png';

const Header = () => {
  return (
    <header className="bg-primary-purple flex justify-center items-center w-full h-28 mb-6 ">
      <div>
        <img src={headerimage} alt="AluraGeek-Logo" />
      </div>
    </header>
  );
};

export default Header;
