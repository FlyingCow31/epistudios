import Navbar, {MobileNavbar} from "@/app/components/Navbar";


export default function Home() {
  return (
    <main className={'relative min-h-screen bg-bg'}>
      <Navbar/>
        <MobileNavbar/>
    </main>
  );
}
