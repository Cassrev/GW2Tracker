import { Outlet, Route, Routes } from "react-router-dom"
// import { Profile } from "../profile/Profile"
// import { TicketEdit } from "../tickets/TicketEdit"
// import { TicketForm } from "../tickets/TicketForm"
import { MatList } from "../materialList/matlist"

export const UserViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Guild wars 2 material site</h1>
                
<MatList />
                   
                </>
            }>

              

                {/* <Route path="tickets/:ticketId/edit" element={ <TicketEdit/> } />
                <Route path="profile" element={<Profile />} />
                <Route path="tickets" element={<TicketList />} />
                <Route path="ticket/create" element={<TicketForm />} /> */}
            </Route>
        </Routes>
    )
}