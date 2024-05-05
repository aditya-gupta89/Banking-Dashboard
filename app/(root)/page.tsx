import CurrentTotalBalance from "@/components/CurrentTotalBalance";
import Header from "@/components/Header";
import RightSidebar from "@/components/RightSidebar";
import React from "react";

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Header
            type="greeting"
            title="Welcome,"
            user={"Guest"}
            description="Access and manage your acco"
          />
          <CurrentTotalBalance
            accounts={["2333", "1231", "4533"]}
            totalBanks={3}
            totalCurrentBalance={29492}
          />
        </header>
      </div>
      <RightSidebar
        transactions={[
          {
            id: "trans123",
            $id: "trans456",
            name: "Payment",
            paymentChannel: "online",
            type: "debit",
            accountId: "acc123",
            amount: 50,
            pending: false,
            category: "Food and Drink",
            date: "2024-05-05",
            image: "transaction.jpg",
            $createdAt: "2024-05-05",
            channel: "web",
            senderBankId: "bank123",
            receiverBankId: "bank456",
          },
        ]}
        banks={[
          {
            $id: "23",
            accountId: "10",
            bankId: "10",
            accessToken: "3939",
            fundingSourceUrl: "493",
            userId: "12",
            sharableId: "39",
            id: "4",
            availableBalance: 49393,
            currentBalance: 293,
            officialName: "HD",
            mask: "$",
            institutionId: "33",
            name: "Adi",
            type: "33",
            subtype: "saving",
            appwriteItemId: "33",
          },
          {
            $id: "23",
            accountId: "10",
            bankId: "10",
            accessToken: "3939",
            fundingSourceUrl: "493",
            userId: "12",
            sharableId: "39",
            id: "4",
            availableBalance: 49393,
            currentBalance: 293,
            officialName: "HD",
            mask: "$",
            institutionId: "33",
            name: "Adi",
            type: "33",
            subtype: "saving",
            appwriteItemId: "33",
          }
        ]}
        user={{
          $id: "23",
          firstName: "Aditya",
          lastName: "Gupta",
          email: "aditya@thinkitive.com",
        }}
      />
    </section>
  );
};

export default Home;
