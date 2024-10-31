import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt', // This part is correct
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          required: true,
          placeholder: 'Your email address',
        },
        password: {
          label: 'Password',
          type: 'password',
          required: true,
          placeholder: 'Your password',
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!credentials) {
          return null;
        }
        if (email) {
          const user = users.find(u => u.email === email);
          console.log(user);
          if (user) {
            if (user.password === password) {
              return user;
            }
          }
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      if (account) {
        token.type = user.type;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.type = token.type;
      return session;
    },
  },
};
const handler = NextAuth(authOptions);

const users = [
  {
    email: 'example@example.com',
    password: 'password', // You should hash this password before storing it.
    name: 'Example User',
    type: 'admin',
    image: 'https://i.ibb.co/my9QSBM/review-Client.png', // Correct URL.
  },
  {
    email: 'another@example.com',
    password: 'password', // You should hash this password before storing it.
    name: 'Another User',
    type: 'moderator', // Fixed typo (modarator -> moderator).
    image: 'https://i.ibb.co/my9QSBM/review-Client.png', // Correct URL.
  },
  {
    email: 'yet@another.example.com',
    password: 'password', // You should hash this password before storing it.
    name: 'Yet Another User',
    type: 'moderator', // Fixed typo.
    image: 'https://i.ibb.co/QC6FQ4K/doctor1.png', // Correct URL.
  },
];

export { handler as GET, handler as POST };
