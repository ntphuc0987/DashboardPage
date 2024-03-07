'use client'

import {
  DocumentDuplicateIcon,
  HomeIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";

import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    href: "/dashboard",
    icon: HomeIcon,
  },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: UserGroupIcon,
  },
  {
    name: "User",
    href: "/dashboard/user",
    icon: UserIcon,
  }
];
const NavLinks = () => {
    const pathname = usePathname();

  return (
    <>
    {links.map((link)=>{
        const LinkIcon = link.icon;
        return (
            <Link 
                key={link.name} 
                href={link.href}
                className={clsx(
                   'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-mango-light hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
                    {
                      "text-white bg-mango-light": pathname === link.href
                    }
  
                )}
            >
                <LinkIcon className="w-6" />
                <p>{link.name}</p>
            </Link>
        )
    })}
    </>
  )
};

export default NavLinks;
