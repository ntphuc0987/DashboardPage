import { poppins } from "./fonts";
import { CubeTransparentIcon } from "@heroicons/react/24/outline";

const Logo = () => {
  return (
    <div className={`${poppins.className} flex gap-2 flex-row items-center leading-none text-white`}>
      <CubeTransparentIcon className="h-12 w-12"/>
      <p>Dashboard</p>
    </div>
  );
};

export default Logo;
