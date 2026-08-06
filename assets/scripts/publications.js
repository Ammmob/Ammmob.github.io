function renderPublications() {
  return `
    <section class="publications section" id="publications">
      <h2 class="section-heading">Publications</h2>
      <div class="publication-list">
        <article class="publication-item">
          <a class="paper-thumb" href="https://ammmob.github.io/PixelSmile/" target="_blank" rel="noreferrer" aria-label="Visit the PixelSmile project page"><img src="assets/images/publications/pixelsmile/teaser.png" alt="PixelSmile teaser" loading="lazy"></a>
          <div><h3>PixelSmile: Toward Fine-Grained Facial Expression Editing</h3><p class="authors"><strong>Jiabin Hua*</strong>, Hengyuan Xu*, Aojie Li, Wei Cheng, Gang Yu, et al.</p><p class="paper-summary">Enables continuous intensity control, compound expression editing, and identity preservation, accompanied by the dual-domain FFE Dataset and FFE-Bench for both realistic and anime faces.</p><div class="link-row"><a href="https://arxiv.org/abs/2603.25728" target="_blank" rel="noreferrer">Paper</a><a href="https://ammmob.github.io/PixelSmile/" target="_blank" rel="noreferrer">Project</a><a href="https://github.com/Ammmob/PixelSmile" target="_blank" rel="noreferrer">Code · <span data-star-repo="Ammmob/PixelSmile">—</span> ★</a></div></div>
        </article>
        <article class="publication-item">
          <a class="paper-thumb paper-collage" href="https://xsafeai.github.io/AI-safety-report/" target="_blank" rel="noreferrer" aria-label="Visit the AI Safety Report project page">
            <img src="assets/images/publications/ai-safety-report/spec_1.png" alt="" loading="lazy">
            <img src="assets/images/publications/ai-safety-report/spec_3.png" alt="" loading="lazy">
            <img src="assets/images/publications/ai-safety-report/spec_4.png" alt="" loading="lazy">
            <img src="assets/images/publications/ai-safety-report/spec_5.png" alt="" loading="lazy">
            <img src="assets/images/publications/ai-safety-report/spec_6.png" alt="" loading="lazy">
            <img src="assets/images/publications/ai-safety-report/spec_7.png" alt="" loading="lazy">
          </a>
          <div><h3>A Safety Report on GPT-5.2, Gemini 3 Pro, Qwen3-VL, Grok 4.1 Fast, Nano Banana Pro, and Seedream 4.5</h3><p class="authors">Xingjun Ma, Yixu Wang, Hengyuan Xu, et al., including <strong>Jiabin Hua</strong></p><p class="paper-summary">A unified evaluation of six frontier models across language, vision-language, and image generation, covering benchmark safety, adversarial robustness, multilingual generalization, and regulatory compliance.</p><div class="link-row"><a href="https://arxiv.org/abs/2601.10527" target="_blank" rel="noreferrer">Paper</a><a href="https://xsafeai.github.io/AI-safety-report/" target="_blank" rel="noreferrer">Project</a><a href="https://github.com/XSafeAI/AI-safety-report" target="_blank" rel="noreferrer">Code · <span data-star-repo="XSafeAI/AI-safety-report">—</span> ★</a></div></div>
        </article>
      </div>
      <div class="publication-rows">
        <article class="publication-row">
          <div class="row-heading"><h3>RedT2V: A Temporal Red Teaming Framework for Text-to-Video Generation</h3><span class="row-status">AAAI Under Review</span></div>
          <p class="authors"><strong>Jiabin Hua</strong>, et al.</p>
        </article>
        <article class="publication-row">
          <div class="row-heading"><h3>PixelSmile: Toward Fine-Grained Facial Expression Editing</h3><span class="row-status">AAAI Under Review</span></div>
          <p class="authors"><strong>Jiabin Hua*</strong>, Hengyuan Xu*, Aojie Li, Wei Cheng, Gang Yu, Xingjun Ma, Yu-Gang Jiang</p>
          <div class="row-links"><a href="https://arxiv.org/abs/2603.25728" target="_blank" rel="noreferrer">Paper</a><a href="https://ammmob.github.io/PixelSmile/" target="_blank" rel="noreferrer">Project</a><a href="https://github.com/Ammmob/PixelSmile" target="_blank" rel="noreferrer">Code</a></div>
        </article>
        <article class="publication-row">
          <div class="row-heading"><h3>A Safety Report on GPT-5.2, Gemini 3 Pro, Qwen3-VL, Grok 4.1 Fast, Nano Banana Pro, and Seedream 4.5</h3><span class="row-status">arXiv 2026</span></div>
          <p class="authors">Xingjun Ma, Yixu Wang, Hengyuan Xu, Yutao Wu, Yifan Ding, Yunhan Zhao, Zilong Wang, <strong>Jiabin Hua</strong>, Ming Wen, Jianan Liu, Ranjie Duan, Yifeng Gao, Yingshui Tan, Yunhao Chen, Hui Xue, Xin Wang, Wei Cheng, Jingjing Chen, Zuxuan Wu, Bo Li, Yu-Gang Jiang</p>
          <div class="row-links"><a href="https://arxiv.org/abs/2601.10527" target="_blank" rel="noreferrer">Paper</a><a href="https://xsafeai.github.io/AI-safety-report/" target="_blank" rel="noreferrer">Project</a><a href="https://github.com/XSafeAI/AI-safety-report" target="_blank" rel="noreferrer">Code</a></div>
        </article>
      </div>
    </section>`;
}
