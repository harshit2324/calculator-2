import React, { useState } from "react";
import { Current, Prevoius, Screen, Button } from "../styles/main";
import { Container } from "../styles/main";

function Calculator() {
  const [current, Setcurrent] = useState("");
  const [prevoius, setPrevios] = useState("");
  const [oprations, setopration] = useState("");

  const appendvelueHandler = (el) => {
    const velue = el.target.getAttribute("data");
    if (velue === "." && current.includes(".")) return;
    Setcurrent(current + velue);
  };
  const deletehandler = () => {
    Setcurrent(String(current).slice(0, -1));
  };

  const allclearHandler = () => {
    Setcurrent("");
    setopration("");
    setPrevios("");
  };

  const chooseoprationHandler = (el) => {
 if(current === '') return
 if(prevoius !== '') {
  let velue = compute()
  setPrevios(velue)
 }else {
  setPrevios(current)
 }
 Setcurrent('')
 setopration(el.target.getAttribute("data"))
  }
  const equalhandler = () => {
    let value = compute()
    if(value === undefined || value == null) return
    Setcurrent(value)
    setPrevios('')
    setopration('')
  }
  const compute = () => {
    let result;
    let prevoiusNumber = parseFloat(prevoius)
    let currentNumber = parseFloat(current)
    if(isNaN(prevoiusNumber) || isNaN(currentNumber)) return
    switch(oprations){
      case '÷':
      result = prevoiusNumber / currentNumber;
      break;
      case 'x':
      result = prevoiusNumber * currentNumber;
      break;
      case '-':
      result = prevoiusNumber - currentNumber;
      break;
      case '+':
        result = prevoiusNumber + currentNumber;
        break;
        default:return
    }
    return result
  }
  return (
    <>
      <Container>
        <Screen>
          <Prevoius>
            {prevoius} {oprations}
          </Prevoius>
          <Current>{current}</Current>
        </Screen>
        <Button onClick={allclearHandler} gridSpan={2} control>
          AC
        </Button>
        <Button onClick={deletehandler}>DEL</Button>
        <Button data={"÷"} onClick={chooseoprationHandler} >÷</Button>
        <Button data={7} onClick={appendvelueHandler}>
          7
        </Button>
        <Button data={8} onClick={appendvelueHandler}>
          8
        </Button>
        <Button data={9} onClick={appendvelueHandler}>
          9
        </Button>
        <Button onClick={chooseoprationHandler} data={"x"}  operation>x</Button>
        <Button data={4} onClick={appendvelueHandler}>
          4
        </Button>
        <Button data={5} onClick={appendvelueHandler}>
          5
        </Button>
        <Button data={6} onClick={appendvelueHandler}>
          6
        </Button>
        <Button onClick={chooseoprationHandler} data={"+"} operation>+</Button>
        <Button data={1} onClick={appendvelueHandler}>
          1
        </Button>
        <Button data={2} onClick={appendvelueHandler}>
          2
        </Button>
        <Button data={3} onClick={appendvelueHandler}>
          3
        </Button>
        <Button onClick={chooseoprationHandler} data={"-"}  operation>-</Button>
        <Button data={"."} decimal onClick={appendvelueHandler}>
          .
        </Button>
        <Button data={0} onClick={appendvelueHandler}>
          0
        </Button>
        <Button gridSpan={2} onClick={equalhandler} equals>
          =
        </Button>
      </Container>
    </>
  );
}

export default Calculator;
