import { assets } from "../../assets/frontend_assets/assets";

function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero
            nulla quos provident tenetur? Aut pariatur possimus itaque nostrum
            sequi facere quia, accusantium voluptas tempora distinctio,
            similique animi dolorem necessitatibus!
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">CÔNG TY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">LIÊN LẠC</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+84 398 694 435</li>
            <li>phamthanhtri0712@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr className="text-gray-300" />
        <p className="py-5 text-sm text-center">
          Copyright 2025@forever.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
