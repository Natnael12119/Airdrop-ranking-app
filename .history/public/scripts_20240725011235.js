document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/airdrops')
        .then(response => response.json())
        .then(data => displayAirdrops(data))
        .catch(error => console.error('Error fetching airdrops:', error));
});

function displayAirdrops(airdrops) {
    const airdropList = document.getElementById('airdrop-list');
    airdrops.forEach(airdrop => {
        const airdropDiv = document.createElement('div');
        airdropDiv.className = 'airdrop';
        airdropDiv.innerHTML = `
            <h3>${airdrop.name}</h3>
            <p>${airdrop.description}</p>
            <p><strong>Eligibility:</strong> ${airdrop.eligibility}</p>
            <a href="${airdrop.website}" target="_blank">Learn more</a>
        `;
        airdropList.appendChild(airdropDiv);
    });
}
