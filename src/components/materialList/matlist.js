import { useEffect, useState } from "react"

export const MatList = () => {
    const [materials, setMaterials] = useState([])
    const [tiers, setTiers] = useState([])
    const [filteredTiers, setFilterTier] = useState([])
    

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
                setTiers(tiertArray)
            })
    }

    const filterMat = (tierId) => {
        return materials.filter(material => matchTiersMat(material, tierId))
    
    }


    const matchTiersMat = (material, tierId ) => {
        return ( 
            material.tierId === tierId
        )
    }

    const renderTier = (tierId) => {
        if(tiers.length > 0 && materials.length > 0){
            return (
            <>
            <h1>Tier {tierId}</h1>
            <div>{dropDown(filterMat(tierId))}</div>
            </>
            )
        } else {
            return "No list"
        }
    };

 
    useEffect(
        () => {
            getAllMaterials();
            getAllTiers();
           
            },
        [] // When this array is empty, you are observing initial component state
    )

    let handleMatChange = (e) => {
    setMaterials(e.target.value);
    };

const dropDown = (materials) => {
    return (<select onChange={handleMatChange}>
                {materials.map(material => <option value={material.id}>{material.matName}</option>)}             

            </select>
    )
}


return (
    <>
        <div>
            {renderTier(1)}
            {renderTier(2)}
            {renderTier(3)}
            {renderTier(4)}
            {renderTier(5)}
            {renderTier(6)}
        </div>
    </>
);
}

// ALWAYS BREAK THINGS UP IN INDIVIDUAL FUNCTIONS
// Get better at naming stuff
// Algorithmic thinking(writing steps down)
// Create dropdown html for tiers
