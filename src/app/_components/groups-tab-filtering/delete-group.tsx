import Image from "next/image";
import trashIcon from "../../../../public/trash.svg";

export default function TrashIcon() {
    return (
        <Image src={trashIcon} alt={"delete group"} className="w-6 h-6"></Image>
    )
}