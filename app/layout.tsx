import "./globals.css";

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import { ClusterProvider } from "@/components/cluster/cluster-data-access";
import { SolanaProvider } from "@/components/solana/solana-provider";
import { ReactQueryProvider } from "./react-query-provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <ClusterProvider>
            <SolanaProvider>
              <div className="bg-black text-white min-h-screen flex">
                {/* Sidebar */}
                <aside className="w-64 min-h-screen p-6 border-r border-gray-700">
                  <Link href="/" className="text-xl font-bold mb-4">
                    Jito Restaking Dashboard
                  </Link>
                  <nav className="my-6">
                    <ul className="space-y-3">
                      <div>
                        <Link
                          href="/vaults"
                          className="text-gray-400 hover:text-white cursor-pointer"
                        >
                          Vaults
                        </Link>
                      </div>
                      <div>
                        <Link
                          href="/initialize-vault"
                          className="text-gray-400 hover:text-white cursor-pointer"
                        >
                          Initialize Vault
                        </Link>
                      </div>
                      <div>
                        <Link
                          href="/mint-to"
                          className="text-gray-400 hover:text-white cursor-pointer"
                        >
                          Mint
                        </Link>
                      </div>
                    </ul>
                  </nav>
                </aside>

                <div className="flex-1">
                  <Header />

                  {/* Page Content */}
                  <div className="p-6">{children}</div>
                </div>
              </div>
            </SolanaProvider>
          </ClusterProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
