import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-wrap gap-4">
        <li>
          <Link to="/" className="hover:text-blue-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/football" className="hover:text-blue-200">
            Football
          </Link>
        </li>
        <li>
          <Link to="/basketball" className="hover:text-blue-200">
            Basketball
          </Link>
        </li>
        <li>
          <Link to="/tennis" className="hover:text-blue-200">
            Tennis
          </Link>
        </li>
        <li>
          <Link to="/f1" className="hover:text-blue-200">
            F1
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
