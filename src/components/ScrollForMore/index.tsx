export default function ScrollForMore({ scrolled }: { scrolled: boolean }) {
  return (
    <div className={`${scrolled && "hidden"} absolute bottom-2 flex flex-row`}>
      Scroll down for more
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="mx-1 size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
        />
      </svg>
    </div>
  );
}
