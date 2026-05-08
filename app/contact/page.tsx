import Navbar, {MobileNavbar} from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import {FormContact} from "@/app/components/FormInputs";




export default function page() {
    return (
        <div>
            <MobileNavbar/>
            <Navbar/>

            <main>

                <FormContact/>


            </main>
            <Footer/>
        </div>
    )
}
