import moment from "moment";
import React, { useEffect, useState } from "react";
import { MdArticle, MdOpenInNew } from "react-icons/md";
import Parser from "rss-parser";

export default function BlogCard() {
  const parser = new Parser();
  const rssFeedUrl = "https://blog.orlandomm.me/rss.xml";

  const [articles, setArticles] = useState([]);

  async function fetchArticlesFromRSS() {
    try {
      const feed = await parser.parseURL(rssFeedUrl);
      return feed.items;
    } catch (error) {
      console.error("Error al obtener los artículos del feed RSS:", error);
      return [];
    }
  }

  useEffect(() => {
    fetchArticlesFromRSS().then((result) => {
      setArticles(result);
    });
  }, []);

  return (
    <>
      <a
        href="https://blog.orlandomm.me"
        className="flex md:hidden flex-col justify-center items-center bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out"
      >
        <MdArticle className="text-5xl" />
        <p className="font-bold">Blog</p>
      </a>
      <div className="hidden md:flex max-h-[300px] bg-orange-500/80 text-white relative flex-col gap-2 p-3 md:p-7 lg:p-8 rounded-3xl md:col-span-2 col-span-2 row-span-1 overflow-hidden ">
        <div className="flex justify-between">
          <h2 className="font-bold text-xl">Blog</h2>
          <a
            href="https://blog.orlandomm.me"
            className="flex items-center gap-1"
            aria-label="Blog"
          >
            blog.orlandomm.me <MdOpenInNew />
          </a>
        </div>
        <div className="w-full flex gap-4 flex-col overflow-y-auto">
          {articles.slice(0, 3).map((article) => (
            <Article key={article.guid} article={article} />
          ))}
        </div>
      </div>
    </>
  );
}

function Article({ article }) {
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }

    const truncatedText = text.slice(0, maxLength - 3) + "...";
    return truncatedText;
  }

  return (
    <>
      <a
        href={article.link}
        className="w-full p-2 hover:bg-white/10 rounded-lg border-b-2"
        aria-label={article.title}
      >
        <p className="font-bold text-lg unde">👉 {article.title}</p>
        <div className="flex justify-between">
          <p title={article.contentSnippet}>
            {truncateText(article.contentSnippet, 50)}
          </p>
          <p>{moment(article.isoDate).fromNow()}</p>
        </div>
      </a>
    </>
  );
}
