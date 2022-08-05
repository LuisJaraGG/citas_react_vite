import { useState,useEffect } from 'react'
import Header from './componets/header'
import Formulario from './componets/formulario'
import { PasienteLista } from './componets/PacienteLista'

function App() {
  const [pacientes,setPacientes] = useState([]);
  const [paciente,setPaciente] = useState({});

  useEffect(()=>{
      const pacienteslocales = JSON.parse(localStorage.getItem("pacientes"))
      pacienteslocales.length >0 && setPacientes(pacienteslocales)

  },[]);

  useEffect(()=>{
    localStorage.setItem("pacientes",JSON.stringify(pacientes))
  },[pacientes]);

  //Eliminar Paciente
  const eliminarpaciente =(id) =>{
    const pacienteslimpios = pacientes.filter(item => item.id !== id);
    setPacientes(pacienteslimpios);
  }
  
  //Funcion para tomar valor de hijo a padre
  const toma1valor =(valor)=>{
    // console.log(valor);
  }
  return (
    <div className='mt-20 mx-auto container'>
      <Header
      numeros ={1}
      //enviado funcion para toma de valores
      toma1valor={toma1valor}
      />
      <div className='md:flex mt-10 '>
      <Formulario
      setPacientes = {setPacientes}
      pacientes = {pacientes}
      paciente ={paciente}
      setPaciente={setPaciente}
      />
      
      <PasienteLista
      pacientes ={pacientes}
      setPaciente={setPaciente}
      eliminarpaciente={eliminarpaciente}
      />
      
      </div>
    </div>
  )
}


export default App
