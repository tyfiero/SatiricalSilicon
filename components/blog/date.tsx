import { parseISO, format } from "date-fns";

export default function Date({ dateString, small }:{dateString:string, small?:boolean}) {
  const date = parseISO(dateString);
  return (
    <time className={`mt-0 f2 opacity-70 ${small ? "text-xs" : ""}`}  dateTime={dateString}>
      {format(date, "LLLL	d, yyyy")}
    </time>
  );
}
