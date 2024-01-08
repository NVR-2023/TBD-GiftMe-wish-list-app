import { useAppContext } from "@/context";
import AddPeopleIcon from "./addPeopleIcon";
import TrashIcon from "./deleteGroupIcon";

export default function TabFiltering() {
    const { userDetails } = useAppContext();
    const groupsType = userDetails.groupsType;

    return (
        <div className="flex justify-between items-center py-8 mr-4 border-b-2 border-slate-300 lg:px-2 lg:py-5 sm:px-2">
            <div className="text-xl font-semibold">{groupsType[0].type}</div>
            <div className="flex justify-between items-center lg:w-40">
                <div className="flex md:pr-4">
                    <div>
                        <AddPeopleIcon />
                    </div>
                    <div className="pl-2">
                        People
                    </div>
                </div>
                <div>
                    <TrashIcon />
                </div>
            </div>
        </div>
    )
}