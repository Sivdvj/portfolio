export default function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && (
          <p className="mb-2 text-sm font-extrabold uppercase tracking-[0.2em] text-[#FF6EA8]">
            {eyebrow}
          </p>
        )}
        <h2 className="font-serif text-4xl text-[#2A2024] sm:text-5xl">
          {title}
        </h2>
      </div>
      {children && <div className="max-w-md text-[#6B5C61]">{children}</div>}
    </div>
  );
}
