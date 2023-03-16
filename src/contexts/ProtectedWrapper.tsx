// import { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { UserContext } from "./UserContext";

// type ProtectWrapperContextProviderType = {
//   children: React.ReactNode;
// };

// const userContext = useContext(UserContext);

// export const ProtectedWrapper = ({ children }: ProtectWrapperContextProviderType) => {
//   if (userContext.isLogged) {
//     <Navigate to="/" />;
//   }

//   return <ProtectedWrapper>{children}</ProtectedWrapper>;
// };

