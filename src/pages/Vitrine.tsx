import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      
      {/* Main content - iframe ocupando espaço restante */}
      <main className="flex-1 w-full" style={{ height: 'calc(100vh - 80px - 63px)' }}>
        <iframe
          src="https://chat.chatshub.com.br/chat#58324481"
          className="w-full h-full"
          style={{ border: 'none' }}
          title="Demonstração de Vitrine"
        />
      </main>
    </div>
  );
};

export default Vitrine;
