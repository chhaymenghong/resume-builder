import { AppProvider } from "../components";
import "./App.css";
import { ResumeBottomSection } from "./resume-bottom-section/ResumeBottomSection";
import { ResumeMiddleSection } from "./resume-middle-section/ResumeMiddleSection";
import { ResumeTopSection } from "./resume-top-section/ResumeTopSection";

function App() {
  return (
    <div className="resume-root">
      <AppProvider>
        <ResumeTopSection />
        <ResumeMiddleSection />
        <ResumeBottomSection />
      </AppProvider>
    </div>
  );
}
export default App;
