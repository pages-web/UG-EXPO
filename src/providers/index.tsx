"use client";


import { ApolloProvider } from "@/providers/ApolloProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
      <ApolloProvider>
        {children}


      </ApolloProvider>
  );
};