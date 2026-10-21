// const postList = document.getElementById("post-list");

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error("Could not load posts:", error);
  }
}

function displayPosts(posts) {
    const postList = document.getElementById("post-list");
  posts.forEach((post) => {
    const item = document.createElement("li");

    const title = document.createElement("h1");
    title.textContent = post.title;

    const body = document.createElement("p");
    body.textContent = post.body;

    item.append(title, body);
    postList.appendChild(item);
  });
}

fetchPosts();

if (typeof module !== "undefined") {
  module.exports = { fetchPosts, displayPosts };
}