import React, { useState, useRef } from 'react';

export function App() {
  const [resultado, setResultado] = useState('');
  const inputRefValor = useRef(null);
  const inputRefPessoas = useRef(null);
  const inputRefPorcentagem = useRef(null);

  function calculaConta() {
    const valorDaConta = parseFloat(inputRefValor.current.value);
    const pessoas = parseInt(inputRefPessoas.current.value);
    const porcentagemGorjeta = parseFloat(inputRefPorcentagem.current.value);

    if (isNaN(valorDaConta) || isNaN(pessoas) || isNaN(porcentagemGorjeta)) {
      setResultado('Por favor, preencha todas as informações corretamente.');
      return;
    }

    const valorGorjeta = (porcentagemGorjeta / 100) * valorDaConta;
    const valorTotalConta = valorDaConta + valorGorjeta;
    const valorPorPessoa = valorTotalConta / pessoas;

    setResultado(`Valor total da conta: $ ${valorTotalConta}
      Valor por Pessoa: $ ${valorPorPessoa.toFixed(2)}
      Valor da Gorjeta: $ ${valorGorjeta}`);
  }

  return (
    <main>
      <h1>Calculadora de Gorjeta</h1>
      <div className="input-container">
        <div>
          <input ref={inputRefValor} placeholder="Valor da conta" type="number" aria-label="Valor da conta" />
        </div>
        <div>
          <input ref={inputRefPessoas} placeholder="Quantas Pessoas" type="number" aria-label="Quantidade de pessoas" />
        </div>
        <div>
          <input ref={inputRefPorcentagem} placeholder="%" min={0} max={20} type="number" aria-label="Porcentagem da gorjeta" />
        </div>
        <button onClick={calculaConta}>Calcular</button>
      </div>
      <div id="resultado">{resultado}</div>
    </main>
  );
}

