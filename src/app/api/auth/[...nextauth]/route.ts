import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const handle = NextAuth({
  // Configure one or more authentication providers
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60 // 24 hours
  },
  pages: {
    signIn: '/sign-in',
    signOut: '/',
    error: '/'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      const sessions = {
        ...session,
        accessToken: token?.['accessToken'] || '',
        refreshToken: token?.['refreshToken']
      }

      return sessions
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
      }
      return token
    }
  }
})

export { handle as GET, handle as POST }
