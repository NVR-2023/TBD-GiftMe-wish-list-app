"use client";
import { createContext, useState, useEffect, useContext } from "react";

// General User

type userType = {
  userId: number;
  userName: string;
  userJWT?: string;
  isLogged?: boolean;
};

// UI Theme
type themeType = "dark" | "light";

// Wishlists

type giftType = {
  id: number;
  name: string;
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
};

type myWishlistType = {
  id: number;
  name: string;
  giftsArray?: giftType[];
};

type myWishlistsArrayType = myWishlistType[];

type externalWishlistType = {
  id: number;
  name: string;
  giftsArray?: giftType[];
  receiver?: string;
};

type externalWishlistsArrayType = externalWishlistType[];

type displayWishlistByType = {
  sortWishlistsBy?: string;
  currentWishlistType?: "myWishlists" | "externalWishlists";
  currentWishlistIndex?: number;
  status?: string;
  price?: string;
  category?: string;
  searchBy?: string;
};

// Groups

type gifterType = {
  id: number;
  name: string;
  avatarImage?: string;
};

type groupType = {
  id: number;
  name: string;
  giftersArray?: gifterType[];
};

type groupsArrayType = {
  groupsArray?: groupType[];
};

type sortGroupsGiftersByType = {
  sortGroupsBy?: string;
  sortGiftersBy?: string;
};

//Notifications

type notificationType = {
  id: number;
  message: string;
  isRead?: boolean;
  sent?: Date;
};

type notificationsArrayType = {
  notificationsArray?: notificationType[];
};

type sortNotificationsByType = string;

// Global Variables and functions

type globalVariablesType = Record<any, any>;

type globalFunctionsType = Record<any, Function>;

type AppContextProps = {
  userDetails?: userType;
  theme?: themeType;

  wishlistsTabContext?: {
    myWishlists?: myWishlistsArrayType;
    externalWishlists?: externalWishlistsArrayType;
    display?: displayWishlistByType;
  };

  grouspTabContext?: {
    groups: groupsArrayType;
    sort: sortGroupsGiftersByType;
  };

  notificationsContext?: {
    notifications: notificationsArrayType;
    sort: sortNotificationsByType;
  };

  globalVariables?: globalVariablesType;
  globalFunctions?: globalFunctionsType;
};

const defaultAppContext: AppContextProps = {};

// revision: argument needs to be typed
const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [globalContext, setGlobalContext] = useState(defaultAppContext);

  useEffect(() => {
    const loadMockContext = async () => {
      try {
        const response = await fetch("mockcontext.json");
        const data = await response.json();
        setGlobalContext(data);
        console.log("mock context successfully loaded");
      } catch (error) {
        console.error("Error loading mock context:", error);
      }
    };
    loadMockContext();
  }, []);

  return (
    <AppContext.Provider
      value={{ globalContext: globalContext, setGlobalContext: setGlobalContext }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
