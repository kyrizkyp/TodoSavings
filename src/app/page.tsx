import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <main>
      <section className="my-6">
        <div className="flex items-center justify-center">
          <Hero />
        </div>
      </section>
    </main>
  );
}
