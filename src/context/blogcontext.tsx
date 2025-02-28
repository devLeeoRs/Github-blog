import { createContext, useEffect, useState } from "react";
import { api } from "../lib/Axios";

interface UserInfo {
  name: string;
  login: string;
  company: string;
  bio: string;
  repositórios_públicos: number;
  followers: number;
  avatar_url: string;
}

interface BlogContextProps {
  userInfo: UserInfo;
}

interface BlogProviderProps {
  children: React.ReactNode;
}

export const BlogContext = createContext({} as BlogContextProps);

export function BlogProvider({ children }: BlogProviderProps) {
  const [userInfo, setUserInfo] = useState({} as UserInfo);

  async function fethUser() {
    const response = await api.get("users/diego3g");
    setUserInfo(response.data);
  }

  useEffect(() => {
    fethUser();
  }, []);

  return (
    <BlogContext.Provider value={{ userInfo }}>{children}</BlogContext.Provider>
  );
}
