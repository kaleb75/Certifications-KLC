/**
 * Script principal para el portafolio de certificaciones
 * Gestiona la carga de datos, filtros y renderizado de las certificaciones
 */

// Datos de las certificaciones reales
const certifications = [
    {
        id: 1,
        title: "Responsive Web Design",
        issuer: "FreeCodeCamp",
        description: "Desarrollo de páginas web responsivas utilizando HTML y CSS.",
        url: "https://www.freecodecamp.org/certification/fcc7dffa92c-473d-4d34-93a2-1419b1333fca/responsive-web-design",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/FreeCodeCamp_logo.svg",
        date: "2023",
        category: "development"
    },
    {
        id: 2,
        title: "JavaScript Algorithms and Data Structures",
        issuer: "FreeCodeCamp",
        description: "Comprensión profunda de algoritmos y estructuras de datos en JavaScript.",
        url: "https://www.freecodecamp.org/certification/fcc7dffa92c-473d-4d34-93a2-1419b1333fca/javascript-algorithms-and-data-structures-v8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/FreeCodeCamp_logo.svg",
        date: "2023",
        category: "development"
    },
    {
        id: 3,
        title: "Front End Development Libraries",
        issuer: "FreeCodeCamp",
        description: "Uso de bibliotecas populares para desarrollo frontend, como React y Bootstrap.",
        url: "https://www.freecodecamp.org/certification/fcc7dffa92c-473d-4d34-93a2-1419b1333fca/front-end-development-libraries",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/FreeCodeCamp_logo.svg",
        date: "2023",
        category: "development"
    },
    {
        id: 4,
        title: "Data Visualization",
        issuer: "FreeCodeCamp",
        description: "Visualización de datos utilizando herramientas como D3.js y Chart.js.",
        url: "https://www.freecodecamp.org/certification/fcc7dffa92c-473d-4d34-93a2-1419b1333fca/data-visualization",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/FreeCodeCamp_logo.svg",
        date: "2023",
        category: "development"
    },
    {
        id: 5,
        title: "Scientific Computing with Python",
        issuer: "FreeCodeCamp",
        description: "Desarrollo de habilidades en computación científica utilizando Python y bibliotecas como NumPy y Pandas.",
        url: "https://www.freecodecamp.org/certification/fcc7dffa92c-473d-4d34-93a2-1419b1333fca/scientific-computing-with-python-v7",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/FreeCodeCamp_logo.svg",
        date: "2023",
        category: "development"
    },
    {
        id: 6,
        title: "College Algebra with Python",
        issuer: "FreeCodeCamp",
        description: "Aprendizaje de conceptos de álgebra de nivel universitario aplicados en Python.",
        url: "https://www.freecodecamp.org/certification/fcc7dffa92c-473d-4d34-93a2-1419b1333fca/college-algebra-with-python-v8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/FreeCodeCamp_logo.svg",
        date: "2024",
        category: "development"
    },
    {
        id: 7,
        title: "JavaScript Algorithms and Data Structures",
        issuer: "FreeCodeCamp",
        description: "Profundización en el entendimiento de algoritmos y estructuras de datos utilizando JavaScript.",
        url: "https://www.freecodecamp.org/certification/fcc7dffa92c-473d-4d34-93a2-1419b1333fca/javascript-algorithms-and-data-structures",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/FreeCodeCamp_logo.svg",
        date: "2024",
        category: "development"
    },
    {
        id: 8,
        title: "Desafío Latam Certification",
        issuer: "Desafío Latam",
        description: "Certificación por completar un curso sobre desarrollo web y conceptos de programación.",
        url: "https://cursos.desafiolatam.com/certificates/12surlny83",
        logo: "https://desafiolatam.com/wp-content/uploads/2024/05/cropped-flaticon-latam.png",
        date: "2023",
        category: "development"
    },
    {
        id: 9,
        title: "Harvard CS50",
        issuer: "Harvard University",
        description: "Curso CS50 de Harvard, obteniendo una amplia comprensión de ciencias de la computación y programación.",
        url: "#",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/Harvard_University_shield.png",
        date: "2024",
        category: "development"
    },
    {
        id: 10,
        title: "SQL Advanced",
        issuer: "Google",
        description: "Conocimientos y habilidades avanzadas en SQL para gestión y manipulación de bases de datos.",
        url: "#",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
        date: "2023",
        category: "development"
    },
    {
        id: 11,
        title: "ITIL4 Foundation",
        issuer: "AXELOS",
        description: "Certificación de nivel fundacional en ITIL4, enfocada en gestión de servicios de TI.",
        url: "#",
        logo: "https://valueinsights.ch/wp-content/uploads/2019/06/ITIL%C2%AE-4-Foundation-CPD-200x200.png",
        date: "2024",
        category: "methodology"
    },
    {
        id: 12,
        title: "ITIL Foundation IT Service Management Training",
        issuer: "AXELOS",
        description: "Capacitación en principios y prácticas de gestión de servicios de TI.",
        url: "#",
        logo: "https://valueinsights.ch/wp-content/uploads/2019/06/ITIL%C2%AE-4-Foundation-CPD-200x200.png",
        date: "2024",
        category: "methodology"
    },
    {
        id: 13,
        title: "Oracle Cloud Data Management 2023",
        issuer: "Oracle",
        description: "Certificación en Oracle Cloud Data Management e Infraestructura.",
        url: "#",
        logo: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png",
        date: "2023",
        category: "cloud"
    },
    {
        id: 14,
        title: "Oracle Cloud Infrastructure Certified Foundations Associate",
        issuer: "Oracle",
        description: "Certificación como Associate en Oracle Cloud Infrastructure.",
        url: "#",
        logo: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png",
        date: "2023",
        category: "cloud"
    },
    {
        id: 15,
        title: "Scrum Master Basics Course",
        issuer: "Soy Lider",
        description: "Curso Básico de Scrum Master, adquiriendo conocimientos fundamentales en metodología Scrum.",
        url: "#",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Fortinet_logo.svg/1200px-Fortinet_logo.svg.png",
        date: "2024",
        category: "methodology"
    },
    {
        id: 16,
        title: "Fortinet Network Security Expert (NSE) Level 1",
        issuer: "Fortinet",
        description: "Completado el nivel 1 del programa Fortinet Network Security Expert.",
        url: "#",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Fortinet_logo.svg/1200px-Fortinet_logo.svg.png",
        date: "2023",
        category: "security"
    },
    {
        id: 17,
        title: "Fortinet Network Security Expert (NSE) Level 2",
        issuer: "Fortinet",
        description: "Completado el nivel 2 del programa Fortinet Network Security Expert.",
        url: "#",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Fortinet_logo.svg/1200px-Fortinet_logo.svg.png",
        date: "2023",
        category: "security"
    },
    {
        id: 18,
        title: "Fortinet Network Security Expert (NSE) Level 3",
        issuer: "Fortinet",
        description: "Completado el nivel 3 del programa Fortinet Network Security Expert.",
        url: "#",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Fortinet_logo.svg/1200px-Fortinet_logo.svg.png",
        date: "2023",
        category: "security"
    },
    {
        id: 19,
        title: "Google Cloud Computing",
        issuer: "Google",
        description: "Certificado en Cloud Computing de Google.",
        url: "#",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
        date: "2019",
        category: "cloud"
    },
    {
        id: 20,
        title: "Google Mobile App Development Course",
        issuer: "Google",
        description: "Certificado en Desarrollo de Aplicaciones Móviles de Google.",
        url: "#",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
        date: "2019",
        category: "development"
    },
    {
        id: 21,
        title: "Google Competencias Digitales para Profesionales",
        issuer: "Google",
        description: "Certificado en Competencias Digitales para Profesionales de Google.",
        url: "#",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
        date: "2019",
        category: "methodology"
    },
    {
        id: 22,
        title: "Lacnic Basic Routing Course",
        issuer: "Lacnic",
        description: "Completado el Curso Básico de Enrutamiento de Lacnic.",
        url: "#",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Logo_-_LACNIC.svg/1200px-Logo_-_LACNIC.svg.png",
        date: "2023",
        category: "security"
    }
];

