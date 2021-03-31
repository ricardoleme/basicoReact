import React from 'react'

// Ctrl + F2 para renomear em grupo
function Maiusculo({texto}){
    const textoRecebido = texto
    const textoMaiusculo = textoRecebido.toUpperCase() //converte em maiúsculo.
  return <>{textoMaiusculo}</>
}

export default Maiusculo