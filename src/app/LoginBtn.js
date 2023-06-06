'use client'
import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginBtn() {

    const { data: session } = useSession()
    console.log(session);

    return (
        <div>{session ? <button onClick={() => signOut()}>login</button> : <button onClick={() => signIn()}>logout</button>}</div>
    )
}