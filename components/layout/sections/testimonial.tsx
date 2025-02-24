"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe",
    userName: "Product Manager",
    comment:
      "Wow! Next.js + Shadcn is a game changer. This template allows me to effortlessly customize colors, fonts, and images to align with my brand identity.",
    rating: 5.0
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sophia Collins",
    userName: "Cybersecurity Analyst",
    comment:
      "Security is my top priority, and this framework offers incredible flexibility while ensuring strong protection. The seamless integration is a huge plus!",
    rating: 4.8
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Adam Johnson",
    userName: "Chief Technology Officer",
    comment:
      "As a CTO, scalability is critical. This setup is well-structured, fast, and developer-friendly. A fantastic tool for modern web applications!",
    rating: 4.9
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Ethan Parker",
    userName: "Data Scientist",
    comment:
      "Performance is key in data science, and this framework handles complex computations efficiently. Highly recommend it for data-heavy applications!",
    rating: 5.0
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Ava Mitchell",
    userName: "IT Project Manager",
    comment:
      "Managing multiple projects requires reliable tools. This framework saves time with its intuitive design system and smooth deployment process.",
    rating: 5.0
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Isabella Reed",
    userName: "DevOps Engineer",
    comment:
      "The automation and deployment workflow with this setup is top-notch! It integrates well with CI/CD pipelines, making releases seamless.",
    rating: 4.9
  }
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
