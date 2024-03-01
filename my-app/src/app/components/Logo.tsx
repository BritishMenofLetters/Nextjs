import { FC } from "react";
import LogoIcon from "./icons/LogoIcon";
import Link from "next/link";

const Logo: FC = () => (

        <Link href={"/"} className="flex text-2xl font-bold text-white h-min w-min justify-between gap-2">
            <LogoIcon /> 
            Logo
        </Link>
);



export default Logo;