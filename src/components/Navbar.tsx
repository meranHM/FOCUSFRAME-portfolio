

const Navbar = () => {
  return (
    <nav
        className="mx-auto flex justify-center gap-6 p-4 text-white md:text-lg"
    >
        <a href="#hero" className="hover:underline">Home</a>
        <a href="#portfolio" className="hover:underline">Portfolio</a>
        <a href="#contact" className="hover:underline">Contact</a>
    </nav>
  )
}

export default Navbar