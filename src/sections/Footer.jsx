import headerimage from '../assets/headerimage.png';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center bg-primary-purple w-full h-40">
      <div className="leading-6">
        <img src={headerimage} alt="footer-image" />
        <p className="text-center text-white">DESARROLADO POR DIEGO GONZALEZ</p>
        <p className="text-center text-gray-300">ALURA LATAM- 202X</p>
      </div>
    </footer>
  );
};

export default Footer;
