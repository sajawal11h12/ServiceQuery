import { Route, Routes } from "react-router-dom";
import routesConstants from "../constants/routeConstants";
import LayoutContainer from "../layout/LayoutContainer";
import Home from "../screens/Home/HomeScreen";
import PageNotFound from "../screens/PageNotFound/PageNotFound";
import Featurepage from "../screens/Featurepage/Featurepage";
import Heropage from "../components/home/Hero";
import Getstarted from "../screens/Getstarted/Getstarted";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path={routesConstants.ROOT} element={<LayoutContainer />}>
        <Route path={routesConstants.HOME} element={<Home />} />
        <Route path={routesConstants.FEATURES} element={<Featurepage />} /> {/* Add Features Route */}
        <Route path={routesConstants.GET_STARTED} element={<Getstarted />} />
      </Route>
      <Route path={routesConstants.PAGE_NOT_FOUND} element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
