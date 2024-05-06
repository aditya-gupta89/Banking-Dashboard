import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div className="w-full h-full">
          <Image  
            src="/assets/swiss.jpg"
            alt="Auth image"
            width={1000}
            height={1000}
            className="rounded-l-xl  h-full"
          />
        </div>
      </div>
    </main>
  );
}
