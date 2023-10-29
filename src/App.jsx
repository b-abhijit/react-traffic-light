import { useState, useEffect } from 'react'
import './style.css'

function App() {
  const [redBgColor, setRedBgColor] = useState('')
  const [yellowBgColor, setYellowBgColor] = useState('')
  const [greenBgColor, setGreenBgColor] = useState('')
  const [redBgImage, setRedBgImage] = useState('linear-gradient(rgb(15, 15, 15), rgb(53, 52, 52))')
  const [yellowBgImage, setYellowBgImage] = useState('linear-gradient(rgb(15, 15, 15), rgb(53, 52, 52))')
  const [greenBgImage, setGreenBgImage] = useState('linear-gradient(rgb(15, 15, 15), rgb(53, 52, 52))')

  useEffect(() => {
    
    let timer = setTimeout(function() {
      stop();
    }, 10);

    function stop() {
      setRedBgImage('none');
      setYellowBgImage('linear-gradient(rgb(15, 15, 15), rgb(53, 52, 52))');
      setGreenBgImage('linear-gradient(rgb(15, 15, 15), rgb(53, 52, 52))');        

      setRedBgColor('#FF2453');
      setYellowBgColor('');
      setGreenBgColor('');
      
      timer = setTimeout(wait, 4000);
    }

    function wait() {
      setRedBgImage('linear-gradient(rgb(15, 15, 15), rgb(53, 52, 52))');
      setYellowBgImage('none');
      setGreenBgImage('linear-gradient(rgb(15, 15, 15), rgb(53, 52, 52))');     

      setRedBgColor('');
      setYellowBgColor('#FFD119');
      setGreenBgColor('');
      
      timer = setTimeout(go, 2000);
    }

    function go() {
      setRedBgImage('linear-gradient(rgb(15, 15, 15), rgb(53, 52, 52))');
      setYellowBgImage('linear-gradient(rgb(15, 15, 15), rgb(53, 52, 52))');
      setGreenBgImage('none');     

      setRedBgColor('');
      setYellowBgColor('');
      setGreenBgColor('#1FFF78'); 

      timer = setTimeout(stop, 3000);
    }

    return () => {
      clearTimeout(timer);
    }

  }, []);

  return (
    <>
      <div className="container">
        <p>Traffic Light</p>
        
        <div className="flexbox-container" >
          <div className="flexbox-item flexbox-item-1" style={{ backgroundColor: `${redBgColor}`, backgroundImage: `${redBgImage}` }}></div>
          <div className="flexbox-item flexbox-item-2" style={{ backgroundColor: `${yellowBgColor}`, backgroundImage: `${yellowBgImage}` }}></div>
          <div className="flexbox-item flexbox-item-3" style={{ backgroundColor: `${greenBgColor}`, backgroundImage: `${greenBgImage}` }}></div>
        </div>
      </div>
      
    </>
  )
}

export default App
