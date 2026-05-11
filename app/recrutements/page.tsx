import Navbar, {MobileNavbar} from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FormGeneral from "@/app/components/FormInputs";


export default function Page() {
    return (
        <div>
            <Navbar/>
            <MobileNavbar/>

            <main>
                <h1 className={"bigtitle"}>Recrutements</h1>
                <p className={'text-xl text-justify w-80 mx-auto lg:w-[60%]'}>
                    Vous avez envie de rejoindre une équipe passionée et de participer à la création de projets
                    qui ont du sens ? <br/> <br/>
                    <span className={"boldtext text-main underline"}>Rejoignez EPI Studio !</span>
                </p>

                <FormGeneral/>
                
            </main>
            <Footer/>
        </div>
    )
}