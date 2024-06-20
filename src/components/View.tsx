export function View(props: { children?: React.ReactNode }) {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      {props.children}
    </div>
  );
}
