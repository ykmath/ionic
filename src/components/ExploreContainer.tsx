import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { UserContext } from '../main';

import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const history = useHistory();
  const context = useContext(UserContext);

  if (!context) return (
    <h1>Carregando...</h1>
  );

  const {userContext, setUserContext} = context;

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    setUserContext({...userContext, 
      nome: formData.get("nome") as string,
      tipoPessoa: formData.get("pessoa") as string
    });

    history.push(`/pessoa-${e.currentTarget.pessoa.value}`);
  }

  return (
    <div id="container">
      <h1>Formulário</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome: </label>
        <input type="text" name="nome" id="nome" required />
        <br /><br />
        <div id="radio-container">
          <legend>Você é: </legend>
          <div id="radio-container-escolhas">
            <div className="radio-box">
              <input type="radio" name="pessoa" id="pessoa_fisica" value="fisica" defaultChecked />
              <label htmlFor="pessoa_fisica">Pessoa Física</label>
            </div>
            <div className="radio-box">
              <input type="radio" name="pessoa" id="pessoa_juridica" value="juridica" />
              <label htmlFor="pessoa_juridica">Pessoa Jurídica</label>
            </div>
          </div>
        </div>
        <input type="submit" value="Próximo"/>
      </form>
    </div>
  );
};

export default ExploreContainer;
