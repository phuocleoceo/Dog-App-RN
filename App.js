import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navigation from "./Navigation";

export default function App()
{
  return (
    <Provider store={store}>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </Provider>
  );
}