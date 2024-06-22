export function View(props: { children?: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen lg:my-4 mb-8 flex flex-col items-center">
      {props.children}
    </div>
  );
}
