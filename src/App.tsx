import { useState } from "react";
import "./App.css";
import AsideMenu from "./components/AsideMenu/AsideMenu";
import Header from "./components/Header/Header";
import Routes from "./components/Routes/Routes";
import { UserContextProvider } from "./contexts/UserContext";
// import {
//   QueryClient,
//   QueryClientProvider,
// } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// const queryClient = new QueryClient();

function App() {
  const [open, setOpen] = useState(false);

  const toggleAsideMenuOpen = () => {
    setOpen((prevState) => !prevState);
  };
  console.log(open);
  return (
    // <QueryClientProvider client={queryClient}>
    //   {process.env.NODE_ENV === "development" && (
    //     <ReactQueryDevtools position="top-right" initialIsOpen={false} />
    //   )}
    <UserContextProvider>
      <div className="App">
        <Header openAsideMenu={toggleAsideMenuOpen} />
        <AsideMenu open={open} setOpen={setOpen} />
        <Routes />
      </div>
    </UserContextProvider>

  //   </QueryClientProvider>
  );
}

export default App;
