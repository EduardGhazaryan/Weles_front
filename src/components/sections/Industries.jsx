export default function Industries() {
  const items = [
    {
      title: "SOLAR ENERGY",
      color: "#f9f0cd",
    },
    {
      title: "LEGAL SERVICES",
      color: "#ebe5d7",
    },
    {
      title: "ENTERTAINMENT",
      color: "#f9dacd",
    },
    {
      title: "MARKETING SERVICES",
      color: "#cadcfd",
    },
  ];

  return (
    <div id="industries" className="relative  mx-auto text-center py-16 overflow-hidden">

      <div className="absolute inset-0 flex flex-col items-start justify-center pointer-events-none select-none h-[600px]">
        <img src="/images/INDUSTRY.png" alt=""  className="lg:w-full lg:h-full  w-[100%] h-[80%] md:inline-block hidden"/>
      </div>

      <div className="relative z-10 container p-[15px] flex flex-col gap-[50px]">
        <h3 className=" font-bold text-[50px] mb-8 text-black">Our Industries</h3>
        <div className="flex flex-wrap lg:gap-x-10  gap-y-10 gap-x-0 justify-start">
          {items.map((it, i) => (
            <div key={i} className="lg:w-[45%] md:w-[45%] w-full  text-black font-medium">
              <div className=" min-h-[50px] flex items-center  justify-center ">
                <div className="relative group lg:min-w-[390px] sm:min-w-auto min-w-[300px] lg:min-h-[100px] md:min-h-[85px] min-h-[100px] flex items-center md:justufy-start justify-center md:pl-[70px] pl-[0px]">
                  <div
                    className={`absolute top-0 md:left-[30px] left-[0px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-full h-[100px] rounded-full transition-all duration-500 ease-in-out md:group-hover:w-full`}
                    style={{ backgroundColor: it.color }}
                  ></div>
                  <span className="relative z-10 lg:text-[30px] md:text-[24px] sm:text-[30px] text-[20px] px-4 md:px-0">{it.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
