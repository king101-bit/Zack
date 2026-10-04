export default function SectionHeading({
  id,
  title,
  note,
}: {
  id: string;
  title: string;
  note?: string;
}) {
  return (
    <div id={id} className="flex items-baseline justify-between pb-5 pt-[90px]">
      <h2 className="text-[clamp(30px,4.4vw,52px)] leading-none">{title}</h2>
      {note && <span className="text-[15px] text-mut">{note}</span>}
    </div>
  );
}
