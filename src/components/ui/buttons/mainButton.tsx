interface PrimaryButtonProps {
  text: string;
  className?: string;
  href?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  starIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  target?: string;
  rel?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  className = '',
  href = undefined,
  onClick,
  style,
  starIcon,
  endIcon,
  target = '_blank',
  rel = 'noopener noreferrer',
}) => {
  return (
    <a
      data-testid="profile-cta-jobs"
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      style={style}
      className={`border-primary hover:bg-primary text-primary flex items-center rounded-lg border px-6 py-3 font-medium transition-all duration-200 hover:scale-105 hover:text-white hover:opacity-90 ${className}`}
    >
      {starIcon && <span className="mr-2">{starIcon}</span>}
      {text}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </a>
  );
};

export default PrimaryButton;
