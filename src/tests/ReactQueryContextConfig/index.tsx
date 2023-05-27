import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

//useQuery test 환경에서의 설정 (main.tsx에서의 환경을 재현)
const queryClient = new QueryClient();

const ReactQueryContextConfig = ({children}: any) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
);

export default ReactQueryContextConfig;