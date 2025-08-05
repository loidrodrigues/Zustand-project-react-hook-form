import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-slate-900  to-slate-800 text-white">
      <div>
        <Header />
      </div>
      <div>
        <Banner />
      </div>
    </div>
  );
}
