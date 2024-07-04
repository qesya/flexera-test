import HomePage from "@/components/pages/home/home";
import { RepositoryProvider } from "@/services/repository";
import StoreProvider from "@/store/provider";

export default function Home() {
  return (
    <StoreProvider>
      <RepositoryProvider>
        <main>
          <HomePage />
        </main>
      </RepositoryProvider>
    </StoreProvider>
  );
}