// Función para renderizar las certificaciones en el DOM
function renderCertifications(certifications) {
    const container = document.getElementById('certifications-container');
    container.innerHTML = ''; // Limpiar el contenedor

    certifications.forEach(cert => {
        const certElement = document.createElement('div');
        certElement.className = 'certification';

        certElement.innerHTML = `
            <img src="${cert.logo}" alt="${cert.issuer} logo" class="cert-logo">
            <h3 class="cert-title">${cert.title}</h3>
            <p class="cert-issuer">${cert.issuer}</p>
            <p class="cert-description">${cert.description}</p>
            <a href="${cert.url}" target="_blank" class="cert-link">View Certification</a>
            <p class="cert-date">${cert.date}</p>
            <p class="cert-category">${cert.category}</p>
        `;

        container.appendChild(certElement);
    });
}

// Función para filtrar las certificaciones por categoría
function filterCertifications(category) {
    if (category === 'all') {
        return certifications;
    }
    return certifications.filter(cert => cert.category === category);
}

// Función para manejar el cambio de filtro
function handleFilterChange(event) {
    const category = event.target.value;
    const filteredCertifications = filterCertifications(category);
    renderCertifications(filteredCertifications);
}

// Inicializar el script
function init() {
    // Renderizar todas las certificaciones al cargar la página
    renderCertifications(certifications);

    // Agregar event listener para el filtro
    const filterSelect = document.getElementById('filter-select');
    filterSelect.addEventListener('change', handleFilterChange);
}

// Ejecutar la función de inicialización cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', init);
