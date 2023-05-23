import Date from "./date";

export default function Avatar({ name, picture, date }) {
  return (
    <div className="flex items-center">
      <div className="relative mr-3 rounded-full shadow-lg h-14 w-14">
        {picture && (
          <picture>
            <img
              src={`${picture}?auto=format,compress,enhance&w=100&h=100`}
              className="rounded-full"
              alt={name}
            />
          </picture>
        )}
      </div>
      <div className="flex flex-col">
        <div className="text-2xl font-bold f1 sm:hidden lg:block">{name}</div>
        {date && <Date dateString={date} />}
      </div>
    </div>
  );
}
