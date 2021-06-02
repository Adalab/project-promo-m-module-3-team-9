function Share() {
  return (
    <>
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
    </>
  );
}

export default Share;
