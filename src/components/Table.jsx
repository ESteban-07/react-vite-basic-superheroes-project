import { useContext } from 'react';
import { SuperHeroesContext } from '../context/SuperHeroesContext';
import Button from './Button';

export default function Table() {
  const { superHeroes, toggleDialogView, setChecked, deleteSuperHero } =
    useContext(SuperHeroesContext);

  return (
    <fieldset>
      <table>
        <thead className="cabecera">
          <tr>
            <th>Name</th>
            <th>
              <input
                type="checkbox"
                onClick={() => setChecked((current) => !current)}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {superHeroes.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>
                  <input type="checkbox" className="table-chx" id={item.name} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="buttons-container">
        <Button title="Add" handleClick={toggleDialogView} />
        <Button title="Delete" handleClick={deleteSuperHero} />
      </div>
    </fieldset>
  );
}
