/* NovaPlay 2D brand mark — the same artwork as app/icon.svg (browser tab). */
export default function NovaMark({ size = 18, tile = false, className = "" }) {
  const spark = (
    <path
      d="M13.5 2 5 13.5h5L9.5 22 19 9.5h-5.5L13.5 2Z"
      fill="currentColor"
    />
  );

  if (!tile) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        {spark}
      </svg>
    );
  }

  // Gold tile variant (matches the favicon)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect width="64" height="64" rx="14" fill="#F5C542" />
      <g transform="translate(8 8) scale(2)">
        <path d="M13.5 2 5 13.5h5L9.5 22 19 9.5h-5.5L13.5 2Z" fill="#08090B" />
      </g>
    </svg>
  );
}
