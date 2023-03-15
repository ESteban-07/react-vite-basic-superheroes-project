import Table from './components/Table';
import Dialog from './components/Dialog';
import { useContext } from 'react';
import { SuperHeroesContext } from './context/SuperHeroesContext';
import './App.css';

export default function App() {
  const { display } = useContext(SuperHeroesContext);

  return (
    <>
      <div className="principal" style={display ? { opacity: '0.1' } : {}}>
        <Table />
      </div>
      {display && <Dialog />}
    </>
  );
}
