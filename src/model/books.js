const URL = "http://localhost:8888";

class Books {
  static getAllBooks() {
    const subPath = "/api/books";

    return fetch(URL + subPath, {
      method: "get",
      model: "cors"
    }).then((response) => {
      return response.json();
    }, (err) => {
      console.error(`Error: ${err}`);
    });
  }
}

export default Books;
