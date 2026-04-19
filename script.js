// ==========================================
// 1. DATA INITIALIZATION & FACTORY DEFAULTS
// ==========================================
const genSites = (start, end) => Array.from({length: end - start + 1}, (_, i) => ({ text: `Site ${i + start}`, media: [], inputs: [] }));

const defaultParkData = {
    fall: {
        "A-Loop": [
            { category: "Water Shut-Off", tasks: [{text: "A-Loop", media: [], inputs: []}] },
            { category: "Main Drains", tasks: [{text: "Open Main Drain A", media: [], inputs: []}, {text: "Open Muskie Point (Fish Cleaning)", media: [], inputs: []}, {text: "Close Main Drain A", media: [], inputs: []}, {text: "Close Muskie Point (Fish Cleaning)", media: [], inputs: []}] },
            { category: "Fish Station", tasks: [{text: "Tear it apart", media: [], inputs: []}, {text: "Tear it apart part 2", media: [], inputs: []}] },
            { category: "Camp Spickets", columns: ["Open Spickets", "Open Spicket Drains", "Close Spicket Drains"], tasks: [{text: "Site 2", media: [], inputs: []}, {text: "Site 7", media: [], inputs: []}, {text: "Site 13", media: [], inputs: []}, {text: "Site 18", media: [], inputs: []}, {text: "Yurt", media: [], inputs: []}] },
            { category: "Electrical", tasks: [{text: "A Loop OFF", media: [], inputs: []}] }
        ],
        "B-Loop": [
            { category: "Water Shut-Off", tasks: [{text: "B-C Loop", media: [], inputs: []}] },
            { category: "Main Drains", tasks: [{text: "Open Main Drain B-C", media: [], inputs: []}, {text: "Open Site 28", media: [], inputs: []}, {text: "Open Cul-de-sac", media: [], inputs: []}, {text: "Open Trail Between B & C", media: [], inputs: []}, {text: "Close Main Drain B-C", media: [], inputs: []}, {text: "Close Site 28", media: [], inputs: []}, {text: "Close Cul-de-sac", media: [], inputs: []}, {text: "Close Trail Between B & C", media: [], inputs: []}] },
            { category: "Camp Spickets", columns: ["Open Spickets", "Open Spicket Drains", "Close Spicket Drains"], tasks: genSites(23, 46) },
            { category: "Electrical", tasks: [{text: "B Loop OFF", media: [], inputs: []}] }
        ],
        "C-Loop": [
            { category: "Water Shut-Off", tasks: [{text: "B-C Loop", media: [], inputs: []}] },
            { category: "Main Drains", tasks: [{text: "Open Main Drains", media: [], inputs: []}, {text: "Open Site 61", media: [], inputs: []}, {text: "Close Main Drains", media: [], inputs: []}, {text: "Close Site 61", media: [], inputs: []}] },
            { category: "Camp Spickets", columns: ["Open Spickets", "Open Spicket Drains", "Close Spicket Drains"], tasks: genSites(47, 68) },
            { category: "Electrical", tasks: [{text: "C Loop OFF", media: [], inputs: []}] }
        ],
        "Shower House": [
            { category: "WARNING", warningText: "*** FLIP THE BREAKER OFF BEFORE YOU DRAIN THE WATER HEATER!!!! ***", isCritical: true },
            { category: "Chase", tasks: [{text: "Water Heater Breaker Off", media: [], inputs: []}, {text: "Drained Water Heater", media: [], inputs: []}, {text: "Water Heater Valve Caps(3)", media: [], inputs: []}, {text: "Sloan Valves (6)", media: [], inputs: []}, {text: "Open 6 Chase Spickets", media: [], inputs: []}] },
            { category: "Male Side", tasks: [{text: "Take Push Buttons Off Sinks", media: [], inputs: []}, {text: "Take Push Buttons Off Showers", media: [], inputs: []}, {text: "Take Shower Heads Off", media: [], inputs: []}, {text: "Open Spicket Under Sinks", media: [], inputs: []}, {text: "Flush Toilets W/ Anti-Freeze", media: [], inputs: []}] },
            { category: "Female Side", tasks: [{text: "Take Push Buttons Off Sinks", media: [], inputs: []}, {text: "Take Push Buttons Off Showers", media: [], inputs: []}, {text: "Take Shower Heads Off", media: [], inputs: []}, {text: "Open Spicket Under Sinks", media: [], inputs: []}, {text: "Flush Toilets W/ Anti-Freeze", media: [], inputs: []}] },
            { category: "ADA", tasks: [{text: "Take Push Buttons Off Sinks", media: [], inputs: []}, {text: "Take Push Buttons Off Showers", media: [], inputs: []}, {text: "Take Shower Head Off", media: [], inputs: []}, {text: "Flush Toilet W/ Anti-Freeze", media: [], inputs: []}] },
            { category: "Outside", tasks: [{text: "Open Outside Spicket", media: [], inputs: []}, {text: "Shut-Off Water Main", media: [], inputs: []}] }
        ],
        "P-Point": [
            { category: "Water Shut-Off", tasks: [{text: "P-Point", media: [], inputs: []}] },
            { category: "Main Drains", tasks: [{text: "Open P-Point Shelter Side", media: [], inputs: []}, {text: "Open P-Point Lake Side", media: [], inputs: []}, {text: "Close P-Point Shelter Side", media: [], inputs: []}, {text: "Close P-Point Lake Side", media: [], inputs: []}] },
            { category: "Electrical", tasks: [{text: "Electrical OFF", media: [], inputs: []}] }
        ],
        "Dump Station": [
            { category: "Water Shut-Off", tasks: [{text: "Dump Station", media: [], inputs: []}] },
            { category: "Main Drains", tasks: [{text: "Open Dump Station", media: [], inputs: []}, {text: "Close Dump Station", media: [], inputs: []}] },
            { category: "Batteries", tasks: [{text: "Take Batteries Out", media: [], inputs: []}] },
            { category: "Dump Tower", tasks: [{text: "Take Hose Off", media: [], inputs: []}, {text: "Take bottom flex pipe off", media: [], inputs: []}] }
        ],
        "Fish Cleaning Station": [
            { category: "Operations", tasks: [{text: "Turn power OFF", media: [], inputs: []}, {text: "Take spray hoses OFF", media: [], inputs: []}] }
        ]
    },
    spring: {
        "A-Loop": [
            { category: "Water Open", tasks: [{text: "A-Loop", media: [], inputs: []}] },
            { category: "Fish Station", tasks: [{text: "Put It Back Together", media: [], inputs: []}, {text: "Put It Together part 2", media: [], inputs: []}] },
            { category: "Camp Spickets", columns: ["Close Spickets"], tasks: [{text: "Site 2", media: [], inputs: []}, {text: "Site 7", media: [], inputs: []}, {text: "Site 13", media: [], inputs: []}, {text: "Site 18", media: [], inputs: []}, {text: "Yurt", media: [], inputs: []}] },
            { category: "Electrical", tasks: [{text: "A Loop ON", media: [], inputs: []}] }
        ],
        "B-Loop": [
            { category: "Water Open", tasks: [{text: "B-C Loop", media: [], inputs: []}] },
            { category: "Camp Spickets", columns: ["Close Spickets"], tasks: genSites(23, 46) },
            { category: "Electrical", tasks: [{text: "B Loop ON", media: [], inputs: []}] }
        ],
        "C-Loop": [
            { category: "Water Open", tasks: [{text: "B-C Loop", media: [], inputs: []}] },
            { category: "Camp Spickets", columns: ["Close Spickets"], tasks: genSites(47, 68) },
            { category: "Electrical", tasks: [{text: "C Loop ON", media: [], inputs: []}] }
        ],
        "Shower House": [
            { category: "WARNING", warningText: "*** Make sure that the Water Heater HAS WATER IN IT BEFORE YOU FLIP THE BREAKER ON!!! ***", isCritical: true },
            { category: "Male Side", tasks: [{text: "Put Push Buttons On Sinks", media: [], inputs: []}, {text: "Put Push Buttons On Showers", media: [], inputs: []}, {text: "Put Shower Heads On", media: [], inputs: []}, {text: "Close Spicket Under Sinks", media: [], inputs: []}] },
            { category: "Female Side", tasks: [{text: "Put Push Buttons On Sinks", media: [], inputs: []}, {text: "Put Push Buttons On Showers", media: [], inputs: []}, {text: "Put Shower Heads On", media: [], inputs: []}, {text: "Close Spicket Under Sinks", media: [], inputs: []}] },
            { category: "ADA", tasks: [{text: "Put Push Buttons On Sinks", media: [], inputs: []}, {text: "Put Push Buttons On Showers", media: [], inputs: []}, {text: "Put Shower Heads On", media: [], inputs: []}] },
            { category: "Chase", tasks: [{text: "Close 6 Chase Spickets", media: [], inputs: []}, {text: "Close Water Heater Drain", media: [], inputs: []}, {text: "Water Heater Valve Caps(3)", media: [], inputs: []}, {text: "Sloan Valves (6)", media: [], inputs: []}, {text: "Water Heater Breaker On***", media: [], inputs: []}] },
            { category: "Outside", tasks: [{text: "Close Outside Spicket", media: [], inputs: []}, {text: "Open Water Main", media: [], inputs: []}] }
        ],
        "P-Point": [
            { category: "Water Open", tasks: [{text: "P-Point", media: [], inputs: []}] },
            { category: "Electrical", tasks: [{text: "Electrical ON", media: [], inputs: []}] } 
        ],
        "Dump Station": [
            { category: "Water Open", tasks: [{text: "Dump Station", media: [], inputs: []}] },
            { category: "Batteries", tasks: [{text: "Put batteries back in", media: [], inputs: []}] },
            { category: "Dump Tower", tasks: [{text: "Put Hose On", media: [], inputs: []}, {text: "Put Bottom Flex Pipe On", media: [], inputs: []}] }
        ],
        "Fish Cleaning Station": [
            { category: "Operations", tasks: [{text: "Turn power ON", media: [], inputs: []}, {text: "Put spray hoses ON", media: [], inputs: []}] } 
        ]
    }
};

