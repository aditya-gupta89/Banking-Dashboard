import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full font-inter">
      {" "}
      <Sidebar
        user={{
          $id: "123456",
          email: "john@example.com",
          userId: "user123",
          dwollaCustomerUrl: "https://www.dwolla.com/customers/user123",
          dwollaCustomerId: "dwolla123",
          firstName: "John",
          lastName: "Doe",
          address1: "123 Main St",
          city: "Anytown",
          state: "CA",
          postalCode: "12345",
          dateOfBirth: "1990-01-01",
          ssn: "123-45-6789",
        }}
      />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav
              user={{
                $id: "123456",
                email: "john@example.com",
                userId: "user123",
                dwollaCustomerUrl: "https://www.dwolla.com/customers/user123",
                dwollaCustomerId: "dwolla123",
                firstName: "John",
                lastName: "Doe",
                address1: "123 Main St",
                city: "Anytown",
                state: "CA",
                postalCode: "12345",
                dateOfBirth: "1990-01-01",
                ssn: "123-45-6789",
              }}
            />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
