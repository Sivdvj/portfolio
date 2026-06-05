export default function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-5 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
      {" "}
      <div>
        {eyebrow && (
          <p className="mb-2 text-sm font-extrabold uppercase tracking-[0.25em] text-[#FF6EA8]">
            {eyebrow}{" "}
          </p>
        )}

        <h2 className="font-serif text-5xl leading-none text-[#2A2024] lg:text-6xl">
          {title}
        </h2>
      </div>
      {children && (
        <div className="max-w-md text-sm leading-6 text-[#6B5C61]">
          {children}
        </div>
      )}
    </div>
  );
}
