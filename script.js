// ===== CONFIGURACIÓN EDITABLE =====
// Número de WhatsApp en formato internacional sin "+" (ej. "573009555479").
// Si lo dejas vacío, los botones de pedido llaman por teléfono.
const WHATSAPP_NUMBER = "573009555479";
const PHONE = "+573009555479";
const ADDRESS = "Cl. 107 #49-35, Moscú I, Santa Cruz, Medellín, Antioquia, Colombia";

// CARTA de Del Rancho Food (precios en COP). Para agregar foto: img: "assets/nombre.jpg".
const PH = "assets/placeholder.svg";
const item = (name, desc, price, img = PH) => ({ name, desc, price, img });
const drink = (name, desc, price) => item(name, desc, price, null); // bebidas sin foto
const MENU = {
  "Papas": [
    item("Vaquerita", "Papas a la francesa, un huevo de codorniz, tres salchichas y salsas.", "$7.000"),
    item("Súper criollas", "Papas a la francesa, tocineta, salchicha, maicitos, cobija de queso, dos huevos y salsas.", "$16.000"),
    item("Papas especiales", "Papas a la francesa, pollo desmechado, salchichas, un huevo y salsas.", "$17.000"),
    item("Rancheras", "Papas a la francesa, cobija de queso, maicitos, maduritos, salchicha ranchera, carne desmechada, guacamole de la casa y pico de gallo.", "$22.000"),
    item("Rancheras XL", "Papas a la francesa, cobija de queso, maicitos, maduritos, salchicha ranchera, carne desmechada, trocitos de chicharrones, guacamole de la casa y pico de gallo.", "$28.000"),
    item("Papas mixtas", "Papas a la francesa, cobija de queso, carne desmechada, pollo desmechado, salchicha ranchera, guacamole de la casa y salsas.", "$28.000")
  ],
  "Picadas": [
    item("Montañera x 2", "Carne de res, cerdo, pollo, chicharrones, morcilla, butifarra, salchicha, 2 huevos de codorniz, papas a la francesa, yuquitas y arepa con queso.", "$33.000"),
    item("Montañera x 4", "Carne de res, cerdo, pollo, chicharrones, morcilla, butifarra, salchicha, 4 huevos de codorniz, papas a la francesa, yuquitas y arepa con queso.", "$53.000")
  ],
  "Hamburguesas": [
    item("Sencilla", "Pan fresco, lechuga, tomate, carne, queso, tocineta, ripio de papas y salsas.", "$14.000"),
    item("Doble", "Pan fresco, lechuga, tomate, doble carne, doble queso, doble tocineta, ripio de papas y salsas.", "$18.000"),
    item("Del rancho", "Pan fresco, lechuga, tomate, carne de hamburguesa, carne desmechada, doble queso, doble tocineta, ripio de papas y salsas.", "$22.000"),
    item("Artesanal", "Pan artesanal, lechuga, tomate, carne 100% res, queso cheddar, tocineta caramelizada, papas a la francesa y salsas.", "$26.000")
  ],
  "Perros y perras": [
    item("Perro sencillo", "Pan fresco pequeño, salchicha pequeña, queso, tocineta, ensalada de lechuga y tomate, ripio de papas y salsas.", "$11.000"),
    item("Perro especial", "Pan fresco grande, salchicha grande, queso, tocineta, ensalada de lechuga y tomate, ripio de papas y salsas.", "$15.000"),
    item("Perra sencilla", "Pan fresco pequeño, tocineta, queso, ensalada de lechuga y tomate, ripio de papas y salsas.", "$13.000"),
    item("Perra especial", "Pan fresco grande, tocineta, queso, ensalada de lechuga y tomate, ripio de papas y salsas.", "$17.000")
  ],
  "Carnes": [
    item("Cerdo a la plancha", "200 g de carne de cerdo, papas a la francesa, ensalada de lechuga, arepa con queso y salsas.", "$20.000"),
    item("Res a la plancha o filete de pechuga", "200 g de carne de res o filete de pechuga, papas a la francesa, ensalada de lechuga, arepa con queso y salsas.", "$24.000"),
    item("Churrasco", "200 g de churrasco, papas a la francesa, ensalada de lechuga, arepa con queso y salsas.", "$26.000")
  ],
  "Otros": [
    item("Chuzo de pollo", "Chuzo de pollo de 200 g, papas a la francesa, ensalada de lechuga, arepa con queso y salsas.", "$20.000"),
    item("Ropa vieja", "Arepa con queso y carne de res desmechada, papas a la francesa, ensalada de lechuga y salsas.", "$19.000"),
    item("Quesadilla", "Tortilla, carne de cerdo, pollo, tocineta, maicitos, queso, pico de gallo, guacamole de la casa, papas a la francesa y salsas.", "$22.000")
  ],
  "Adiciones": { table: [
    ["Huevo de codorniz", "$700"], ["Butifarra", "$1.000"], ["Maicitos", "$1.000"], ["Arepa", "$1.000"],
    ["Carne de hamburguesa", "$2.500"], ["Yuca", "$2.000"], ["Arepa con queso", "$3.000"],
    ["Adicional de papas (solo hamburguesas)", "$3.000"], ["Queso", "$4.000"],
    ["Arepa con queso y carne de hamburguesa", "$5.000"], ["Papas", "$6.000"], ["Tocineta", "$7.000"],
    ["Pollo", "$8.000"], ["Carne desmechada", "$9.000"]
  ] },
  "Bebidas": [
    drink("Jugos", "Mango, mora, guanábana y limonada natural. En agua $7.000 · en leche $8.000.", "$7.000"),
    drink("Limonada de coco", "", "$8.000"),
    drink("Milo", "", "$8.000"),
    drink("Gaseosa personal", "", "$5.000"),
    drink("Gaseosa 1.5 L", "", "$8.500"),
    drink("Águila", "", "$5.000"),
    drink("Águila light", "", "$5.000"),
    drink("Pilsen", "", "$5.000"),
    drink("Michelada", "", "$8.000"),
    drink("Michelada con mango o maracuyá", "", "$9.000")
  ]
};

