import { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import imagenFondo from './img/imagenFondo.png';


function App() {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');


  return (
    <main className='imagen' style={{backgroundImage:`url(${imagenFondo})`}}>
      <section className='welcome'>
        <h1 >WELCOME TO THE WEBSITE</h1>
      </section>

      <section className='cardlogin'>
      <h2>LOGIN</h2>
      <div className='container'>
          <Input
            nombre={nombre}
            setNombre={setNombre}
            password={password}
            setPassword={setPassword} 
            
          />        
          
          
          {(password === '252525') ? <Button/>  : null}   
      </div>
      </section>

    </main>
  );
}

export default App;
