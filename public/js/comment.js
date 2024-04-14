async function commentFormHandler(event) {
  event.preventDefault();
  const content = document.querySelector("#content-comment").value.trim();

  const path = window.location.pathname.split("/");
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const blog_id = Number(path[path.length - 1]);
  if (content) {
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ content, blog_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      document.alert("Failed to post comment.");
    }
  }
}

document.querySelector("#comment-form").addEventListener("submit", commentFormHandler);
