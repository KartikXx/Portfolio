export default function GenericTech({ label = '?' }: { label?: string }) {
  const text =
    label.length <= 3
      ? label.toUpperCase()
      : label
          .split(/[\s/]+/)
          .map((word) => word[0])
          .join('')
          .slice(0, 3)
          .toUpperCase();

  return (
    <svg viewBox="0 0 128 128">
      <rect
        width="128"
        height="128"
        rx="24"
        fill="currentColor"
        opacity="0.12"
      />
      <text
        x="64"
        y="76"
        textAnchor="middle"
        fontSize="34"
        fontWeight="700"
        fill="currentColor"
        fontFamily="system-ui, sans-serif"
      >
        {text}
      </text>
    </svg>
  );
}
