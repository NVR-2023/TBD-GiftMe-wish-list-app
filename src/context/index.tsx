"use client";
import { createContext, useState, useContext } from "react";

// Wishlists

type gift = {
  giftId?: number;
  name?: string;
  category?: string;
  giftImage?: string;
  provider?: string;
  providerURL?: string;
  isSentToMe?: boolean;
  status?: string;
  price?: number;
  isPriceTracked?: boolean;
  upperPriceLimit?: number;
  lowerPriceLimit?: number;
  deliveryDate?: Date;
  maxDeliveryDate?: Date;
  registerDate?: Date;
  giftedByUser?: string;
}

type myWishlist = {
  name?: string;
  giftArray?: gift[];
}

type externalWishlist = {
  name?: string;
  giftArray?: gift[];
  receiver?: string;
};

type displayWishlistBy = {
  status?: string;
  price?: string;
  category?: string;
  searchBy?: string;
}

// Groups

type gifter = {
  name?: string;
  avatarImage?: string;
}

type group = {
  name?: string,
  gifterArray?: gifter[];
}

//Notifications

type notification = {
  notificationContent?: string;
  isRead?: boolean;
  sent?: Date;
}



type AppContextProps = {
  //General user details
  userId?: number;
  userName?: string;
  userJWT?: string;
  currentPage?: string;
  darkMode?: boolean;

  //Wishlists tab
  sortWishlistsBy?: string;
  myWIshListArray?: myWishlist[];
  externalWishlistArray?: externalWishlist[];
  currentWishlistType?: "myWishlists" | "externalWishlists";
  currentWishlistIndex?: number;

  displayWishlistBy?: displayWishlistBy;

  //Groups tab
  sortGroupsBy?: string;
  groupsArray?: group[];
  sortGiftersBy?: string
  searchGroupBy?: string;

  //Notifications tab
  sortNotificationsBy?: string;
  searchNotificationsBy?: string;
  notificationsArray?: notification[];

};


const defaultAppContext: AppContextProps = {
  userId: 333,
  userName: "John",
  userJWT: "- Default Token -",
  currentPage: "wishlists",
  darkMode: false,
};

// revision: argument needs to be typed
const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [userDetails, setUserDetails] = useState(defaultAppContext);
  return <AppContext.Provider value={{userDetails , setUserDetails}}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
