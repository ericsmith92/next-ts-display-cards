import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { DisplayCardImage } from "./DisplayCardImage";
import { DisplayCardBody } from "./DisplayCardBody";

export interface DisplayCardProps {
  title: string;
  description: string;
  imageUrl: string;
  featured?: boolean;
  children?: ReactNode;
}

export function DisplayCard({
  title,
  description,
  imageUrl,
  featured = false,
  children,
}: DisplayCardProps) {
  const cardClasses = cn(
    "group relative overflow-hidden rounded-2xl max-w-[475px]",
    "md:flex md:flex-row-reverse md:items-stretch",
    featured
      ? "shadow-md"
      : "border border-slate-200 bg-white shadow-sm hover:shadow-md"
  );

  const innerClasses = cn(
    "flex flex-col md:flex-row-reverse md:items-stretch",
    featured && "rounded-r-2xl bg-white"
  );

  const titleClass = featured
    ? "text-lg font-sans font-bold text-slate-900"
    : "text-base font-sans font-semibold text-slate-900";

  const descriptionClass = featured
    ? "mt-2 text-sm text-slate-700 font-sans"
    : "mt-1 text-sm text-slate-600 font-sans";

  return (
    <article className={cardClasses}>
      {featured && (
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 w-1 origin-left rounded-l-2xl
                     bg-gradient-to-b from-indigo-500 via-fuchsia-500 to-rose-500
                     transform-gpu transition-transform duration-300
                     group-hover:scale-x-125"
        />
      )}
      <div className={innerClasses}>
        <DisplayCardImage
          src={imageUrl}
          alt={title}
          featured={featured}
          className="md:w-1/2 shrink-0"
        />
        <DisplayCardBody className="flex-1">
          <h3 className={titleClass}>{title}</h3>
          <p className={descriptionClass}>{description}</p>
          {children}
        </DisplayCardBody>
      </div>
    </article>
  );
}
