import { Card } from "@/components/ui/card";
import image1 from "../../public/image/pic1.jpg";
import image2 from "../../public/image/pic2.jpg";
import image3 from "../../public/image/pic3.jpg"; // main certificate
import image4 from "../../public/image/pic4.jpg";
import image5 from "../../public/image/pic5.jpg";
import image6 from "../../public/image/pic6.jpg"; // main certificate

const achievements = [
  {
    title: "INTERNSHIP FINISHED",
    description: "Internship with SUV International CM as an AI & ML from January 2025 to February 2025.",
    collage: [image3, image2],
    certificate: image1
  },
  {
    title: "HACKORID 1.0 - TECH EXHIBIT",
    description: "Successfully participated in Hackorid 1.0 Tech Exhibit conducted by SRMIST ACM SIGAI student chapter.",
    collage: [image4, image5],
    certificate: image6
  },
];

const Achievements = () => (
  <section className="py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text-purple">
        Achievements
      </h2>
      <div className="flex flex-col gap-8">
        {achievements.map((ach, idx) => (
          <Card key={idx} className="p-6 flex flex-col items-center gap-4">
            
            {/* Images: top collage + certificate below */}
            <div className="flex flex-col items-center gap-2 w-full md:w-1/2">
              {/* Top: Collage - two normal photos side by side */}
              <div className="flex gap-2 w-full justify-center">
                {ach.collage.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${ach.title} collage ${i + 1}`}
                    className="w-1/2 h-32 sm:h-36 md:h-40 lg:h-44 object-cover rounded-lg border-2 border-primary"
                  />
                ))}
              </div>

              {/* Below: main certificate photo */}
              <img
                src={ach.certificate}
                alt={`${ach.title} certificate`}
                className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover rounded-lg border-2 border-primary mt-2"
              />
            </div>

            {/* Title and description below all images */}
            <div className="text-center mt-4 w-full">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{ach.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{ach.description}</p>
            </div>

          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
