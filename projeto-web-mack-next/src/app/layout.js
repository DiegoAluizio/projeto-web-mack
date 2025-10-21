export const metadata = {
  title: "Lih's Crochet",
  description: "Loja de crochê feita com Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
