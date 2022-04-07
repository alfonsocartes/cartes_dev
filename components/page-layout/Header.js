import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <header className="frosted bg-white dark:bg-transparent bg-opacity-40 border-white border-opacity-20 border-b shadow-lg sticky top-0 z-10 items-center sm:p-8 p-4">
      <NavBar />
    </header>
  );
};
