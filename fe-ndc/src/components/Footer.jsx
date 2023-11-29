import React from "react";
import Socials from "../sections/Socials";

function Footer() {
  return (
    <div>
      <section class="bg-[#0c2c44] overflow-hidden">
        
      {/* Footer menu begin------------------- */}
      <div class="max-w-screen-xl mx-auto mt-10 space-y-8 sm:px-6 lg:px-8">
  <nav class="flex flex-wrap justify-center">
    <div class="px-5 py-2  sm:w-auto">
      <a href="/#" class="text-base leading-6 text-[#0da4d4] hover:text-white">
        Home
      </a>
    </div>
    <div class="px-5 py-2  sm:w-auto">
      <a href="/#" class="text-base leading-6 text-[#0da4d4] hover:text-white">
        FAQs
      </a>
    </div>
    <div class="px-5 py-2 sm:w-auto">
      <a href="/team" class="text-base leading-6 text-[#0da4d4] hover:text-white">
        Team
      </a>
    </div>
    <div class="px-5 py-2 sm:w-auto">
      <a href="/about" class="text-base leading-6 text-[#0da4d4] hover:text-white">
        About
      </a>
    </div>
    <div class="px-5 py-2 sm:w-auto">
      <a
        href="https://www.eventbrite.com/o/nairobi-devops-commuity-67065967383"
        target="_blank"
        rel="noreferrer"
        class="text-base leading-6 text-[#0da4d4] hover:text-white"
      >
        Events
      </a>
    </div>

    <div class="px-5 py-2 sm:w-auto">
      <a
        href="/activities"
        class="text-base leading-6 text-[#0da4d4] hover:text-white"
      >
        Activities
      </a>
    </div>

    <div class="px-5 py-2  sm:w-auto">
      <a
        href="https://www.linkedin.com/in/kadima-samuel-804103bb/"
        target="_blank"
        rel="noreferrer"
        class="text-base leading-6 text-[#0da4d4] hover:text-white"
      >
        Contacts
      </a>
    </div>
  </nav>
</div>

      {/* Footer menu end------------------- */}


      {/* socials begin------------------- */}

        <Socials />

      {/* socials end------------------- */}

        <p class=" text-base leading-6 text-center text-[#0da4d4] max-w-screen-xl py-8 mx-auto space-y-8  sm:px-6 lg:px-8">
            © 2023{" "}
            <a href="https://nairobidevops.org" class="underline underline-offset-4 hover:text-white">
              NDC
            </a>
            . All rights reserved.
          </p>
      </section>
    </div>
  );
}

export default Footer;