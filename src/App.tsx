import React, { useState } from "react";
import "./App.css";
import { Logo } from "./components/Logo";
import "./App.css";

const App: React.FC = () => {
  const [text, setText] = useState("");
  const [articles, setArticles] = useState<[]>([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const search = () => {
    setLoading(true);
    fetch(`https://medvice-backend.herokuapp.com/search?searchquery=${text}`)
      .then((res) => res.json())
      .then(({ data }) => {
        console.log(data);
        const updatedData = data.map((item: any) =>
          item.map((el: any) => {
            if (el.includes("http")) {
              console.log("this was true");
              return `<a style="color: white; " href='${el}'>${el}</a>`;
            } else {
              return el
                .replace("content", "div")
                .replace("/content", "/div")
                .replace("name=", "class=");
            }
          })
        );
        setTitle(text);
        setArticles(updatedData);
        setText("");
        setLoading(false);
      });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <Logo />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          search();
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "50%",
          marginLeft: "25%",
          marginBottom: "1rem",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#FFDF2B" }}>
          Enter the name of any medical article
        </h2>
        <div style={{ width: "100%" }}>
          <input
            className="search-input"
            placeholder="Name of article"
            onChange={onChange}
            value={text}
          />
          <button className="search-button">Search</button>
        </div>
      </form>
      {loading === true ? (
        <img
          src="https://cdn.discordapp.com/attachments/774607515966898188/782234631071727636/MEDVICE.gif"
          style={{ marginLeft: "25%", width: "50%", height: "100vh" }}
        />
      ) : null}
      {title ? (
        <h2 style={{ color: "#F9FFFF", textAlign: "center" }}>{title}</h2>
      ) : null}
      {articles.length > 0 && loading === false ? (
        <div>
          {articles?.map((article: any) => (
            <div
              style={{
                width: "100%",
                color: "#F9FFFF",
                fontFamily: "Segoe UI",
                boxShadow:
                  "0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
                marginBottom: "1rem",
              }}
            >
              {article.map((item: any) => (
                <div>
                  <div dangerouslySetInnerHTML={{ __html: item }}></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default App;
