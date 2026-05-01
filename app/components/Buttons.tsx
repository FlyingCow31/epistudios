import Link from "next/link";


export function OrderButton() {
    return (
        <Link href={"/contact"}>
            <button className={'bg-main py-2 px-5 w-[100%] text-white font-semibold rounded-lg shadowthing'}>En parler →</button>
        </Link>
    )
}