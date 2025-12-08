import SectionCard from "./sub-components/SectionCard";

const Items = () => {
  // dummy array 
  const items = Array.from({ length: 12 });

  return (
    <div className="h-[600px] w-full mt-8 overflow-y-auto">
      <h1 className="text-2xl">Explore our products</h1>
      {/* grid  */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
        {items.map((_, index) => (

          // logic hav eto remove later for real data
          <div
            key={index}
            className={`rounded-md h-[200px] ${
              index === 0 ? "bg-green-100" : "bg-green-500" 
            }`}
          >
            {index === 0 ? <SectionCard /> : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;