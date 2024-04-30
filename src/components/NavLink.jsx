
import { Link } from "react-router-dom";

export default function NavLink({ href, children }) {
    return (
        <Link
            className="inline-flex px-4 py-2 text-white hover:text-green-200  text-lg text-outline items-center mx-auto"
            to={href}
        >
            {children}
        </Link>
    );
}