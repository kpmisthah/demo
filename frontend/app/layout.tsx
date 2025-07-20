import AppInitializer from "@/lib/AppInitializer";
import { getUserFromServer } from "@/lib/getUser";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUserFromServer();

  return (
    <html lang="en">
      <body>
        <AppInitializer user={user}>
          {children}
        </AppInitializer>
      </body>
    </html>
  );
}
