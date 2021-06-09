import Profile from './Profile';
function Card({avatar}) {
  return (
    <div className="main_card--preview">
      <section className="card_background">
        <div className="card_button_container">
          <a
            href="#"
            className="card_button js-reset-button"
            title="reset-button"
          >
            <i className="far fa-trash-alt"></i>Reset
          </a>
        </div>
        <section className="card js-card">
          <section className="card_info">
            <h2 className="card_info--name js-previewname">Nombre Apellido</h2>
            <h3 className="card_info--job js-previewjob">
              Front-end developer
            </h3>
          </section>
          <section className="card_photo js__profile-image">
            <Profile avatar={avatar} />
          </section>

          <ul className="card_media">
            <li>
              <a
                className="js-linkTel"
                href=""
                target="_blank"
                title="phone-icon"
              >
                <i className="fas fa-mobile-alt card_media--item"></i>
              </a>
            </li>
            <li>
              <a
                className="js-linkEmail"
                href=""
                target="_blank"
                title="mail-icon"
              >
                <i className="fa fa-envelope card_media--item"></i>
              </a>
            </li>
            <li>
              <a
                className="js-linkIn"
                href="#"
                target="_blank"
                title="linkedin-icon"
              >
                <i className="fab fa-linkedin-in card_media--item"></i>
              </a>
            </li>
            <li>
              <a
                className="js-linkGit"
                href="#"
                target="_blank"
                title="github-icon"
              >
                <i className="fab fa-github-alt card_media--item"></i>
              </a>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
}

export default Card;
