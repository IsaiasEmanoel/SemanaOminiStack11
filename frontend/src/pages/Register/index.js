import React, { useState } from "react";
import "./styles.css";
import { Link,useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logo_heroes from "../../assets/logo.svg";
import api from "../../services/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhats] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };
    try {
      const response = await api.post('/ongs',data);
      alert('Seu id:'+ response.data.id);
      history.push('/')//go to login
    } catch (error) {
      alert('Erro no cadastro');
      console.log(error)
    }
   
  }
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo_heroes} alt="Be the Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça o seu cadastro, entre na plataforma e ajude pessoas a
            encontrarem os casos da sua ONG
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </section>
        <form action="" onSubmit={handleRegister}>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nome da ONG"
            type="text"
          />
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="E-mail"
            type="email"
          />
          <input
            value={whatsapp}
            onChange={e => setWhats(e.target.value)}
            placeholder="Whatsapp"
            type="text"
          />
          <div className="input-group">
            <input
              value={city}
              onChange={e => setCity(e.target.value)}
              placeholder="Cidade"
              type="text"
            />
            <input
              value={uf}
              onChange={e => setUf(e.target.value)}
              placeholder="UF"
              style={{ width: 80 }}
              type="text"
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
