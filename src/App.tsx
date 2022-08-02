import { ChakraProvider } from "@chakra-ui/react";
import Page from "./components/Page";

function App() {
  return (
    <ChakraProvider>
      <Page />
    </ChakraProvider>
  );
}

export default App;
