import { Outlet } from "react-router-dom";
import Navbar from "./NavbarComponent";

function DefaultLayoutComponent() {
    return (
        <>
            <Navbar />

            <main>
                <Outlet />

            </main>


            <footer>
                <p>Copy lorem ipsum</p>
            </footer>
        </>
    )

}

export default DefaultLayoutComponent;