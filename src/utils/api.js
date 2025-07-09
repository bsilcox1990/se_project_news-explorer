export function getItems() {
  return new Promise((resolve, reject) => {
    resolve([
      {
        _id: "686ed01e27282ebeaa098e5f",
        source: "NPR",
        title: "Tesla is losing the EV war to Chinese Carmakers",
        publishedAt: "July 7, 2025",
        description:
          "For the second straight quarter, Tesla's sales have declined while Chinese rivals like BYD and NIO are surging, a sign of a major power shift in the global electric vehicle market.",
        url: "https://gizmodo.com/tesla-is-losing-the-ev-war-to-chinese-carmakers-2000625079",
        urlToImage:
          "https://gizmodo.com/app/uploads/2025/04/tesla-store-colma-ca-April-21-2025-1200x675.jpg",
      },
      {
        _id: "686ed46b27282ebeaa098e61",
        source: "Gizmodo.com",
        title:
          "Some of the best batman movies ever made are streaming free on youtube right now",
        publishedAt: "July 7, 2025",
        description:
          "Warner Bros. has put a treasure trove of DC cartoon classics online for free, including some of the very best of animated Batman.",
        url: "https://gizmodo.com/some-of-the-best-batman-movies-ever-made-are-streaming-free-on-youtube-right-now-2000625130",
        urlToImage:
          "https://gizmodo.com/app/uploads/2025/07/Batman-Sub-Zero-1200x675.jpg",
      },
      {
        _id: "686ed46b27282ebeaa098e62",
        source: "Gizmodo.com",
        title:
          "Physicists Solve a 50-Year Mystery About a Critically Important Molecule",
        publishedAt: "July 2, 2025",
        description:
          "The discovery itself is simple and fundamental, but the applications stretch far and wide into astrophysics and quantum technology, the researchers say.",
        url: "https://gizmodo.com/physicists-solve-a-50-year-mystery-about-a-critically-important-molecule-200062337000625079",
        urlToImage:
          "https://gizmodo.com/app/uploads/2025/07/dipolelead-960x640.jpg",
      },
    ]);
  });
}

export function saveArticle(article) {
  return new Promise((resolve, reject) => {
    resolve({
      _id: "686ed01e27282ebeaa098e5f",
      source: article.source.name,
      title: article.title,
      publishedAt: article.publishedAt,
      description: article.description,
      url: article.url,
      urlToImage: article.urlToImage,
    });
  });
}

export function deleteArticle(id, token) {
  return new Promise((resolve, reject) => {
    resolve({ message: "Successfully deleted" });
  });
}
