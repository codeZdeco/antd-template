import {
  Router,
  StoreProvider,
  MessageHandler,
  SharedProvider,
  ConfigProvider,
} from "components/wrapper";
import { paths } from "constant";

function App() {
  return (
    <StoreProvider>
      <ConfigProvider>
        <MessageHandler>
          <SharedProvider>
            <Router defaultRoute={paths.home} />
          </SharedProvider>
        </MessageHandler>
      </ConfigProvider>
    </StoreProvider>
  );
}

export default App;
