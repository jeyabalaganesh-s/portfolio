import React from "react";

export default function PublicationsSection() {
  const publications = [
    {
      title: "Websence AI: Enhancing Website Evaluation with Opinion Mining and Generative AI",
      url: "https://ijsrem.com/download/websense-ai-enhancing-website-evaluation-with-opinion-mining-and-generative-ai/"
    },
    {
      title: "Develop an Online Cloth Retail Webpage using HTML, CSS, JavaScript, PHP, and MySQL",
      url: "https://ijsrem.com/download/develop-an-online-cloth-retail-webpage-using-html-css-javascript-php-and-mysql/"
    }
  ];

  return (
    <section id="publications" className="bg-blue px-6 py-12">
      <h3 className="text-3xl font-bold text-white-400 mb-6">Journal Publications</h3>
      <div className="space-y-4">
        {publications.map((pub, idx) => (
          <div key={idx} className="bg-white/10 p-4 rounded-lg border border-black">
            <h4 className="text-lg font-semibold text-white">{pub.title}</h4>
            <a href={pub.url} target="_blank" rel="noopener noreferrer" className="text-orange-700 hover:text-orange-800">Read Journal</a>
          </div>
        ))}
      </div>
    </section>
  );
}
