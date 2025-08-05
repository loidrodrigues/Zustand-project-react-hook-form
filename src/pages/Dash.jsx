import { useEffect } from "react";
import Header from "../components/Header";
import useUserStore from "../stores/userStore";
import { useState } from "react";

export default function Dash() {
  const { user, isLogged } = useUserStore();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [iaReady, setIaReady] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const CheckIaReady = setInterval(() => {
      if (
        window.puter &&
        window.puter.ai &&
        typeof window.puter.ai.txt2img === "function"
      ) {
        setIaReady(true);
        clearInterval(CheckIaReady);
      }
    }, 300);
    return () => clearInterval(CheckIaReady);
  });

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const imgElement = await window.puter.ai.txt2img(prompt, true);
      console.log("Elemento de imagem:", imgElement);
      if (imgElement && imgElement.src) {
        setImageUrl(imgElement.src);
      } else {
        setError("Imagem não foi gerada. Tente novamente com outro prompt.");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br  from-slate-900  to-slate-800 text-white">
      <Header />
      <div className="w-[1000px] mx-auto mt-20">
        <div className="flex gap-2 justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <span className="text-rose-500">
              Hello,{" "}
              <span className="font-semibold text-white italic">
                {isLogged ? user.email : "Guest"}
              </span>
            </span>
          </div>
          <div
            className={`flex items-center justify-center text-sm w-[240px]  rounded ${
              iaReady ? "  text-green-300  " : "  text-yellow-300 "
            }`}
          >
            {iaReady
              ? "🟢 IA is ready"
              : "🟡 IA is not ready, please wait a moment"}
          </div>
        </div>
        <div className="bg-slate-900 p-8 rounded mt-8">
          <form>
            <textarea
              disabled={!iaReady}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full h-[100px] resize-none border border-rose-500/20 p-4 rounded"
              placeholder="Write something..."
            />
            {error && (
              <div className="bg-red-500 text-white p-4 mt-4 rounded">
                {error}
              </div>
            )}
          </form>
          <button
            onClick={handleGenerate}
            className="bg-rose-500 text-white py-2 px-4 rounded  cursor-pointer mt-8"
          >
            {loading ? "Generating..." : "Generate"}
          </button>
          <div>
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Generated image"
                className="mt-8 w-full h-[250px] object-contain rounded"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
