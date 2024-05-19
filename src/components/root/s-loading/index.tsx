interface ISLoading {
  text: string;
}

export function SLoading({ text }: ISLoading) {
  return (
    <div className="flex justify-center items-center h-[50vh]">
      <p className={`text-center font-extrabold text-2xl text-[#7F4D4F]`}>
        {text ? <>{text}</> : <>Loading Please Wait....</>}
      </p>
    </div>
  );
}
