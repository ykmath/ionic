import { useContext } from 'react';
import { IonPage } from '@ionic/react';

import { useHistory } from 'react-router-dom';

import { UserContext } from '../main';

import "../components/ExploreContainer.css";

const PessoaFisica = () => {
    const context = useContext(UserContext);
    const history = useHistory();

    if (!context) return (
        <h1>Erro! Nenhum dado coletado.</h1>
    )

    const {userContext, setUserContext} = context;

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        setUserContext({...userContext, 
            cpf: formData.get("cpf") as string,
            nascimento: formData.get("nascimento") as string,
            telefone: formData.get("telefone") as string
        })

        history.push("/finalizado");
    }

    return (
        <IonPage>
            <div id="container">
                <h1>Olá, {userContext.nome}!</h1>
                <h6>Precisamos de apenas mais alguns dados...</h6>
                <br />
                <form onSubmit={handleSubmit}>
                    <label htmlFor="cpf">CPF: </label>
                    <input type="text" name="cpf" id="cpf" />
                    <br /><br />
                    <label htmlFor="telefone">Telefone: </label>
                    <input type="text" name="telefone" id="telefone" />
                    <br /><br />
                    <label htmlFor="nascimento">Nascimento: </label>
                    <input type="date" name="nascimento" id="nascimento" />
                    <br /><br />
                    <input type="submit" value="Finalizar" />
                </form>
            </div>
        </IonPage>
    )
}

export default PessoaFisica;