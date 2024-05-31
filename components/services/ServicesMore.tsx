type ServicesMoreBox = {
  title: string;
  liArr: string[];
  hasList: boolean;
};

const ServicesMoreBox = ({ title, liArr, hasList }: ServicesMoreBox) => {
  return (
    <div
      className={`bordered flex w-full items-center justify-center ${hasList ? "" : "bg-accent"}`}
    >
      <div className="flex h-full w-full flex-col gap-4 p-20">
        <h4 className="text-xl">{title}</h4>
        {hasList && (
          <ul>
            {liArr.map((i, index) => {
              return (
                <li className="ml-4 list-disc" key={index}>
                  {i}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default function ServicesMore() {
  const liArr = [
    {
      title: "From Designing to Post installation services, we cover it all!",
      list: [],
      hasList: false,
    },
    {
      title: "Custom Design",
      list: ["Design Consultation", "Material Selection", "Project Management"],
      hasList: true,
    },
    {
      title: "Custom Millwork",
      list: ["Quality Control", "Installation Services", "Project Management"],
      hasList: true,
    },
    {
      title: "Post-Installation",
      list: ["Follow-up Consultation", "Maintenance Services", "Warranty"],
      hasList: true,
    },
  ];

  return (
    <div className="container flex">
      {liArr.map((i, index) => {
        return (
          <ServicesMoreBox
            key={index}
            title={i.title}
            liArr={i.list}
            hasList={i.hasList}
          />
        );
      })}
    </div>
  );
}
