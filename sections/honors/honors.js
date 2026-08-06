function renderHonors() {
  const honors = [
    ['2024.03', 'Huawei Intelligent Foundation Scholarship', 'Ocean University of China'],
    ['2023.12', 'Provincial Outstanding Graduate', 'Ocean University of China'],
    ['2023.11', 'National Scholarship', 'Ocean University of China'],
    ['2023.10', 'National Bronze', 'CCF Collegiate Computer Systems & Programming Contest'],
    ['2023.06', 'National Third Prize', 'Lanqiao Cup National Software and Information Technology Professional Talent Competition'],
    ['2023.06', 'Provincial Silver', 'ACM International Collegiate Programming Contest'],
    ['2022.03', 'National Silver', 'National Algorithm Design and Programming Challenge'],
    ['2021.12', 'National First Prize', 'The Chinese Mathematics Competitions'],
  ];
  return `
    <section class="honors section" id="honors">
      <h2 class="section-heading">Honors &amp; Awards</h2>
      <div class="honor-table">${honors.map(([year, distinction, context]) => `<div><time>${year}</time><span><strong>${distinction}</strong>, ${context}</span></div>`).join('')}</div>
    </section>`;
}
