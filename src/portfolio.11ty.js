exports.data = {
    layout: "base",
    title: "Portfolio",
  };
  
  exports.render = () => {
    return /*html*/ `
      <link href="/assets/css/portfolio.css" rel="stylesheet">
      
      <div class="big-sell">
        <h1 style="--delay: 0.35s">Welcome to my Portfolio</h1>
  
      <div class="pdf-container">
        <object data="../assets/pdf/CV_2024-06-11_Baptiste_Richetin.pdf" type="application/pdf"></object>
      </div>
      </div>

    `;
  };
  