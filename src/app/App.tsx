import { useCallback, useRef } from "react";
import { AppProvider } from "../components";
import "./App.css";
import { ResumeBottomSection } from "./resume-bottom-section/ResumeBottomSection";
import { ResumeMiddleSection } from "./resume-middle-section/ResumeMiddleSection";
import { ResumeTopSection } from "./resume-top-section/ResumeTopSection";
import html2pdf from "html2pdf.js";
import { Button } from "@nextui-org/react";
import { FaDownload } from "react-icons/fa";
function App() {
  const resumeElement = useRef<HTMLDivElement>(null);
  const onDownload = useCallback(() => {
    if (resumeElement) {
      var opt = {
        filename: "resume.pdf",
      };

      // New Promise-based usage:
      html2pdf().from(resumeElement.current).set(opt).save();
    }
  }, []);
  return (
    <AppProvider>
      <div ref={resumeElement} className="resume-root">
        <ResumeTopSection />
        <ResumeMiddleSection />
        <ResumeBottomSection />
      </div>
      <div className="grow flex justify-center">
        <Button onClick={onDownload}  className="mt-10" color="primary" variant="bordered" endContent={<FaDownload />}>
          Download PDF
        </Button>
      </div>
    </AppProvider>
  );
}
export default App;
