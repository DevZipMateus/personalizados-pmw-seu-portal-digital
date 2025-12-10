import { useEffect } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <Header />
      
      {/* Main content - iframe ocupando espaço restante */}
      <main 
        className="absolute top-20 left-0 right-0 bottom-0 w-full overflow-hidden"
      >
        <iframe
          src="https://pmw.egestor.com.br/vitrine/"
          className="w-full h-full"
          style={{ border: 'none', display: 'block' }}
          title="Demonstração de Vitrine"
        />
      </main>
    </div>
  );
};

export default Vitrine;