const defaultThemes = {
    "Forest Ranger": { primary: "#2c5e3b", hover: "#3b7d4f", bg: "#e9ecef", card: "#ffffff", text: "#333333" },
    "Midnight Ops": { primary: "#3498db", hover: "#2980b9", bg: "#121212", card: "#1e1e1e", text: "#e0e0e0" },
    "High Vis (Sunlight)": { primary: "#d35400", hover: "#e67e22", bg: "#fdfbf7", card: "#ffffff", text: "#2c3e50" }
};

function migrateData(data) {
    if(!data) return defaultParkData;
    for (let s in data) {
        for (let a in data[s]) {
            data[s][a].forEach(cat => {
                if (cat.tasks) {
                    cat.tasks.forEach((t, i) => {
                        if (typeof t === 'string') { cat.tasks[i] = { text: t, media: [], inputs: [] }; t = cat.tasks[i]; }
                        if (!t.media) t.media = [];
                        if (!t.inputs) t.inputs = [];
                        if (t.image) { t.media.push({ type: 'image', url: t.image }); delete t.image; }
                        if (t.video) { t.media.push({ type: 'video', url: t.video }); delete t.video; }
                    });
                }
            });
        }
    } return data;
}

// Extremely safe boot sequence to prevent crashes if memory gets corrupted
let rawData = null, themesData = null;
try {
    rawData = JSON.parse(localStorage.getItem('parkData'));
    themesData = JSON.parse(localStorage.getItem('themes'));
} catch(e) {
    console.warn("Storage parsing error, reverting to defaults.");
}

let parkData = rawData ? migrateData(rawData) : JSON.parse(JSON.stringify(defaultParkData));
let themes = themesData || JSON.parse(JSON.stringify(defaultThemes));
let activeTheme = localStorage.getItem('activeTheme') || "Forest Ranger";
let currentSeason = 'fall';
let areas = Object.keys(parkData.fall || {});
let currentArea = areas[0];

function safeSave() {
    try {
        localStorage.setItem('parkData', JSON.stringify(parkData));
        localStorage.setItem('themes', JSON.stringify(themes));
        localStorage.setItem('activeTheme', activeTheme);
    } catch(e) {
        console.error("Storage failed to save: ", e);
    }
}

// ==========================================
// 2. CORE RENDERING ENGINE
// ==========================================
const areaTabsContainer = document.getElementById('area-tabs');
const taskContentContainer = document.getElementById('task-content');

function applyTheme(tName) {
    const t = themes[tName]; if (!t) return;
    document.documentElement.style.setProperty('--primary-color', t.primary);
    document.documentElement.style.setProperty('--primary-hover', t.hover);
    document.documentElement.style.setProperty('--bg-color', t.bg);
    document.documentElement.style.setProperty('--card-bg', t.card);
    document.documentElement.style.setProperty('--text-color', t.text);
    activeTheme = tName; 
    safeSave();
}

function openLightbox(url, type) {
    const mediaImg = document.getElementById('media-img');
    const mediaVid = document.getElementById('media-vid');
    mediaImg.style.display = 'none'; mediaVid.style.display = 'none';
    if(type === 'image') { mediaImg.src = url; mediaImg.style.display = 'block'; }
    if(type === 'video') { mediaVid.src = url; mediaVid.style.display = 'block'; mediaVid.play(); }
    document.getElementById('media-modal').classList.remove('hidden');
}

