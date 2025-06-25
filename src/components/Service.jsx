import React from "react";
import serviceDesign from "../assets/images/serviceDesign.png";
import serviceImage from "../assets/images/service_ImageRightPart.png";

const Service = () => {
  return (
    <div>
      <section className="px-2 py-4 bg-transparent mb-[20px]">
        <div className="px-2 py-2 ml-5 mr-5 bg-service_color rounded-xl relative">
          <img src={serviceDesign} />
          <div className="leftandRightWrapperFull ">
            <div className="flex flex-col bg-transparent px-2 py-2 overLeftWrapprFull absolute top-0 left-0 w-[50%] h-full">
              {/* top left */}
              <div className="overlay left bg-transparent px-4 py-2 absolute top-[20%]">
                <div class="space-y-4 text-center mt-4 flex justify-center items-center gap-4">
                  <button
                    type="button"
                    class="px-4 py-2 mt-2 cursor-pointer inline-flex items-center rounded-lg text-white text-xl tracking-wider border-none outline-none bg-black hover:bg-[#222] active:bg-black"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36px"
                      fill="#fff"
                      class="inline mr-2"
                      viewBox="0 0 22.773 22.773"
                    >
                      <path
                        d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                        data-original="#000000"
                      />
                    </svg>
                    <div>
                      <p class="text-[10px] text-white leading-none text-left font-medium">
                        Download on the
                      </p>
                      App Store
                    </div>
                  </button>

                  <br />

                  <button
                    type="button"
                    class="px-4 py-2 cursor-pointer inline-flex items-center rounded-lg text-white text-xl tracking-wider border-none outline-none bg-black hover:bg-[#222] active:bg-black"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36px"
                      fill="#fff"
                      class="inline mr-2"
                      viewBox="0 0 64 64"
                    >
                      <path
                        fill="#57cef3"
                        d="M7 3v58l33-29z"
                        data-original="#57cef3"
                      />
                      <path
                        fill="#fff200"
                        d="m36 32 8-10 15 10-15 10z"
                        data-original="#fff200"
                      />
                      <path
                        fill="#48ff48"
                        d="M36 32 7 3h4l34 20z"
                        data-original="#48ff48"
                      />
                      <path
                        fill="#ff6c58"
                        d="M36 32 7 61h4l34-20z"
                        data-original="#ff6c58"
                      />
                      <path
                        fill="#f33"
                        d="M9.1 64c-1.9 0-3.6-1-4.5-2.6L8 58.2v.7c0 .3.1.6.3.8L24 44c7.4 0 14.1-1.2 18.3-3.1l5.8-3.4v4.6L11.7 63.3c-.7.5-1.6.7-2.6.7z"
                        data-original="#ff3333"
                      />
                      <path
                        fill="#0779e4"
                        d="M9.1 4C8.5 4 8 4.5 8 5.1V36c0 4.4 7.2 8 16 8L5.5 62.5c-.9-.9-1.5-2.2-1.5-3.6V5.1C4 2.3 6.3 0 9.1 0z"
                        data-original="#0779e4"
                      />
                      <path
                        fill="#314a52"
                        d="M8.3 4.3c.2-.2.5-.3.8-.3.2 0 .4.1.6.2l45.5 26.6c.5.2.8.7.8 1.2s-.3 1-.7 1.3l-11.4 6.6 2.9 2.9 10.4-6.1c1.7-1 2.7-2.8 2.7-4.7s-1-3.8-2.7-4.7L11.7.7C11 .2 10.1 0 9.1 0 7.7 0 6.4.6 5.5 1.5z"
                        data-original="#314a52"
                      />
                    </svg>
                    <div>
                      <p class="text-[10px] text-white leading-none text-left font-medium">
                        Get it on
                      </p>
                      Google Play
                    </div>
                  </button>
                </div>
              </div>
              {/* bottom left */}
              <div className="overlayLeftBottom bg-transparent absolute top-[50%]">
                <p className="font-lato font-bold text-[48px] leading-[63px] text-black max-w-[632px]">
                  Get your service from our app
                </p>
                <p className="font-main font-normal text-[16px] leading-[27px] text-black max-w-[632px] mt-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some.{" "}
                </p>
              </div>
            </div>

            {/* right part */}
            <div className="bg-transparent px-2 py-2 overlayRightwrapper w-[40%] absolute top-0 left-[62%]">
              <div className="px-2 py-2 bg-transparent">
              <img src={serviceImage} className="w-[94%] h-[90%]"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
