import { Link } from "react-router-dom";
import useUserStore from "../stores/userStore";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const { user, isLogged, logout } = useUserStore();
  const navigate = useNavigate();
  const loginNavigate = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="bg-rose-500 text-white w-full p-4 px-10">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold ">IA PROJECT</h1>
        <div className="flex gap-2">
          <ul className="flex gap-4">
            <Link to="/" className="hover:text-gray-200 cursor-pointer">
              Contacts
            </Link>

            <li>
              {isLogged ? (
                <span>{user.email}</span>
              ) : (
                <Link
                  to="/login"
                  className="hover:text-gray-200 cursor-pointer"
                >
                  Login
                </Link>
              )}
            </li>
            <li>
              {isLogged && (
                <button
                  onClick={loginNavigate}
                  className="text-sm text-gray-200 bg-slate-900 py-1 px-2 rounded cursor-pointer"
                >
                  Logout
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
