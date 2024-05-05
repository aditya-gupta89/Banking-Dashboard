import type { FC } from "react";
import Box from "@mui/material/Box";

const brandBg: Record<string, string> = {
  Mastercard: "assets/cards/card-mastercard-1.png",
  VISA: "assets/cards/card-visa.png",
};

const brandIcon: Record<string, string> = {
  Mastercard: "assets/logos/logo-mastercard.svg",
  VISA: "assets/logos/logo-visa.svg",
};

interface CryptoCardProps {
  id: string;
  brand: string;
  cardNumber: string;
  expiryDate: string;
  holderName: string;
}
const CreditCard: FC<CryptoCardProps> = (props) => {
  const { brand, cardNumber, holderName, expiryDate, id, ...other } = props;

  return (
    <div
      className=" bg-[#6366F1] rounded-2xl  bg-cover bg-center bg-no-repeat py-6 px-4 "
      style={{ backgroundImage: `url(${brandBg[brand]})` }}
      {...other}
    >
      <div className="flex items-center justify-between">
        <img src="/assets/contactless.svg" />
        <div className="h-[32px]">
          <img alt="" src={brandIcon[brand]} className="h-full" />
        </div>
      </div>
      <div className="mt-6 mb-3">
        <p
          className="bg-clip-text text-white  text-xl font-bold tracking-wide leading-8"
       
        >
          {cardNumber}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white text-xs">Card holder name</p>
          <p className="text-white font-bold text-sm leading-6 mt-1 text-shadow">
            {holderName}
          </p>
        </div>
        <div className=" ml-2 ">
          <p className="text-white text-xs">Expiry date</p>
          <p className="text-white font-bold text-sm leading-6 mt-1 text-shadow">
            {expiryDate}
          </p>
        </div>

        <div className="ml-2">
          <img src="/assets/sim.svg" />
        </div>
      </div>
    </div>
  );
};
export default CreditCard;
