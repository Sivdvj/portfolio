export default function LearningCard({ item, index }) {
  return (
    <div className="learning-card group">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FF8DB7]">
            Bloom {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-2 text-xl font-extrabold text-[#2A2024]">{item}</h3>
        </div>
        <span className="grid h-12 w-12 place-items-center rounded-full bg-[#FFE4EF] text-[#FF6EA8] transition group-hover:scale-110">
          ✿
        </span>
      </div>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-white">
        <div
          className="h-full rounded-full bg-[#FF8DB7]"
          style={{ width: `${52 + index * 7}%` }}
        />
      </div>
    </div>
  );
}
