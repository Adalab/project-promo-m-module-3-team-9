import GetAvatar from './GetAvatar';

function Fill({photo, updateAvatar, onKeyUp}) {
  return (
    <form
      className="contact-form js-form"
      action="https://formspree.io/f/mbjpqobw"
      method="POST"
      onKeyUp={onKeyUp}
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
      <GetAvatar avatar={photo} updateAvatar={updateAvatar} />
      <div className="add_image">
        <div className="action">
          <input
            type="file"
            name="photo"
            id="img-selector"
            className="action__hiddenField js__profile-upload-btn"
            required
          />
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
        Linkedin{' '}
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
        {' '}
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
  );
}

export default Fill;
