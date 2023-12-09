import { useCallback, useRef } from "react";
import { AppProvider } from "../components";
import "./App.css";
import { ResumeBottomSection } from "./resume-bottom-section/ResumeBottomSection";
import { ResumeMiddleSection } from "./resume-middle-section/ResumeMiddleSection";
import { ResumeTopSection } from "./resume-top-section/ResumeTopSection";
import html2pdf from "html2pdf.js";
import { Button, Card, CardBody, Link } from "@nextui-org/react";
import { FaDownload } from "react-icons/fa";
import { Ads } from "./Ads";
import pencil from '../pencil.png'; 
function App() {
  const resumeElement = useRef<HTMLDivElement>(null);
  const onDownload = useCallback(() => {
    if (resumeElement) {
      var opt = {
        filename: "resume.pdf",
        html2canvas: { scale: 4, dpi: 300 } 
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
        <Card className="mt-[100px] max-w-[400px] relative">
          <CardBody>
            <p className="p-5 leading-[22px]"><span className="app-name second-color font-bold text-[25px]">Resume Builder</span> is a user-friendly web application that allows you to effortlessly edit a pre-designed resume template. Customize your personal and professional information with ease, and see the changes in real-time. Once you're satisfied, simply hit the 'Download PDF' button to obtain a polished, PDF version of your resume, ready for your job applications.</p>
          </CardBody>
          <img className="absolute bottom-[10px] right-[10px] h-[25px]" src={pencil} alt="edit icon"/>
        </Card>
        <Button
          size="lg"
          onClick={onDownload}
          className="mt-5 mb-5 w-[200px]"
          color="primary"
          variant="bordered"
          endContent={<FaDownload />}
        >
          Download PDF
        </Button>
        <p>Made by   <Link isBlock showAnchorIcon href="https://github.com/chhaymenghong">
        Menghong Chhay
      </Link></p>
        <Ads />
      </div>
    </AppProvider>
  );
}
export default App;
