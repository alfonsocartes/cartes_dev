import Logo from "../Logo";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="frosted bg-opacity-40 border-white border-opacity-20 border-b shadow-lg sticky top-0 z-10 items-center sm:p-8 p-4">
      <NavBar />
    </header>
  );
}
