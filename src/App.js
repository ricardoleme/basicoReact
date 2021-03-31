import React, { useState, useEffect} from 'react'
import Maiusculo from './components/Maiusculo'
import MaiusculoChildren from './components/MaiusculoChildren'
import MaiusculoPlus from './components/MaiusculoPlus'

import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App(){
  const [contador, setContador] = useState(1)
  const [numero1, setNumero1] = useState('')
  const [numero2, setNumero2] = useState('')
  const [resultado, setResultado] = useState('')
  //const [botaoDesabilitado, setBotaoDesabilitado] = useState(true)

  useEffect(() => { // Executa por padrão, apenas 1 vez no carregamento
     document.title = "Calculadora React"
  },[])

  useEffect(() => {
    if (numero1.trim() && numero2.trim()) { //trim - remove espaços em branco
      soma(numero1, numero2)
    } else {
     setResultado(0)
    }
  },[numero1, numero2])

  function adicionaContador(){ 
    setContador(contador+1)
  }
  function removeContador(){
    setContador(contador-1)
  }
  function soma(num1, num2){
    setResultado(parseFloat(num1)+parseFloat(num2))
  }
  

  return(
    <>
    <Container>
    <Row>
      <Col lg={6} xs={12}>
      <Form>
        <Form.Group>
          <Form.Label>Número 1</Form.Label>
          <Form.Control type="number" required min="0" max="999" 
                       value={numero1} onChange={e => setNumero1(e.target.value)}></Form.Control>
          <Form.Control.Feedback type="invalid">Informe o número 1</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Número 2</Form.Label>
          <Form.Control type="number" required min="0"
            value={numero2} onChange={e => setNumero2(e.target.value)}></Form.Control>
          <Form.Control.Feedback type="invalid">Informe o número 2</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Resultado</Form.Label>
          <Form.Control type="number" disabled={true} value={resultado}></Form.Control>
        </Form.Group>
        <Button style={{color: "#FF0000", background: "#FFF000", marginTop: 20}} type="submit">Calcular</Button>
      </Form> 
      </Col>
    </Row>
    </Container>
        <div>
          <label>Número 1: </label>
          <input type="number" value={numero1} onChange={e => setNumero1(e.target.value)} /> <br></br>
          <label>Número 2: </label>
          <input type="number" value={numero2} onChange={e => setNumero2(e.target.value)} /> <br></br>
          <label>Resultado</label>
          <input type="text" readOnly value={resultado} /> <br></br>
         
         {/*<button disabled={botaoDesabilitado}  onClick={() => {soma(numero1, numero2)}}>Calcular</button>*/}
        </div> 
        <br></br>
        <div style={{background: "#CCCCCC"}}>
          Contador: {contador}  <br></br>
          <button onClick={adicionaContador}>Adicionar</button>
          <button onClick={removeContador}>Remover</button>
        </div>









        <div>
          <Maiusculo texto="texto a ser convertido" />  <br></br>
          <MaiusculoChildren>
              outro texto para converter
          </MaiusculoChildren> <br></br>
          <MaiusculoPlus texto="texTO a SER convertido" cor="#FF0000" />
          <MaiusculoPlus texto="texto a ser convertido 2" cor="#0000FF" />
        </div>
    </>
  )
}

export default App