import { Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import SingleCategory from "../pages/SingleCategory/SingleCategory";
import Cart from "../pages/Cart";
import UnderConstruction from "../pages/UnderConstruction/UnderConstruction";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../redux/store";
import ProductDetail from "../pages/ProductDetail";
import ShippingMethod from "../pages/FooterPages/ShippingMethod";
import GiftCard from "../pages/FooterPages/GiftCard";
import ReturnsExchanges from "../pages/FooterPages/ReturnsExchanges";
import Faq from "../pages/FooterPages/Faq";
import SizeGuide from "../pages/FooterPages/SizeGuide";
import OurStores from "../pages/FooterPages/OurStores";
import AboutUs from "../pages/FooterPages/AboutUs";
import WhyVivavintage from "../pages/FooterPages/WhyVivavintage";
import TermsConditions from "../pages/FooterPages/TermsConditions";
import Contact from "../pages/FooterPages/Contact";
import Confirmation from "../components/Confirmation/Confirmation";

function Router() {
  //const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/register" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route exact path="/:cat/:id" element={<ProductDetail />} />
          <Route exact path="/categoria/:cat" element={<SingleCategory />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route
            path="/cart"
            element={isLoggedIn ? <Cart /> : <Navigate to="/sign-in" />}
          /> */}
          {/* <Route path="/confirmation" element={isLoggedIn ? <Confirmation /> : <Navigate to="/sign-in"/> } /> */}
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/forgotpassword" element={<UnderConstruction />} />
          {/* Footer pages */}
          <Route path="/shipping-method" element={<ShippingMethod />} />
          <Route path="/gift-card" element={<GiftCard />} />
          <Route path="/returns-and-exchanges" element={<ReturnsExchanges />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/size-guide" element={<SizeGuide />} />
          <Route path="/our-stores" element={<OurStores />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/why-vivavintage" element={<WhyVivavintage />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default Router;
