import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <header className="frosted sticky top-0 z-10 items-center border-b border-white border-opacity-20 bg-white bg-opacity-40 p-4 shadow-lg dark:bg-transparent sm:p-8">
      <NavBar />
    </header>
  );
};
