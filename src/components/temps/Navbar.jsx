import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import BookIcon from '@mui/icons-material/Book';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { Link } from "react-router-dom";
function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/"><span classNameName="sr-only">Home</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">BlogList</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog/create">Create Blog</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/blog/:id">View Blog</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/blog/edit/:id">Edit Blog</Link>
        </li>

        </ul>
      </div>
      </nav>
  );
}




export default Navbar;
