import { createContext, Dispatch, SetStateAction, useState } from "react";
import { FormValues } from "../apiServices/registerService/validation";

export type UserContextType = {
  users: AuthUser[];
  setUsers: Dispatch<SetStateAction<never[]>>;
  logIn: (login: string, password: string) => void;
  logOut: () => void;
  isLogged: boolean;
  loggedUser: loggedUser;
};

type UserContextProviderType = {
  children: React.ReactNode;
};

type AuthUser = FormValues;

type loggedUser = {
    userLogin: string,
    avatar: string,
}

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderType) => {
  const [users, setUsers] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [loggedUser, setLoggedUser] = useState({ userLogin: "", avatar: "" });

  const usersLogins = users.map((user) => {
    return user.login;
  });

  const usersPasswords = users.map((user) => {
    return user.password;
  });

  console.log(usersLogins);
  const logIn = (login: string, password: string) => {
    const goodLogin = usersLogins.filter((userLogin) => userLogin === login);
    const goodPassword = usersPasswords.filter(
      (userPasword) => userPasword === password
    );
    if (goodLogin.length > 0 && goodPassword.length > 0) {
      setIsLogged(true);
      setLoggedUser({
        userLogin: login,
        avatar:
          "https://images.unsplash.com/photo-1618044619888-009e412ff12a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      });
    } else {
        return 'We dont know this user'
    }
  };

  const logOut = () => {
    setIsLogged(false);
  };

  console.log(isLogged);
  return (
    <UserContext.Provider value={{ users, setUsers, logIn, logOut, isLogged, loggedUser }}>
      {children}
    </UserContext.Provider>
  );
};
