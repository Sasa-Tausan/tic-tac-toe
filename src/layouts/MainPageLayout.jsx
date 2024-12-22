import PropTypes from "prop-types";

export function MainPageLayout({ children, rowGap }) {
  return (
    <main className={`flex flex-col ${rowGap} px-4 max-w-lg w-full items-center`}>{children}</main>
  );
}

MainPageLayout.propTypes = {
  children: PropTypes.node,
  rowGap: PropTypes.string,
};
