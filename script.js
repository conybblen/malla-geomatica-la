const malla = {
  "Semestre I": [
    "Introducción a las Matemáticas",
    "Geometría y Trigonometría",
    "Introducción a la Ingeniería Geomática",
    "Informática",
    "Inglés Comunicativo I Nivel Principiante",
    "Técnicas de Expresión Oral y Escrita"
  ],
  "Semestre II": [
    "Topografía I",
    "Álgebra",
    "Dibujo de Ingeniería",
    "Lenguaje de Programación",
    "Inglés Comunicativo II Nivel Elemental",
    "Física I"
  ],
  "Semestre III": [
    "Cálculo I",
    "Álgebra Lineal",
    "Topografía II",
    "Base de Datos I",
    "Inglés Comunicativo III Nivel Básico",
    "Física II"
  ],
  "Semestre IV": [
    "Cálculo II",
    "Estadística",
    "Topografía III",
    "Base de Datos II",
    "Inglés Comunicativo IV Nivel Básico Alto",
    "Obras Civiles y Construcción"
  ],
  "Semestre V": [
    "Cálculo III",
    "Fotogrametría I",
    "Obras Urbanas",
    "Geociencias",
    "Cartografía I",
    "Ajuste de Observaciones"
  ],
  "Semestre VI": [
    "Geomática en Hidrología y Obras de Riego",
    "Fotogrametría II",
    "Fundamentos de Geodesia",
    "Percepción Remota",
    "Cartografía II",
    "Sistemas de Información Geográfica"
  ],
  "Semestre VII": [
    "Infraestructura de Transporte y Obras Viales",
    "Metodología de la Investigación",
    "Métodos de Geodesia",
    "Procesamiento de Datos de Sensores Remotos",
    "Planificación Territorial y Catastro",
    "Electivo"
  ],
  "Semestre VIII": [
    "Proyecto de Geomática",
    "Levantamientos Geodésicos",
    "Análisis de Datos e Información Geográfica",
    "Gestión de Proyectos",
    "Ciencias Ambientales y Recursos Naturales",
    "Complementario"
  ],
  "Semestre IX": [
    "Electivo",
    "Electivo",
    "Electivo",
    "Desastres Naturales",
    "Geomática en Minería",
    "Proyecto de Innovación y Emprendimiento"
  ],
  "Semestre X": [
    "Habilitación Profesional"
  ]
};

const aprobados = new Set();
const prerequisitos = {
  "Álgebra Lineal": ["Álgebra"],
  "Física II": ["Física I"],
  "Topografía II": ["Topografía I"],
  "Topografía III": ["Topografía II"],
  "Fotogrametría II": ["Fotogrametría I"],
  "Base de Datos II": ["Base de Datos I"],
  "Cartografía II": ["Cartografía I"]
};

function crearMalla() {
  const container = document.getElementById("malla");
  container.innerHTML = "";

  for (let [semestre, ramos] of Object.entries(malla)) {
    const col = document.createElement("div");
    col.className = "semestre";
    const title = document.createElement("h2");
    title.textContent = semestre;
    col.appendChild(title);

    ramos.forEach((ramo) => {
      const div = document.createElement("div");
      const bloqueado = prerequisitos[ramo]?.some(pr => !aprobados.has(pr));
      div.className = "ramo";
      if (aprobados.has(ramo)) div.classList.add("aprobado");
      else if (bloqueado) div.classList.add("bloqueado");

      div.textContent = ramo;
      div.onclick = () => {
        if (bloqueado) return;
        if (aprobados.has(ramo)) aprobados.delete(ramo);
        else aprobados.add(ramo);
        crearMalla();
      };

      col.appendChild(div);
    });

    container.appendChild(col);
  }
}

crearMalla();

