import { FaShoppingBag, FaHome, FaTicketAlt, FaTaxi, FaKeyboard, FaDollarSign, } from "react-icons/fa";
import { GiFullPizza } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";

const transactions = [
  {
    id: 1,
    icon: <FaShoppingBag size={24} className="text-gray-600" />,
    transactionName: "GTR 5",
    shopName: "Gadget & Gear",
    amount: 160,
    date: "2023-05-17",
  },
  {
    id: 2,
    icon: <FaShoppingBag size={24} className="text-gray-600" />,
    transactionName: "Polo Shirt",
    shopName: "XL Fashions",
    amount: 20,
    date: "2023-05-17",
  },
  {
    id: 3,
    icon: <ImSpoonKnife size={24} className="text-gray-600" />,
    transactionName: "Biriyani",
    shopName: "Hajir Biriyani",
    amount: 12,
    date: "2023-05-17",
  },
  {
    id: 4,
    icon: <FaTicketAlt size={24} className="text-gray-600" />,
    transactionName: "Movie Ticket",
    shopName: "Inox",
    amount: 15,
    date: "2023-05-17",
  },
  {
    id: 5,
    icon: <FaTaxi size={24} className="text-gray-600" />,
    transactionName: "Taxi Fare",
    shopName: "Uber",
    amount: 10,
    date: "2023-05-17",
  },
  {
    id: 6,
    icon: <GiFullPizza size={24} className="text-gray-600" />,
    transactionName: "Pizza",
    shopName: "Pizza Hut",
    amount: 20,
    date: "2023-05-17",
  },
  {
    id: 7,
    icon: <FaKeyboard size={24} className="text-gray-600" />,
    transactionName: "Keyboard",
    shopName: "Gadget & Gear",
    amount: 30,
    date: "2023-05-17",
  },
  {
    id: 8,
    icon: <FaDollarSign size={24} className="text-gray-600" />,
    transactionName: "Project Fee",
    shopName: "Landing Page",
    amount: 100,
    date: "2023-05-17",
  },
];
  
  export default transactions;