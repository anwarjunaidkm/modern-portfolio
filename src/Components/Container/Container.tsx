export interface ContainerProps {
  children: React.ReactNode;
}
export function Container({ children }: ContainerProps) {
  return <div className="mx-auto px-3 max-w-[1300px] bg-primary">{children}</div>;
}
