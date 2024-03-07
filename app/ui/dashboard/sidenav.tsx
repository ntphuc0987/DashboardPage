import Link from "next/link";
import Logo from "@app/ui/logo";
import NavLinks from "@app/ui/dashboard/navlinks";
import { Button } from "@app/ui/button";
import { PowerIcon } from "@heroicons/react/24/outline";

const SideNav = () => {
  return (
    <div className="flex h-full flex-col  px-3 py-4 md:px-2">
      <Link
        href="/"
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-mango p-4 md:h-32"
      >
        <div className="w-32 text-white md:w-40">
          <Logo />
        </div>
      </Link>

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <Button type="button" className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-mango p-3 text-sm font-medium hover:bg-mango-light  md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon  className="w-6"/>
            <div className="hidden">
                Sign Out
            </div>
        </Button>
      </div>

    </div>
  );
};

export default SideNav;
