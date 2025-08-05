import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../stores/userStore";

export default function Login() {
  const { register, handleSubmit, formState } = useForm();
  const login = useUserStore((state) => state.login);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    try {
      login({
        email: data.email,
        password: data.password,
      });
      alert("Login efetuado com sucesso");
      navigate("/dash");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen flex flex-col bg-gradient-to-br items-center justify-center  gap-8 from-slate-900  to-slate-800 text-white">
      <div className="flex  items-center gap-4">
        <span className="text-sm py-1 text-gray-400 italic font-light hover:text-rose-500 cursor-pointer duration-200">
          <Link to="/">IA PROJECT | </Link>
        </span>
        <h1 className="text-2xl">Login to your account</h1>
      </div>
      <div className="flex flex-col bg-slate-900 p-8 rounded w-[400px]">
        <form
          className="w-full flex flex-col gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="Email">E-mail</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter with your email"
              className="p-2 rounded border"
            />
            <p className="text-sm text-rose-500">
              {formState.errors.email && formState.errors.email.message}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Enter with your password"
              className="p-2 rounded border"
            />
            <p className="text-sm text-rose-500">
              {formState.errors.password && formState.errors.password.message}
            </p>
          </div>
          <div>
            <button
              type="submit"
              className="bg-rose-500 text-white py-2 px-4 rounded w-full"
            >
              Login
            </button>
          </div>
          <div>
            <span className="text-sm">
              This is not a real app -{" "}
              <span className="text-rose-500">
                we're not have server, you can login with any data.
              </span>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
