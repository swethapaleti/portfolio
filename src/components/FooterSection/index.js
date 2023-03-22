const FooterSection = () => (
  <footer className="border-t">
    <div className="text-center p-8">
      <div className="m-auto my-4">
        <a
          target="_blank"
          href="https://www.github.com/swethapaleti"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github mx-4 text-gray-500 text-2xl transform transition duration-500 hover:scale-150 hover:text-pink-500 ease-in-out"></i>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/swethapaleti"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin mx-4 text-gray-500 text-2xl transform transition duration-500 hover:scale-150 hover:text-pink-500 ease-in-out"></i>
        </a>
        <a
          target="_blank"
          href="mailto: swethapaleti555@gmail.com"
          rel="noreferrer"
        >
          <i className="fa-solid fa-envelope mx-4 text-gray-500 text-2xl transform transition duration-500 hover:scale-150 hover:text-pink-500 ease-in-out"></i>
        </a>
      </div>
      <p className="text-gray-500">
        Copyright © Swetha Paleti. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default FooterSection;
