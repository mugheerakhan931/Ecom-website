import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="grid lg:grid-cols-5 grid-cols-1 max-lg:gap-8 py-24 2xl:px-32 xl:px-24 md:px-16 px-8">
          <div className="lg:col-span-2 flex flex-col justify-between max-lg:gap-8">
            <Image
              src={"/Logo.png"}
              alt="website logo"
              width={140}
              height={140}
            />
            <p className="text-[#666] lg:w-4/5 sm:w-3/5 w-5/6">
              Small, artisan label that offers a thoughtfully curated collection
              of high quality everyday essentials made.
            </p>
            <div className="flex gap-4">
              <div className="flex bg-[#f1f1f1] p-2 rounded-lg">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1.2"
                  baseProfile="tiny"
                  viewBox="0 0 24 24"
                  height="25"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.89 7.012c.808-.496 1.343-1.173 1.605-2.034-.786.417-1.569.703-2.351.861-.703-.756-1.593-1.14-2.66-1.14-1.043 0-1.924.366-2.643 1.078-.715.717-1.076 1.588-1.076 2.605 0 .309.039.585.117.819-3.076-.105-5.622-1.381-7.628-3.837-.34.601-.51 1.213-.51 1.846 0 1.301.549 2.332 1.645 3.089-.625-.053-1.176-.211-1.645-.47 0 .929.273 1.705.82 2.388.549.676 1.254 1.107 2.115 1.291-.312.08-.641.118-.979.118-.312 0-.533-.026-.664-.083.23.757.664 1.371 1.291 1.841.625.472 1.344.721 2.152.743-1.332 1.045-2.855 1.562-4.578 1.562-.422 0-.721-.006-.902-.038 1.697 1.102 3.586 1.649 5.676 1.649 2.139 0 4.029-.542 5.674-1.626 1.645-1.078 2.859-2.408 3.639-3.974.784-1.564 1.172-3.192 1.172-4.892v-.468c.758-.57 1.371-1.212 1.84-1.921-.68.293-1.383.492-2.11.593z"></path>
                </svg>
              </div>
              <div className="flex bg-[#f1f1f1] p-2 rounded-lg">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1.2"
                  baseProfile="tiny"
                  viewBox="0 0 24 24"
                  height="25"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13 10h3v3h-3v7h-3v-7h-3v-3h3v-1.255c0-1.189.374-2.691 1.118-3.512.744-.823 1.673-1.233 2.786-1.233h2.096v3h-2.1c-.498 0-.9.402-.9.899v2.101z"></path>
                </svg>
              </div>
              <div className="flex bg-[#f1f1f1] p-3 rounded-lg">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fillRule="nonzero"
                      d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="text-[#666]">
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="flex flex-col gap-3.5">
              <a href="">
                <li>About</li>
              </a>
              <a href="">
                <li>Terms of Use</li>
              </a>
              <a href="">
                <li>Privacy Policy</li>
              </a>
              <a href="">
                <li>How it Works</li>
              </a>
              <a href="">
                <li>Contact Us</li>
              </a>
            </ul>
          </div>
          <div className="text-[#666]">
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul className="flex flex-col gap-3.5">
              <a href="">
                <li>Support Career</li>
              </a>
              <a href="">
                <li>24h Service</li>
              </a>
              <a href="">
                <li>Quick Chat</li>
              </a>
            </ul>
          </div>
          <div className="text-[#666]">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="flex flex-col gap-3.5">
              <a href="">
                <li>Whatsapp</li>
              </a>
              <a href="">
                <li>Support 24h</li>
              </a>
            </ul>
          </div>
        </div>
        <hr className="h-0.5 bg-black" />
        <div className="text-[#666] grid md:grid-cols-3 sm:grid-cols-2 gap-4 py-6 2xl:pl-32 xl:pl-24 md:pl-16 pl-8">
          <h3>Copyright © 2023 Dine Market</h3>
          <h3>
            Design by. <b className="text-black">weird design studio</b>
          </h3>
          <h3>
            Code by. <b className="text-black">mugheerabilal on github</b>
          </h3>
        </div>
      </footer>
    </>
  );
};

export default Footer;
