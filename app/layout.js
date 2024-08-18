import { Inter, Roboto, Lora } from "next/font/google";
import "./globals.css";
import "../lib/fontawesome"; // Import Font Awesome configuration

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const lora = Lora({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Monarch : Mind Of N Archtect",
  description: "Monarch is IT Solutions and Services Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.className} ${lora.className}`}>
        {children}
      </body>
    </html>
  );
}