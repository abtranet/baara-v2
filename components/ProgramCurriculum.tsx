interface CurriculumWeek {
  week: number;
  title: string;
}

interface ProgramCurriculumProps {
  weeks: CurriculumWeek[];
}

export default function ProgramCurriculum({ weeks }: ProgramCurriculumProps) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {weeks.map((w) => (
        <div
          key={w.week}
          className="flex gap-4 p-4 bg-white border border-stone-200 rounded-xl hover:border-amber-300 transition-colors"
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 text-amber-700 font-bold text-sm flex items-center justify-center">
            W{w.week}
          </div>
          <div>
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-widest">
              Week {w.week}
            </span>
            <p className="text-stone-800 font-medium text-sm leading-snug mt-0.5">{w.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
