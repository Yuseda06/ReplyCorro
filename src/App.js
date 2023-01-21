import React, { useState } from "react";

const replies = [
  {
    key: 1,
    body:
      "Thank you for reaching out to us regarding the recent OPR changes. We understand that this may have caused some confusion and we apologize for any inconvenience this may have caused. The changes were implemented to improve the overall performance and stability of our service, and we believe that in the long run, it will benefit our entire user base. If you have any further concerns or questions, please do not hesitate to reach out to us. Our customer support team is always available to assist you. Thank you for your patience and understanding."
  },
  {
    key: 2,
    body:
      "Hello [Customer Name], Thank you for your email regarding the OPR changes. We apologize for any confusion or inconvenience this may have caused. These changes were made in an effort to improve the overall performance and stability of our service. We understand that this may take some time to adjust to, but we believe that in the long run, it will benefit our entire user base. If you have any additional questions or concerns, please do not hesitate to reach out to us. Our customer support team is here to help. Thank you for your understanding. Sincerely,"
  }
  // and so on
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const results = replies.filter((item) =>
      item.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    console.log(searchResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {searchResults.map((item) => (
          <li key={item.id}>{item.body}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
