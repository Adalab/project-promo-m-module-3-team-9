import {useState} from 'react';
import Collapsable from './Collapsable';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

function Form() {
  const [active, setActive] = useState('design');

  return (
    <div className="main_card--fill">
      <Collapsable
        onClick={() => setActive('design')}
        active={active == 'design'}
        title="Diseña"
        icon="fal fa-object-ungroup icon"
      >
        <Design />
      </Collapsable>
      <Collapsable
        onClick={() => setActive('fill')}
        active={active == 'fill'}
        title="Rellena"
        icon="far fa-keyboard icon"
      >
        <Fill></Fill>
      </Collapsable>
      <Collapsable
        onClick={() => setActive('share')}
        active={active == 'share'}
        title="Comparte"
        icon="fas fa-share-alt icon"
      >
        <Share></Share>
      </Collapsable>
    </div>
  );
}

export default Form;