function closeLightbox() { 
    document.getElementById('media-modal').classList.add('hidden'); 
    document.getElementById('media-vid').pause(); 
    document.getElementById('media-img').src = ''; 
    document.getElementById('media-vid').src = ''; 
}

function generateAreaDOM(season, area, forPrint = false, printBlank = false) {
    const container = document.createElement('div');
    container.id = `rendered-area-${area.replace(/\s+/g, '-')}`;
    
    let innerContent = "";
    let yearPrefix = '';
    
    if (forPrint) {
        const leaveYearBlank = document.getElementById('print-blank-year-cb') && document.getElementById('print-blank-year-cb').checked;
        if (leaveYearBlank) { yearPrefix = 'Year: _______________ '; } 
        else { yearPrefix = document.getElementById('print-year-input').value ? `${document.getElementById('print-year-input').value} ` : ''; }
    }
    
    const fullTitle = `${yearPrefix}${season.toUpperCase()} - ${area}`;
    if (!forPrint) { innerContent += `<h2 class="area-title">${fullTitle}</h2>`; }

    const seasonData = parkData[season][area] || [];
    const safeArea = area.replace(/'/g, "\\'");
    
    seasonData.forEach((section, sectionIdx) => {
        if (section.category === "WARNING") {
            innerContent += `<div class="${section.isCritical ? 'warning-box critical-warning' : 'warning-box'}">${section.warningText}</div>`;
            return; 
        }

        innerContent += `<div class="task-section"><h3>${section.category}</h3><div class="table-responsive">`;
        let columnsToRender = section.columns ? section.columns : ["Action"];
        let tableHtml = `<table><thead><tr><th>Item</th>`;
        
        columnsToRender.forEach((col, colIdx) => { 
            tableHtml += `<th class="input-cell">${col} (Date) <br><button class="fill-btn no-print fill-trigger" data-idx="${colIdx * 2}" data-type="Date">⬇️ Fill</button></th>
                          <th class="input-cell">Initials <br><button class="fill-btn no-print fill-trigger" data-idx="${(colIdx * 2) + 1}" data-type="Initials">⬇️ Fill</button></th>`; 
        });
        tableHtml += `</tr></thead><tbody>`;

        section.tasks.forEach((task, taskIdx) => {
            if (!task.inputs) task.inputs = [];
            let mediaHtml = '';
            if (task.media && task.media.length > 0) {
                task.media.forEach(m => {
                    if (m.url.trim() !== '') {
                        if (m.type === 'image') mediaHtml += `<img src="${m.url}" class="task-media lightbox-trigger" data-type="image" data-url="${m.url}" alt="Photo">`;
                        if (m.type === 'video') mediaHtml += `<video src="${m.url}" class="task-media no-print lightbox-trigger" data-type="video" data-url="${m.url}"></video><span class="video-print-text">📹 Video Instructions Available</span>`;
                    }
                });
            }

            tableHtml += `<tr><td><div class="task-content-wrapper"><div class="task-text">${task.text}</div>${mediaHtml ? `<div class="task-media-container">${mediaHtml}</div>` : ''}</div></td>`;
                
            let inputIdx = 0;
            columnsToRender.forEach(() => {
                if (forPrint) {
                    let dateVal = (!printBlank && task.inputs[inputIdx]) ? task.inputs[inputIdx] : '';
                    let initVal = (!printBlank && task.inputs[inputIdx+1]) ? task.inputs[inputIdx+1] : '';
                    tableHtml += `<td class="input-cell"><div class="print-blank-line">${dateVal}</div></td><td class="input-cell"><div class="print-blank-line">${initVal}</div></td>`;
                } else {
                    let dateVal = task.inputs[inputIdx] || '';
                    let initVal = task.inputs[inputIdx+1] || '';
                    tableHtml += `<td class="input-cell"><input type="date" class="persistent-input" data-season="${season}" data-area="${safeArea}" data-sec="${sectionIdx}" data-task="${taskIdx}" data-idx="${inputIdx}" value="${dateVal}"></td>
                                  <td class="input-cell"><input type="text" maxlength="3" class="persistent-input" data-season="${season}" data-area="${safeArea}" data-sec="${sectionIdx}" data-task="${taskIdx}" data-idx="${inputIdx+1}" value="${initVal}"></td>`;
                }
                inputIdx += 2;
            });
            tableHtml += `</tr>`;
        });
        tableHtml += `</tbody></table></div></div>`;
        innerContent += tableHtml;
    });

    if (forPrint) {
        container.className = 'print-area-block';
        container.innerHTML = `<h2 class="area-title" style="margin-bottom: 10px; padding-bottom: 5px; border-bottom: 2px solid black;">${fullTitle}</h2>` + innerContent;
    } else {
        container.innerHTML = innerContent;
    }
    return container;
}

function renderAreaTabs() {
    areaTabsContainer.innerHTML = ''; areas = Object.keys(parkData[currentSeason] || {});
    if (!areas.includes(currentArea) && areas.length > 0) currentArea = areas[0];
    areas.forEach(area => {
        const btn = document.createElement('button'); btn.className = `area-tab ${area === currentArea ? 'active' : ''}`; btn.textContent = area;
        btn.onclick = () => { currentArea = area; renderAreaTabs(); renderTasks(); };
        areaTabsContainer.appendChild(btn);
    });
}

function renderTasks() {
    if (!currentArea || !parkData[currentSeason][currentArea]) { taskContentContainer.innerHTML = '<p>No data available.</p>'; return; }
    taskContentContainer.innerHTML = '';
    taskContentContainer.appendChild(generateAreaDOM(currentSeason, currentArea));
}

let activeFillBtn = null; let activeFillIndex = 0;
function openFillModal(btn, inputIndex, type) {
    activeFillBtn = btn; activeFillIndex = inputIndex;
    document.getElementById('fill-modal-title').innerText = `Fill entire column:`;
    const container = document.getElementById('fill-input-container');
    if (type === 'Date') { container.innerHTML = `<input type="date" id="fill-val-input">`; } 
    else { container.innerHTML = `<input type="text" id="fill-val-input" placeholder="Enter initials">`; }
    document.getElementById('fill-modal').classList.remove('hidden');
    setTimeout(() => document.getElementById('fill-val-input').focus(), 100);
}

// ==========================================
// 3. SECURE EVENT DELEGATION
// ==========================================
document.body.addEventListener('click', (e) => {
    let btn = e.target.closest('.lightbox-trigger');
    if (btn) return openLightbox(btn.getAttribute('data-url'), btn.getAttribute('data-type'));
    
    btn = e.target.closest('.fill-trigger');
    if (btn) return openFillModal(btn, parseInt(btn.getAttribute('data-idx')), btn.getAttribute('data-type'));
    
    if (e.target.id === 'select-all-print-btn') {
        const checkboxes = document.querySelectorAll('.print-area-checkbox');
        const allChecked = Array.from(checkboxes).every(cb => cb.checked);
        checkboxes.forEach(cb => cb.checked = !allChecked);
        e.target.innerText = allChecked ? "Select All" : "Deselect All";
    }
    
    btn = e.target.closest('.delete-cat-btn');
    if (btn) return deleteCategory(parseInt(btn.getAttribute('data-cat')));
    
    btn = e.target.closest('.move-up-cat');
    if (btn) return moveCategoryUp(parseInt(btn.getAttribute('data-cat')));

    btn = e.target.closest('.move-down-cat');
    if (btn) return moveCategoryDown(parseInt(btn.getAttribute('data-cat')));

    btn = e.target.closest('.add-task-btn');
    if (btn) return addTask(parseInt(btn.getAttribute('data-cat')));

    btn = e.target.closest('.delete-task-btn');
    if (btn) return deleteTask(parseInt(btn.getAttribute('data-cat')), parseInt(btn.getAttribute('data-task')));

    btn = e.target.closest('.add-media-btn');
    if (btn) return addMedia(parseInt(btn.getAttribute('data-cat')), parseInt(btn.getAttribute('data-task')));

    btn = e.target.closest('.delete-media-btn');
    if (btn) return deleteMedia(parseInt(btn.getAttribute('data-cat')), parseInt(btn.getAttribute('data-task')), parseInt(btn.getAttribute('data-media')));

    btn = e.target.closest('.edit-theme-btn');
    if (btn) { e.stopPropagation(); return openThemeEditor(btn.getAttribute('data-theme')); }

    btn = e.target.closest('.delete-theme-btn');
    if (btn) { e.stopPropagation(); return deleteTheme(btn.getAttribute('data-theme')); }
});

document.body.addEventListener('input', (e) => {
    if (e.target.classList.contains('persistent-input')) {
        const s = e.target.getAttribute('data-season');
        const a = e.target.getAttribute('data-area');
        const sec = parseInt(e.target.getAttribute('data-sec'));
        const t = parseInt(e.target.getAttribute('data-task'));
        const idx = parseInt(e.target.getAttribute('data-idx'));
        
        if (!parkData[s][a][sec].tasks[t].inputs) parkData[s][a][sec].tasks[t].inputs = [];
        parkData[s][a][sec].tasks[t].inputs[idx] = e.target.value;
        safeSave();
    }
});

document.getElementById('cancel-fill-btn').onclick = () => document.getElementById('fill-modal').classList.add('hidden');
document.getElementById('confirm-fill-btn').onclick = () => {
    const val = document.getElementById('fill-val-input').value;
    if (val !== '') {
        const rows = activeFillBtn.closest('table').querySelectorAll('tbody tr');
        rows.forEach(row => { 
            const inputs = row.querySelectorAll('input'); 
            if (inputs[activeFillIndex]) {
                inputs[activeFillIndex].value = val;
                inputs[activeFillIndex].dispatchEvent(new Event('input', { bubbles: true })); // Triggers the memory save!
            }
        });
    }
    document.getElementById('fill-modal').classList.add('hidden');
};

document.getElementById('close-media-btn').onclick = closeLightbox;
document.getElementById('media-modal').onclick = (e) => { if (e.target === document.getElementById('media-modal')) closeLightbox(); };

document.querySelectorAll('.season-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        document.querySelectorAll('.season-tab').forEach(t => t.classList.remove('active')); e.target.classList.add('active');
        currentSeason = e.target.getAttribute('data-season'); renderAreaTabs(); renderTasks();
    });
});

