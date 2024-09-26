import { airtime, data, cable, bulb, sms, barcode } from "./assets";

export const services = [
   {
      id: 1,
      icon: airtime,
      text: "Airtime Topup",
      desc: "Topup your loved ones' phone instantly on Aibentopup ... stay in touch with families and friends when you're away from home.",
       direction: "flip-up"
   },
   {
      id: 2,
      icon: data,
      text: "Data Topup",
      desc: "Begin to benefit from our extremely low-cost data plan for internet browsing, which is fast and automated with 24/7 availability.",
       direction: "flip-up"
   },
   {
      id: 3,
      icon: cable,
      text: "Cable Subscriptions",
      desc: "Your views can never be declined, once you have quick access to our cable subscriptions.",
      direction: "flip-up"
   },
   {
      id: 4,
      icon: bulb,
      text: "Utility Bills Payment",
      desc: "Enjoy the Convenience of paying your utility bills on Aibentopup, no matter where you are in the country.",
      direction: "flip-left"
   },
   {
      id: 5,
      icon: sms,
      text: "Bulk SMS",
      desc: "Pay less and send more with our amazing and cheap bulk SMS services. Never worry about high cost of SMS as we got you covered with our cheap services.",
      direction:  "flip-down"
   },
   {
      id: 6,
      icon: barcode,
      text: "Exam Result Checker",
      desc: "Get your WAEC, NECO, GCE pin on topup access to check your exam result.",
      direction: "flip-right"
   }
];