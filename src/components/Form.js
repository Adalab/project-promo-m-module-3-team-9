function Form() {
  return (
    <div className="main_card--fill">
      <section className="design active js-section">
        <div className="title_wrapper">
          <div className="title_wrapper--text">
            <i className="fal fa-object-ungroup icon"></i>
            <h2 className="title">diseña</h2>
          </div>
          <i className="fas fa-chevron-up title_wrapper--arrow js-arrow"></i>
        </div>

        <div className="collapsible">
          <form className="design_form">
            <p className="design_form-title">colores</p>
            <div className="design_form-box">
              <label className="design_form-label">
                <input
                  className="design_form-label--input js-input-design"
                  type="radio"
                  name="palette"
                  value="1"
                />
                <div className="design_form-label--div">
                  <div className="design_form-label--div1"></div>
                  <div className="design_form-label--div2"></div>
                  <div className="design_form-label--div3"></div>
                </div>
              </label>

              <label className="design_form-label">
                <input
                  className="design_form-label--input js-input-design"
                  type="radio"
                  name="palette"
                  value="2"
                />
                <div className="design_form-label--div">
                  <div className="design_form-label--div4"></div>
                  <div className="design_form-label--div5"></div>
                  <div className="design_form-label--div6"></div>
                </div>
              </label>
              <label className="design_form-label">
                <input
                  className="design_form-label--input js-input-design"
                  type="radio"
                  name="palette"
                  value="3"
                />
                <div className="design_form-label--div">
                  <div className="design_form-label--div7"></div>
                  <div className="design_form-label--div8"></div>
                  <div className="design_form-label--div9"></div>
                </div>
              </label>
            </div>
          </form>
        </div>
      </section>

      <section className="fill js-section">
        <div className="title_wrapper">
          <div className="title_wrapper--text">
            <i className="far fa-keyboard icon"></i>
            <h2 className="title">rellena</h2>
          </div>
          <i className="fas fa-chevron-up title_wrapper--arrow js-arrow"></i>
        </div>

        <div className="collapsible">
          <form
            className="contact-form js-form"
            action="https://formspree.io/f/mbjpqobw"
            method="POST"
          >
            <label className="label_fill" htmlFor="fullName">
              Nombre completo
            </label>
            <input
              className="input js-inputname"
              id="fullName"
              type="text"
              name="name"
              placeholder="Ej:Sally Jill"
              required
            />
            <label className="label_fill" htmlFor="rol">
              Puesto
            </label>
            <input
              className="input js-inputjobtitle"
              id="rol"
              type="text"
              name="job"
              placeholder="Ej:Front-End unicorn"
              required
            />
            <label className="label_fill"> Imagen de perfil </label>
            <div className="add_image">
              <div className="action">
                <label
                  className="action__upload-btn button_image"
                  htmlFor="img-selector"
                >
                  Añadir imagen
                </label>
                <input
                  type="file"
                  name="photo"
                  id="img-selector"
                  className="action__hiddenField js__profile-upload-btn"
                  required
                />
              </div>
              <div className="profile">
                <div className="profile__image js__profile-image"></div>
                <div className="checkbox profile__preview js__profile-preview"></div>
              </div>
            </div>

            <label className="label_fill" htmlFor="emailAddress">
              Email
            </label>
            <input
              className="input js-inputEmail"
              type="email"
              id="emailAddress"
              name="email"
              placeholder="Ej:sally-jill@gmail.com"
              required
            />
            <label className="label_fill" htmlFor="telephone">
              Telefono
            </label>
            <input
              className="input js-inputTel"
              type="tel"
              id="telephone"
              name="phone"
              placeholder="Ej:555-55-55-55"
              pattern=".{9}"
            />
            <label className="label_fill" htmlFor="Linkedin">
              Linkedin{" "}
            </label>
            <input
              className="input js-inputIn"
              id="Linkedin"
              type="text"
              name="linkedin"
              placeholder="Ej: sally.hill"
              required
            />
            <label className="label_fill" htmlFor="Github">
              {" "}
              Github
            </label>
            <input
              className="input js-inputGit"
              id="Github"
              type="text"
              name="github"
              placeholder="Ej: sally-hill"
              required
            />
          </form>
        </div>
      </section>

      <section className="share js-section">
        <div className="title_wrapper">
          <div className="title_wrapper--text">
            <i className="fas fa-share-alt icon"></i>
            <h2 className="title">comparte</h2>
          </div>
          <i className="fas fa-chevron-up title_wrapper--arrow js-arrow"></i>
        </div>

        <div className="collapsible">
          <div className="sharecard js-buttoncreate">
            <i className="far fa-address-card cardicon"></i>
            <div className="btncreatecard">crear tarjeta</div>
          </div>

          <div className="js-errorcontainer"></div>

          <section className="cardCreated">
            <h3 className="cardCreated-title">La tarjeta ha sido creada:</h3>
            <a
              className="CardCreated-a js-link-card"
              href="https://awesome-profile-card.com?id=A456DF0001"
              target="_blank"
            >
              https://awesome-profile-card.com?id=A456DF0001
            </a>
            <a className="CardCreated_button js-twitter-link" href="">
              <i className="fab fa-twitter icon"></i>
              <p className="twShare">Compartir en twitter</p>
            </a>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Form;
