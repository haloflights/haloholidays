import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import Header3 from "@/components/header/header-3";
import DefaultFooter from "@/components/footer/default";
import NotFound from "@/components/common/NotFound";
export const metadata = {
  title: "404 || Halo Holidays - Here For You",
  description: "404 || Halo Holidays",
};

const index = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header3 />
      {/* End Header 1 */}

      <NotFound />
      {/* End 404 section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