// ===== Menú con pestañas =====
const grid = document.getElementById("menu-grid"), tabs = document.getElementById("menu-tabs");
function renderCategory(cat) {
  grid.innerHTML = "";
  const data = MENU[cat];
  if (data.table) {
    const wrap = document.createElement("div");
    wrap.className = "table-wrap";
    const t = document.createElement("table");
    t.className = "add-table";
    t.innerHTML = "<thead><tr><th>Adición</th><th>Precio</th></tr></thead><tbody></tbody>";
    data.table.forEach(([n, p]) => {
      const tr = document.createElement("tr");
      tr.innerHTML = "<td></td><td></td>";
      tr.children[0].textContent = n; tr.children[1].textContent = p;
      t.tBodies[0].appendChild(tr);
    });
    wrap.appendChild(t); grid.appendChild(wrap);
  } else {
    data.forEach(p => {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `${p.img ? '<img loading="lazy" width="600" height="450">' : ""}
        <div class="card-body"><h3></h3><p></p><span class="price"></span>
        <button class="btn btn-gold order-btn" type="button">Pedir</button></div>`;
      if (p.img) { const im = card.querySelector("img"); im.src = p.img; im.alt = p.name; }
      card.querySelector("h3").textContent = p.name;
      card.querySelector("p").textContent = p.desc;
      card.querySelector(".price").textContent = p.price;
      card.querySelector(".order-btn").dataset.product = p.name;
      grid.appendChild(card);
    });
  }
  grid.classList.toggle("is-table", !!data.table);
  tabs.querySelectorAll(".tab").forEach(t => {
    const on = t.textContent === cat;
    t.classList.toggle("active", on); t.setAttribute("aria-selected", on);
  });
}
Object.keys(MENU).forEach(cat => {
  const b = document.createElement("button");
  b.className = "tab"; b.type = "button"; b.role = "tab"; b.textContent = cat;
  b.addEventListener("click", () => renderCategory(cat));
  tabs.appendChild(b);
});
renderCategory(Object.keys(MENU)[0]);

// ===== Pedidos =====
const toast = document.getElementById("toast");
function showToast(msg) {
  toast.textContent = msg; toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 4000);
}
document.addEventListener("click", e => {
  const btn = e.target.closest(".order-btn");
  if (!btn) return;
  e.preventDefault();
  const product = btn.dataset.product;
  if (WHATSAPP_NUMBER) {
    const text = product ? `Hola, quiero pedir: ${product}` : "Hola, quiero hacer un pedido";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  } else {
    showToast("El pedido en línea aún no está configurado. Te llevamos a llamar al restaurante.");
    setTimeout(() => { location.href = `tel:${PHONE}`; }, 1500);
  }
});

// ===== Enlaces de WhatsApp =====
document.querySelectorAll(".wa-link").forEach(a => {
  a.href = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, quiero hacer un pedido en Del Rancho Food")}`
    : `tel:${PHONE}`;
});

// ===== Maps =====
document.getElementById("maps-link").href =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ADDRESS);

// ===== Navegación móvil y header =====
const burger = document.getElementById ("burger"), links = document.getElementById("links");
burger.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  links.classList.remove("open"); burger.setAttribute("aria-expanded", "false");
}));
const header = document.getElementById("header");
addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 10), { passive: true });

// ===== Animaciones al desplazarse =====
const io = "IntersectionObserver" in window ? new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
}, { threshold: .12 }) : null;
document.querySelectorAll(".reveal").forEach(el => io ? io.observe(el) : el.classList.add("in"));

document.getElementById("year").textContent = new Date().getFullYear();