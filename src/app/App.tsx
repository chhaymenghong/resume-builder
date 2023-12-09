import { useCallback, useRef } from "react";
import { AppProvider } from "../components";
import "./App.css";
import { ResumeBottomSection } from "./resume-bottom-section/ResumeBottomSection";
import { ResumeMiddleSection } from "./resume-middle-section/ResumeMiddleSection";
import { ResumeTopSection } from "./resume-top-section/ResumeTopSection";
import html2pdf from "html2pdf.js";
import { Button } from "@nextui-org/react";
import { FaDownload } from "react-icons/fa";
import { Ads } from "./Ads";
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
      <div className="grow flex flex-col items-center">
        <Button
          size="lg"
          onClick={onDownload}
          className="mt-10 mb-5 w-[200px]"
          color="primary"
          variant="bordered"
          endContent={<FaDownload />}
        >
          Download PDF
        </Button>
        <Ads />
      </div>
    </AppProvider>
  );
}
export default App;
