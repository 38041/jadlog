import { useState } from "react";
import "./App.css";

export default function App() {

  const CIDADES = [
    { nome: "MG", preco: 20, prazo: 2 },
    { nome: "SP", preco: 15, prazo: 1 },
    { nome: "RJ", preco: 25, prazo: 3 },
    { nome: "SC", preco: 30, prazo: 4 },
  ];

  const [cidade, setCidade] = useState(CIDADES[0]);
  const [peso, setPeso] = useState(1);
  const [frete, setFrete] = useState(0);
  const [prazo, setPrazo] = useState(0);

  const calcularFrete = () => {
    const valor = cidade.preco * peso;
    setFrete(valor);
    setPrazo(cidade.prazo);
  };

  return (
    <main>
      <section>

        <h1>🧊 Jadlog Frete</h1>

        <input
          type="text"
          className="input"
          placeholder="Digite o CEP ou cidade"
        />

        <input
          type="number"
          className="input"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(Number(e.target.value))}
        />

        <div className="box">
          <div>
            <p>Tipo</p>
            <span>Normal / Expresso</span>
          </div>
          <div>
            <p>Destino</p>
            <span>{cidade.nome}</span>
          </div>
        </div>

        <p className="titulo">Resultado</p>

        <div className="barra">
          <div 
            className="progresso"
            style={{ width: `${(prazo / 5) * 100}%` }}
          ></div>
        </div>

        <p className="resultado">
          R$ {frete.toFixed(2)} • {prazo} dias
        </p>

        <button className="btn" onClick={calcularFrete}>
          Calcular Frete
        </button>

        <div className="cidades">
          {CIDADES.map((c) => (
            <button key={c.nome} onClick={() => setCidade(c)}>
              {c.nome}
            </button>
          ))}
        </div>

      </section>
    </main>
  );
}