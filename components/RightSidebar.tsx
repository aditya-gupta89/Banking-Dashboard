import Image from "next/image";
import Link from "next/link";
import React from "react";
import { countTransactionCategories } from "@/lib/utils";
import Category from "./Category";
import CreditCards from "./CreditCards";

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  const categories: CategoryCount[] = countTransactionCategories(transactions);

  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">
              {user?.name[0] || ""}
            </span>
          </div>

          <div className="profile-details">
            <h1 className="profile-name">{user?.name || ""}</h1>
            <p className="profile-email">{user?.email || ""}</p>
          </div>
        </div>
      </section>

      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My Banks</h2>
          <Link href="/" className="flex gap-2">
            <Image src={"icons/plus.svg"} width={20} height={20} alt="plus" />
            <h2 className="text-14 font-semibold text-gray-600">Add Bank</h2>
          </Link>
        </div>
        <CreditCards
          cards={[
            {
              id: "79f8212e4245e4c11952f2cf",
              brand: "Mastercard",
              cardNumber: "5823 4492 2385 1102",
              expiryDate: "05/28",
              holderName: user?.name || "",
            },
            {
              id: "99f231b1c079b810ba66bef1",
              brand: "VISA",
              cardNumber: "3455 4562 7710 3507",
              expiryDate: "02/30",
              holderName: user?.name || "",
            },
          ]}
        />

        <div className="mt-10 flex flex-1 flex-col gap-6">
          <h2 className="header-2">Top categories</h2>

          <div className="space-y-5">
            {categories.map((category, index) => (
              <Category key={category.name} category={category} />
            ))}
          </div>
        </div>
      </section>
    </aside>
  );
};

export default RightSidebar;
