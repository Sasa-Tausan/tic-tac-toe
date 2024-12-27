import PropTypes from "prop-types";

export function SelectLevel({ handleGameLevel }) {
  return (
    <section className="flex flex-col justify-between w-full gap-3 p-5 bg-semiDarkNavy rounded-xl shadow-innerCustomElement">
      <h4 className="uppercase text-headingXSmall text-silver">choose difficulty level</h4>
      <div className="flex items-center justify-between w-full" onClick={handleGameLevel}>
        <div className="flex items-center gap-4">
          <input type="radio" name="level" id="easy" />
          <label htmlFor="easy" className="uppercase text-silver text-bodyText">
            easy
          </label>
        </div>
        <div className="flex items-center gap-4">
          <input type="radio" name="level" id="medium" />
          <label htmlFor="medium" className="uppercase text-silver text-bodyText">
            medium
          </label>
        </div>
        <div className="flex items-center gap-4">
          <input type="radio" name="level" id="hard" />
          <label htmlFor="hard" className="uppercase text-silver text-bodyText">
            hard
          </label>
        </div>
      </div>
    </section>
  );
}

SelectLevel.propTypes = {
  handleGameLevel: PropTypes.func,
};
