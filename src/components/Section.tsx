interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-3">
      <h2 className="text-base font-bold text-gray-900 mb-1 pb-1 border-b border-gray-300">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default Section;
