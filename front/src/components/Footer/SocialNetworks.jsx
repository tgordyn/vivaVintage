import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import {
  PiTwitterLogoLight,
  PiTiktokLogoLight,
  PiTelegramLogoLight,
} from "react-icons/pi";

function SocialNetworks() {
  return (
    <div>
      <h3 className="font-bold text-xl pb-4">Nuestras Redes Sociales</h3>
      <div className="flex flex-wrap md:flex-row gap-3 cursor-pointer">
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500"
        >
          <AiOutlineYoutube size={25} className="hover:scale-125 transition" />
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#D6378C]"
        >
          <AiOutlineInstagram
            size={25}
            className="hover:scale-125 transition"
          />
        </a>

        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#207BF3]"
        >
          <AiOutlineFacebook size={25} className="hover:scale-125 transition" />
        </a>

        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#1C96E8]"
        >
          <PiTwitterLogoLight
            size={25}
            className="hover:scale-125 transition"
          />
        </a>

        <a
          href="https://www.tiktok.com/es/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#24ede8]"
        >
          <PiTiktokLogoLight size={25} className="hover:scale-125 transition" />
        </a>

        <a
          href="https://web.telegram.org/k/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#2AA3DE]"
        >
          <PiTelegramLogoLight
            size={25}
            className="hover:scale-125 transition"
          />
        </a>
      </div>
    </div>
  );
}

export default SocialNetworks;
