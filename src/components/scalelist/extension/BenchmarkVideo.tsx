const BenchmarkVideo = () => {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-3 text-center text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
          Watch the full breakdown
        </h2>
        <p className="mb-10 text-center text-muted-foreground">
          See how Scalelist gets you any email and mobile numbers from anywhere online.
        </p>
        <div className="mx-auto aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/cIhvGrUmOYE"
            title="Scalelist benchmark video"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default BenchmarkVideo;
