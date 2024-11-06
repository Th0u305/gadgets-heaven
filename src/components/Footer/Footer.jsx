const Footer = () => {
  return (
    <div className="mt-32 bg-white p-16">
      <div className="text-center space-y-5">
        <h1 className="text-5xl font-semibold">
          Gadget Heaven
        </h1>
        <p className="text-gray-600 ">
          Leading the way in cutting-edge technology and innovation.
        </p>
        <div class="divider w-[70%] mx-auto"></div>
        </div>
      <footer className="footer items-center justify-evenly ">
        <nav >
          <h6 className="footer-title text-lg text-black">Services</h6>
          <a className="link link-hover text-lg text-gray-600">Product Support</a>
          <a className="link link-hover text-lg text-gray-600"> Order Tracking</a>
          <a className="link link-hover text-lg text-gray-600"> Shipping & Delivery</a>
          <a className="link link-hover text-lg text-gray-600"> Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title text-lg text-black">Company</h6>
          <a className="link link-hover text-lg text-gray-600">About us</a>
          <a className="link link-hover text-lg text-gray-600">Careers</a>
          <a className="link link-hover text-lg text-gray-600"> Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title text-lg text-black">Legal</h6>
          <a className="link link-hover text-lg text-gray-600">Terms of use</a>
          <a className="link link-hover text-lg text-gray-600">Privacy policy</a>
          <a className="link link-hover text-lg text-gray-600">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
