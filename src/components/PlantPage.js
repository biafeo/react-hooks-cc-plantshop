import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    fetch(" http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []);

  function addPlant(newPlant) {
    const updatedPlants = [...plants, newPlant];
    setPlants(updatedPlants);
    // console.log(updatedPlants);
  }

  // function deletePlant(id) {
  //   const updatedPlants = plants.filter((plant) => plant.id !== id);
  //   setPlants(updatedPlants);
  // }
  // function updatedPlant(id, inStock) {
  //   const updatedPlants = plants.map((plant) => {
  //     if (plant.id === id) {
  //       return { ...plant, inStock };
  //     } else {
  //       return plant;
  //     }
  //   });
  //   setPlants(updatedPlants);
  // }

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
