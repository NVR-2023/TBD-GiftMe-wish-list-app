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

// Global Context

export type AppContextPropsType = {
  userDetails?: userType;
  theme?: themeType;

  wishlistsTabContext?: {
    myWishlists?: myWishlistsArrayType;
    externalWishlists?: externalWishlistsArrayType;
    display?: displayWishlistByType;
  };

  groupsTabContext?: {
    groups: groupsArrayType;
    sort: sortGroupsGiftersByType;
  };

  notificationsContext?: {
    notifications: notificationsArrayType;
    sort: sortNotificationsByType;
  };

  globalVariables?: globalVariablesType;
  globalFunctions?: globalFunctionsType;

  // Necessary , otherwise will throw an error in context/index.ysx
  globalContext?: any;
  setGlobalContext?: any;
};
