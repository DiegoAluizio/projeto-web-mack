import "./globals.css"; // <---- IMPORTANTE

export const metadata = {
  title: "Lih's Crochet",
  description: "Transforme seu personagem favorito em crochê!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
