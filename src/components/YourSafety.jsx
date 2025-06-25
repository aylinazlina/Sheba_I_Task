import React from "react";
import safetyImage from "../assets/images/YourSafety.png";

import SafteyAccordion from "../js/SafetyAccordion"
const YourSafety = () => {
  return (
    <div>
      <section className="bg-blue-500">
        <div className="container flex mx-auto gap-5 px-2 py-8">
          <div className="LeftWrapper w-[52dvw]">
            <img src={safetyImage} />
          </div>

          <div className="bg-amber-300 w-[55dvw] RightWrapper rounded-2xl">
            <p className="font-lato text-[14px] font-normal leading-[17px] text-black mt-4 ml-4">WHY CHOSSE Us</p>
            <p className="font-lato font-bold text-[48px] leading-[58px] mt-2 ml-4">We Care About Your safety</p>
            <p className="font-main font-light text-[16px] leading-[30px] mt-4 ml-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a </p>
            
            
      <div class="max-w-5xl mx-auto">
          <div class="border-b border-gray-300" role="accordion">
              <button type="button"
                  class="accordion-button cursor-pointer w-full text-base font-medium text-left px-4 py-6 text-slate-900 flex items-center">
                  <span class="mr-4">Are there any special discounts or promotions available during the event?</span>
                  <svg xmlns="http://www.w3.org/2000/svg"
                      class="w-[14px] h-[14px] fill-current ml-auto shrink-0 transition-transform duration-300 rotate-180"
                      viewBox="0 0 24 24">
                      <path fill-rule="evenodd"
                          d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                          clip-rule="evenodd"></path>
                  </svg>
              </button>
              <div class="accordion-content overflow-hidden max-h-96 transition-all duration-300 ease-in-out">
                  <div class="px-4 pb-6">
                      <p class="text-sm text-slate-600 leading-relaxed">Yes, we offer exclusive discounts and promotions during the
                          event. Stay tuned for special offers! Early bird registrants will receive a 15% discount on all merchandise
                          purchased during the event. We'll also have hourly flash sales with discounts up to 30% off on selected
                          products.</p>
                  </div>
              </div>
          </div>

          <div class="border-b border-gray-300" role="accordion">
              <button type="button"
                  class="accordion-button cursor-pointer w-full text-base font-medium text-left px-4 py-6 text-slate-900 flex items-center">
                  <span class="mr-4">What are the dates and locations for the product launch events?</span>
                  <svg xmlns="http://www.w3.org/2000/svg"
                      class="w-[14px] h-[14px] fill-current ml-auto shrink-0 transition-transform duration-300" viewBox="0 0 24 24">
                      <path fill-rule="evenodd"
                          d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                          clip-rule="evenodd"></path>
                  </svg>
              </button>
              <div class="accordion-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
                  <div class="px-4 pb-6">
                      <p class="text-sm text-slate-600 leading-relaxed">Our product launch events are scheduled in multiple
                          locations. Check our website for full details. The main events will take place in New York (March 15-17,
                          2025), San Francisco (April 2-4, 2025), London (April 20-22, 2025), and Tokyo (May 10-12, 2025).</p>
                  </div>
              </div>
          </div>

          <div class="border-b border-gray-300" role="accordion">
              <button type="button"
                  class="accordion-button cursor-pointer w-full text-base font-medium text-left px-4 py-6 text-slate-900 flex items-center">
                  <span class="mr-4">Can I bring a guest with me to the product launch event?</span>
                  <svg xmlns="http://www.w3.org/2000/svg"
                      class="w-[14px] h-[14px] fill-current ml-auto shrink-0 transition-transform duration-300" viewBox="0 0 24 24">
                      <path fill-rule="evenodd"
                          d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                          clip-rule="evenodd"></path>
                  </svg>
              </button>
              <div class="accordion-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
                  <div class="px-4 pb-6">
                      <p class="text-sm text-slate-600 leading-relaxed">Yes, guests are welcome! Each attendee can bring one guest
                          with prior registration. Please register your guest at least 72 hours before the event through your
                          confirmation email link. Guests will receive the same access to general sessions, product demonstrations,
                          and refreshments. However, some VIP or technical sessions may be limited to primary registrants only.</p>
                  </div>
              </div>
          </div>

          <div class="border-b border-gray-300" role="accordion">
              <button type="button"
                  class="accordion-button cursor-pointer w-full text-base font-medium text-left px-4 py-6 text-slate-900 flex items-center">
                  <span class="mr-4">Are there any age restrictions for attending the product launch event?</span>
                  <svg xmlns="http://www.w3.org/2000/svg"
                      class="w-[14px] h-[14px] fill-current ml-auto shrink-0 transition-transform duration-300" viewBox="0 0 24 24">
                      <path fill-rule="evenodd"
                          d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                          clip-rule="evenodd"></path>
                  </svg>
              </button>
              <div class="accordion-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
                  <div class="px-4 pb-6">
                      <p class="text-sm text-slate-600 leading-relaxed">Attendees must be at least 18 years old. Exceptions may apply
                          based on the event. For our technology showcase portions, we've created a special "Future Innovators"
                          program for attendees aged 13-17 when accompanied by a registered adult guardian. This program runs parallel
                          to the main event and includes age-appropriate workshops and demonstrations.</p>
                  </div>
              </div>
          </div>

          <div class="border-b border-gray-300" role="accordion">
              <button type="button"
                  class="accordion-button cursor-pointer w-full text-base font-medium text-left px-4 py-6 text-slate-900 flex items-center">
                  <span class="mr-4">What should I bring to the product launch event?</span>
                  <svg xmlns="http://www.w3.org/2000/svg"
                      class="w-[14px] h-[14px] fill-current ml-auto shrink-0 transition-transform duration-300" viewBox="0 0 24 24">
                      <path fill-rule="evenodd"
                          d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                          clip-rule="evenodd"></path>
                  </svg>
              </button>
              <div class="accordion-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
                  <div class="px-4 pb-6">
                      <p class="text-sm text-slate-600 leading-relaxed">We recommend bringing your event ticket (digital or printed),
                          a valid photo ID, business cards for networking opportunities, and a fully charged mobile device to access
                          our event app. For hands-on demo sessions, you may want to bring a notebook or tablet for taking notes.
                          Comfortable attire is suggested as you'll be walking throughout the venue. A light jacket is recommended as
                          conference rooms may be cool.</p>
                  </div>
              </div>
          </div>

          <div class="border-b border-gray-300" role="accordion">
              <button type="button"
                  class="accordion-button cursor-pointer w-full text-base font-medium text-left px-4 py-6 text-slate-900 flex items-center">
                  <span class="mr-4">Will there be food and refreshments provided at the event?</span>
                  <svg xmlns="http://www.w3.org/2000/svg"
                      class="w-[14px] h-[14px] fill-current ml-auto shrink-0 transition-transform duration-300" viewBox="0 0 24 24">
                      <path fill-rule="evenodd"
                          d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                          clip-rule="evenodd"></path>
                  </svg>
              </button>
              <div class="accordion-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
                  <div class="px-4 pb-6">
                      <p class="text-sm text-slate-600 leading-relaxed">Yes, complimentary food and beverages will be provided
                          throughout the event. Each day begins with a continental breakfast starting one hour before the first
                          session. Coffee, tea, and light snacks will be available during morning and afternoon breaks. A buffet-style
                          lunch is included in your registration, featuring a variety of options to accommodate different dietary
                          preferences. For evening sessions and networking events, hors d'oeuvres and refreshments will be served. Our
                          catering team can accommodate vegetarian, vegan, gluten-free, and most allergy-specific dietary requirements
                          if noted during registration.</p>
                  </div>
              </div>
          </div>

          <div class="border-b border-gray-300" role="accordion">
              <button type="button"
                  class="accordion-button cursor-pointer w-full text-base font-medium text-left px-4 py-6 text-slate-900 flex items-center">
                  <span class="mr-4">How can I access the presentation materials after the event?</span>
                  <svg xmlns="http://www.w3.org/2000/svg"
                      class="w-[14px] h-[14px] fill-current ml-auto shrink-0 transition-transform duration-300" viewBox="0 0 24 24">
                      <path fill-rule="evenodd"
                          d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                          clip-rule="evenodd"></path>
                  </svg>
              </button>
              <div class="accordion-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
                  <div class="px-4 pb-6">
                      <p class="text-sm text-slate-600 leading-relaxed">All registered attendees will receive access to presentation
                          materials and session recordings within one week after the event. These resources will be available through
                          our secure online portal for 12 months following the event. You'll receive an email with login credentials
                          to access the portal where you can view, download, and share the presentations with your team. The portal
                          will include PDF versions of slide decks, demo videos, technical documentation, and full session recordings.
                          Some highly technical or partner-specific content may require additional verification before access is
                          granted.</p>
                  </div>
              </div>
          </div>
      </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default YourSafety;
