import { useEffect, useState } from "react"


export const MatList = () => {
    const [materials, setMaterials] = useState([])
    const [tiers, setTiers] = useState([])
    

    const localStorage_user = localStorage.getItem("site_user")
    const user = JSON.parse(localStorage_user)
    const [userSelected, setUserSelect] = useState({
        submitDate: new Date(),
        materialId: 0,
        amount: ""
    })
    

      const [val, setVal] = useState("");


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
            .then((tierArray) => {
                setTiers(tierArray)
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

    
    const handleIntegerInputChange = (event) => {
		const copyOfUserChoices = { ...userSelected };
		copyOfUserChoices[event.target.id] = parseInt(event.target.value);
		setUserSelect(copyOfUserChoices);
	};
    
    // Save the change:
    const handleSave = (event) => {
		event.preventDefault();
		alert(`yaaaa`)
  
		return fetch("http://localhost:8088/userMaterials", 
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(userSelected)
			}
		)
		.then(
			(response) => response.json()
		)
		.then(
			() => fetch(`http://localhost:8088/userMaterials`)
		)
		.then(
			response => response.json()
		)
		.then(
			(response) => setUserSelect(response)
		)
	}
    
    const dropDown = (materials) => {
        return (
                <select>
                    {materials.map(material => 
                    <option id="materialId"
                            value={material.id}
                            checked={userSelected.materialId === material.id}
                            onChange={handleIntegerInputChange}>
                        {material.matName}
                    </option>
                    )}             
                </select>
        )
    }


return (
    <>

    <div className="form-background">
			<form className="form--post" id="my_form" onSubmit={handleSave}>
				<fieldset data-identifier="tier-renders">
					<div className="form-group">
						{renderTier(1)}
                        {renderTier(2)}
                        {renderTier(3)}
                        {renderTier(4)}
                        {renderTier(5)}
                        {renderTier(6)}
					</div>
				</fieldset>
				<fieldset data-identifier="input-number-box">
					<input
                        placeholder="place amount here"
                        type="number"
                        pattern="[0-4]*"
                        value={userSelected}
                        onChange={(e) =>
                        setUserSelect((v) => 
                            (e.target.validity.valid ? e.target.value : v))
                        }
                    />
				</fieldset>
    
                <fieldset data-identifier="submit-button">
					<button 
					className= "btn"
					type="submit"> Submit </button>
				</fieldset>
			</form>
		</div>

    </>
);
}

// ALWAYS BREAK THINGS UP IN INDIVIDUAL FUNCTIONS
// Get better at naming stuff
// Algorithmic thinking(writing steps down)
// Create dropdown html for tiers
