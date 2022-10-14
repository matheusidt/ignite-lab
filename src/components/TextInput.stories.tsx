import { Meta, StoryObj } from "@storybook/react"
import{ Envelope } from "phosphor-react"
import{ TextInput,TextInputRootProps } from "./TextInput"

export default{
    title: "Components/TextInput",
    component: TextInput.Root,
    args:{
        children:[
            <TextInput.Icon/>,
                <Envelope className="w-6 h-8 text-gray-500" />,
            
            <TextInput.Input placeholder="Escreva o seu e-mail"/>
        ],
    },
    argTypes:{
        children:{
            table:{
                disable:true,
            },
        },
    },
    
}as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}
export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args:{
        children: <TextInput.Input placeholder="Escreva o seu e-mail"/>
    }
}
