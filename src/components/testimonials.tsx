import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Alex Johnson",
    role: "Discord Server Admin",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote:
      "The AI bot has completely transformed how we manage our server. From translations to event scheduling, it's a must-have tool!",
  },
  {
    name: "Maria Lopez",
    role: "Community Manager",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    quote:
      "I love how easy it is to summarize conversations and keep track of important discussions. The bot is a game-changer!",
  },
  {
    name: "James Smith",
    role: "Fullstack Developer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    quote:
      "Integrating Discord with external apps using MCPs has streamlined our workflows like never before. Highly recommend!",
  },
  {
    name: "Emily Davis",
    role: "Event Organizer",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    quote:
      "Scheduling events and sending reminders across channels has never been easier. The bot is incredibly efficient!",
  },
  {
    name: "Michael Brown",
    role: "Tech Enthusiast",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    quote:
      "Having a chat interface similar to ChatGPT within Discord is amazing. It's intuitive and super helpful!",
  },
  {
    name: "Sophia Wilson",
    role: "Content Creator",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    quote:
      "The AI bot has made managing multiple channels a breeze. I can't imagine working without it now!",
  },
  {
    name: "Daniel Martinez",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    quote:
      "The ability to interact with other applications through MCPs is a game-changer for productivity. Fantastic tool!",
  },
  {
    name: "Olivia Taylor",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    quote:
      "From translations to integrations, this bot has everything I need to keep my projects on track. Highly recommend!",
  },
  {
    name: "William Anderson",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    quote:
      "This AI bot has revolutionized how we use Discord for business. It's efficient, reliable, and incredibly smart!",
  },
];

const chunkArray = (
  array: Testimonial[],
  chunkSize: number
): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3)
);

export default function WallOfLoveSection() {
  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-title text-3xl font-semibold">
              Loved by the Community
            </h2>
            <p className="text-body mt-6">
              Harum quae dolore orrupti aut temporibus ariatur.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="space-y-3">
                {chunk.map(({ name, role, quote, image }, index) => (
                  <Card key={index}>
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                      <Avatar className="size-9">
                        <AvatarImage
                          alt={name}
                          src={image}
                          loading="lazy"
                          width="120"
                          height="120"
                        />
                        <AvatarFallback>ST</AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-medium">{name}</h3>

                        <span className="text-muted-foreground block text-sm tracking-wide">
                          {role}
                        </span>

                        <blockquote className="mt-3">
                          <p className="text-gray-700 dark:text-gray-300">
                            {quote}
                          </p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
