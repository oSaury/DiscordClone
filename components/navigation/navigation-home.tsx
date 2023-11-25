"use client";

import { Home} from "lucide-react";

import { ActionTooltip } from "@/components/action-tooltip";

import { useRouter } from "next/navigation";

export const NavigationHome = () => {

    const router = useRouter();

    const onClick = () => {
        router.push(`/home`);
    }

    return (
        <div>
            <ActionTooltip 
                side="right"
                align="center"
                label="Home"
            >
                <button
                    onClick={onClick}
                    className="group flex items-center"
                >
                    <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
                        <Home
                            className="group-hover:text-white transition white" size={25}
                        />
                    </div>
                </button>
            </ActionTooltip>
        </div>
    )
}