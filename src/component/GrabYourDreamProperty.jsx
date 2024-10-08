import { SectionInformation } from "./Features";
import PropertyCard from "./PropertyCard";

const data = [
  {
    id: "1",
    image:
      "/public/assets/images/houses/braden-collum-Q_eVb6Pajl8-unsplash.jpg",
    name: "HomesteadHarbor Realty",
    price: "2000",
  },
  {
    id: "2",
    image:
      "/public/assets/images/houses//czapp-botond-O46vl5NMGKw-unsplash.jpg",
    name: "UrbanNest Pro",
    price: "2000",
  },
  {
    id: "3",
    name: "LandmarkLane Estates",
    price: "2000",
    image:
      "/public/assets/images/houses/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg",
  },
  {
    id: "4",
    name: "InfinityGrove Realty",
    price: "2000",
    image:
      "/public/assets/images/houses/hardik-pandya-HjzL2rJyGW4-unsplash.jpg",
  },
  {
    id: "5",
    name: "DreamLoom Realty",
    price: "2000",
    image:
      "/public/assets/images/houses/jamie-whiffen-yXBeuNhmbNY-unsplash.jpg",
  },
];

export default function GrabYourDreamProperty() {
  return (
    <section>
      <div className="container">
        <SectionInformation
          sectionInfo={
            "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          }
          sectionName={"Properties"}
          sectionTitle={"Grab your Dream Property"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((x) => {
            return (
              <PropertyCard
                name={x.name}
                key={x.id}
                image={x.image}
                price={x.price}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
