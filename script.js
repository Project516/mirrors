// --- Mirror List Editor ---
// To update the mirrors, site admins should edit the array in assets/mirrors.json and redeploy the site.
// The update box is now removed for regular users.

let websites = [];

// Fetch the JSON data from assets/mirrors.json
fetch('assets/mirrors.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    websites = data; // Assign the fetched data to the websites array

    // Sort alphabetically by name
    websites.sort((a, b) => a.name.localeCompare(b.name));

    // Render table
    const tbody = document.getElementById('mirror-list');
    tbody.innerHTML = '';
    websites.forEach(site => {
      const tr = document.createElement('tr');
      const tdName = document.createElement('td');
      const tdUrl = document.createElement('td');
      tdName.innerHTML = `<a href="${site.url}" target="_blank">${site.name}</a>`;
      tdUrl.textContent = site.url;
      tdUrl.style.wordBreak = 'break-all';
      tr.appendChild(tdName);
      tr.appendChild(tdUrl);
      tbody.appendChild(tr);
    });

    // Set last build/modified info
    const footer = document.getElementById('footer-info');
    // These will be replaced by GitHub Actions
    const lastModified = '__MODIFIED_DATE__';
    footer.innerHTML = `<span>Last modified: <b>${lastModified}</b></span>`;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
