import { BsTruck } from "react-icons/bs";
import { PiArrowCounterClockwiseBold } from "react-icons/pi";
import { FiPhone, FiMail} from "react-icons/fi";
import IconInformation from "./IconInformation";
import Customers from "./Customers";
import AboutUs from "./AboutUs";
import SocialNetworks from "./SocialNetworks";
import PaymentMethods from "./PaymentMethods";

function Footer() {
  return (
    <footer className="bg-[#212429] font-mont flex flex-col gap-5 text-white py-5 lg:px-20 sm:px-2">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <a href="/shipping-method" className="hover:text-gray-400">
          <IconInformation icon={<BsTruck size={25} />} name="Envío" />
        </a>
        <a href="/returns-and-exchanges" className="hover:text-gray-400">
          <IconInformation
            icon={<PiArrowCounterClockwiseBold size={25} />}
            name="Devoluciones & Cambios"
          />
        </a>
        <IconInformation
          icon={<FiPhone size={25} />}
          name="+375 (29) 749-18-23"
        />
        <IconInformation
          icon={<FiMail size={25} />}
          name="vivavintage@gmail.com"
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-0 px-3">
        <Customers />
        <AboutUs />
        <SocialNetworks />
        <PaymentMethods />
      </div>
      <p className="text-xs text-center">
        © 2023 VivaVintage All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
