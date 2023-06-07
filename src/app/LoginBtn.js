'use client'
import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginBtn() {

    const { data: session } = useSession()
    console.log(session, "session");

    return (
        <div>{session ? <button className="p-3 bg-slate-100 " onClick={() => signOut()}>SignIn</button> : <button onClick={() => signIn()}>logout</button>}</div>
    )
}