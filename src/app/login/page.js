
'use client'

import { signIn } from "next-auth/react"
import { useState } from "react"
import { useSearchParams } from "next/navigation"

export default () => {

    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get("callbackUrl")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const onNameChange = e => {
        setUsername(e.target.value)
    }

    const onPasswordChange = e => {
        setPassword(e.target.value)
    }
    const onSubmit = async () => {
        await signIn(
            "credentials", {
            username,
            password,
            redirect: "true",
            callbackUrl,

        },

        )
    }

    return (
        <div>
            <input value={username} type="text" onChange={onNameChange} placeholder="username" />
            <input value={password} type="password" onChange={onPasswordChange} placeholder="password" />
            <button onClick={onSubmit}>login</button>
        </div>)
}