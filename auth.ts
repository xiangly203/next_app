import NextAuth, {DefaultSession} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const { handlers, auth } = NextAuth(
    { providers: [
            CredentialsProvider({
                    credentials: {
                        username: { label: "Username", type: "text" },
                        password: {  label: "Password", type: "password" }
                    },
                authorize: async function (credentials) {

                    const authResponse = await fetch("http://localhost:8888/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(credentials),
                    })
                    const data = authResponse.json()
                    if (authResponse.ok && data) {
                        console.log(data)
                        return data
                    }
                   return null
                },
                }
            )
        ],
        session: {
            strategy :"jwt",
        },

    }
)

// types/next-auth.d.ts

declare module "next-auth" {
    interface Session {
        refreshTokenExpires?: number;
        accessTokenExpires?: string;
        refreshToken?: string;
        token?: string;
        error?: string;
        user: {
            id:string,
            address: string
        } & DefaultSession["user"];
    }
}
