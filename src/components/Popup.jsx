function Popup({ Popupcontent, closePopup }) {
  return (
    <>
      <div className="popup">
        <span>{Popupcontent}</span>
        <div className="popup__btns">
          <button
            className="popup__btn"
            onClick={() => console.log("confirming action")}
          >
            Confirm
          </button>
          <button
            onClick={() => closePopup()}
            className="popup__btn popup__btn--cancel"
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="backdrop" onClick={() => closePopup()}></div>
    </>
  );
}

export default Popup;
