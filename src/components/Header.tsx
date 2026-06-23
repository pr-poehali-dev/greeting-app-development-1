export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-11 p-6">
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide">Центр НОК</div>
        <nav className="flex gap-8">
          <a
            href="tel:+79090004048"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            8-909-000-404-8
          </a>
          <a
            href="mailto:nfo@nokekb.ru"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Записаться
          </a>
        </nav>
      </div>
    </header>
  )
}