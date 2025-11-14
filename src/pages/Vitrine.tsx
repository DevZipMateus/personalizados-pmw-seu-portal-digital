import { useEffect } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  useEffect(() => {
    // Travar scroll do body
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    // Adicionar o script do badge MonteSite
    const script = document.createElement('script');
    script.src = 'https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Restaurar scroll ao sair da página
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      
      // Limpar o script quando o componente desmontar
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <Header />
      
      {/* Main content - iframe ocupando espaço restante com padding-top para compensar header fixo */}
      <main 
        className="absolute top-20 left-0 right-0 w-full overflow-hidden" 
        style={{ height: 'calc(100vh - 80px - 63px)' }}
      >
        <iframe
          src="https://pmw.egestor.com.br/vitrine/"
          className="w-full h-full"
          style={{ border: 'none', display: 'block' }}
          title="Demonstração de Vitrine"
        />
      </main>

      {/* Rodapé MonteSite - Atualização Automática */}
      <div id="montesite-footer-badge" className="absolute bottom-0 left-0 right-0" style={{ height: '63px' }}></div>
    </div>
  );
};

export default Vitrine;
