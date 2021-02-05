import Logo from "../Logo";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="frosted bg-opacity-40 border-white border-opacity-20 border-b shadow-lg bg-gray-200 sticky top-0 z-10 mb-4">
      <div className="container mx-auto flex flex-wrap flex-col sm:flex-row items-center pl-4 py-4">
        <div className="text-3xl dark:text-white font-bold mb-4 md:mb-0">
          <Logo />
        </div>
        <NavBar />
      </div>
    </header>
  );
}