// ==========================================
// 4. COMPACT PRINT ENGINE & EXCEL EXPORT
// ==========================================
const printModal = document.getElementById('print-modal');
const blankYearCb = document.getElementById('print-blank-year-cb');
const yearInput = document.getElementById('print-year-input');

if(blankYearCb) {
    blankYearCb.addEventListener('change', (e) => {
        yearInput.disabled = e.target.checked;
        if(e.target.checked) yearInput.style.opacity = '0.5';
        else yearInput.style.opacity = '1';
    });
}

document.getElementById('open-print-modal-btn').addEventListener('click', () => {
    document.getElementById('print-season-label').innerText = currentSeason.toUpperCase();
    yearInput.value = new Date().getFullYear();
    yearInput.disabled = false;
    yearInput.style.opacity = '1';
    if(blankYearCb) blankYearCb.checked = false;
    
    const container = document.getElementById('print-checkbox-container'); container.innerHTML = '';
    Object.keys(parkData[currentSeason] || {}).forEach(area => {
        container.innerHTML += `<label style="font-size: 1.1rem; cursor: pointer;"><input type="checkbox" class="print-area-checkbox" value="${area}" style="transform: scale(1.5); margin-right: 10px;"> ${area}</label>`;
    });
    printModal.classList.remove('hidden');
});

document.getElementById('close-print-modal-btn').addEventListener('click', () => printModal.classList.add('hidden'));

document.getElementById('execute-print-btn').addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('.print-area-checkbox:checked');
    if (checkboxes.length === 0) return alert("Select at least one area to print.");
    const selectedAreas = Array.from(checkboxes).map(cb => cb.value);
    const printContainer = document.getElementById('print-container'); printContainer.innerHTML = '';
    
    const printBlank = document.getElementById('print-blank-cb').checked;
    selectedAreas.forEach(area => { printContainer.appendChild(generateAreaDOM(currentSeason, area, true, printBlank)); });
    printModal.classList.add('hidden'); setTimeout(() => { window.print(); }, 200); 
});

