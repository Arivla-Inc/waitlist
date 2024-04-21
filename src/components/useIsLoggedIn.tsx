import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import { accessTokenStore } from "../store/accessToken";

const useIsLoggedIn = () => {
  const token = useSnapshot(accessTokenStore).accessToken;

  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  return isLoggedIn;
};

export default useIsLoggedIn;
