import React from "react";
import {useSession, signIn, signOut} from "next-auth/react";

const Login = () => {
    const { data: session } = useSession();

    if (session) {
        return <>
                Signed in as {session?.user?.email} <br />
                <button onClick={() => signOut()} className="px-5 py-2 bg-red-600 rounded-xl text-white hover:bg-red-700 transition duration-300 cursor-pointer">Sign out</button>
        </>
    }
    return (
        <>
            Please log in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
}

export default Login;