// --- Mirror List Editor ---
// To update the mirrors, site admins should edit the array below in script.js and redeploy the site.
// The update box is now removed for regular users.
let websites = [
    { name: "The Pirate Bay", url: "https://tpb.theamongsusimposter.workers.dev/" },
    { name: "Tor Project", url: "https://torproject.theamongsusimposter.workers.dev/" },
    { name: "Tails OS", url: "https://tails.theamongsusimposter.workers.dev/" },
    { name: "P-Stream", url: "https://pstream.theamongsusimposter.workers.dev/" },
    { name: "P-Stream Docs", url: "https://docs-pstream.theamongsusimposter.workers.dev/" },
    { name: "Titanium Network", url: "https://titaniumnetwork.theamongsusimposter.workers.dev/" },
    { name: "Titanium Network Docs", url: "https://docs-titaniumnetwork.theamongsusimposter.workers.dev/" },
    { name: "Debian", url: "https://debian.theamongsusimposter.workers.dev/" },
    { name: "Kali Linux", url: "https://kali.theamongsusimposter.workers.dev/" },
    { name: "Fedora Project", url: "https://fedoraproject.theamongsusimposter.workers.dev/" },
    { name: "Arch Linux", url: "https://archlinux.theamongsusimposter.workers.dev/" },
    { name: "FMHY", url: "https://fmhy.theamongsusimposter.workers.dev/" },
    { name: "Eden", url: "https://eden-emu.theamongsusimposter.workers.dev/" },
    { name: "VegaMovies", url: "https://vegamovies.theamongsusimposter.workers.dev/" },
    { name: "1337x", url: "https://1337x.theamongsusimposter.workers.dev/" },
    { name: "Fedora Project Torrents", url: "https://torrent-fedoraproject.theamongsusimposter.workers.dev/" },
    { name: "Eaglercraft", url: "https://eaglercraft.theamongsusimposter.workers.dev/" }
];

function renderMirrors() {
    // Sort alphabetically by name
    websites.sort((a, b) => a.name.localeCompare(b.name));
    const tbody = document.getElementById('mirror-list');
    tbody.innerHTML = '';
    websites.forEach(site => {
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        const tdUrl = document.createElement('td');
        const a = document.createElement('a');
        a.href = site.url;
        a.target = '_blank';
        a.textContent = site.name;
        tdName.appendChild(a);
        tdUrl.textContent = site.url;
        tr.appendChild(tdName);
        tr.appendChild(tdUrl);
        tbody.appendChild(tr);
    });
}

// Only site admins can update the list by editing script.js and redeploying.
window.addEventListener('DOMContentLoaded', () => {
    renderMirrors();
});
