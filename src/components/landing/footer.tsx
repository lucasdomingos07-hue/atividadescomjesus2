export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 bg-background">
      <div className="container mx-auto text-center text-xs text-gray-400 space-y-2">
        <p>&copy; {currentYear} Colorindo Fé e Alegria<br />Todos os direitos reservados.</p>
        <p>Material digital de educação cristã<br />para uso pessoal e educativo.</p>
      </div>
    </footer>
  );
}
