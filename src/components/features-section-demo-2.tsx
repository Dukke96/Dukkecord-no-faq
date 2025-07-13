"use client";
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Built for AI enthusiasts",
      description:
        "Designed for developers, engineers, and AI enthusiasts to create smarter solutions.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Ease of use",
      description:
        "As intuitive as it gets, making AI accessible to everyone.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Affordable pricing",
      description:
        "Competitive prices with no hidden fees. Start for free, upgrade anytime.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Reliable uptime",
      description: "Guaranteed 100% uptime for uninterrupted AI operations.",
      icon: <IconCloud />,
    },
    {
      title: "Multi-tenant Architecture",
      description: "Share resources seamlessly across teams and projects.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 AI Support",
      description:
        "Our AI agents are always available to assist you, anytime, anywhere.",
      icon: <IconHelp />,
    },
    {
      title: "Satisfaction guaranteed",
      description:
        "If you're not satisfied, we'll work tirelessly to ensure you are.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Endless possibilities",
      description: "Explore limitless opportunities with our AI-powered tools.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-border",
        (index === 0 || index === 4) && "lg:border-l border-border",
        index < 4 && "lg:border-b border-border"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-muted to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-muted to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-muted-foreground">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-muted group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
