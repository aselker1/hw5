import { useState,useEffect } from "react";


function App  ()  {
  const [click, setClick] = useState(0);
  const [num, setNum] = useState(10);
  const [time, setTime] = useState(num * 1000);
  const [result, setResult] = useState(null);
  const [count, setCount] = useState(false);
  
  
  useEffect(() => {
    let timer;
    
    if (count && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 10 : prevTime));
      }, 1);
    } else if (count && time === 0) {
      setResult(click / (num));
    }
    
    return () => clearInterval(timer);
  }, [time, num, count, click]);
  
  const displayTime = () => {
    const seconds = Math.floor(time / 1000);
    const milliseconds = (time % 1000).toString().padStart(3, '0');
    return `${seconds}.${milliseconds} s`;
  };
  
  return (
    <div >
      <h1 >
        {result !== null && `${result.toFixed(2)} кол-во кликов в секунду`}
      </h1>    
      <h1>{click}</h1>
      <h1>
        {displayTime()}
      </h1>
      
      <button onClick = {() => {
       setClick(click+1)
       setCount(true);
      }}>Click me</button>
     
      
<button onClick = {() => {
        setClick(0);
        setTime(num * 1000);
        setResult(null);
        setCount(false);
      }}>Reset</button>
    </div>
  );
};
 

export default App;
