import { useAppContext } from "@/context";
import AddGroupIcon from "./addGroupIcon";
import GroupWorkspaceIcon from "./groupWorkspaceIcon";

export default function SideBar() {
  const { userDetails } = useAppContext();
  const groupsType = userDetails.groupsType;

  return (
    <div className="flex flex-col w-full px-4 py-8 border-b lg:border-r lg:h-screen lg:w-64">
      <div className="flex flex-col mt-6">
        <div className="flex items-center justify-between border-b-2 border-slate-300 px-4 py-2 text-gray-700 bg-inherit">
          <span className="text-xl font-semibold">Groups</span>
          <AddGroupIcon />
        </div>
        <aside className="max-h-[calc(100vh-120px)] overflow-y-auto">
          <ul>
            {groupsType &&
              groupsType.map((group: any, index: number) => {
                return (
                  <li key={index}>
                    <div className="flex items-center px-2 py-2 mt-5 text-gray-600 border-2 border-slate-500 rounded-lg">
                      <div className="w-full">
                        <div className="flex justify-between border-b-2 border-slate-300">
                          <span className="text-sm font-medium">
                            {group.type}
                          </span>
                          <GroupWorkspaceIcon />
                        </div>
                        <div>
                          <span className="text-sm font-light">
                            {group.members > 1
                              ? `${group.members} people`
                              : "Individual"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </aside>
      </div>
    </div>
  );
}
