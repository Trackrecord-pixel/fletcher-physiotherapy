import Icon from "./Icon";

export default function FeatureList({
  items,
  columns = 2,
}: {
  items: string[];
  columns?: 1 | 2;
}) {
  return (
    <ul className={`grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-beige-100 text-navy-800">
            <Icon name="check" className="h-4 w-4" />
          </span>
          <span className="text-navy-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}
