function renderAbout() {
  return `
    <section class="about section" id="about">
      <div class="about-main">
        <div class="about-copy">
          <p class="about-greeting"><span>&gt;</span> <span id="typewriter"></span><i></i></p>
          <h1>Jiabin Hua</h1>
          <p class="about-role">Master's Student @ Fudan University · FVL Lab · Intern @ Alibaba Taotian Group</p>
          <ul class="research-tags" aria-label="Research interests"><li>AIGC</li><li>Controllable Generation</li><li>AI Safety</li><li>Multimodal Red Teaming</li></ul>
          <p>I am a master's student in the <a href="https://fvl.fudan.edu.cn/" target="_blank" rel="noreferrer"><strong>FVL Lab</strong></a> at the School of Computer Science, <strong>Fudan University</strong>, advised by <a href="http://xingjunma.com/" target="_blank" rel="noreferrer"><strong>Prof. Xingjun Ma</strong></a>. I received my B.E. in Intelligence Science and Technology from <strong>Ocean University of China</strong>. I am currently a research intern at <strong>Alibaba Taotian Group</strong>, working on human-image aesthetic assessment and enhancement.</p>
          <p>My research interests include controllable content generation, generative model safety, and multimodal red teaming. I am currently seeking opportunities in AI research and AIGC.</p>
        </div>
        <div class="profile-column">
          <div class="profile-photo"><img src="assets/images/profile.jpg" alt="Jiabin Hua" loading="eager"></div>
          <div class="social-links" aria-label="Academic profiles and contact">
            <a href="https://github.com/Ammmob" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.84a9.5 9.5 0 0 1 2.5.34c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>
            </a>
            <a href="mailto:jbhua24@m.fudan.edu.cn" aria-label="Email" title="Email">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm9 7.1L20.2 7H3.8L12 12.1ZM3 17h18V9.35l-8.47 5.27a1 1 0 0 1-1.06 0L3 9.35V17Z"/></svg>
            </a>
            <a href="https://scholar.google.com/citations?user=LGUk8scAAAAJ" target="_blank" rel="noreferrer" aria-label="Google Scholar" title="Google Scholar">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 1 8.1l4 2.22V16l7 3.89L19 16v-5.68l2-1.11V16h2V8.1L12 2Zm0 2.29 7 3.89-7 3.89-7-3.89 7-3.89Zm-5 7.14 5 2.78 5-2.78v3.39l-5 2.78-5-2.78v-3.39Z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>`;
}
