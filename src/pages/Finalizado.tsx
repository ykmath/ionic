import { useContext } from "react";
import { IonPage } from "@ionic/react";

import { UserContext } from "../main";

function capitalize(str: string | undefined) {
    if (str?.valueOf() == undefined) return;
    
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

const Finalizado = () => {
    const context = useContext(UserContext);

    if (!context) return (
        <h1>Preencha o formulário para ver o resultado!</h1>
    )

    const {userContext} = context;

    return (
        <IonPage>
            <div id="container">
                <h1>Formulário Finalizado!</h1>
                <h2><strong>Nome:</strong> {userContext.nome}</h2>
                <h2><strong>Tipo:</strong> Pessoa {capitalize(userContext.tipoPessoa)}</h2>
                {userContext.cpf && (
                    <>
                        <h2><strong>CPF:</strong> {userContext.cpf}</h2>
                        <h2><strong>Nascimento:</strong> {userContext.nascimento}</h2>
                    </>
                )}
                {userContext.cnpj && (
                    <>
                        <h2><strong>CNPJ:</strong> {userContext.cnpj}</h2>
                        <h2><strong>Razão Social:</strong> {userContext.razao}</h2>
                    </>
                )}
                <h2><strong>Telefone:</strong> {userContext.telefone}</h2>
            </div>
        </IonPage>
    )
}

export default Finalizado;