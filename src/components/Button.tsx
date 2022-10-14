import { Slot } from '@radix-ui/react-slot';
import { clsx } from "clsx";
import { ReactNode } from 'react';

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({children, asChild}: ButtonProps){
    const Comp = asChild ? Slot : "button";
    
    return (
        <Comp
        className={clsx(
           'py-4 px-3 bg-blue-700 rounded font-semi-bold text-black-900 text-sm w-full transition-colors hover:bg-blue-600 focus:ring-2 ring-white-700',
        )}
        >
            {children}
        </Comp>
    )
}