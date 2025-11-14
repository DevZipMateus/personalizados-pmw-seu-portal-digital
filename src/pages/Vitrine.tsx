import { useEffect } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  useEffect(() => {
    // Adicionar o script do badge MonteSite
    const script = document.createElement('script');
    script.src = 'https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpar o script quando o componente desmontar
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden">
      <Header />
      
      {/* Main content - iframe ocupando espaço restante com padding-top para compensar header fixo */}
      <main className="w-full pt-20 overflow-hidden" style={{ height: 'calc(100vh - 63px)' }}>
        <iframe
          src="https://pmw.egestor.com.br/vitrine/"
          className="w-full h-full"
          style={{ border: 'none' }}
          title="Demonstração de Vitrine"
        />
      </main>

      {/* Rodapé MonteSite - Atualização Automática */}
      <div id="montesite-footer-badge"></div>
    </div>
  );
};

export default Vitrine;
