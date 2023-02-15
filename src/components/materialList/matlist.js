import { useEffect, useState } from "react"

export const MatList = () => {
    const [material, setMaterials] = useState([])
    const [tiers, setTiers] = useState([])
    const [filteredTiers, setFilterTier] = useState(material)
    

const getAllMaterials = () => {
        fetch(`http://localhost:8088/materials`)
            .then(response => response.json())
            .then((matArray) => {
                setMaterials(matArray)
            })
    }

    const getAllTiers = () => {
        fetch(`http://localhost:8088/tiers`)
            .then(response => response.json())
            .then((tiertArray) => {
                setMaterials(tiertArray)
            })
    }

    useEffect(
        () => {
            getAllMaterials()
           
            console.log("Initial state of tickets", material) // View the initial state of tickets
        },
        [] // When this array is empty, you are observing initial component state
    )

    let handleMatChange = (e) => {
    setMaterials(e.target.value);
  };

  const filterTiers = (tiers) => {
     setFilterTier(
        material.find(mat => {
            return ( 
                mat.tierId === tiers.id
            )
        })
     )
  }
    return (
        <>
    

   <div>
<h2>Tier 1</h2>
<div className = "Materials">
     <select onChange={handleMatChange}>
        
                    <option value="Select Material">Select Mat</option>
              {material.map((matObj) => (
              <option value={matObj.id === filterTiers}>{matObj.matName}</option>
              ))}

     </select>
</div>
   </div>
</>
 );




    
}

// Algorithmic thinking(writing steps down)
// Create dropdown html for tiers
// Use .map array method to render html for each tier object.
// Use .map Array method to render html for material object.

