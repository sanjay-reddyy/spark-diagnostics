export default function Button({
  children,
  className = "",
  ...props
}: any) {
  return (
    <button
      className={`bg-gradient-to-r from-primary to-emerald-600 text-white px-6 py-3 rounded-full
      hover:scale-105 hover:shadow-lg transition duration-300
      ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
