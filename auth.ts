import NextAuth, {DefaultSession} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// @ts-ignore
export const { handlers, auth } = NextAuth(
    {
        providers: [
            CredentialsProvider({
                    credentials: {
                        phone: { label: "phone", type: "text" },
                        code: {  label: "code", type: "text" }
                    },
                authorize: async function (credentials,req) {
                    const authResponse = await fetch("http://localhost:8888/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(credentials),
                    })
                    const data = authResponse.json()
                    if (authResponse.ok) {
                        // return data.token
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
        callbacks:{
            async signIn (credentials){
                // @ts-ignore
                return credentials?.user?.code == 200;
            },
            // @ts-ignore
            async session  ({ session, token, user }) {
                // @ts-ignore
                session.token = token?.accessToken
                // @ts-ignore
                session.expires = token?.expire

                // @ts-ignore
                session.user = token.user
                return session
            },
            async jwt({ token, user}) {
                if (user) {
                    // @ts-ignore
                    token = { accessToken: user.token }
                    token.user = user
                    // @ts-ignore
                    token.expire = user.expire
                    return token
                }
                return token
                // return null;
            },

        },

    }

)

// types/next-auth.d.ts

declare module "next-auth" {
    interface Session {
        refreshTokenExpires?: string;
        accessTokenExpires?: string;
        refreshToken?: string;
        token?: string;
        error?: string;
        user: {
            address: string,
        } & DefaultSession["user"];
    }
    // interface To {
    //     refreshTokenExpires?: string;
    //     accessTokenExpires?: string;
    //     refreshToken?: string;
    //     token?: string;
    //     error?: string;
    //     user: {
    //         address: string,
    //     } & DefaultSession["user"];
    // }
}