document.getElementById('execute-excel-export-btn').addEventListener('click', async () => {
    saveCurrentEditorState(); 
    const year = document.getElementById('export-year-input').value || new Date().getFullYear();
    const selectedAreas = Array.from(document.querySelectorAll('.export-area-cb:checked')).map(cb => cb.value);

    if (selectedAreas.length === 0) return showCustomAlert("Select at least one area to export.");

    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Park Operations Tracker';

    ['fall', 'spring'].forEach(season => {
        selectedAreas.forEach(area => {
            if (parkData[season] && parkData[season][area]) {
                let sheetName = `${season.substring(0,1).toUpperCase()} - ${area}`.substring(0, 31);
                const ws = workbook.addWorksheet(sheetName);

                ws.columns = [
                    { width: 45, style: { alignment: { wrapText: true, vertical: 'middle' } } },
                    { width: 15, style: { alignment: { wrapText: true, vertical: 'middle' } } },
                    { width: 15, style: { alignment: { wrapText: true, vertical: 'middle' } } },
                    { width: 15, style: { alignment: { wrapText: true, vertical: 'middle' } } },
                    { width: 15, style: { alignment: { wrapText: true, vertical: 'middle' } } },
                    { width: 15, style: { alignment: { wrapText: true, vertical: 'middle' } } },
                    { width: 15, style: { alignment: { wrapText: true, vertical: 'middle' } } }
                ];

                let rowIndex = 1;
                ws.mergeCells(`A${rowIndex}:C${rowIndex}`);
                let titleRow = ws.getRow(rowIndex);
                titleRow.getCell(1).value = `${year} ${season.toUpperCase()} - ${area}`;
                titleRow.getCell(1).font = { size: 16, bold: true };
                rowIndex += 2;

                parkData[season][area].forEach(section => {
                    if (section.category === "WARNING") {
                        ws.mergeCells(`A${rowIndex}:C${rowIndex}`);
                        let wRow = ws.getRow(rowIndex);
                        wRow.getCell(1).value = `WARNING: ${section.warningText}`;
                        wRow.getCell(1).font = { color: { argb: 'FFFF0000' }, bold: true }; 
                        rowIndex += 2;
                        return;
                    }

                    let secRow = ws.getRow(rowIndex);
                    secRow.getCell(1).value = section.category;
                    secRow.getCell(1).font = { size: 12, bold: true };
                    secRow.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFEEEEEE' } }; 
                    rowIndex++;

                    let cols = section.columns || ["Action"];
                    let headerRow = ws.getRow(rowIndex);
                    
                    headerRow.getCell(1).value = "Item";
                    headerRow.getCell(1).font = { bold: true };
                    headerRow.getCell(1).border = { bottom: { style: 'thin' } };

                    let colIndex = 2;
                    cols.forEach((col, idx) => {
                        headerRow.getCell(colIndex).value = `${col} (Date)`;
                        headerRow.getCell(colIndex).font = { bold: true };
                        headerRow.getCell(colIndex).border = { bottom: { style: 'thin' } };
                        colIndex++;
                        
                        headerRow.getCell(colIndex).value = "Initials";
                        headerRow.getCell(colIndex).font = { bold: true };
                        let borderConfig = { bottom: { style: 'thin' } };
                        if (idx < cols.length - 1) { borderConfig.right = { style: 'thin' }; }
                        headerRow.getCell(colIndex).border = borderConfig;
                        colIndex++;
                    });
                    rowIndex++;

                    section.tasks.forEach(task => {
                        let taskRow = ws.getRow(rowIndex);
                        let taskText = task.text;
                        
                        let hasMedia = task.media && task.media.length > 0 && task.media.some(m => m.url.trim() !== '');
                        if (hasMedia) taskText += " [Media attached on web tracker]";

                        taskRow.getCell(1).value = taskText;

                        let inputTracker = 0;
                        for(let i = 2; i < colIndex; i++){
                            let tBorder = { bottom: { style: 'dotted' } };
                            if (i % 2 !== 0 && i < colIndex - 1) { tBorder.right = { style: 'thin' }; }
                            taskRow.getCell(i).border = tBorder;
                            
                            if (task.inputs && task.inputs[inputTracker]) { taskRow.getCell(i).value = task.inputs[inputTracker]; }
                            inputTracker++;
                        }
                        rowIndex++;
                    });
                    rowIndex++; 
                });
            }
        });
    });

    let filename = `${year}_`;
    let totalKeys = new Set([...Object.keys(parkData.fall || {}), ...Object.keys(parkData.spring || {})]).size;
    if (selectedAreas.length === totalKeys) filename += 'WLSP_Checklists';
    else filename += selectedAreas.join('_').replace(/\s+/g, '') + '_Checklists';
    filename += '.xlsx';

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    saveAs(blob, filename);
});

// ==========================================
// 5. EDIT MODE / TABS
// ==========================================
const viewMode = document.getElementById('view-mode'); const editMode = document.getElementById('edit-mode'); const toggleEditBtn = document.getElementById('toggle-edit-btn');
toggleEditBtn.addEventListener('click', () => { 
    viewMode.classList.add('hidden'); editMode.classList.remove('hidden'); toggleEditBtn.classList.add('hidden'); 
    populateEditorAreaSelect(); renderDataEditor(); renderThemeList(); renderExportAreaCheckboxes();
});
document.getElementById('exit-edit-btn').addEventListener('click', () => { 
    saveCurrentEditorState(); 
    editMode.classList.add('hidden'); viewMode.classList.remove('hidden'); toggleEditBtn.classList.remove('hidden'); 
    renderAreaTabs(); renderTasks(); 
});
document.querySelectorAll('.settings-tab').forEach(tab => { 
    tab.addEventListener('click', (e) => { 
        document.querySelectorAll('.settings-tab').forEach(t => t.classList.remove('active')); 
        document.querySelectorAll('.settings-pane').forEach(p => p.classList.add('hidden')); 
        e.target.classList.add('active'); document.getElementById(e.target.getAttribute('data-target')).classList.remove('hidden'); 
    }); 
});

// ==========================================
// 6. DATA EDITOR (CATEGORIES / TASKS / AREAS)
// ==========================================
const editorSeasonSelect = document.getElementById('editor-season-select'); const editorAreaSelect = document.getElementById('editor-area-select'); const categoryEditorContainer = document.getElementById('category-editor-container'); const addWarningBtn = document.getElementById('add-warning-btn');
function populateEditorAreaSelect() { editorAreaSelect.innerHTML = ''; Object.keys(parkData[editorSeasonSelect.value] || {}).forEach(area => { editorAreaSelect.innerHTML += `<option value="${area}">${area}</option>`; }); }
editorSeasonSelect.addEventListener('change', () => { populateEditorAreaSelect(); renderDataEditor(); }); editorAreaSelect.addEventListener('change', renderDataEditor);

function showCustomAlert(msg) {
    document.getElementById('custom-alert-text').innerText = msg;
    document.getElementById('custom-alert-modal').classList.remove('hidden');
}
document.getElementById('close-alert-btn').onclick = () => document.getElementById('custom-alert-modal').classList.add('hidden');

const addAreaBtn = document.getElementById('add-area-btn');
const renameAreaBtn = document.getElementById('rename-area-btn');
const deleteAreaBtn = document.getElementById('delete-area-btn');
const moveAreaUpBtn = document.getElementById('move-area-up-btn');
const moveAreaDownBtn = document.getElementById('move-area-down-btn');
let pendingAreaAction = null; 

if(addAreaBtn) {
    addAreaBtn.addEventListener('click', () => {
        saveCurrentEditorState();
        pendingAreaAction = 'add';
        document.getElementById('area-input-title').innerText = "Add New Area";
        document.getElementById('area-input-desc').innerText = "Enter a name for the new area:";
        document.getElementById('area-input-field').value = "";
        document.getElementById('area-input-modal').classList.remove('hidden');
        setTimeout(() => document.getElementById('area-input-field').focus(), 100);
    });
}

