import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-2 bg-base-300 p-2">
      <p className="bg-[#D72050] px-3 py-1 text-base-100">LATEST</p>
      <Marquee className="space-x-10">
        <Link to="/news">
          Political Developments: The Chief Adviser, Professor Muhammad Yunus,
          recently returned from attending the COP29 climate conference in Baku,
          where he emphasized the need for labour reforms and discussed measures
          to curb human trafficking​ JAGONEWS24 ​ THE DAILY STAR . Meanwhile,
          the political atmosphere remains tense as the BNP continues its push
          for election reforms and has announced divisional rallies to demand a
          clear election roadmap​ DAILY BANGLA POST ​ BANGLADESH FIRST .
        </Link>
        <Link to="/news">
          Economic Updates: Bangladesh's foreign exchange reserves have dropped
          below $20 billion following payments to the Asian Clearing Union
          (ACU). This decline is causing concern among economists as it could
          affect the country’s import capacity​ THE DAILY STAR . On a positive
          note, expatriate workers sent a significant $655 million in
          remittances during the first nine days of November, providing a boost
          to the national economy​ JAGONEWS24 .
        </Link>
        <Link to="/news">
          Legal and Social Issues: The High Court recently declared the immunity
          provision in the Quick Rental Energy Act of 2010 as unconstitutional,
          which could have implications for the country's energy policies​
          BANGLADESH FIRST . Additionally, an AL ex-lawmaker has been sent to
          jail over a murder case, highlighting ongoing corruption and legal
          battles involving political figures​ BANGLADESH FIRST .
        </Link>
        <Link to="/news">
          Weather Alert: As winter approaches, rural and riverside areas of
          Bangladesh are starting to experience fog, with temperatures expected
          to drop in the coming days​ BANGLADESH FIRST .
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
