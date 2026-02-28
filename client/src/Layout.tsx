import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import "./styles/_layout.scss"
const Layout = () => {
    return (
        <div className="layout">
            <div className="Sidebar">
                <Sidebar />
            </div>
            <Outlet />
        </div>
    )
}

export default Layout