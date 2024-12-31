import { FaArrowRight } from "react-icons/fa";
import expensesBreakdowns from "../../../data/expense";
import Card from "../../Elements/Card";


const CardExpenseBreakdown = () => {
    const expenseCard = expensesBreakdowns.map((expensesBreakdown) => (
        <div key={expensesBreakdown.id} className="flex justify-between my-6">
          <div className="flex">
            <div
              className="bg-special-bg w-12 h-12 rounded-lg flex items-center justify-center"
            >
              {expensesBreakdown.icon}
            </div>
            <div className="ms-4">
              <span className="text-gray-02">{expensesBreakdown.category}</span>
              <br />
              <span className="font-bold text-lg">${expensesBreakdown.amount}</span>
              <div className="flex items-center text-sm">
                <span className="text-gray-400">{expensesBreakdown.percentage}%*</span>
                <span className="ms-1">
                  {expensesBreakdown.arrow === "up" ? (
                    <span className="text-red-500">&#8593;</span>
                  ) : (
                    <span className="text-green-500">&#8595;</span>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="flex place-content-center flex-col me-8">
            <FaArrowRight />
          </div>
        </div>
      ));

    return (
        <Card variant="md:col-span-2" title="Expenses Breakdown" desc={<div className="h-full md:grid md:grid-cols-3">{expenseCard}</div>} />

    )
}

export default CardExpenseBreakdown