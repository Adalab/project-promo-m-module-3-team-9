import {useState} from 'react';

function Collapsable(props) {
  //true es abierto
  const [isDesing, setDesing] = useState(true);
  const [isFill, setFill] = useState(false);
  const [isShare, setShare] = useState();

  const handleOnClickDesign = () => {
    if (isDesing === true) {
      setDesing(false);
    } else {
      setDesing(true);
      setFill(false);
      setShare(false);
    }
  };
  const handleOnClickfill = () => {
    if (isFill === true) {
      setFill(false);
    } else {
      setDesing(false);
      setFill(true);
      setShare(false);
    }
  };
  const handleOnClickShare = () => {
    if (isShare === true) {
      setShare(false);
    } else {
      setDesing(false);
      setFill(false);
      setShare(true);
    }
  };
  const collapsibleChange =
    isDesing === true || isFill === true || isShare === true ? 'active' : '';

  return (
    <section className={`design ${collapsibleChange} js-section`}>
      <div className="title_wrapper " onClick={handleOnClickDesign}>
        <div className="title_wrapper--text">
          <i className={props.icon}></i>
          <h2 className="title">{props.title}</h2>
        </div>
        <i className="fas fa-chevron-up title_wrapper--arrow js-arrow"></i>
      </div>

      <div className="collapsible ">{props.children}</div>
    </section>
  );
}

export default Collapsable;
