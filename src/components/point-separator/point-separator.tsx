interface IPointSeparetorProps {
  size: 'large' | 'small';
}

export function PointSeparator({ size }: IPointSeparetorProps) {
  return (
    <div
      className={` ${size === 'small' ? 'w-[4px] h-[4px]' : 'w-[6px] h-[6px]'} bg-brand rounded-full`}
    />
  );
}