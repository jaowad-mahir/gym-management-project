
import { useState } from "react";
import { Link } from "react-router";
import { Dumbbell, Menu, X, ArrowUpRight} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Membership", href: "#membership" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#10110f]/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">

        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex shrink-0 items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-400 text-black">
            <Dumbbell size={25} strokeWidth={2.5} />
          </div>

          <div>
            <h1 className="text-lg font-extrabold tracking-tight sm:text-xl">GYM<span className="text-lime-400">FLOW</span></h1>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">Management System</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-lime-400">
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link  to="/login"  className="rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:text-lime-400" >Log In</Link>

          <Link to="/register" className="group flex items-center gap-2 rounded-full bg-lime-400 px-5 py-3 text-sm font-bold text-black transition duration-300 hover:bg-lime-300"> Get Started <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button  type="button"  onClick={() => setMenuOpen(!menuOpen)}  aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}  aria-expanded={menuOpen}  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white transition hover:border-lime-400 hover:text-lime-400 lg:hidden">
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/10 transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
          {navLinks.map((link) => (
            <a  key={link.name}  href={link.href}  onClick={closeMenu}  className="rounded-lg px-4 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-lime-400">{link.name}</a>
          ))}

          <div className="mt-3 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
            <Link  to="/login"  onClick={closeMenu}  className="rounded-full border border-white/15 px-4 py-3 text-center text-sm font-semibold transition hover:border-lime-400 hover:text-lime-400">Log In</Link>

            <Link  to="/register"  onClick={closeMenu}  className="flex items-center justify-center gap-1 rounded-full bg-lime-400 px-3 py-3 text-center text-sm font-bold text-black transition hover:bg-lime-300">Get Started <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
