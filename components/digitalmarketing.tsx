"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { digitalMarketingData } from "@/lib/data";
import DigitalMarketingRow from "./digitalmarketingcard";

export default function DigitalMarketing() {
  const { ref } = useSectionInView("Marketing", 0.5);

  return (
    <section ref={ref} id="digital-marketing" className="scroll-mt-28 mb-28">
      <SectionHeading>
        Digital Marketing | Creative | Content Creation
      </SectionHeading>

      <div className="mt-5 space-y-20">
        {digitalMarketingData.map((item, index) => (
          <DigitalMarketingRow key={index} data={item} />
        ))}
      </div>
    </section>
  );
}
