export function SelectLevel() {
  return (
    <section className="flex flex-col justify-between w-full gap-3 p-5 bg-semiDarkNavy rounded-xl shadow-innerCustomElement">
      <h4 className="uppercase text-headingXSmall text-silver">choose difficulty level</h4>
      <div className="flex items-center justify-between w-full">
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
