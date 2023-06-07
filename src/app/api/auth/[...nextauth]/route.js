import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const { username, password } = credentials
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                const res = await fetch("http://localhost:7003/api/signin", {
                    method: 'POST',
                    body: JSON.stringify({
                        name: username, password
                    }),
                    headers: { "Content-Type": "application/json" }
                })
                const user = await res.json()
                // If no error and we have user data, return it
                if (res.ok && user) {
                    return user.data
                }
                // Return null if user data could not be retrieved
                return null
            }
        })
    ],
    /**
     * what are callbacks
     *
     */
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user }
        },
        async session({ session, token }) {
            return { ...session, ...token }

        }
    },
    pages: {
        signIn: "/login"
    }
})

export { handler as GET, handler as POST }


