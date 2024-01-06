import Image from "next/image";
import addGroupIcon from "../../../../public/group-add-icon.svg"

export default function AddGroupIcon() {
    return (
        <Image src={addGroupIcon} alt={"toggle menu"} className="w-6 h-6"></Image>
    )
}