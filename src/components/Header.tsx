import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  document.addEventListener('scroll', () => {
    setIsScrolled(window.scrollY > 150 ? true : false);
  });

  return (
    <header
      className={`fixed w-full flex justify-between items-center px-14 transition-all duration-500 text-white border-b-1 ${
        isScrolled
          ? 'bg-secondary bg-opacity-80 backdrop-blur-sm py-5'
          : 'bg-none py-4'
      }`}
    >
      <Link to="/">
        <h1 className="font-philosopher text-3xl">Rescentify</h1>
      </Link>
      <nav className="flex gap-8">
        <Link to="/">Beranda</Link>
        <Link to="#">Katalog</Link>
        <Link to="#">Tentang Kami</Link>
      </nav>
    </header>
  );
}

export default Header;
