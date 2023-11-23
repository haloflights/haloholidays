import Image from "next/image";

const HolidayBlock = () => {
  const holidayBlockContent = [
    {
      id: 1,
      icon: "/img/pages/help/icons/1.svg",
      title: "All Inclusive Holidays"
    },
    {
      id: 2,
      icon: "/img/pages/help/icons/2.svg",
      title: "Beach Holidays"
    },
    {
      id: 3,
      icon: "/img/pages/help/icons/3.svg",
      title: "Cruise Holidays"
    },
    {
      id: 4,
      icon: "/img/pages/help/icons/4.svg",
      title: "Honeymoon Holidays"
    },
    {
      id: 5,
      icon: "/img/pages/help/icons/5.svg",
      title: "Family Holidays"
    },
    {
      id: 6,
      icon: "/img/pages/help/icons/6.svg",
      title: "Luxury Holidays"
    },
  ];
  return (
    <>
      {holidayBlockContent.map((item) => (
        <div className="col-lg-4 col-md-6" key={item.id}>
          <div className="bg-blue-1-05 rounded-8 px-20 py-30 flex-center">
            <div className="size-60 rounded-full flex-center mr-50">
              <Image width={30} height={30} src={item.icon} alt="icon" />
            </div>
            <div className="mt-10 mr-30">
              <div className="text-18 fw-500">{item.title}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HolidayBlock;
