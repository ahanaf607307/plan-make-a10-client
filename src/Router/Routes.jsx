import { createBrowserRouter } from "react-router-dom";
import AddNewCamp from "../Components/Campaigns/AddNewCamp";
import AllCamp from "../Components/Campaigns/AllCamp";
import Details from "../Components/Campaigns/Details";
import MyCampaign from "../Components/Campaigns/myCampaign";
import MyDonations from "../Components/Campaigns/myDonations";
import Update from "../Components/Campaigns/Update";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Login from "../FireBase/Login";
import PrivateRoute from "../FireBase/PrivateRoute";
import SignUp from "../FireBase/SignUp";
import ErrorPage from "../Main/ErrorPage";
import Home from "../Main/Home";
import MainLayout from "../Main/MainLayout";

const routes = createBrowserRouter([
  {errorElement:<ErrorPage/>,
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://server-croud-funding.vercel.app/campaigns"),
      },
      {
        path: "/navbar",
        element: <Navbar />,
      },
      {
        path: "/footer",
        element: <Footer />,
      },
      {
        path: "/allCamp",
        element: <AllCamp />,
        loader: () => fetch("https://server-croud-funding.vercel.app/campaign"),
      },
      {
        path: "/addNewCamp",
        element: (
          <PrivateRoute>
            <AddNewCamp />
          </PrivateRoute>
        ),
      },
      {
        path: "/myCamp/:email",
        element: (
          <PrivateRoute>
            <MyCampaign/>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-croud-funding.vercel.app/campaigns/${params.email}`),
      },

      {
        path: "/myDonation/:email",
        element: (
          <PrivateRoute>
            <MyDonations />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-croud-funding.vercel.app/campaignsDonation/${params.email}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-croud-funding.vercel.app/update/${params.id}`),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-croud-funding.vercel.app/details/${params.id}`),
      },
    ],
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routes;
