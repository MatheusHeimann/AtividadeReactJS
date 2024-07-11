import React, { useState, useEffect } from 'react';

const RelogioComMensagem = () => {
  const [time, setTime] = useState(new Date());
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Atualiza o relógio a cada segundo
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Exibe a mensagem por 5 segundos
    if (showMessage) {
      const timeoutId = setTimeout(() => {
        setShowMessage(false);
      }, 5000);

      // Limpa o timeout se o componente for desmontado ou se showMessage mudar
      return () => clearTimeout(timeoutId);
    }
  }, [showMessage]);

  const handleShowMessage = () => {
    setShowMessage(true);
  };

  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
      <button onClick={handleShowMessage}>Mostrar Mensagem</button>
      {showMessage && <p>Esta é uma mensagem temporária!</p>}
    </div>
  );
};

export default RelogioComMensagem;
