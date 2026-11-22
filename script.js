function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const rules1 = {
  animal: ["cat", "dog", "cow"],
  transport: ["station", "bus", "car"],
  object: ["buildings", "trees"],
  small_synonyms: ["small", "tiny"],
  text: "#[pickedanimal:#animal#]story#",
  story:
    "i was walking to the #transport# yesterday with a friend. i looked at the #object# around me. i felt infinitesimally #small_synonyms#. she was talking about #pickedanimal.s#, but i’m bigger relative to a #pickedanimal#.",
};

const grammar1 = tracery.createGrammar(rules1);
if (tracery.baseEngModifiers) {
  grammar1.addModifiers(tracery.baseEngModifiers);
}
const firstParagraph = grammar1.flatten("#text#");

const rules2 = {
  space_objects: ["world", "universe", "solar system", "milky way", "galaxy"],
  human_synonyms: ["being", "human"],
  object: ["buildings", "trees"],
  small_synonyms: ["small", "tiny"],
  text: "#[pickedhuman_synonym:#human_synonyms#]story#",
  story:
    "i think about the #space_objects# a lot, and about how strange #pickedhuman_synonym.s# are. so consumed by our own worries, i call it the black hole syndrome, yet we are infinitesimal, ephemeral #pickedhuman_synonym.s#, as are black holes.",
};

const grammar2 = tracery.createGrammar(rules2);
if (tracery.baseEngModifiers) grammar2.addModifiers(tracery.baseEngModifiers); {
}
const secondParagraph = grammar2.flatten("#text#");

const paragraphs = [firstParagraph, secondParagraph];
shuffleArray(paragraphs);
let next = 0;

document.getElementById("btn1").addEventListener("click", function () {
  document.getElementById("ascii").style.display = "block";
  document.getElementById("btn2").style.display = "inline-block";
});

document.getElementById("btn2").addEventListener("click", function () {
  if (next < paragraphs.length) {
    document.getElementById("story").innerHTML += "<p>{<br>" + paragraphs[next] + "<br>}</p>";
    next++;
  }
});
