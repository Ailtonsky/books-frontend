// parte de autores destacados del wireframe
const authors = [
  { name: 'Isaac Asimov', book: 'Fundación' },
  { name: 'Frank Herbert', book: 'Dune' },
  { name: 'James Clear', book: 'Hábitos atómicos' },
];

// El autor del centro se pone con un circulo mas grande, como en el wireframe
function circleClass(index: number) {
  if (index === 1) {
    return 'flex h-32 w-32 items-center justify-center rounded-full bg-blue-dark text-4xl font-bold text-green';
  } else {
    return 'flex h-24 w-24 items-center justify-center rounded-full bg-blue-dark text-3xl font-bold text-green';
  }
}

export default function FeaturedAuthors() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-center">
      <h2 className="mb-8 text-3xl font-bold text-blue-dark">
        Autores destacados
      </h2>

      <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-end sm:justify-center">
        {authors.map((author, index) => (
          <article
            key={author.name}
            className="flex flex-col items-center gap-2"
          >
            <div className={circleClass(index)}>{author.name.charAt(0)}</div>
            <h3 className="text-lg font-bold text-blue-dark">{author.name}</h3>
            <p className="text-gray-600">{author.book}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
