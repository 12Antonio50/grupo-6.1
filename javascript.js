const tabs = document.querySelectorAll('.fixed-list-item');
const tabContent = document.querySelectorAll('.tab-content .content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.getAttribute('data-tab');

    tabs.forEach(tab => {
      tab.classList.remove('active');
    });

    tabContent.forEach(tab => {
      tab.classList.remove('active');
    });

    tab.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  });
});
