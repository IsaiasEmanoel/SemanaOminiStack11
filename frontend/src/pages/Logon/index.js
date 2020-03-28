import React,{useState} from "react";
import {Link,useHistory} from 'react-router-dom'
import "./styles.css";
import { FiLogIn } from 'react-icons/fi'
import heroes from "../../assets/heroes.png";
import logo_heroes from "../../assets/logo.svg";
import api from "../../services/api";

export default function Logon() {
  const [id,setId] = useState('');
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();
    try {
      const response = await api.post('/sessions',{id});

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      alert('Loggin feito')
      history.push('/profile')
    } catch (error) {
      alert('Erro no Login')
      console.log(error)
    }
  }
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo_heroes} alt="Be The Hero" />
        <form action="" onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>

          <input value={id} onChange={e => setId(e.target.value)} placeholder="Sua ID" type="text" />

          <button className="button" type="submit">Entrar</button>
           
          <Link className="back-link" to="/register">
              <FiLogIn size={16} color="#E02041"/>
              Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroes} alt="Heroes" />
    </div>
  );
}
