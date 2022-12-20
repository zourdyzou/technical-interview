import Image from "next/image";
import type {FunctionComponent} from "react";

export const Header: FunctionComponent = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center space-x-2 text-white">
        <Image
          src="/icons/switch.svg"
          height={34}
          width={34}
          alt="switch logo"
        />
        <h1 className="text-4xl font-bold">Games</h1>
      </div>

      <a
        href="https://eggsy.xyz"
        target="_blank"
        rel="noreferrer"
        className="transition-colors text-white/40 hover:text-white/80"
      >
        Bereydev Technical Interview
      </a>
    </header>
  );
};

export default Header;
