import Link from "next/link";

interface ButtonProps {
    classname?: string,
    name?: string
}

export function OrderButton({classname, name} : ButtonProps) {
    return (
        <Link href={"/contact"}>
            <button className={`${classname || "w-[100%]"} bg-main py-2 px-5 text-white font-semibold rounded-lg shadowthing`}>{name || "En parler →"}</button>
        </Link>
    )
}