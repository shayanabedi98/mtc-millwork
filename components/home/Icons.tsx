import Image, { StaticImageData } from "next/image";

type Props = {
    img: StaticImageData
    content: string
}

export default function Icons({img, content}: Props) {
    return (
        <div className="max-lg:shadow-xl w-full lg:w-1/5 py-10 flex flex-col bordered gap-10 items-center justify-center">
            <Image className="w-20" src={img} alt=""/>
            <p>{content}</p>
        </div>
    )
}