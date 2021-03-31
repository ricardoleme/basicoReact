import React from 'react'

// Ctrl + F2 para renomear em grupo
function MaiusculoChildren(props){ /* props = propriedades */
    const textoRecebido = props.children
    const textoMaiusculo = textoRecebido.toUpperCase() //converte em maiúsculo.
  return <>{textoMaiusculo}</>
}

export default MaiusculoChildren