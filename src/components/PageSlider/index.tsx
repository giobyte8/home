import { ComponentChildren, useRef, useState, useEffect } from 'preact/hooks';
import './style.css';

type PageSliderProps = {
  children: ComponentChildren;
};

export function PageSlider({ children }: PageSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const pageCount = Array.isArray(children) ? children.length : 1;

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const pages = Array.from(slider.children) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveIndex(pages.indexOf(entry.target as HTMLElement));
          }
        }
      },
      { root: slider, threshold: 0.5 }
    );

    pages.forEach((page) => observer.observe(page));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sliderRef} class="page-slider">
      {children}
      <div class="page-slider__dots" role="tablist" aria-label="Pages">
        {Array.from({ length: pageCount }, (_, i) => (
          <span
            key={i}
            role="tab"
            aria-label={`Page ${i + 1}`}
            aria-selected={i === activeIndex}
            class={`page-slider__dot${i === activeIndex ? ' page-slider__dot--active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

type PageProps = {
  children: ComponentChildren;
};

export const Page = ({ children }: PageProps) => {
  return <div class="page">{children}</div>;
};
