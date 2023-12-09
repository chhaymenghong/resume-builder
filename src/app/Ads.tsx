export const Ads: React.FC = () => {
  return (
    <div className="ad-container">
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3098248375801225"
        crossOrigin="anonymous"
      ></script>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3098248375801225"
        data-ad-slot="9245123565"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>
  );
};
