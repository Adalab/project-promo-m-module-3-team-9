function Design() {
  return (
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
  );
}

export default Design;
