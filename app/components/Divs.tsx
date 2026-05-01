import Link from "next/link";


interface ProductProps {
    product: string,
    bullet: {
        text: string;
        bold?: boolean;
    }[],
    cta: string
}

export default function ProductDiv({product, bullet, cta} : ProductProps) {
    return (
        <div className={'bg-white shadowthing text-left'}>
            <h1>{product}</h1>
            <div>
                {bullet.map((text) => {
                    return (
                        <p key={text.text} className={text.bold ? "font-bold" : ""}>{text.text}</p>
                    )
                })}
            </div>

            <Link href={"/contact"}>
                <button>
                    {cta}
                </button>
            </Link>
        </div>
    )
}
