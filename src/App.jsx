import Footer from './sections/Footer';
import Header from './sections/Header';
import Main from './sections/Main';

export default function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <section className="flex-1">
        <Main />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
