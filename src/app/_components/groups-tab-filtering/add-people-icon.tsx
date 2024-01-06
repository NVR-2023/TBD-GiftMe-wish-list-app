import Image from "next/image";
import addPeopleIcon from "../../../../public/person_add.svg";

export default function AddPeopleIcon() {
    return (
        <Image src={addPeopleIcon} alt={"add people to group"} className="w-6 h-6"></Image>
    )
}