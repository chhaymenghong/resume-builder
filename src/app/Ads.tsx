import { useEffect } from "react";
const windowThis: any = window;
export const Ads: React.FC = () => {
  useEffect(() => {
    try {
      (windowThis.adsbygoogle = windowThis.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);
  return (
    <div className="ad-container">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3098248375801225"
        data-ad-slot="9245123565"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};
