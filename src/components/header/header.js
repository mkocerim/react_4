function Header() {
  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <span className="fs-4">Pricing example</span>
        </a>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <a className="me-3 py-2 text-dark text-decoration-none" href="#">
            Main Page
          </a>
          <a className="me-3 py-2 text-dark text-decoration-none" href="#">
            Categories
          </a>
          <a className="me-3 py-2 text-dark text-decoration-none" href="#">
            Enter
          </a>
          <a className="py-2 text-dark text-decoration-none" href="#">
            Enrol
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
