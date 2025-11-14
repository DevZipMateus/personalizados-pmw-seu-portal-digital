import Header from "@/components/Header";

const Vitrine = () => {
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
    </div>
  );
};

export default Vitrine;
