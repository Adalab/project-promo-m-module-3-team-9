// import {useState} from 'react';

function Collapsable({icon, title, active, onClick, children}) {
  const classnames = `design ${active && 'active'} js-section`;

  return (
    <section className={classnames} onClick={onClick}>
      <div className="title_wrapper">
        <div className="title_wrapper--text">
          <i className={icon}></i>
          <h2 className="title">{title}</h2>
        </div>
        <i className="fas fa-chevron-up title_wrapper--arrow js-arrow"></i>
      </div>

      <div className="collapsible ">{children}</div>
    </section>
  );
}

export default Collapsable;
