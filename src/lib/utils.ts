import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import storage from "./storage";
import { accessTokenStore, arivlaAccessToken } from "@/store/accessToken";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Logout = () => {
  storage.remove(arivlaAccessToken);
  accessTokenStore.accessToken = undefined;
};
