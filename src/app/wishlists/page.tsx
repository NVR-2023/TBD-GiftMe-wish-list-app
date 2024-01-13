"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useAppContext } from "@/context";

import NavBar from "../_components/Layout/navbar/navbar";
import SideBar from "../_components/Layout/wishlists/sidebar";
import FilterBar from "../_components/Layout/wishlists/filterbar";

const Wishlists: React.FC = () => {
  const { userDetails, setUserDetails } = useAppContext();

  useEffect(() => {
    const getWishlistsData = () => {
      setUserDetails((currentUserDetails: any) => ({
        ...currentUserDetails,
        myWishlistsArray: [
          {
            name: "My Birthday",
            id: 1,
            giftsArray: [
              {
                name: "Fridge",
                id: 1,
                category: "appliances",
                price: 500,
                provider: "LG",
                status: "purchasable",
              },
              {
                name: "Print",
                id: 2,
                category: "Home deco",
                price: 100,
                provider: "Giclée Prints",
                status: "reserved",
              },
              {
                name: "PS5",
                id: 3,
                category: "Entertainment",
                price: 500,
                provider: "Amazon",
                status: "purchasable",
              },
            ],
          },
          {
            name: "My Graduation",
            id: 2,
            giftsArray: [
              {
                name: "Piano",
                id: 1,
                category: "musical instruments",
                price: 3500,
                provider: "Yamaha",
                status: "purchasable",
              },
              {
                name: "Adidas trainers",
                id: 2,
                category: "sports",
                price: 70,
                provider: "Adidas",
                status: "reserved",
              },
              {
                name: "PS5",
                id: 3,
                category: "Entertainment",
                price: 500,
                provider: "Amazon",
                status: "purchasable",
              },
            ],
          },
        ],
        externalWishlistsArray: [
          {
            name: "Peter's Birthday",
            id: 1,
            giftsArray: [
              {
                name: "Rug",
                id: 1,
                category: "Home deco",
                price: 50,
                provider: "Amazon",
                status: "purchasable",
              },
              {
                name: "Surf board",
                id: 2,
                category: "Sports",
                price: 300,
                provider: "AliExpress",
                status: "purchaseable",
              },
              {
                name: "Xbox X",
                id: 3,
                category: "Entertainment",
                price: 500,
                provider: "Amazon.co.uk",
                status: "reserved",
              },
            ],
            receiver: "My brother",
          },
          {
            name: "Belinda's wedding",
            id: 2,
            giftsArray: [
              {
                name: "table",
                id: 1,
                category: "Home deco",
                price: 150,
                provider: "Amazon.fr",
                status: "purchasable",
              },
              {
                name: "Surf board",
                id: 2,
                category: "Sports",
                price: 300,
                provider: "AliExpress",
                status: "purchasable",
              },
              {
                name: "sofa",
                id: 3,
                category: "Home deco",
                price: 1500,
                provider: "Lovely sofas",
                status: "purchaseable",
              },
            ],
            receiver: "Belinda",
          },
        ],
      }));
    };

    getWishlistsData();
  }, []);

  return (
    <div className="bg-green-400">
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>Wishlists tab successfully connected</div>
        <SideBar />
        <FilterBar />
        <div>{userDetails.userJWT}</div>
        <Link href="/">Home</Link>
        <button
          onClick={() => {
            // revision: argument needs to be typed
            setUserDetails((currentUserDetails: any) => ({
              ...currentUserDetails,
              userJWT: "Wishlists",
            }));
          }}>
          Set JWT to Wishlists
        </button>
      </main>
    </div>
  );
};

export default Wishlists;


