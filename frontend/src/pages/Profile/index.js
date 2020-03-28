import React, { useEffect, useState } from "react";
import { Link,useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import api from "../../services/api";
import "./styles.css";
import logo_heroes from "../../assets/logo.svg";

export default function Profile() {
  const history = useHistory();
  const [incidents, setIncidents] = useState([]);

  const ongNameLocal = localStorage.getItem("ongName");
  const ongId = localStorage.getItem("ongId");

  useEffect(() => {
    api
      .get("/profile", {
        headers: {
          Authorization: ongId
        }
      })
      .then(response => {
        setIncidents(response.data);
      });
  }, [ongId]);

  async function handleDelete(id){
    try {
        await api.delete(`/incidents/${id}`,{
            headers:{
                authorization:ongId
            }
        })
        setIncidents(incidents.filter(incident =>incident.id!==id))
    } catch (error) {
        alert('Erro ao deletar Caso');
        console.log(error)
    }
  }
  function handleLoggof(){
    localStorage.clear();
    history.push('/');
  }
  return (
    <div className="profile-container">
      <header>
        <img src={logo_heroes} alt="Be The Hero" />
        <span>Bem Vinda, {ongNameLocal}</span>
        <Link className="button" to="/newIncident">
          Cadastrar novo Caso
        </Link>
        <button onClick={handleLoggof} type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
      <h1>Casos Cadastrados</h1>
      <ul>
        {incidents.map((item,id) => (
          <li key={id}>
            <strong>Caso:</strong>
            <p>{item.title}e</p>

            <strong>Descricao:</strong>
            <p>{item.description}</p>

            <strong>Valor:</strong>
            <p>{Intl.NumberFormat('pt-Br',{style:'currency',currency:'BRL'}).format(item.value)}</p>

            <button onClick={()=>handleDelete(item.id)} type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
