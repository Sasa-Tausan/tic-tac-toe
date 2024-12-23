import PropTypes from "prop-types";

export function PrimaryButton({ btnText, btnClass }) {
  return (
    <button
      className={`uppercase ${btnClass} hover:translate-y-1 text-darkNavy rounded-lg py-3 hover:shadow-none`}
    >
      {btnText}
    </button>
  );
}

PrimaryButton.propTypes = {
  btnText: PropTypes.string,
  btnClass: PropTypes.string,
};
