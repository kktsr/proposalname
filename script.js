document.addEventListener('DOMContentLoaded', function() {
    const options = {
        industry: ["IT", "製造", "金融", "流通"],
        competition: ["競合A", "競合B", "並走"],
        category: ["カテゴリ1", "カテゴリ2", "カテゴリ3"],
        kpi: ["KPI1", "KPI2", "KPI3"],
        media: ["メディアA", "メディアB", "メディアC"],
        result: ["成功", "失敗", "保留"]
    };

    function populateSelect(id, options) {
        const selectElement = document.getElementById(id);
        if (selectElement) {
            options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option;
                opt.textContent = option;
                selectElement.appendChild(opt);
            });
        }
    }

    populateSelect('industry', options.industry);
    populateSelect('competition', options.competition);
    populateSelect('category', options.category);
    populateSelect('kpi', options.kpi);
    populateSelect('media', options.media);
    populateSelect('result', options.result);
});

function formatDate(dateStr, format) {
    const [year, month, day] = dateStr.split('-');
    if (format === 'year-month') {
        return `${year}年${month}月`;
    } else if (format === 'full-date') {
        return `${year}/${month}/${day}`;
    }
    return dateStr;
}

function generateNamingRule() {
    const industry = document.getElementById('industry').value;
    const clientName = document.getElementById('clientName').value;
    const competition = document.getElementById('competition').value;
    const proposalTitle = document.getElementById('proposalTitle').value;
    const category = document.getElementById('category').value;
    const kpi = document.getElementById('kpi').value;
    const media = document.getElementById('media').value;
    const proposalMonth = document.getElementById('proposalMonth').value;
    const result = document.getElementById('result').value;
    const personInCharge = document.getElementById('personInCharge').value;
    const creationDate = document.getElementById('creationDate').value;

    const formattedProposalMonth = proposalMonth ? formatDate(proposalMonth, 'year-month') : '';
    const formattedCreationDate = creationDate ? formatDate(creationDate, 'full-date') : '';

    const namingRule = `【${industry}】【${clientName}】【${competition}】【${proposalTitle}】【${category}】【${kpi}】【${media}】【${formattedProposalMonth}】【${result}】【${personInCharge}】【${formattedCreationDate}】`;

    document.getElementById('resultDisplay').textContent = namingRule;
}
