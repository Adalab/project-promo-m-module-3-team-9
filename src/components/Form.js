import Collapsable from './Collapsable';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import {useState} from 'react';

function Form({avatar, updateAvatar}) {
  const [active, setActive] = useState('design');

  return (
    <div className="main_card--fill">
      <Collapsable
        title="Diseña"
        icon="fal fa-object-ungroup icon"
        onClick={() => setActive('design')}
        active={active == 'design'}
      >
        <Design></Design>
      </Collapsable>
      <Collapsable
        title="Rellena"
        icon="far fa-keyboard icon"
        onClick={() => setActive('fill')}
        active={active == 'fill'}
      >
        <Fill updateAvatar={updateAvatar} avatar={avatar}></Fill>
      </Collapsable>
      <Collapsable
        title="Comparte"
        icon="fas fa-share-alt icon"
        onClick={() => setActive('share')}
        active={active == 'share'}
      >
        <Share></Share>
      </Collapsable>
    </div>
  );
}

export default Form;
