import { ComponentChildren } from 'preact';
import './style.css';

type PageProps = {
  children: ComponentChildren;
};

export function Page({ children }: PageProps) {
  return (
    <div class="page">
      {children}
    </div>
  );
}
