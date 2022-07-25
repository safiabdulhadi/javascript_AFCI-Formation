const spans = document.querySelectorAll('h1 span');

spans.forEach(async (sp, i )=>{
    let slide = sp.animate({textIndent: "0"}, {duration: 2000, fill: "forwards"});
    await slide.finished;
    let fade = sp.animate({opacity: "0"}, {duration: 1000, fill: "forwards"});
    await fade.finished;
    slide.cancel();
    sp.textContent = i === 0 ? "Maurice" : "Dupont";
    fade.reverse();
    await fade.finished;
    slide.play();
})

