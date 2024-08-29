function copyLoremIpsumToClipboard() {
  const loremIpsum = document.getElementById("lorem-ipsum");
  navigator.clipboard.writeText(loremIpsum.textContent);
  alert("Lorem Ipsum copied to clipboard!");
}

function separateParagraphs(numberOfParagraphs, text) {
  if (numberOfParagraphs <= 0 || !text) {
    return "";
  }

  // Split the text into sentences and filter out empty sentences
  const sentences = text
    .split(".")
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence !== "");

  const sentencesPerParagraph = Math.ceil(
    sentences.length / numberOfParagraphs
  );

  const paragraphs = [];
  for (let i = 0; i < numberOfParagraphs; i++) {
    const start = i * sentencesPerParagraph;
    const end = start + sentencesPerParagraph;
    const paragraphSentences = sentences.slice(start, end);

    // Only join sentences that exist, avoiding trailing "."
    const paragraph =
      paragraphSentences.filter(Boolean).join(". ") +
      (paragraphSentences.length > 0 ? "." : "");
    paragraphs.push(paragraph.trim());
  }

  return paragraphs.join("\n\n");
}

function printLoremIpsum(text) {
  const responseContainer = document.querySelector(".response-container");
  responseContainer.style.display = "block";

  const responseBody = document.getElementById("response-body");
  responseBody.innerHTML = `<textarea id="lorem-ipsum">${text}</textarea>`;
  responseBody.innerHTML += `<button type="button" class="accent mt-1" onclick="copyLoremIpsumToClipboard()">Copy to Clipboard</button>`;

  responseContainer.scrollIntoView({ behavior: "smooth" });
}

async function generateLoremIpsum() {
  const numberOfParagraphs = document.getElementById(
    "number-of-paragraphs"
  ).value;
  const startWithLoremIpsum = document.getElementById(
    "start-with-lorem-ipsum"
  ).value;

  const response = await fetch(
    `/api/loremipsum?paragraphs=${numberOfParagraphs}&start_with_lorem_ipsum=${startWithLoremIpsum}`
  );
  const data = await response.json();

  if (response.ok) {
    const responseBody = separateParagraphs(numberOfParagraphs, data.text);
    printLoremIpsum(responseBody);
  } else {
    console.error("Error:", data.message);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
    generateLoremIpsum();
  });
});
