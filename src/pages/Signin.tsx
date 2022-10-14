import { Text } from "../components/Text"
import { Heading } from "../components/Heading"
import { Logo } from "../logo"
import "../styles/global.css"
import { TextInput } from "../components/TextInput"
import { Envelope } from "phosphor-react"
import { Lock } from "phosphor-react"
import { Checkbox } from "../components/Checkbox"
import { Button } from "../components/Button"
import { FormEvent, useState } from "react"
import axios from "axios"

export function SignIn(){
   
    const [isUserSignedIn, SetIsUserSignedIn] = useState(false)
   
    function HandleSignIn(event: FormEvent){
        event.preventDefault()
        axios.post("/sessions",{
            email: "matheusit19@gmail.com",
            password: "flora999"
        })

        SetIsUserSignedIn(true)
    }
    return(
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-500 flex-col">
        <header className="flex flex-col items-center">
            <Logo/>

            <Heading size="lg"className="mt-4">
                Ignite Lab
            </Heading>

            <Text size="lg" className="text-gray-500 mt-1">
                Faça login e comece a usar!
            </Text>
        </header>
        <form onSubmit={HandleSignIn} className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4">
            { isUserSignedIn && <Text>Login realizado!</Text>}
            <label htmlFor="email" className="flex flex-col gap-3">
                <Text className="font-semibold">Endereço de e-mail</Text>
                <TextInput.Root>
                    <TextInput.Icon>
                        <Envelope/>
                    </TextInput.Icon>
                    <TextInput.Input id="email" placeholder="Digite seu e-mail"/>
                </TextInput.Root>
            </label>
            
            <label htmlFor="password" className="flex flex-col gap-3">
                <Text className="font-semibold">Senha</Text>
                <TextInput.Root>
                    <TextInput.Icon>
                        <Lock/>
                    </TextInput.Icon>
                    <TextInput.Input id="password"placeholder="Digite sua senha"/>
                </TextInput.Root>
            </label>
            
            <label htmlFor="remember" className="flex items-center gap-2">
                <Checkbox id="remember"/>
                <Text size="sm" className="text-gray-500">Mantenha-me conectado</Text>
            </label>

            <Button type="submit" className="mt-4">Entrar</Button>
        </form>

        <footer className="flex flex-col items-center gap-4 mt-8">
            <Text asChild size="sm">
            <a href="" className="text-gray-500 underline hover:text-blue-500">Esqueceu sua senha?</a>
            </Text>
            <Text asChild size="sm">
            <a href="" className="text-gray-500 underline hover:text-blue-500">Não tem conta? Cadastre agora!</a>
            </Text>
        </footer>
    </div>
)
}