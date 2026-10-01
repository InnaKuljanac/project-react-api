import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //regler för att begränsa antalet anrop till apiet

      staleTime: 1000 * 60 * 5, //Hämtad data anses färsk i 5 min för att undvika återhämtning varje gång den laddas
      refetchOnWindowFocus: false, //om användaren byter flik och sedan tbx så göra inte ett nytt anrop automatiskt
      retry: 1, // gör bara ett extra förösk vid misslyckat anrop
    },
  },
})

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
