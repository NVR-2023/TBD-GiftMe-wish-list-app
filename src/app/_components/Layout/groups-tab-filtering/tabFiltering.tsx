import React from 'react';
import { useAppContext } from "@/context";
import AddPeopleIcon from "./addPeopleIcon";
import TrashIcon from "./deleteGroupIcon";
import DropdownStatus from "./dropdownStatus";
import SearchBar from "./searchBar";

const TabFiltering: React.FC = () => {
  const { userDetails } = useAppContext();
  const groupsType = userDetails.groupsType;

  return (
    <div>
      <div className="flex z-10 bg-inherit justify-between items-center py-2 mr-4 border-b-2 border-slate-300 lg:px-2 lg:py-2 sm:px-2">
        <div className="text-xl font-semibold">{groupsType[1].type}</div>
        <div className="flex justify-between items-center lg:w-40">
          <div className="flex md:pr-4">
            <div>
              <AddPeopleIcon />
            </div>
            <div className="pl-2">People</div>
          </div>
          <div>
            <TrashIcon />
          </div>
        </div>
      </div>
      <div className="flex bg-inherit justify-between items-center py-2 mr-4 border-b-2 border-slate-300 g:px-2 lg:py-2 sm:px-2">
        <DropdownStatus />
        <SearchBar />
      </div>
    </div>
  );
}

export default TabFiltering;
