import { useEffect, useState } from "react";
import Header from "./Header";
import Search from "./Search";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function handleUpdatePlant(updatedPlant) {
    const updatedPlants = plants.map((plant) =>
      plant.id === updatedPlant.id ? updatedPlant : plant
    );

    setPlants(updatedPlants);
  }

  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />

      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <NewPlantForm onAddPlant={handleAddPlant} />

      <PlantList
        plants={displayedPlants}
        onUpdatePlant={handleUpdatePlant}
      />
    </div>
  );
}

export default App;