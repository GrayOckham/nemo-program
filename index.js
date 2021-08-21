console.log(data);


const getMediums = (industry) => {
  return data[0].mediums
    .filter(medium => medium.entryTypes[0].entryTypeName === industry)
    .map(mediumData => {
      return {
        mediumName: mediumData.mediumName.replace(`${industry}: `, ''),
        categories: mediumData.categories.map(category => ({ categoryName: category.categoryName }))
      }
    })
}

const industryNames = [...new Set([...data[0].mediums.map(medium => medium.entryTypes[0].entryTypeName)])];

const program = {
  programName: data[0].label,
  industries: industryNames.map(name => {
    return {
      industryName: name,
      mediums: getMediums(name)
    }
  })
}

const renderProgram = (program) => {
  const target = document.getElementById('target');
  target.innerHTML = `
  <div class="program-cards card-holder">
    <div class="program-card card">
      <div class="card-data">
        <button class="button configure-button">Configure</button>
        <span class="card-title">${program.programName}</span>
        <div class="card-date">2021-04-22</div>
        <div class="card-creator">
          <img src="https://avatars.dicebear.com/api/avataaars/${Math.floor(Math.random() * 1000)}.svg" width="25px" />
          <div class="card-creator-name">Ms. Lorem Ipsum</div>
        </div>
        <div class="card-actions">
          <div class="card-actions-more">…</div>
          <div class="card-actions-add">+</div>
        </div>
        <div class="card-verify">
          <img src="Checkmark.svg" width="10px" />
        </div>
        <div class="card-expand">▼</div>
      </div>
      <div class="sub-program-cards card-holder">
        ${program.industries.map(industry => (`
        <div class="sub-program-card card">
          <div class="card-data">
            <button class="button configure-button">Configure</button>
            <span class="card-title">${industry.industryName}</span>
            <div class="card-date">2021-04-22</div>
            <div class="card-creator">
              <img src="https://avatars.dicebear.com/api/avataaars/${Math.floor(Math.random() * 1000)}.svg" width="25px" />
              <div class="card-creator-name">Ms. Lorem Ipsum</div>
            </div>
            <div class="card-actions">
              <div class="card-actions-more">…</div>
              <div class="card-actions-add">+</div>
            </div>
            <div class="card-verify">
              <img src="Checkmark.svg" width="10px" />
            </div>
            <div class="card-expand">▼</div>
          </div>
          <div class="category-cards card-holder">
            ${industry.mediums.map(medium => (`
            <div class="category-card card">
              <div class="card-data">
                <button class="button configure-button">Configure</button>
                <span class="card-title">${medium.mediumName}</span>
                <div class="card-date">2021-04-22</div>
                <div class="card-creator">
                  <img src="https://avatars.dicebear.com/api/avataaars/${Math.floor(Math.random() * 1000)}.svg" width="25px" />
                  <div class="card-creator-name">Ms. Lorem Ipsum</div>
                </div>
                <div class="card-actions">
                  <div class="card-actions-more">…</div>
                  <div class="card-actions-add">+</div>
                </div>
                <div class="card-verify">
                  <img src="Checkmark.svg" width="10px"/>
                </div>
                <div class="card-expand">▼</div>
              </div>
              <div class="sub-category-cards card-holder">
                ${medium.categories.map(category => (`
                <div class="sub-category-card card">
                  <div class="card-data">
                    <button class="button configure-button">Configure</button>
                    <span class="card-title">${category.categoryName}</span>
                    <div class="card-date">2021-04-22</div>
                    <div class="card-creator">
                      <img src="https://avatars.dicebear.com/api/avataaars/${Math.floor(Math.random() * 1000)}.svg" width="25px" />
                      <div class="card-creator-name">Ms. Lorem Ipsum</div>
                    </div>
                    <div class="card-actions">
                      <div class="card-actions-more">…</div>
                      <div class="card-actions-add">+</div>
                    </div>
                    <div class="card-verify">
                      <img src="Checkmark.svg" width="10px" />
                    </div>
                    <div class="card-expand">▼</div>
                  </div>
                </div>
                  `)).join('')}
                </div>
              </div>
              `)).join('')}
            </div>
          </div>`)).join('')
    }
        </div>
      </div>
    </div>
  </div>
  `;
}

renderProgram(program);

const collapseButtons = document.querySelectorAll('.card-expand');
collapseButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const childCards = e.target.parentElement.nextElementSibling;
    childCards.classList.toggle('hidden');
    button.classList.toggle('up');
  })
});

const copall = document.querySelector('.contract-all')
copall.addEventListener('click', () => {
  const holders = document.querySelectorAll('.program-cards .card-holder');
  holders.forEach(holder => holder.classList.add('hidden'));
  collapseButtons.forEach(button => button.classList.add('up'));
})


const expall = document.querySelector('.expand-all')
expall.addEventListener('click', () => {
  const holders = document.querySelectorAll('.program-cards .card-holder');
  holders.forEach(holder => holder.classList.remove('hidden'));
  collapseButtons.forEach(button => button.classList.remove('up'));
})

console.log(program)