"use client";

import { ActionTooltip } from "@/components/action-tooltip";
import Image from "next/image";
import { useRouter } from "next/navigation";


const HomePage = () => {
    const router = useRouter();

    const onClick = () => {
        router.push(`/netflix/auth`);
    }

  return (
    <ActionTooltip
            side="right"
            align="center"
            label={"Netflix"}
        >
            <button
                onClick={onClick}
                className="group relative flex items-center"
            >
                <div className=
                    "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]"
                />
                <div className=
                    "relative group flex mx-3 h-[100px] w-[100px] rounded-[50px] group-hover:rounded-[16px] transition-all overflow-hidden"
                    
                >
                    <Image 
                        fill
                        src="https://utfs.io/f/395dee58-b1fa-4abb-917d-01d6afc0be50-p9h152.png"
                        alt="Netflix"
                    />

                </div>
            </button>


        </ActionTooltip>
    
  )
}
 
export default HomePage;