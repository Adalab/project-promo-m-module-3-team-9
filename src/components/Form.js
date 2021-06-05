import Collapsable from './Collapsable';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

function Form() {
  return (
    <div className="main_card--fill">
      <Collapsable title="Diseña" icon="fal fa-object-ungroup icon">
        <Design></Design>
      </Collapsable>
      <Collapsable title="Rellena" icon="far fa-keyboard icon">
        <Fill></Fill>
      </Collapsable>
      <Collapsable title="Comparte" icon="fas fa-share-alt icon">
        <Share></Share>
      </Collapsable>
    </div>
  );
}

export default Form;