if(renameAreaBtn) {
    renameAreaBtn.addEventListener('click', () => {
        saveCurrentEditorState();
        const oldArea = editorAreaSelect.value;
        if (!oldArea) return;
        pendingAreaAction = 'rename';
        document.getElementById('area-input-title').innerText = "Rename Area";
        document.getElementById('area-input-desc').innerText = `Enter a new name for "${oldArea}":`;
        document.getElementById('area-input-field').value = oldArea;
        document.getElementById('area-input-modal').classList.remove('hidden');
        setTimeout(() => document.getElementById('area-input-field').focus(), 100);
    });
}

if (moveAreaUpBtn) {
    moveAreaUpBtn.addEventListener('click', () => {
        saveCurrentEditorState();
        const s = editorSeasonSelect.value;
        const a = editorAreaSelect.value;
        if (!a) return;
        
        const keys = Object.keys(parkData[s]);
        const idx = keys.indexOf(a);
        if (idx > 0) {
            [keys[idx - 1], keys[idx]] = [keys[idx], keys[idx - 1]];
            const newData = {};
            keys.forEach(k => newData[k] = parkData[s][k]);
            parkData[s] = newData;
            safeSave();
            populateEditorAreaSelect();
            editorAreaSelect.value = a;
            renderDataEditor();
        }
    });
}

if (moveAreaDownBtn) {
    moveAreaDownBtn.addEventListener('click', () => {
        saveCurrentEditorState();
        const s = editorSeasonSelect.value;
        const a = editorAreaSelect.value;
        if (!a) return;
        
        const keys = Object.keys(parkData[s]);
        const idx = keys.indexOf(a);
        if (idx < keys.length - 1) {
            [keys[idx], keys[idx + 1]] = [keys[idx + 1], keys[idx]];
            const newData = {};
            keys.forEach(k => newData[k] = parkData[s][k]);
            parkData[s] = newData;
            safeSave();
            populateEditorAreaSelect();
            editorAreaSelect.value = a;
            renderDataEditor();
        }
    });
}

document.getElementById('cancel-area-input-btn').onclick = () => document.getElementById('area-input-modal').classList.add('hidden');
document.getElementById('confirm-area-input-btn').onclick = () => {
    const s = editorSeasonSelect.value;
    const newArea = document.getElementById('area-input-field').value.trim();
    const oldArea = editorAreaSelect.value;

    if (!newArea) return;

    if (pendingAreaAction === 'add') {
        if (parkData[s][newArea]) return showCustomAlert("An area with this name already exists in this season!");
        parkData[s][newArea] = [];
        populateEditorAreaSelect(); editorAreaSelect.value = newArea; renderDataEditor();
    } else if (pendingAreaAction === 'rename') {
        if (newArea === oldArea) { document.getElementById('area-input-modal').classList.add('hidden'); return; }
        if (parkData[s][newArea]) return showCustomAlert("An area with this name already exists!");
        const newData = {};
        for (let key in parkData[s]) { if (key === oldArea) newData[newArea] = parkData[s][key]; else newData[key] = parkData[s][key]; }
        parkData[s] = newData;
        populateEditorAreaSelect(); editorAreaSelect.value = newArea; renderDataEditor();
    }
    document.getElementById('area-input-modal').classList.add('hidden');
};

if(deleteAreaBtn) {
    deleteAreaBtn.addEventListener('click', () => {
        const s = editorSeasonSelect.value; const a = editorAreaSelect.value; if (!a) return;
        document.getElementById('area-delete-desc').innerText = `Are you sure you want to permanently delete "${a}"? This will remove all of its checklists for the ${s.toUpperCase()} season.`;
        document.getElementById('area-delete-modal').classList.remove('hidden');
    });
}

document.getElementById('cancel-area-delete-btn').onclick = () => document.getElementById('area-delete-modal').classList.add('hidden');
document.getElementById('confirm-area-delete-btn').onclick = () => {
    const s = editorSeasonSelect.value; const a = editorAreaSelect.value;
    delete parkData[s][a];
    populateEditorAreaSelect(); renderDataEditor();
    document.getElementById('area-delete-modal').classList.add('hidden');
};

function renderDataEditor() {
    const s = editorSeasonSelect.value; const a = editorAreaSelect.value; categoryEditorContainer.innerHTML = ''; if (!parkData[s] || !parkData[s][a]) return;
    if (parkData[s][a].some(sec => sec.category === "WARNING")) { addWarningBtn.classList.add('hidden'); } else { addWarningBtn.classList.remove('hidden'); }

    parkData[s][a].forEach((section, catIndex) => {
        const block = document.createElement('div'); block.className = 'edit-category-block';
        if (section.category === "WARNING") {
            block.innerHTML = `<div class="edit-category-header"><input type="text" value="WARNING" readonly style="background: rgba(0,0,0,0.05);"><div class="category-controls"><button class="btn-danger delete-cat-btn" data-cat="${catIndex}">Remove</button></div></div><textarea class="warning-input" data-cat="${catIndex}" rows="3">${section.warningText}</textarea><label style="display:block; margin-top:10px;"><input type="checkbox" class="warning-crit" data-cat="${catIndex}" ${section.isCritical ? 'checked' : ''}> Make Critical</label>`;
            categoryEditorContainer.appendChild(block); return;
        }

        let upBtn = catIndex > 0 ? `<button class="move-btn move-up-cat" data-cat="${catIndex}">↑</button>` : ''; 
        let downBtn = catIndex < parkData[s][a].length - 1 ? `<button class="move-btn move-down-cat" data-cat="${catIndex}">↓</button>` : '';
        let html = `<div class="edit-category-header"><input type="text" value="${section.category}" class="cat-name-input" data-cat="${catIndex}"><div class="category-controls">${upBtn}${downBtn}<button class="btn-danger delete-cat-btn" data-cat="${catIndex}">Delete Section</button></div></div><div class="task-list">`;

        section.tasks.forEach((task, taskIndex) => {
            html += `<div class="edit-task-row"><div class="edit-task-inputs"><input type="text" value="${task.text}" class="task-text-input" data-cat="${catIndex}" data-task="${taskIndex}"><div class="media-list">`;
            task.media.forEach((m, mediaIndex) => { html += `<div class="media-input-row"><select class="media-type-select" data-cat="${catIndex}" data-task="${taskIndex}" data-media="${mediaIndex}"><option value="image" ${m.type === 'image' ? 'selected' : ''}>Image</option><option value="video" ${m.type === 'video' ? 'selected' : ''}>Video</option></select><input type="text" value="${m.url}" placeholder="filename (e.g. photo.jpg)" class="media-url-input" data-cat="${catIndex}" data-task="${taskIndex}" data-media="${mediaIndex}"><button class="btn-danger delete-media-btn" data-cat="${catIndex}" data-task="${taskIndex}" data-media="${mediaIndex}">X</button></div>`; });
            html += `</div><button class="btn-outline add-media-btn" style="align-self:flex-start; margin-top:5px; padding: 4px 8px;" data-cat="${catIndex}" data-task="${taskIndex}">+ Add Photo/Video</button></div><button class="btn-danger delete-task-btn" data-cat="${catIndex}" data-task="${taskIndex}">Delete Task</button></div>`;
        });
        html += `</div><button class="btn-primary add-task-btn" style="margin-top:10px;" data-cat="${catIndex}">+ Add Task</button>`; block.innerHTML = html; categoryEditorContainer.appendChild(block);
    });
}

