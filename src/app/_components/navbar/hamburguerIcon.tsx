import Image from "next/image";
import hamburguerIcon from "../../../../public/hamburguer-icon.svg"

export default function HamburguerIcon() {
    return (
        <Image src={hamburguerIcon} alt={"toggle menu"} className="w-7 h-7"></Image>
    )
}