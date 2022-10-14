import { Slot } from '@radix-ui/react-slot';
import { clsx } from "clsx";
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({children, asChild, className, ...props}: ButtonProps){
    const Comp = asChild ? Slot : "button";
    
    return (
        <Comp
        className={clsx(
           'py-3 px-4 bg-blue-700 rounded font-bold text-gray-900 text-sm w-full transition-colors hover:bg-blue-500 focus:ring-2 ring-white-700',
            className,
           )}
        {...props}
        >
            {children}
        </Comp>
    )
}