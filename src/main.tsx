import React, { useState, createContext } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);

interface IUser {
  nome?: string;
  tipoPessoa?: string;
  cpf?: string;
  cnpj?: string;
  nascimento?: string;
  razao?: string;
  telefone?: string;
}

interface IUserContext {
  userContext: IUser,
  setUserContext: React.Dispatch<React.SetStateAction<IUser>>
}

export const UserContext = createContext<IUserContext | null>(null);

const Main = () => {
  const [userContext, setUserContext] = useState<IUser>({});

  return (
    <UserContext.Provider value={{userContext, setUserContext}}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserContext.Provider>
  )
}

root.render(<Main />);