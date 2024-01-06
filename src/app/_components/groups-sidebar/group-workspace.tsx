import Image from "next/image";
import groupWorkspaceIcon from "../../../../public/group-workspace.svg"

export default function GroupWorkspaceIcon() {
    return (
        <Image src={groupWorkspaceIcon} alt={"toggle menu"} className="w-4 h-4"></Image>
    )
}