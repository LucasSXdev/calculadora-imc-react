import { useState } from "react";
import styles from "./App.module.css";

export default function App() {
  const [heighfield, setHighField] = useState(0);
  const [weightfield, setWeightField] = useState(0);
  return (
    <main className="h-screen">
      <header className="w-full border-2 py-2">
        <div className="p-2 bg-cyan-800 text-white text-center w-40 h-10">
          IMC
        </div>
      </header>
      <div className="w-full flex gap-x-10 justify-center px-10  h-full ">
        <div className="p-20  w-1/2 my-10 h-4/5">
          <h1 className="text-5xl font-bold ">Calcule o seu IMC</h1>
          <p className="my-5 text-xl text-gray-500">
            Imc é o índice para massa corpórea, parâmetro utilizado pela
            Organização Mundial da Saúde para índice de massa corpórea.
          </p>
          <input
            className="outline-none w-full p-1 my-5 border-b-2 border-gray-500"
            type="number"
            placeholder="Digite a sua altura Ex:1.5 (em metros)"
            value={heighfield > 0 ? heighfield : ""}
            onChange={(e) => setHighField(parseFloat(e.target.value))}
          />

          <input
            className="block my-5 w-full outline-none p-1 border-b-2 border-gray-500  "
            type="number"
            placeholder="Digite o seu peso Ex:75.3 (em kg)"
            value={weightfield > 0 ? weightfield : ""}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
          />

          <button className="w-full py-2 rounded text-white bg-cyan-500">
            Calcular
          </button>
        </div>

        <div className="p-2  w-1/2 my-10 h-4/5 grid grid-cols-2 auto-rows-auto gap-5 ">
          <div className="bg-gray-500 text-white flex flex-col items-center justify-center w-full rounded h-full">
            <h1 className="text-3xl my-5">Magreza</h1>
            <p>Seu imc está entre 0 e 18.5</p>
          </div>

          <div className="bg-green-500 text-white flex flex-col items-center justify-center w-full rounded h-full">
            <h1 className="text-3xl my-5">Normal</h1>
            <p>Seu imc está entre e 24.9</p>
          </div>
          <div className="bg-yellow-500 text-white flex flex-col items-center justify-center w-full rounded h-full">
            <h1 className="text-3xl my-5">Sobrepeso</h1>
            <p>Seu imc está entre 24.9 e 30</p>
          </div>
          <div className="bg-red-500 text-white flex flex-col items-center justify-center w-full rounded h-full">
            <h1 className="text-3xl my-5">Obesidade</h1>
            <p>Seu imc está entre 30 e 99</p>
          </div>
        </div>
      </div>
    </main>
  );
}
