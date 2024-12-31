import { FaHome, FaUtensils, FaShoppingBag, FaCar, FaEllipsisH, FaFilm } from "react-icons/fa";

const expensesBreakdowns = [
  {
    id: 1,
    category: "Housing",
    amount: 250,
    percentage: 15,
    arrow: "up",
    icon: <FaHome />,
  },
  {
    id: 2,
    category: "Food",
    amount: 350,
    percentage: 8,
    arrow: "down",
    icon: <FaUtensils />,
  },
  {
    id: 3,
    category: "Shopping",
    amount: 420,
    percentage: 25,
    arrow: "up",
    icon: <FaShoppingBag />,
  },
  {
    id: 4,
    category: "Transportation",
    amount: 50,
    percentage: 12,
    arrow: "down",
    icon: <FaCar />,
  },
  {
    id: 5,
    category: "Entertainment",
    amount: 80,
    percentage: 15,
    arrow: "down",
    icon: <FaFilm />,
  },
  {
    id: 6,
    category: "Others",
    amount: 650,
    percentage: 23,
    arrow: "up",
    icon: <FaEllipsisH />,
  },
];

  
export const expensesStatistics = {
  dataKey: "date",
  series: [
    { dataKey: "amountThisWeek", label: "This Week", color: "#E8E8E8" },
    { dataKey: "amountLastWeek", label: "Last Week", color: "#299D91" },
  ],
  data: [
    {
      id: 1,
      date: "17 Sun",
      amountThisWeek: 25000,
      amountLastWeek: 50000,
    },
    {
      id: 2,
      date: "18 Mon",
      amountThisWeek: 50000,
      amountLastWeek: 10000,
    },
    {
      id: 3,
      date: "19 Tue",
      amountThisWeek: 10000,
      amountLastWeek: 50000,
    },
    {
      id: 4,
      date: "20 Wed",
      amountThisWeek: 50000,
      amountLastWeek: 50000,
    },
    {
      id: 5,
      date: "21 Thu",
      amountThisWeek: 50000,
      amountLastWeek: 10000,
    },
    {
      id: 6,
      date: "22 Fri",
      amountThisWeek: 25000,
      amountLastWeek: 10000,
    },
    {
      id: 7,
      date: "23 Sat",
      amountThisWeek: 50000,
      amountLastWeek: 10000,
    },
  ]
};
  
  export default expensesBreakdowns;