function moveCategoryUp(c) { if (c === 0) return; saveCurrentEditorState(); const arr = parkData[editorSeasonSelect.value][editorAreaSelect.value]; [arr[c-1], arr[c]] = [arr[c], arr[c-1]]; renderDataEditor(); }
function moveCategoryDown(c) { saveCurrentEditorState(); const arr = parkData[editorSeasonSelect.value][editorAreaSelect.value]; if (c === arr.length - 1) return; [arr[c], arr[c+1]] = [arr[c+1], arr[c]]; renderDataEditor(); }
function deleteCategory(c) { saveCurrentEditorState(); parkData[editorSeasonSelect.value][editorAreaSelect.value].splice(c, 1); renderDataEditor(); }
function addTask(c) { saveCurrentEditorState(); parkData[editorSeasonSelect.value][editorAreaSelect.value][c].tasks.push({text: "New Task", media: [], inputs: []}); renderDataEditor(); }
function deleteTask(c, t) { saveCurrentEditorState(); parkData[editorSeasonSelect.value][editorAreaSelect.value][c].tasks.splice(t, 1); renderDataEditor(); }
function addMedia(c, t) { saveCurrentEditorState(); parkData[editorSeasonSelect.value][editorAreaSelect.value][c].tasks[t].media.push({type: 'image', url: ''}); renderDataEditor(); }
function deleteMedia(c, t, m) { saveCurrentEditorState(); parkData[editorSeasonSelect.value][editorAreaSelect.value][c].tasks[t].media.splice(m, 1); renderDataEditor(); }
addWarningBtn.addEventListener('click', () => { saveCurrentEditorState(); parkData[editorSeasonSelect.value][editorAreaSelect.value].unshift({ category: "WARNING", warningText: "NEW WARNING", isCritical: false }); renderDataEditor(); });
document.getElementById('add-category-btn').addEventListener('click', () => { saveCurrentEditorState(); parkData[editorSeasonSelect.value][editorAreaSelect.value].push({ category: "New Section", tasks: [] }); renderDataEditor(); });

function saveCurrentEditorState() {
    const s = editorSeasonSelect.value; const a = editorAreaSelect.value; if (!parkData[s] || !parkData[s][a]) return;
    document.querySelectorAll('.warning-input').forEach(inp => { const c = inp.getAttribute('data-cat'); parkData[s][a][c].warningText = inp.value; parkData[s][a][c].isCritical = document.querySelector(`.warning-crit[data-cat="${c}"]`).checked; });
    document.querySelectorAll('.cat-name-input').forEach(inp => { parkData[s][a][inp.getAttribute('data-cat')].category = inp.value; });
    document.querySelectorAll('.task-text-input').forEach(inp => { parkData[s][a][inp.getAttribute('data-cat')].tasks[inp.getAttribute('data-task')].text = inp.value; });
    document.querySelectorAll('.media-url-input').forEach(inp => {
        const c = inp.getAttribute('data-cat'); const t = inp.getAttribute('data-task'); const m = inp.getAttribute('data-media');
        parkData[s][a][c].tasks[t].media[m] = { type: document.querySelector(`.media-type-select[data-cat="${c}"][data-task="${t}"][data-media="${m}"]`).value, url: inp.value };
    });
    safeSave();
}

// ==========================================
// 7. THEME ENGINE
// ==========================================
const themeList = document.getElementById('theme-list'); const themeFormArea = document.getElementById('theme-form-area'); let editingThemeName = null;
function renderThemeList() { themeList.innerHTML = ''; Object.keys(themes).forEach(tName => { const li = document.createElement('li'); if (tName === activeTheme) li.className = 'active-theme'; li.onclick = () => { applyTheme(tName); renderThemeList(); }; li.innerHTML = `<span>${tName} ${tName === activeTheme ? '(Active)' : ''}</span><div class="theme-actions"><button class="btn-outline edit-theme-btn" data-theme="${tName}" style="color:#555; border-color:#aaa; padding: 4px 8px;">Edit</button><button class="btn-danger delete-theme-btn" data-theme="${tName}">X</button></div>`; themeList.appendChild(li); }); }

function deleteTheme(tName) { if (Object.keys(themes).length <= 1) return showCustomAlert("Cannot delete last theme!"); delete themes[tName]; if (activeTheme === tName) applyTheme(Object.keys(themes)[0]); safeSave(); renderThemeList(); themeFormArea.style.display = 'none'; }
function openThemeEditor(tName) { editingThemeName = tName; const t = themes[tName]; document.getElementById('theme-form-title').innerText = `Editing: ${tName}`; document.getElementById('theme-name-input').value = tName; document.getElementById('theme-primary-input').value = t.primary; document.getElementById('theme-hover-input').value = t.hover; document.getElementById('theme-bg-input').value = t.bg; document.getElementById('theme-card-input').value = t.card || "#ffffff"; document.getElementById('theme-text-input').value = t.text; themeFormArea.style.display = 'block'; }

document.getElementById('add-theme-btn').addEventListener('click', () => { editingThemeName = null; document.getElementById('theme-form-title').innerText = "New Theme"; document.getElementById('theme-name-input').value = ""; document.getElementById('theme-primary-input').value = "#4a90e2"; document.getElementById('theme-hover-input').value = "#357abd"; document.getElementById('theme-bg-input').value = "#f0f2f5"; document.getElementById('theme-card-input').value = "#ffffff"; document.getElementById('theme-text-input').value = "#333333"; themeFormArea.style.display = 'block'; });
document.getElementById('cancel-theme-btn').addEventListener('click', () => themeFormArea.style.display = 'none');
document.getElementById('save-theme-btn').addEventListener('click', () => {
    const newName = document.getElementById('theme-name-input').value; if (!newName.trim()) return showCustomAlert("Needs a name");
    themes[newName] = { primary: document.getElementById('theme-primary-input').value, hover: document.getElementById('theme-hover-input').value, bg: document.getElementById('theme-bg-input').value, card: document.getElementById('theme-card-input').value, text: document.getElementById('theme-text-input').value };
    if (editingThemeName && editingThemeName !== newName && themes[editingThemeName]) delete themes[editingThemeName];
    safeSave(); applyTheme(newName); renderThemeList(); themeFormArea.style.display = 'none';
});

