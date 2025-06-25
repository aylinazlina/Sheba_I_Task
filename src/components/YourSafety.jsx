import React, { useState } from "react";
import safetyImage from "../assets/images/YourSafety.png";

const YourSafety = () => {
  const [openAccordion, setOpenAccordion] = useState(1); // First accordion open by default

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionData = [
    {
      id: 1,
      question: "Ensuring Mask",
      answer: (
        <div>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iusto mollitia unde pariatur, quaerat cum provident amet beatae expedita consectetur.
          </p>
          
        </div>
      ),
    },
    {
      id: 2,
      question: "Sanitizing Hand & Equipment",
      answer: (
        <div>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis dolor aut eius vero fugit pariatur placeat, vitae optio tempore rerum aperiam quas dignissimos at error eveniet sunt obcaecati voluptatibus minus.
          </p>
          
        </div>
      ),
    },
    {
      id: 3,
      question: "24/7 Support",
      answer: (
        <div>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ex ipsum, assumenda exercitationem beatae nam quia eveniet sint et repudiandae.         </p>
          
        </div>
      ),
    },
    {
      id: 4,
      question: "Ensuring Gloves",
      answer: (
        <div>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi praesentium temporibus fugiat ducimus velit eveniet doloribus assumenda molestias, dolorum in.
          </p>
          
        </div>
      ),
    },
  ];

  return (
    <section className="bg-transparent">
      <div className="container flex mx-auto gap-5 px-2 py-8">
        <div className="LeftWrapper w-[52dvw]">
          <img src={safetyImage} alt="Your Safety" />
        </div>

        <div className="bg-saftey_color w-[55dvw] RightWrapper rounded-2xl p-4">
          <p className="font-lato text-[14px] font-normal leading-[17px] text-black">
            WHY CHOOSE Us
          </p>
          <p className="font-lato font-bold text-[46px] leading-[58px] mt-2">
            We Care About Your Safety
          </p>
          <p className="font-main font-light text-[16px] leading-[30px] mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          <div className="mt-6">
            {accordionData.map((item) => (
              <div key={item.id}>
                <h2>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3  transition-colors duration-200"
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={openAccordion === item.id}
                  >
                    <span className="text-left">{item.question}</span>
                    <svg
                      className={`w-3 h-3 shrink-0 transition-transform duration-200 ${
                        openAccordion === item.id ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openAccordion === item.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourSafety;
