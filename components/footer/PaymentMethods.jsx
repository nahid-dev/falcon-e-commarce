import Image from "next/image";
import React from "react";

export const PaymentMethods = () => {
  const paymentMethods = [
    { name: "Visa", logo: "/Visa.png", bgColor: "bg-white" },
    { name: "Mastercard", logo: "/Mastercard.png", bgColor: "bg-white" },
    {
      name: "American Express",
      logo: "/american-express.png",
      bgColor: "bg-blue-600",
    },
    { name: "bKash", logo: "/bkash.png", bgColor: "bg-white" },
    { name: "Nagad", logo: "/Nagad.png", bgColor: "bg-white" },
  ];

  return (
    <div className="flex flex-col md:flex-row items-end md:items-center gap-4">
      <span className="text-slate-400 text-sm">PAYMENTS ACCEPTED </span>
      <div className="flex gap-2 flex-wrap">
        {paymentMethods.map((method) => (
          <div
            key={method.name}
            className={`${method.bgColor} rounded-lg px-3 py-2 flex items-center justify-center min-w-[60px] h-10`}
          >
            <span className=" text-xs font-semibold">
              {method.name === "Visa" && (
                <div className="w-[67px] h-[43px] flex items-center px-2 py-2">
                  <Image
                    src={method.logo}
                    alt="Visa Card"
                    width={360}
                    height={360}
                  />
                </div>
              )}
              {method.name === "Mastercard" && (
                <div className="w-[67px] h-[43px] flex items-center py-1 px-2">
                  <Image
                    src={method.logo}
                    alt="Visa Card"
                    width={360}
                    height={360}
                  />
                </div>
              )}
              {method.name === "American Express" && (
                <div className="w-[67px] h-[43px] flex items-center">
                  <Image
                    src={method.logo}
                    alt="Visa Card"
                    width={360}
                    height={360}
                  />
                </div>
              )}
              {method.name === "bKash" && (
                <div className="w-[67px] h-[43px] flex items-center px-2 py-1">
                  <Image
                    src={method.logo}
                    alt="Visa Card"
                    width={360}
                    height={360}
                  />
                </div>
              )}
              {method.name === "Nagad" && (
                <div className="w-[67px] h-[43px] flex items-center px-2 py-1">
                  <Image
                    src={method.logo}
                    alt="Visa Card"
                    width={360}
                    height={360}
                  />
                </div>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
