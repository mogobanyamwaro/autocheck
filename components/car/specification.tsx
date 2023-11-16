"use client";

import clsx from "clsx";

export type SpecificationTypes = {
  name: string;
  details: string;
}[];

interface SpecificationsProps {
  specifications: SpecificationTypes;
}

type SectionProps = {
  className?: string;
  id?: string;
  children: React.ReactNode;
  tag?: "section" | "div";
  headerClassName?: string;
  title?: string;
  titleClassName?: string;
  description?: string;
  descriptionClassName?: string;
  rightElement?: React.ReactNode;
};
function Section({
  children,
  className,
  id,
  tag = "section",
  title,
  titleClassName = "text-xl capitalize !leading-8 md:!text-2xl lg:!leading-[48px] 4xl:!leading-[48px] 4xl:!text-3xl",
  descriptionClassName = "font-normal capitalize leading-6 text-secondary 4xl:text-lg",
  description,
  headerClassName,
  rightElement,
}: SectionProps) {
  let Component = tag;
  return (
    <Component className={className} id={id}>
      {title && (
        <header
          className={clsx(
            "flex justify-between capitalize text-primary",
            headerClassName,
          )}
        >
          <div>
            <h2 className={titleClassName}>{title}</h2>
            {description && (
              <h2 className={descriptionClassName}>{description}</h2>
            )}
          </div>
          {rightElement && <div>{rightElement}</div>}
        </header>
      )}
      {children}
    </Component>
  );
}

export default function SpecificationBlock({
  specifications,
}: SpecificationsProps) {
  return (
    <Section
      className="py-5 xl:py-7"
      title="specifications"
      titleClassName="text-xl md:!text-[22px] 2xl:!text-2xl mb-2 md:mb-0"
    >
      <>
        <div className="mt-1">
          {specifications.map((item) => (
            <div
              key={item.name}
              className="border-gray-lighter grid grid-cols-1 gap-[2px] border-b py-2 leading-6 sm:grid-cols-2 sm:gap-1 sm:py-3 md:py-4 lg:grid-cols-1 lg:gap-2 xl:grid-cols-2"
            >
              <span className="text-primary opacity-80 sm:text-primary sm:opacity-100 lg:text-primary lg:opacity-80 xl:text-primary xl:opacity-100">
                {item.name}
              </span>
              <span className="text-primary sm:text-end lg:text-left xl:text-end">
                {item.details}
              </span>
            </div>
          ))}
        </div>
      </>
    </Section>
  );
}
