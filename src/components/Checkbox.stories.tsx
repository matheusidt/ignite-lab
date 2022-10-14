import { Meta, StoryObj } from "@storybook/react"
import{ Checkbox, CheckboxProps } from "./Checkbox"

export default{
    title: "Components/Checkbox",
    component: Checkbox,
    args:{},
    argTypes:{},   
    decorators:[
        (Story) => {
            return(
                <div className="flex items-center gap-2">
                    {Story()}
                    <text className="text-sm text-gray-500">Mantenha-me conectado</text>
                </div>
            )
        }
    ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}