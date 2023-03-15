import { createContext, useState, useEffect } from 'react';
import * as API from '../data/fetchData';

// context name
export const SuperHeroesContext = createContext();

// global component
export function SuperHeroesContextProvider(props) {
  const [superHeroes, setSuperHeroes] = useState([]);
  const [display, setDisplay] = useState(false);
  const [check, setChecked] = useState(false);

  useEffect(() => {
    const superHeroListOnLocalStorage = JSON.parse(
      localStorage.getItem('superHeroesList')
    );

    superHeroListOnLocalStorage
      ? setSuperHeroes(superHeroListOnLocalStorage)
      : API.getSuperHeroes().then((data) => {
          setSuperHeroes(data.members);
        });
  }, []);

  useEffect(() => {
    localStorage.setItem('superHeroesList', JSON.stringify(superHeroes));
  }, [superHeroes]);

  useEffect(() => {
    toggleCheck();
  }, [check, deleteSuperHero]);

  function toggleDialogView() {
    setDisplay((current) => !current);
  }

  function toggleCheck() {
    return document
      .querySelectorAll('input[type="checkbox"]')
      .forEach((it) => (it.checked = check));
  }

  function addNewSuperHeroe(name) {
    if (name === '') return;

    const newHero = {
      name,
      age: 99,
      secretIdentity: 'None',
      powers: [],
    };

    setSuperHeroes((previousHeroes) => {
      return [...previousHeroes, newHero];
    });
  }

  function deleteSuperHero() {
    const chbxs = [...document.querySelectorAll('input.table-chx')];

    chbxs.forEach((item) => {
      if (item.checked) {
        setSuperHeroes((previousList) => {
          return previousList.filter((superhero) => superhero.name !== item.id);
        });
      }
    });

    // uncheck all checkboxes
    setChecked(false);
  }

  function editSuperHero() {}

  return (
    <>
      <SuperHeroesContext.Provider
        value={{
          superHeroes,
          toggleDialogView,
          display,
          toggleCheck,
          setChecked,
          addNewSuperHeroe,
          deleteSuperHero,
          editSuperHero,
        }}>
        {props.children}
      </SuperHeroesContext.Provider>
    </>
  );
}
