import { useEffect, useState } from "react";

export const useUserStatus = () => {
  const [isNewUser, setIsNewUser] = useState<boolean>(() => {
    return localStorage.getItem("isNewUser") === null;
  });

  useEffect(() => {
    if (localStorage.getItem("isNewUser") === null) {
      localStorage.setItem("isNewUser", "false");
      setIsNewUser(true);
    } else {
      setIsNewUser(false);
    }
  }, []);

  const resetUserStatus = () => {
    localStorage.removeItem("isNewUser");
    setIsNewUser(true);
  };

  return {isNewUser, resetUserStatus};
};
