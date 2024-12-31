import Card from "../components/Elements/Card/index";
import MainLayout from "../components/Layout/MainLayout";

const GoalsPage = () => {
  return (
    <MainLayout type="goals">
      <div className="text-gray-700 font-semibold text-xl mb-4">Goals</div>
      
      {/* Bagian atas (Goals) */}
      <div className="mb-8 flex flex-wrap gap-4">
        <div className="w-full sm:w-1/2">
          <Card />
        </div>
        <div className="w-full sm:w-1/2">
          <Card />
        </div>
      </div>

      <div className="text-gray-700 font-semibold text-xl mb-4">Expenses Goals by Category</div>

      {/* Bagian bawah (Expenses Goals by Category) */}
      <div className="flex flex-wrap gap-4">
        <div className="w-full sm:w-1/3">
          <Card />
        </div>
        <div className="w-full sm:w-1/3">
          <Card />
        </div>
        <div className="w-full sm:w-1/3">
          <Card />
        </div>
        <div className="w-full sm:w-1/3">
          <Card />
        </div>
        <div className="w-full sm:w-1/3">
          <Card />
        </div>
        <div className="w-full sm:w-1/3">
          <Card />
        </div>
      </div>
    </MainLayout>
  );
};

export default GoalsPage;
