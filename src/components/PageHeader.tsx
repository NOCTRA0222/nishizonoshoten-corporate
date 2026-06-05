type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mb-10">
      <h1 className="text-2xl font-semibold text-charcoal sm:text-3xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-3 max-w-2xl text-charcoal/75 leading-relaxed">
          {description}
        </p>
      ) : null}
    </header>
  );
}
