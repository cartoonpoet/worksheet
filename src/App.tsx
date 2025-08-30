import Problem from "./pages/Problem";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Problem />
    </QueryClientProvider>
  );
};

export default App;
