import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="space flex items-center justify-between px-10 pt-10">
      <Link to="/" className="text-5xl">
        Pizza React Co.
      </Link>

      <p className="font-semibold">Cukhoaimoon</p>
    </div>
  );
}

export default Header;
