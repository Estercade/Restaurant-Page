(()=>{const e=(document.getElementById("content"),renderHeader=function(){const e=document.createElement("header"),t=document.createElement("img");return t.src="./omakaselogo.png",t.alt="O - Ma - Kase logo",e.appendChild(t),e},renderMainContent=function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("h3");n.innerText="About";const a=document.createElement("p");a.innerText='Omakase is a Japanese phrase which translates to "I leave it up to you." It is a term typically used in Japanese restaurants where the details of the meal are left up to the chef, who chooses seasonal specialties based on the highest quality ingredients available at the time.';const r=document.createElement("p");return r.innerText="O - Ma - Kase is a Japanese-style restaurant that aims to bring that authentic, personalized dining experience from the streets of Tokyo to your neighborhood.",t.appendChild(n),t.appendChild(a),t.appendChild(r),e.appendChild(t),e},{renderHeader,renderMainContent});content.appendChild(e.renderHeader()),content.appendChild(e.renderMainContent())})();