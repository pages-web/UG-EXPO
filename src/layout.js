"use client";

import { ApolloProvider } from "@apollo/client";
import "./globals.css";
import client from "@/lib/apolloClient";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body classname={`antialiased`}>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </body>
    </html>
  );
}
