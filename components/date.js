import { parseISO, format } from "date-fns";

export default function Dates(props = {}) {
  const { dateString } = props;
  const now = new Date().getTime();
  const date = dateString ? parseISO(dateString) : now;
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
