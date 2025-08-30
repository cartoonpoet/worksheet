import WorkBook from "./pages/WorkBook";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <WorkBook />
    </QueryClientProvider>
  );
};

export default App;
