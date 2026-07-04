type HeroCurveDividerProps = {
  className?: string;
};

export default function HeroCurveDivider({ className = 'text-white' }: HeroCurveDividerProps) {
  return (
    <div
      className={`absolute bottom-0 left-0 w-full leading-[0] z-[5] pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        className="block w-full h-[72px] sm:h-[96px] md:h-[120px]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0,72 C360,72 480,8 720,8 C960,8 1080,72 1440,72 V120 H0 Z"
        />
      </svg>
    </div>
  );
}
