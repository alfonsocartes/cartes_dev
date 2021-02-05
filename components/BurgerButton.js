const BurgerButton = ({ toggleFunction }) => {
  return (
    <button
      className="lg:hidden bg-opacity-40 border-white border-opacity-20 border rounded-lg shadow-lg bg-gray-300 dark:bg-gray-200 hover:bg-gray-500 dark:hover:bg-gray-500 pl-2 h-8 w-8 mr-4"
      type="button"
      onClick={toggleFunction}
    >
      <svg fill="black" viewBox="0 0 100 80" width="15" height="15">
        <rect width="100" height="20" />
        <rect y="30" width="100" height="20" />
        <rect y="60" width="100" height="20" />
      </svg>
    </button>
  );
};

export default BurgerButton;
