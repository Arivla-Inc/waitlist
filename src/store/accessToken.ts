import { proxy } from "valtio";
import storage from "../lib/storage";

export const arivlaAccessToken = "waitlistArivlaAccessToken";

const accessToken = storage.get(arivlaAccessToken);

export const accessTokenStore = proxy<{
  accessToken?: string;
}>({
  accessToken: accessToken,
});
