import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps{
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return(
    <div className="flex items-center gap-3 h-12 py-4 px-3 bg-gray-800 rounded w-full focus-within:ring-2  ring-blue-600">  
        {props.children}
    </div>
    )
}

TextInputRoot.displayName = "TextInput.Root"


    export interface TextInputIconProps{
        children: ReactNode;
    }
    function TextInputIcon(props:TextInputProps) {
        return(
            <Slot className="w-6 h-8 text-gray-500">
                {props.children}
            </Slot>
        )
    }

    TextInputIcon.displayName = "TextInput.Icon"
    
    export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

    export function TextInputInput(props: TextInputInputProps){
    return(
            <input
            className ="bg-transparent flex-1  text-white-800 text-md placeholder:text-gray-500 outline-none"
            {...props}
        />
    )
}

TextInputInput.displayName = "TextInput.Input"


export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}