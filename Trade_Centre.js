const TradeForm = document.getElementById("TradeForm");
const submissionNote = document.getElementById("submissionNote");

TradeForm.addEventListener("submit", function(event) {
    event.preventDefault();

    submissionNote.textContent = "Trade submission successful! Your product has been submitted.";
    submissionNote.style.color = "green";

    TradeForm.reset();
});