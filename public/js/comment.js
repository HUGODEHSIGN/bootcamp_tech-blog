async function commentFormHandler(event) {
  event.preventDefault();
  const content = document.querySelector("#content-comment").value.trim();
  console.log(content);
}

document.querySelector("#comment-form").addEventListener("submit", commentFormHandler);
