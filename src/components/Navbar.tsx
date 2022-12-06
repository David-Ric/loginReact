import React, { useState } from 'react';
import Footer from '../components/Footer';
import '../styles/Navbar.scss';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FiUsers } from "react-icons/fi";
import api from '../services/api';




export default function Navbar() {
    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [showModalCigel, setShowModalCigel] = useState(false);
    const handleCloseModalCigel = () => setShowModalCigel(false);
    
    const params = {
    "serviceName" : "MobileLoginSP.login", 
    "requestBody":{
       "NOMUSU":{
          "$":user
       }, 
       "INTERNO":{
          "$":senha
       }, 
       "KEEPCONNECTED": {
          "$":"S"
       } 
    } 
 }
    
    const [active, setMode] = useState(false);


    function handleShow(){
      setShow(true);
      setMode(false);
   
    }

    function handleShowModalcigel(){
      setShowModalCigel(true);
      setMode(false);
   
    }


    function handleSubmit(){

    }

    function handleSubmitCigel(){

    }


    const ToggleMode = () => {
        setMode(!active);
      };

    //=========== fução login ==================================//
    async function Login() {
     console.log('dados',params)
      api.post('?serviceName=MobileLoginSP.login&outputType=json', {params})
        .then(response => {
         handleCloseModalCigel()
        })
        .catch(error => {
         
        })
    }

    //==========================================================//



  return (
    <div className='total-nav'>
        
    <div className="Nav">
      <div className='logo-lik'>
      <a  href='/'>
        <div className='logo-navbar'></div>
        </a>
      </div>
        
        <div className='menu'>
        <ul>
            <li><a>A Empresa</a></li>
            <li><a>Nossas Marcas</a></li>
            <li><a href='/admin'>Adminstrativo</a></li>
        </ul>
        <div className='divisa'></div>
        <ul>
            <li className='portal-menu'>
              <a 
              onClick={handleShowModalcigel}
            >Portal Alyne</a></li>
        </ul>
        
    <button className='button-geral' onClick={handleShow}>Login</button>
    </div>
    <div
            className={active ? "iconMenu iconActive" : "iconMenu"}
            onClick={ToggleMode}
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="hamburguer hamburguerIcon"></span>
          </div>
          <div>
          
          </div>

{/* =============== Modal Login =========================================================================== */}

    <Modal show={show} onHide={handleClose}>
        <Modal.Header className='header-modal'>
            <button className='button-close-modal' onClick={handleClose}>X</button>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='image-modal'></div>
            <form onSubmit={Login}>
            <input placeholder='Usuario' 
            className='form-control input-login' 
            type="text" name='user' 
            onChange={(e)=>{
              setUser(e.target.value);
            }}
            />
            
            <input placeholder='Senha' 
            className='form-control input-login' 
            type="password" 
            name='password'
            onChange={(e)=>{
              setSenha(e.target.value);
            }}
            />


        <Button className='btn-login'
          style={{width:"90%",
                margin: "auto",
                height: 50,
                marginLeft: "5%",
                fontFamily: "Sintony,sans-serif",
                fontSize: 16
                }} variant="primary" onClick={Login}>
            Entrar
          </Button>
          </form>
        </Modal.Body>
      </Modal>

      {/* =============== Modal Cigel =========================================================================== */}

      <Modal show={showModalCigel} onHide={handleCloseModalCigel}>
        <Modal.Header className='header-modal d-flex'>
        <div className='image-cigel'></div><h1 className='textHeaderCicel'>- Web Aplicação</h1>
            <button className='button-close-modalCigel' onClick={handleCloseModalCigel}>X</button>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={handleSubmitCigel}>
              <h1 className='cabecalho-modal-cigel'>Informações da conta</h1>

            <input placeholder='Usuario' className='form-control input-login' type="text" name='user' />
            <input placeholder='Senha' className='form-control input-login' type="password" name='password'/>
           
            <div className='check-modal-cigel'>
            <input className="check-conect" type="checkbox" />
            <p className='text-check'>Mantenha-me conectado</p>
            <a className='link-recuperar-senha'>Recuperar senha</a>
            </div>
            
        <Button className='btn-login'
          style={{width:"90%",
                margin: "auto",
                height: 50,
                marginLeft: "5%",
                fontFamily: "Sintony,sans-serif",
                fontSize: 16
                }} variant="primary" onClick={handleCloseModalCigel}>
            Entrar
          </Button>
          </form>
        </Modal.Body>
      </Modal>
     
                

    </div>

      {/* =============== Menu Mobile =========================================================================== */}

    <div className={active?'menu-mobile':'menu-nao'}>
    <ul >
            <li onClick={ToggleMode}><a>A Empresa</a></li>
            <li onClick={ToggleMode}><a>Nossas Marcas</a></li>
            <li ><a href='/admin' onClick={ToggleMode}>Adminstrativo</a></li>
            <div className='divisao'></div>
            <li  className='portal-menu'><a onClick={handleShowModalcigel} >Portal Alyne</a></li>
            <li className='login-link' onClick={handleShow}><FiUsers size="20px"/>Login</li>
        </ul>
        </div>
    </div>
    
  );
}
