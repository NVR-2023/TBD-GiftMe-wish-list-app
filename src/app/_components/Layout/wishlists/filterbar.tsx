"use client";

import React, { useEffect } from "react";
import { useAppContext } from "@/context";

const FilterBar: React.FC = () => {
  const { userDetails, setUserDetails } = useAppContext();
  
  return <div>FilterBar connected</div>;
};

export default FilterBar;
