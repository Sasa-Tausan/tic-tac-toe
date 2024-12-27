import PropTypes from "prop-types";

export function SecondaryButton({ isImageBtn, btnText }) {
  return (
    <button className="p-4 rounded-lg bg-silver shadow-innerCustomSilver hover:translate-y-1 hover:shadow-none">
      {isImageBtn ? (
        <img src="/src/assets/images/icon-restart.svg" alt="" />
      ) : (
        <p>{btnText}</p>
      )}
    </button>
  );
}

SecondaryButton.propTypes = {
  btnText: PropTypes.string,
  isImageBtn: PropTypes.bool,
};
