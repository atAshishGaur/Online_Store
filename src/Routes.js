import App from "./App";
import second from "./components/second";

const router = createBrowserRouter([

    {
        path: "/first", // Fixed path for all applications
        element: <App />,

      },
      {
        path: "/second", // Fixed path for all applications
        element: <second/>,

      },


])