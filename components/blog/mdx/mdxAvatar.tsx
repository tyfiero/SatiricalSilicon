import Date from "../date";

export default function MDXAvatar({ name, picture, date }) {
  return (
    <div className="flex items-center">
      <div className="relative mr-3 rounded-full shadow-lg h-14 w-14">
        {picture && (
          <picture>
            <img
              src={`/assets/other/ty-circle-image.webp`}
              className="rounded-full h-14 w-14"
              alt={"Ty Fiero"}
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
