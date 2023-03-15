import { useContext, useRef } from 'react';
import { SuperHeroesContext } from '../context/SuperHeroesContext';
import Button from './Button';

export default function Form() {
  const { addNewSuperHeroe, toggleDialogView } = useContext(SuperHeroesContext);
  const refNom = useRef();
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="name">Name</label>
      <input ref={refNom} type="text" id="name" placeholder="Enter name" />
      <div className="buttons-container">
        <Button
          title="Confirm"
          handleClick={() => {
            addNewSuperHeroe(refNom.current.value);
            refNom.current.value = '';
            toggleDialogView();
          }}
        />
        <Button title="Cancel" handleClick={toggleDialogView} />
      </div>
    </form>
  );
}
