async function blogFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector("#title-blog").value.trim();
  const content = document.querySelector("#content-blog").value.trim();

  if (title && content) {
    const response = await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    const blogData = await response.json();
    const blogId = await blogData.id;

    if (response.ok) {
      document.location.replace(`/blog/${blogId}`);
    } else {
      document.alert("Failed to create new post.");
    }
  }
}

document.querySelector("#blog-form").addEventListener("submit", blogFormHandler);
