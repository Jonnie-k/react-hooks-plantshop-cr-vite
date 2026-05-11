import PlantCard from "./PlantCard";

function PlantList({ plants, onUpdatePlant }) {
  return (
    <div>
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onUpdatePlant={onUpdatePlant}
        />
      ))}
    </div>
  );
}

export default PlantList;