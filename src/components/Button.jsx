export default function Button({ children, ...props }) {
  return (
    <>
      <button
        className="px-4 bg-stone-700 text-xs md:text-base rounded-md text-stone-300 hover:bg-stone-600 hover:text-stone-100"
        {...props}
      >
        {children}
      </button>
    </>
  );
}
