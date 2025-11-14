import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      <Header />
      
      {/* Main content - iframe ocupando espaço restante */}
      <main className="flex-1 w-full overflow-hidden" style={{ height: 'calc(100vh - 80px - 63px)' }}>
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
