import PropTypes from "prop-types";

export function PrimaryButton({ btnText, btnClass, clickFunc, disabled }) {
  return (
    <button
      className={`uppercase ${btnClass} hover:translate-y-1 text-darkNavy rounded-lg py-3 hover:shadow-none disabled:opacity-35`}
      onClick={clickFunc}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
}

PrimaryButton.propTypes = {
  btnText: PropTypes.string,
  btnClass: PropTypes.string,
  clickFunc: PropTypes.func,
  disabled: PropTypes.bool,
};
