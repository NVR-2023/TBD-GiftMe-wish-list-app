"use client";
import NavBar from "../_components/navbar/navbar";
import SideBar from "../_components/groups-sidebar/sidebar";
import TabFiltering from "../_components/groups-tab-filtering/tab-filtering";

export default function Groups() {
  return (
    <div>
      <NavBar />
      <div className="pt-16 lg:flex">
        <SideBar />
        <div className="w-full h-full p-7 m-1 overflow-y-auto">
          <TabFiltering />
          <div className="flex items-center justify-center p-16 mr-5 border-4 border-dotted lg:p-80">
            Content...
          </div>
        </div>
      </div>
    </div>
  );
}
