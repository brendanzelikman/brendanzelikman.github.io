import Portrait from "../assets/portrait.jpg";

export function Avatar(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      {...props}
      className="mb-4 size-48 lg:size-72 border-2 border-slate-500 rounded-full cursor-pointer hover:shadow-xl hover:border-indigo-500 transition-all duration-300"
      src={Portrait}
      alt="Brendan Zelikman"
    />
  );
}
