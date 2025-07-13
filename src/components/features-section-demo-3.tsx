"use client";
import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import IntegrationsSection from "./integrations-4";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Discord fully powered by AI",
      description:
        "Use AI directly within Discord to enhance your experience.",
      skeleton: <SkeletonOne />,
      className: "col-span-1 lg:col-span-4 border-b lg:border-r border-border",
    },
    {
      title: "AI chatbot",
      description:
        "Quickly summarize, translate, create events and many more using AI-powered tools.",
      skeleton: <ChatBot />,
      className: "border-b col-span-1 lg:col-span-2 border-border",
    },
    {
      title: "We support a variety of LLMs",
      description:
        "Discover how our AI bot enhances Discord functionality by using various LLMs.",
      skeleton: <SupportLLM />,
      className: "col-span-1 lg:col-span-3 lg:border-r border-border",
    },
    {
      title: "Integrate with external apps",
      description:
        "Connect Discord with other applications using MCPs for seamless workflows.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-foreground">
          Packed with AI-powered features
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-muted-foreground text-center font-normal">
          From translations to integrations, our AI bot transforms Discord into
          a powerful productivity hub.
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md border-border">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-foreground text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-muted-foreground text-center font-normal",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-card shadow-2xl group h-full border border-border">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          {/* TODO */}
          {/* <img
            src="https://ai-saas-template-aceternity.vercel.app/_next/image?url=%2Fskeleton-one.png&w=828&q=75"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          /> */}
          <Section1 />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-background via-background to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-background via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <a
      href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
      target="__blank"
      className="relative flex gap-10  h-full group/image"
    >
      <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
          {/* TODO */}
          <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " />
          <img
            src="https://assets.aceternity.com/fireship.jpg"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>
    </a>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* TODO */}
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-background to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-background to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <IntegrationsSection />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};