// ==========================================
// 8. BACKUP & FACTORY RESET
// ==========================================
function renderExportAreaCheckboxes() {
    const container = document.getElementById('export-areas-container'); container.innerHTML = '';
    let allKeys = new Set([...Object.keys(parkData.fall || {}), ...Object.keys(parkData.spring || {})]);
    allKeys.forEach(area => { container.innerHTML += `<label style="display:block; margin-bottom:5px; cursor:pointer;"><input type="checkbox" class="export-area-cb" value="${area}" checked style="transform: scale(1.2); margin-right: 8px;"> ${area}</label>`; });
    document.getElementById('export-year-input').value = new Date().getFullYear();
}
document.getElementById('export-checklists-cb').addEventListener('change', (e) => { document.getElementById('export-areas-container').style.display = e.target.checked ? 'block' : 'none'; });

document.getElementById('execute-export-btn').addEventListener('click', () => {
    saveCurrentEditorState(); 
    const year = document.getElementById('export-year-input').value || new Date().getFullYear();
    const exportThemes = document.getElementById('export-themes-cb').checked;
    const exportChecklists = document.getElementById('export-checklists-cb').checked;
    const selectedAreas = Array.from(document.querySelectorAll('.export-area-cb:checked')).map(cb => cb.value);

    if (!exportThemes && (!exportChecklists || selectedAreas.length === 0)) return showCustomAlert("Select something to export.");

    let exportObj = { type: "WLSP_Backup", exportDate: new Date().toISOString() };
    if (exportThemes) { exportObj.themes = themes; exportObj.activeTheme = activeTheme; }
    if (exportChecklists) {
        exportObj.parkData = { fall: {}, spring: {} };
        selectedAreas.forEach(area => {
            if (parkData.fall && parkData.fall[area]) exportObj.parkData.fall[area] = parkData.fall[area];
            if (parkData.spring && parkData.spring[area]) exportObj.parkData.spring[area] = parkData.spring[area];
        });
    }

    let filename = `${year}_`;
    if (exportChecklists) {
        let totalKeys = new Set([...Object.keys(parkData.fall || {}), ...Object.keys(parkData.spring || {})]).size;
        if (selectedAreas.length === totalKeys) filename += 'WLSP';
        else filename += selectedAreas.join('_').replace(/\s+/g, '');
    } else { filename += 'Themes_Settings'; }
    filename += '.json';

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, 2));
    const anchor = document.createElement('a'); anchor.setAttribute("href", dataStr); anchor.setAttribute("download", filename);
    document.body.appendChild(anchor); anchor.click(); anchor.remove();
});

document.getElementById('execute-import-btn').addEventListener('click', () => {
    const fileInput = document.getElementById('import-file-input');
    if (fileInput.files.length === 0) return showCustomAlert("Please select a JSON file to import.");
    const mode = document.querySelector('input[name="import-mode"]:checked').value;
    const file = fileInput.files[0]; const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const importedRaw = JSON.parse(e.target.result);
            if (importedRaw.type !== "WLSP_Backup" && !importedRaw.parkData) return showCustomAlert("Invalid Backup File Format.");
            
            const imported = { parkData: importedRaw.parkData ? migrateData(importedRaw.parkData) : null, themes: importedRaw.themes || null, activeTheme: importedRaw.activeTheme || null };

            if (mode === 'wipe') {
                if (!confirm("WARNING: This will delete ALL current checklists and themes. Are you sure?")) return;
                if (imported.parkData) parkData = imported.parkData;
                if (imported.themes) themes = imported.themes;
                if (imported.activeTheme) activeTheme = imported.activeTheme;
            } else {
                if (imported.themes) {
                    if (mode === 'overwrite') Object.assign(themes, imported.themes);
                    else if (mode === 'merge') { Object.keys(imported.themes).forEach(k => { if (!themes[k]) themes[k] = imported.themes[k]; }); }
                    if (imported.activeTheme && mode === 'overwrite') activeTheme = imported.activeTheme;
                }
                if (imported.parkData) {
                    ['fall', 'spring'].forEach(s => {
                        if (imported.parkData[s]) {
                            if(!parkData[s]) parkData[s] = {};
                            Object.keys(imported.parkData[s]).forEach(area => {
                                if (mode === 'overwrite') { parkData[s][area] = imported.parkData[s][area]; } 
                                else if (mode === 'merge') {
                                    if (!parkData[s][area]) parkData[s][area] = [];
                                    parkData[s][area].push(...imported.parkData[s][area]);
                                }
                            });
                        }
                    });
                }
            }
            safeSave();
            applyTheme(activeTheme); renderAreaTabs(); renderTasks(); renderThemeList(); renderExportAreaCheckboxes(); populateEditorAreaSelect(); renderDataEditor();
            showCustomAlert("Data Imported Successfully!"); fileInput.value = ""; 
        } catch (err) { showCustomAlert("Error reading file. Ensure it is a valid Park Winterization JSON backup."); }
    };
    reader.readAsText(file);
});

document.getElementById('factory-reset-btn').addEventListener('click', () => { document.getElementById('reset-modal').classList.remove('hidden'); });
document.getElementById('cancel-reset-btn').addEventListener('click', () => { document.getElementById('reset-modal').classList.add('hidden'); });

// Fully automated and bulletproof reset logic
document.getElementById('confirm-reset-btn').addEventListener('click', () => {
    try { localStorage.clear(); } catch(e) { console.error("Could not clear storage"); }
    
    parkData = JSON.parse(JSON.stringify(defaultParkData));
    themes = JSON.parse(JSON.stringify(defaultThemes));
    activeTheme = "Forest Ranger";
    currentSeason = 'fall';
    currentArea = Object.keys(parkData.fall)[0];

    safeSave(); // Commits the pristine factory state immediately so a refresh doesn't break it
    
    applyTheme(activeTheme); 
    renderAreaTabs(); 
    renderTasks(); 
    renderThemeList(); 
    renderExportAreaCheckboxes(); 
    populateEditorAreaSelect(); 
    renderDataEditor();
    document.getElementById('reset-modal').classList.add('hidden');
});

// Boot up
document.addEventListener("DOMContentLoaded", () => {
    applyTheme(activeTheme); renderAreaTabs(); renderTasks();

    // Register Service Worker for PWA Offline Support
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, err => {
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    }
});