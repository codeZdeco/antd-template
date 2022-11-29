import {
  Router,
  StoreProvider,
  MessageHandler,
  SharedProvider,
  ConfigProvider,
  HelmetHandler,
} from "components/wrapper";
import { paths } from "constant";

function App() {
  return (
    <StoreProvider>
      <HelmetHandler>
        <ConfigProvider>
          <MessageHandler>
            <SharedProvider>
              <Router defaultRoute={paths.home} />
            </SharedProvider>
          </MessageHandler>
        </ConfigProvider>
      </HelmetHandler>
    </StoreProvider>
  );
}

export default App;
