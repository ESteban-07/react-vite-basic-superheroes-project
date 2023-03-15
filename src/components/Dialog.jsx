import Form from './Form';

export default function Dialog() {
  return (
    <div className="capture">
      <fieldset>
        <legend>Capturing super hero data</legend>
        <summary>
          <Form />
        </summary>
      </fieldset>
    </div>
  );
}
