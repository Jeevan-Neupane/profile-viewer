import { darkThemeColors } from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import ImageForm from "./components/uploadImageForm/UploadForm";
const App = () => {
  return (
    <ThemeProvider theme={darkThemeColors}>
      <ImageForm />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
