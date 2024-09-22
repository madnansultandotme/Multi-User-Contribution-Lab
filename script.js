let contributors = [];

// Load contributors on page load
function loadContributors() {
    const contributorList = document.getElementById("contributorList");
    contributorList.innerHTML = `
        <li>Muhammad Adnan Sultan</li>
        <li>Example Contributor 2</li>
        <li>Contributer 3</li>
    `;
}

// Add new contributor (for display purposes)
document.getElementById("addContributor").addEventListener("click", function() {
    const contributorName = document.getElementById("contributorName").value;
    if (contributorName) {
        const li = document.createElement("li");
        li.textContent = contributorName;
        document.getElementById("contributorList").appendChild(li);
        document.getElementById("contributorName").value = ""; // Clear input
    } else {
        alert("Please enter your name!");
    }
});

// Load contributors on page load
loadContributors();
