interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ badge, title, highlight, description, center = true }: SectionHeadingProps) => {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-12 md:mb-16`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;