export const ChatBot = () => {
  return (
    <div className=" h-full w-full">
      <div className="relative h-full w-full mt-4">
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white via-white dark:from-black dark:via-black to-transparent w-full pointer-events-none"></div>
        <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] h-full z-20">
          <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px] h-full">
            <div className="w-20 rounded-full bg-neutral-200/80 dark:bg-neutral-800/80 mx-auto h-6"></div>
            <div className="content mt-4 w-[90%] mx-auto">
              <div
                className="message bg-neutral-100 dark:bg-neutral-800 dark:text-white text-black p-2 sm:p-4 text-[10px] sm:text-xs my-4 rounded-md"
                style={{ transform: "none", opacity: 1 }}
              >
                Hello chat! Give me all the links from this website -
                https://andres-duque.com
              </div>
              <div
                className="message bg-black text-white dark:bg-white dark:text-black p-2 sm:p-4 text-[10px] sm:text-xs my-4 rounded-md"
                style={{ transform: "none", opacity: 1 }}
              >
                Why don&apos;t you do it yourself?
              </div>
              <div
                className="message bg-neutral-100 dark:bg-neutral-800 dark:text-white text-black p-2 sm:p-4 text-[10px] sm:text-xs my-4 rounded-md"
                style={{ transform: "none", opacity: 1 }}
              >
                Umm.. Because I&apos;m paying $20/mo for your services?
              </div>
              <div
                className="message bg-black text-white dark:bg-white dark:text-black p-2 sm:p-4 text-[10px] sm:text-xs my-4 rounded-md"
                style={{ transform: "none", opacity: 1 }}
              >
                You think I work for the money?
              </div>
              <div
                className="message bg-neutral-100 dark:bg-neutral-800 dark:text-white text-black p-2 sm:p-4 text-[10px] sm:text-xs my-4 rounded-md"
                style={{ transform: "none", opacity: 1 }}
              >
                Who do you think you are?
              </div>
              <div
                className="message bg-black text-white dark:bg-white dark:text-black p-2 sm:p-4 text-[10px] sm:text-xs my-4 rounded-md"
                style={{ transform: "none", opacity: 1 }}
              >
                I&apos;m batman.
              </div>
              <div
                className="message bg-black text-white dark:bg-white dark:text-black p-2 sm:p-4 text-[10px] sm:text-xs my-4 rounded-md"
                style={{ transform: "none", opacity: 1 }}
              >
                Now Playing <br />{" "}
                <span className="italic">Something in the way - Nirvana</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SupportLLM = () => {
  return (
    <div className="flex flex-1 w-full h-full flex-col space-y-2">
      <div className="flex justify-between border-b border-border pb-2 p-4">
        <p className="text-sm font-bold text-muted-foreground">Add LLM</p>
        <p className="text-sm px-2 py-1 rounded-md flex-shrink-0 flex space-x-1 items-center bg-accent text-accent-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-4 w-4"
          >
            <path d="M12 5l0 14"></path>
            <path d="M5 12l14 0"></path>
          </svg>
          <span>Add</span>
        </p>
      </div>
      <div className="flex flex-col space-y-4 p-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 items-center">
            <p className="text-xs px-1 py-0.5 rounded-md bg-secondary text-secondary-foreground">
              Groq LLM
            </p>
            <p className="text-xs text-muted-foreground">23rd March</p>
          </div>
          <div className="flex items-center space-x-1">
            <form className="flex space-x-4 items-center">
              <label
                htmlFor="«Rcddjn3qtb»"
                className="h-4 px-1 w-[40px] flex items-center border shadow-[inset_0px_0px_12px_rgba(0,0,0,0.25)] rounded-full relative cursor-pointer transition duration-200 bg-slate-700 border-slate-500"
              >
                <div
                  className="h-[20px] block rounded-full bg-white shadow-md z-10"
                  style={{
                    width: "12px",
                    transform: "translateX(-2px)",
                    height: "12px",
                  }}
                ></div>
                <input type="checkbox" className="hidden" id="«Rcddjn3qtb»" />
              </label>
            </form>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            </svg>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 items-center">
            <p className="text-xs px-1 py-0.5 rounded-md bg-secondary text-secondary-foreground">
              OpenAI GPT0
            </p>
            <p className="text-xs text-muted-foreground">21st March</p>
          </div>
          <div className="flex items-center space-x-1">
            <form className="flex space-x-4 items-center">
              <label
                htmlFor="«Rcldjn3qtb»"
                className="h-4 px-1 w-[40px] flex items-center border border-transparent shadow-[inset_0px_0px_12px_rgba(0,0,0,0.25)] rounded-full relative cursor-pointer transition duration-200 bg-blue-500"
              >
                <div
                  className="h-[20px] block rounded-full bg-white shadow-md z-10"
                  style={{
                    width: "12px",
                    transform: "translateX(20px)",
                    height: "12px",
                  }}
                ></div>
                <input
                  type="checkbox"
                  className="hidden"
                  id="«Rcldjn3qtb»"
                  checked={true}
                />
              </label>
            </form>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            </svg>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 items-center">
            <p className="text-xs px-1 py-0.5 rounded-md bg-secondary text-secondary-foreground">
              Stable DIffusion
            </p>
            <p className="text-xs text-muted-foreground">3rd May</p>
          </div>
          <div className="flex items-center space-x-1">
            <form className="flex space-x-4 items-center">
              <label
                htmlFor="«Rctdjn3qtb»"
                className="h-4 px-1 w-[40px] flex items-center border shadow-[inset_0px_0px_12px_rgba(0,0,0,0.25)] rounded-full relative cursor-pointer transition duration-200 bg-slate-700 border-slate-500"
              >
                <div
                  className="h-[20px] block rounded-full bg-white shadow-md z-10"
                  style={{
                    width: "12px",
                    transform: "translateX(-2px)",
                    height: "12px",
                  }}
                ></div>
                <input type="checkbox" className="hidden" id="«Rctdjn3qtb»" />
              </label>
            </form>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            </svg>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 items-center">
            <p className="text-xs px-1 py-0.5 rounded-md bg-secondary text-secondary-foreground">
              Llama 2
            </p>
            <p className="text-xs text-muted-foreground">1st April</p>
          </div>
          <div className="flex items-center space-x-1">
            <form className="flex space-x-4 items-center">
              <label
                htmlFor="«Rd5djn3qtb»"
                className="h-4 px-1 w-[40px] flex items-center border border-transparent shadow-[inset_0px_0px_12px_rgba(0,0,0,0.25)] rounded-full relative cursor-pointer transition duration-200 bg-blue-500"
              >
                <div
                  className="h-[20px] block rounded-full bg-white shadow-md z-10"
                  style={{
                    width: "12px",
                    transform: "translateX(20px)",
                    height: "12px",
                  }}
                ></div>
                <input
                  type="checkbox"
                  className="hidden"
                  id="«Rd5djn3qtb»"
                  checked={true}
                />
              </label>
            </form>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            </svg>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 items-center">
            <p className="text-xs px-1 py-0.5 rounded-md bg-secondary text-secondary-foreground">
              Claude 200k
            </p>
            <p className="text-xs text-muted-foreground">2nd June</p>
          </div>
          <div className="flex items-center space-x-1">
            <form className="flex space-x-4 items-center">
              <label
                htmlFor="«Rdddjn3qtb»"
                className="h-4 px-1 w-[40px] flex items-center border border-transparent shadow-[inset_0px_0px_12px_rgba(0,0,0,0.25)] rounded-full relative cursor-pointer transition duration-200 bg-blue-500"
              >
                <div
                  className="h-[20px] block rounded-full bg-white shadow-md z-10"
                  style={{
                    width: "12px",
                    transform: "translateX(20px)",
                    height: "12px",
                  }}
                ></div>
                <input
                  type="checkbox"
                  className="hidden"
                  id="«Rdddjn3qtb»"
                  checked={false}
                />
              </label>
            </form>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Section1 = () => {
  return (
    <div className=" h-full w-full">
      <div className="relative flex p-8 gap-10 h-full">
        <div className=" w-full md:w-[90%] p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
          <div className="flex flex-1 w-full h-full flex-col space-y-2 opacity-20 dark:opacity-60 ">
            <div className="flex flex-row rounded-2xl  p-2  items-start space-x-2 bg-white dark:bg-neutral-900">
              <img
                alt="avatar"
                loading="lazy"
                width="100"
                height="100"
                decoding="async"
                data-nimg="1"
                className="rounded-full h-4 w-4 md:h-10 md:w-10"
                style={{ color: "transparent" }}
                src="https://ai-saas-template-aceternity.vercel.app/_next/image?url=%2Favatar.jpeg&w=128&q=75"
              />
              <p className="text-[10px] sm:text-sm text-neutral-500">
                I want to generate an image of two people, fighting outside a
                bar. They fight to the core. Once they&apos;re done, they sit
                down and drink beer.
              </p>
            </div>
            <div className="flex flex-row rounded-2xl   p-2 items-center justify-start space-x-2  bg-white dark:bg-neutral-900 ">
              <div className="h-4 w-4 md:h-10 md:w-10 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0"></div>
              <p className="text-[10px] sm:text-sm text-neutral-500">
                Certainly, I&apos;m generating this picture for you in a while.
                BTW are you talking about THAT movie?
              </p>
            </div>
            <div className="flex flex-row rounded-2xl  p-2  items-start space-x-2 bg-white dark:bg-neutral-900">
              <img
                alt="avatar"
                loading="lazy"
                width="100"
                height="100"
                decoding="async"
                data-nimg="1"
                className="rounded-full h-4 w-4 md:h-10 md:w-10"
                style={{ color: "transparent" }}
                src="https://ai-saas-template-aceternity.vercel.app/_next/image?url=%2Favatar.jpeg&w=128&q=75"
              />
              <p className="text-[10px] sm:text-sm text-neutral-500">
                I don&apos;t know what you&apos;re talking about.
              </p>
            </div>
            <div className="flex flex-row rounded-2xl   p-2 items-center justify-start space-x-2  bg-white dark:bg-neutral-900 ">
              <div className="h-4 w-4 md:h-10 md:w-10 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0"></div>
              <p className="text-[10px] sm:text-sm text-neutral-500">
                Are you sure?
              </p>
            </div>
            <div className="flex flex-row rounded-2xl  p-2  items-start space-x-2 bg-white dark:bg-neutral-900">
              <img
                alt="avatar"
                loading="lazy"
                width="100"
                height="100"
                decoding="async"
                data-nimg="1"
                className="rounded-full h-4 w-4 md:h-10 md:w-10"
                style={{ color: "transparent" }}
                src="https://ai-saas-template-aceternity.vercel.app/_next/image?url=%2Favatar.jpeg&w=128&q=75"
              />
              <p className="text-[10px] sm:text-sm text-neutral-500">
                Yes, I&apos;m sure. But if you&apos;re generating that scene,
                make sure the fighters have clown shoes and rubber chickens
                instead of fists!
              </p>
            </div>
            <div className="flex flex-row rounded-2xl   p-2 items-center justify-start space-x-2  bg-white dark:bg-neutral-900 ">
              <div className="h-4 w-4 md:h-10 md:w-10 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0"></div>
              <p className="text-[10px] sm:text-sm text-neutral-500">
                Affirmative, here&apos;s your image.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 absolute inset-0">
          <div className="p-2 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px]  r h-[250px] w-[250px] md:h-[300px] md:w-[300px] mx-auto  flex-shrink-0  z-20 group-hover:scale-[1.02] transition duration-200">
            <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px] flex-shrink-0">
              <img
                alt="header"
                loading="lazy"
                width="800"
                height="800"
                decoding="async"
                data-nimg="1"
                className="transition duration-300 transform blur-0 scale-100 rounded-[20px] w-full h-full object-cover object-bottom aspect-square flex-shrink-0 grayscale"
                style={{ color: "transparent" }}
                src="https://ai-saas-template-aceternity.vercel.app/_next/image?url=%2Fskeleton-one.png&w=828&q=75"
              />
            </div>
          </div>
          <div className="p-2 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px]  r h-[250px] w-[250px] md:h-[300px] md:w-[300px] mx-auto  flex-shrink-0  z-20 group-hover:scale-[1.02] transition duration-200">
            <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px] flex-shrink-0">
              <img
                alt="header"
                loading="lazy"
                width="800"
                height="800"
                decoding="async"
                data-nimg="1"
                className="transition duration-300 transform blur-0 scale-100 rounded-[20px] w-full h-full object-cover object-bottom aspect-square flex-shrink-0 grayscale"
                style={{ color: "transparent" }}
                src="https://ai-saas-template-aceternity.vercel.app/_next/image?url=%2Ftyler.jpeg&w=828&q=75"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none"></div>
        <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none"></div>
      </div>
    </div>
  );
};
