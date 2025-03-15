interface NavbarProps {
  setPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setPage }) => {
  
  return (
    <nav className="navbar">
      <button className="button__main" onClick={() => setPage("home")}>T</button>
      <div className="gap-05">
        <button className="button__main--mini" onClick={() => setPage("history")}>H</button>        
        <button className="button__main--mini" onClick={() => setPage("about")}>A</button>
      </div>
    </nav>
  );
};

export default Navbar;