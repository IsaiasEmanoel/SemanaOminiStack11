import React, { useEffect,useState } from "react";
import "./styles.css";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logo_heroes from "../../assets/logo.svg";
import api from "../../services/api";

export default function NewIncident() {
  const history = useHistory()
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [value,setValue] = useState('');
  const ongId = localStorage.getItem("ongId");


  async function handleCreateIncident(){
    const data = {
      title,
      description,
      value
    }
    try {
      api.post(`/incidents`,data,{
        headers:{
          authorization : ongId 
        }
      });
      history.push('/profile')
    } catch (error) {
        alert('Erro ao cadastrar Caso');
        console.log(error)
    }
  }
  return (
    <div className="new-incident">
      <div className="content">
        <section>
          <img src={logo_heroes} alt="Be the Hero" />
          <h1>Cadastrar Novo Caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para Home
          </Link>
        </section>
        <form onSubmit={handleCreateIncident} action="">
          <input onChange={e => setTitle(e.target.value)} value={title} placeholder="Título do Caso" />
          <textarea onChange={e => setDescription(e.target.value)} value={description} placeholder="Descrição" />
          <input onChange={e => setValue(e.target.value)} value={value} placeholder="Valor em Reais" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
