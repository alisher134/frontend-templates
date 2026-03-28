import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
