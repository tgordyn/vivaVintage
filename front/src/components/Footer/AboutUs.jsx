function AboutUs() {
  return (
    <div>
      <h3 className="font-bold text-xl pb-4">VivaVintage</h3>
      <ul className="text-sm flex flex-col gap-3 cursor-pointer">
        <li className="hover:underline underline-offset-8 transition">
          <a href="/about-us" className="hover:text-gray-400">
            Sobre Nosotros
          </a>
        </li>
        <li
          href="#whyUs"
          className="hover:underline underline-offset-8 transition"
        >
          <a href="/why-vivavintage" className="hover:text-gray-400">
            Por qué VivaVintage?
          </a>
        </li>
        <li className="hover:underline underline-offset-8 transition">
          <a href="/our-stores" className="hover:text-gray-400">
            Nuestras Tiendas
          </a>
        </li>
        <li className="hover:underline underline-offset-8 transition">
          <a href="/contact" className="hover:text-gray-400">
            Contáctanos
          </a>
        </li>
        <li className="hover:underline underline-offset-8 transition">
          <a href="/terms-and-conditions" className="hover:text-gray-400">
            Términos & Condiciones
          </a>
        </li>
      </ul>
    </div>
  );
}

export default AboutUs;
