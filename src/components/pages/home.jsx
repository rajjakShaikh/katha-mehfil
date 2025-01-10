import logo from "../../images/logo.png";
import homeImg from "../../images/Home Sceen.png";

export default function Home() {
  return (
    <div className="grid grid-cols-1 mx-5 md:mx-12 mb-12">
      {/* Logo Section */}
      <div className="grid justify-center border-[#F8FAF9]">
        <img
          src={logo}
          alt="logo"
          height="60px"
          width="200px"
          className="my-6 md:my-12"
        />
      </div>

      {/* Description Section */}
      <div>
        <h3 className="text-[#F8FAF9] text-center text-[16px] md:text-[20px] leading-relaxed">
          Katha Mehfil will deliver curated audio stories to subscribers. The
          mobile app will serve as the primary channel for subscribers,
          providing an intuitive and engaging listening experience.
        </h3>
      </div>

      {/* Image Section */}
      <div className="grid justify-center my-12">
        <img
          src={homeImg}
          alt="home-img"
          height="480px"
          width="234px"
          className="rounded-md"
        />
      </div>

      {/* Contact Section */}
      <div className="grid justify-center text-white space-y-6">
        <p className="text-[20px]">
          Email:{" "}
          <a href="mailto:admin@kathamehfil.com">admin@kathamehfil.com</a>
        </p>
        <p className="text-[20px] text-center">
          Phone No: <a href="tel:+91 98202 29003">+91 98202 29003</a>
        </p>
      </div>
    </div>
  );
}
