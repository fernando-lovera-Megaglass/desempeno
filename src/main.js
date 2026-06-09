import './styles.css';

const AREAS=[{id:1,nombre:"Sistemas"},{id:2,nombre:"Cuentas por pagar"},{id:3,nombre:"Cuentas por cobrar"},{id:4,nombre:"Acristala"},{id:5,nombre:"Embarques"},{id:6,nombre:"Compras"},{id:7,nombre:"Contabilidad"},{id:8,nombre:"Producción"},{id:9,nombre:"Mercadotecnia"},{id:10,nombre:"Dirección"},{id:11,nombre:"Ventas"}];
let EQUIPOS=[{id:1,nombre:"Compra Venta de Vidrio",descripcion:"Comercialización y distribución de vidrio arquitectónico en México y EE. UU."},{id:2,nombre:"Acristala",descripcion:"Fabricación e instalación de ventanería y cancelería marca Acristala."},{id:3,nombre:"JFC",descripcion:"Logística y transporte trinacional (corredor Atlacomulco–Nuevo Laredo–Houston)."}];
const COLS=["Por hacer","En progreso","En revisión","Hecho"];
const today=new Date('2026-06-05');const parse=s=>new Date(s+'T00:00:00');const fmt=s=>s?parse(s).toLocaleDateString('es-MX',{day:'numeric',month:'short'}):'';
const avg=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:0;const cls=p=>p>=.9?'g':p>=.7?'a':'r';
let id=0;
let users=[
 {id:1,nombre:"Fernando",apellidos:"Lovera",cargo:"Director General",telefono:"722 100 0001",email:"fernando@grupokafer.com",area:"Sistemas",equipo_id:1,equipo:"Compra Venta de Vidrio",rol:"admin",foto:"https://randomuser.me/api/portraits/men/45.jpg",estado_invitacion:"Aceptada",estatus:"Activo",ultima_actividad:"2026-06-06 08:10:00",creado_en:"2026-05-01 08:00:00"},
 {id:2,nombre:"Omar",apellidos:"Vega",cargo:"Líder de Proyectos",telefono:"722 145 8890",email:"omar@grupokafer.com",area:"Acristala",equipo_id:2,equipo:"Acristala",rol:"usuario",foto:"https://randomuser.me/api/portraits/men/32.jpg",estado_invitacion:"Aceptada",estatus:"Activo",ultima_actividad:"2026-06-04 10:15:00",creado_en:"2026-05-02 09:00:00"},
 {id:3,nombre:"Raúl",apellidos:"Mendoza",cargo:"Coordinador de Proyectos",telefono:"722 233 1120",email:"raul@grupokafer.com",area:"Acristala",equipo_id:2,equipo:"Acristala",rol:"usuario",foto:"https://randomuser.me/api/portraits/men/51.jpg",estado_invitacion:"Aceptada",estatus:"Activo",ultima_actividad:"2026-06-03 16:40:00",creado_en:"2026-05-02 09:05:00"},
 {id:4,nombre:"Liz",apellidos:"Cruz",cargo:"Control Administrativo",telefono:"722 998 4521",email:"liz@grupokafer.com",area:"Acristala",equipo_id:2,equipo:"Acristala",rol:"usuario",foto:"https://randomuser.me/api/portraits/women/44.jpg",estado_invitacion:"Enviada",estatus:"Suspendido",ultima_actividad:null,creado_en:"2026-05-20 11:00:00"},
 {id:5,nombre:"Orlando",apellidos:"Reyes",cargo:"Sistemas / TI",telefono:"722 410 7732",email:"orlando@grupokafer.com",area:"Sistemas",equipo_id:1,equipo:"Compra Venta de Vidrio",rol:"admin",foto:"https://randomuser.me/api/portraits/men/33.jpg",estado_invitacion:"Aceptada",estatus:"Activo",ultima_actividad:"2026-06-04 09:05:00",creado_en:"2026-05-02 09:10:00"},
 {id:6,nombre:"Yazmín",apellidos:"Lara",cargo:"Contadora",telefono:"722 556 2098",email:"yazmin@grupokafer.com",area:"Contabilidad",equipo_id:1,equipo:"Compra Venta de Vidrio",rol:"usuario",foto:"https://randomuser.me/api/portraits/women/26.jpg",estado_invitacion:"Aceptada",estatus:"Activo",ultima_actividad:"2026-06-02 12:00:00",creado_en:"2026-05-02 09:15:00"},
 {id:7,nombre:"Citlali",apellidos:"Núñez",cargo:"Prospección",telefono:"722 671 3345",email:"citlali@grupokafer.com",area:"Acristala",equipo_id:2,equipo:"Acristala",rol:"usuario",foto:"https://randomuser.me/api/portraits/women/63.jpg",estado_invitacion:"Pendiente",estatus:"Activo",ultima_actividad:null,creado_en:"2026-06-01 10:00:00"},
 {id:8,nombre:"Alejandro",apellidos:"Domínguez Soto",cargo:"Ejecutivo de Ventas",telefono:"722 304 1187",email:"ventas.8@grupokafer.com",area:"Mercadotecnia",equipo_id:1,equipo:"Compra Venta de Vidrio",rol:"usuario",foto:"https://randomuser.me/api/portraits/men/11.jpg",estado_invitacion:"Aceptada",estatus:"Activo",ultima_actividad:"2026-06-05 18:22:00",creado_en:"2026-05-05 10:00:00"},
 {id:9,nombre:"Mariana",apellidos:"Quintero Ríos",cargo:"Compradora",telefono:"722 412 7765",email:"compras@grupokafer.com",area:"Compras",equipo_id:1,equipo:"Compra Venta de Vidrio",rol:"usuario",foto:"https://randomuser.me/api/portraits/women/21.jpg",estado_invitacion:"Aceptada",estatus:"Activo",ultima_actividad:"2026-06-05 09:40:00",creado_en:"2026-05-06 11:30:00"},
 {id:10,nombre:"Sergio",apellidos:"Bautista León",cargo:"Jefe de Embarques",telefono:"722 559 9087",email:"embarques@jfccargo.com",area:"Embarques",equipo_id:3,equipo:"JFC",rol:"usuario",foto:"https://randomuser.me/api/portraits/men/41.jpg",estado_invitacion:"Aceptada",estatus:"Activo",ultima_actividad:"2026-06-04 14:05:00",creado_en:"2026-05-07 08:45:00"},
 {id:11,nombre:"Paola",apellidos:"Carrillo Méndez",cargo:"Auxiliar Contable",telefono:"722 220 5512",email:"cxp@grupokafer.com",area:"Cuentas por pagar",equipo_id:1,equipo:"Compra Venta de Vidrio",rol:"usuario",foto:"https://randomuser.me/api/portraits/women/55.jpg",estado_invitacion:"Enviada",estatus:"Activo",ultima_actividad:null,creado_en:"2026-05-12 13:00:00"},
 {id:12,nombre:"Héctor",apellidos:"Salinas Vega",cargo:"Supervisor de Producción",telefono:"722 661 3340",email:"produccion@grupokafer.com",area:"Producción",equipo_id:2,equipo:"Acristala",rol:"usuario",foto:"https://randomuser.me/api/portraits/men/34.jpg",estado_invitacion:"Aceptada",estatus:"Activo",ultima_actividad:"2026-06-05 07:55:00",creado_en:"2026-05-09 08:00:00"},
 {id:13,nombre:"Gabriela",apellidos:"Fuentes Ortiz",cargo:"Diseño y Mercadotecnia",telefono:"722 781 1203",email:"marketing@grupokafer.com",area:"Mercadotecnia",equipo_id:1,equipo:"Compra Venta de Vidrio",rol:"usuario",foto:"https://randomuser.me/api/portraits/women/68.jpg",estado_invitacion:"Aceptada",estatus:"Activo",ultima_actividad:"2026-06-03 11:20:00",creado_en:"2026-05-11 09:30:00"},
 {id:14,nombre:"Ricardo",apellidos:"Navarro Pineda",cargo:"Chofer / Logística",telefono:"722 905 4471",email:"logistica@jfccargo.com",area:"Embarques",equipo_id:3,equipo:"JFC",rol:"usuario",foto:"https://randomuser.me/api/portraits/men/52.jpg",estado_invitacion:"Pendiente",estatus:"Activo",ultima_actividad:null,creado_en:"2026-05-22 15:00:00"},
 {id:15,nombre:"Andrea",apellidos:"Solís Camacho",cargo:"Cuentas por Cobrar",telefono:"722 118 6694",email:"cxc@grupokafer.com",area:"Cuentas por cobrar",equipo_id:1,equipo:"Compra Venta de Vidrio",rol:"usuario",foto:"https://randomuser.me/api/portraits/women/71.jpg",estado_invitacion:"Aceptada",estatus:"Suspendido",ultima_actividad:"2026-05-28 10:00:00",creado_en:"2026-05-13 10:10:00"},
 {id:16,nombre:"Diego",apellidos:"Cervantes Rojas",cargo:"Instalador",telefono:"722 443 0091",email:"instalacion@grupokafer.com",area:"Acristala",equipo_id:2,equipo:"Acristala",rol:"usuario",foto:"https://randomuser.me/api/portraits/men/67.jpg",estado_invitacion:"Aceptada",estatus:"Activo",ultima_actividad:"2026-06-04 17:30:00",creado_en:"2026-05-15 08:20:00"},
 {id:17,nombre:"Verónica",apellidos:"Aguilar Díaz",cargo:"Atención a Clientes",telefono:"722 332 8810",email:"atencion@grupokafer.com",area:"Mercadotecnia",equipo_id:1,equipo:"Compra Venta de Vidrio",rol:"usuario",foto:"https://randomuser.me/api/portraits/women/79.jpg",estado_invitacion:"Aceptada",estatus:"Activo",ultima_actividad:"2026-06-05 12:48:00",creado_en:"2026-05-16 09:00:00"},
 {id:18,nombre:"Fernando",apellidos:"Ibarra Castro",cargo:"Almacén",telefono:"722 770 2255",email:"almacen@grupokafer.com",area:"Compras",equipo_id:1,equipo:"Compra Venta de Vidrio",rol:"usuario",foto:"https://randomuser.me/api/portraits/men/75.jpg",estado_invitacion:"Aceptada",estatus:"Baja",ultima_actividad:"2026-04-30 16:00:00",creado_en:"2026-03-10 09:00:00"},
 {id:19,nombre:"Karla",apellidos:"Estrada Moreno",cargo:"Asistente de Dirección",telefono:"722 612 9943",email:"direccion@grupokafer.com",area:"Sistemas",equipo_id:1,equipo:"Compra Venta de Vidrio",rol:"usuario",foto:"https://randomuser.me/api/portraits/women/33.jpg",estado_invitacion:"Aceptada",estatus:"Activo",ultima_actividad:"2026-06-06 07:50:00",creado_en:"2026-05-18 10:30:00"}
];
id=users.reduce((m,u)=>Math.max(m,u.id),0);
let tasks=[
 {id:1,title:"Configurar respaldos automáticos del servidor",who:"Orlando",area:"Sistemas",area_id:1,proyecto_id:3,date:"2026-05-22",prio:"Alta",estatus:"Hecho",cierre:"2026-05-21",ev:null},
 {id:2,title:"Entregar presupuesto fachada El Campanario",who:"Omar",area:"Acristala",area_id:4,proyecto_id:1,date:"2026-05-24",prio:"Alta",estatus:"Hecho",cierre:"2026-05-26",ev:null},
 {id:3,title:"Cerrar conciliación bancaria de mayo",who:"Yazmín",area:"Contabilidad",area_id:7,proyecto_id:null,date:"2026-05-29",prio:"Media",estatus:"En progreso",cierre:null,ev:null},
 {id:4,title:"Subir estimación y expediente de obra",who:"Liz",area:"Acristala",area_id:4,proyecto_id:1,date:"2026-06-09",prio:"Media",estatus:"En progreso",cierre:null,ev:null},
 {id:5,title:"Cotizar perfiles PVC con proveedor",who:"Raúl",area:"Acristala",area_id:4,proyecto_id:2,date:"2026-06-04",prio:"Baja",estatus:"Hecho",cierre:"2026-06-03",ev:null},
 {id:6,title:"Levantar pedido de herrajes",who:"Liz",area:"Acristala",area_id:4,proyecto_id:2,date:"2026-05-30",prio:"Media",estatus:"Hecho",cierre:"2026-05-30",ev:null},
 {id:7,title:"Cerrar venta showroom Toluca",who:"Alejandro",area:"Mercadotecnia",area_id:9,proyecto_id:null,date:"2026-06-08",prio:"Alta",estatus:"En progreso",cierre:null,ev:null},
 {id:8,title:"Programar corte y templado del lote",who:"Héctor",area:"Producción",area_id:8,proyecto_id:1,date:"2026-06-07",prio:"Alta",estatus:"Por hacer",cierre:null,ev:null},
 {id:9,title:"Coordinar embarque a Houston",who:"Sergio",area:"Embarques",area_id:5,proyecto_id:null,date:"2026-06-10",prio:"Media",estatus:"En progreso",cierre:null,ev:null},
 {id:10,title:"Negociar precio de aluminio con proveedor",who:"Mariana",area:"Compras",area_id:6,proyecto_id:2,date:"2026-06-05",prio:"Media",estatus:"Hecho",cierre:"2026-06-04",ev:null},
 {id:11,title:"Revisar avance comercial de la semana",who:"Fernando",area:"Sistemas",area_id:1,proyecto_id:null,date:"2026-06-09",prio:"Alta",estatus:"En progreso",cierre:null,ev:null},
 {id:12,title:"Aprobar presupuesto de planta Atlacomulco",who:"Fernando",area:"Sistemas",area_id:1,proyecto_id:1,date:"2026-06-12",prio:"Alta",estatus:"Por hacer",cierre:null,ev:null},
 {id:13,title:"Junta semanal de dirección",who:"Fernando",area:"Sistemas",area_id:1,proyecto_id:null,date:"2026-06-08",hora:"09:00",dur:60,tipo:"Visita",prio:"Alta",estatus:"Por hacer",avance:0,auditor_id:19,cierre:null,ev:null},
 {id:14,title:"Llamada con FENEX por garantía FX-62",who:"Fernando",area:"Sistemas",area_id:1,proyecto_id:null,date:"2026-06-10",hora:"12:30",dur:30,tipo:"Llamada",prio:"Media",estatus:"En progreso",avance:40,auditor_id:6,cierre:null,ev:null},
 {id:15,title:"Visita de obra El Campanario",who:"Omar",area:"Acristala",area_id:4,proyecto_id:1,date:"2026-06-09",hora:"08:30",dur:180,tipo:"Visita",prio:"Alta",estatus:"En progreso",avance:55,auditor_id:1,cierre:null,ev:null},
 {id:16,title:"Enviar planos aprobados a producción",who:"Omar",area:"Acristala",area_id:4,proyecto_id:1,date:"2026-06-11",hora:"10:00",dur:45,tipo:"Correo",prio:"Media",estatus:"Por hacer",avance:0,auditor_id:1,cierre:null,ev:null},
 {id:17,title:"Detallar despiece de cancelería",who:"Raúl",area:"Acristala",area_id:4,proyecto_id:2,date:"2026-06-07",hora:"11:00",dur:120,tipo:"Por hacer",prio:"Media",estatus:"En revisión",avance:80,auditor_id:2,cierre:null,ev:null},
 {id:18,title:"Llamada a proveedor de herrajes",who:"Raúl",area:"Acristala",area_id:4,proyecto_id:2,date:"2026-06-12",hora:"13:00",dur:30,tipo:"Llamada",prio:"Baja",estatus:"Por hacer",avance:0,auditor_id:2,cierre:null,ev:null},
 {id:19,title:"Actualizar expediente de obra en Drive",who:"Liz",area:"Acristala",area_id:4,proyecto_id:1,date:"2026-06-06",hora:"15:00",dur:90,tipo:"Por hacer",prio:"Media",estatus:"En progreso",avance:50,auditor_id:2,cierre:null,ev:null},
 {id:20,title:"Conciliar estimación 3 con cliente",who:"Liz",area:"Acristala",area_id:4,proyecto_id:1,date:"2026-06-13",hora:null,dur:null,tipo:"Por hacer",prio:"Alta",estatus:"Por hacer",avance:0,auditor_id:6,cierre:null,ev:null},
 {id:21,title:"Revisar accesos y permisos del nuevo módulo",who:"Orlando",area:"Sistemas",area_id:1,proyecto_id:3,date:"2026-06-08",hora:"10:30",dur:60,tipo:"Por hacer",prio:"Alta",estatus:"En progreso",avance:60,auditor_id:1,cierre:null,ev:null},
 {id:22,title:"Verificar respaldo semanal",who:"Orlando",area:"Sistemas",area_id:1,proyecto_id:3,date:"2026-06-06",hora:"08:00",dur:30,tipo:"Por hacer",prio:"Media",estatus:"Hecho",avance:100,auditor_id:1,cierre:"2026-06-06",ev:null},
 {id:23,title:"Timbrar nómina de la quincena",who:"Yazmín",area:"Contabilidad",area_id:7,proyecto_id:null,date:"2026-06-15",hora:"12:00",dur:120,tipo:"Por hacer",prio:"Alta",estatus:"Por hacer",avance:0,auditor_id:1,cierre:null,ev:null},
 {id:24,title:"Llamada con asesor de devolución de IVA",who:"Yazmín",area:"Contabilidad",area_id:7,proyecto_id:null,date:"2026-06-09",hora:"16:30",dur:45,tipo:"Llamada",prio:"Media",estatus:"En progreso",avance:35,auditor_id:1,cierre:null,ev:null},
 {id:25,title:"Prospectar arquitectos en Toluca",who:"Citlali",area:"Acristala",area_id:4,proyecto_id:null,date:"2026-06-10",hora:"11:00",dur:60,tipo:"Llamada",prio:"Media",estatus:"Por hacer",avance:0,auditor_id:8,cierre:null,ev:null},
 {id:26,title:"Visita a showroom con cliente potencial",who:"Citlali",area:"Acristala",area_id:4,proyecto_id:null,date:"2026-06-12",hora:"17:00",dur:60,tipo:"Visita",prio:"Alta",estatus:"Por hacer",avance:0,auditor_id:8,cierre:null,ev:null},
 {id:27,title:"Cerrar venta de ventanería residencial",who:"Alejandro",area:"Mercadotecnia",area_id:9,proyecto_id:2,date:"2026-06-07",hora:"13:30",dur:90,tipo:"Llamada",prio:"Alta",estatus:"En revisión",avance:75,auditor_id:1,cierre:null,ev:null},
 {id:28,title:"Enviar cotización a cliente de Houston",who:"Alejandro",area:"Mercadotecnia",area_id:9,proyecto_id:null,date:"2026-06-11",hora:"09:30",dur:30,tipo:"Correo",prio:"Media",estatus:"Por hacer",avance:0,auditor_id:1,cierre:null,ev:null},
 {id:29,title:"Negociar lote de vidrio templado",who:"Mariana",area:"Compras",area_id:6,proyecto_id:1,date:"2026-06-08",hora:"12:00",dur:60,tipo:"Llamada",prio:"Alta",estatus:"En progreso",avance:45,auditor_id:1,cierre:null,ev:null},
 {id:30,title:"Solicitar muestras de perfil PVC",who:"Mariana",area:"Compras",area_id:6,proyecto_id:2,date:"2026-06-13",hora:null,dur:null,tipo:"Correo",prio:"Baja",estatus:"Por hacer",avance:0,auditor_id:2,cierre:null,ev:null},
 {id:31,title:"Coordinar ruta Atlacomulco–Nuevo Laredo",who:"Sergio",area:"Embarques",area_id:5,proyecto_id:null,date:"2026-06-09",hora:"07:30",dur:60,tipo:"Por hacer",prio:"Alta",estatus:"En progreso",avance:50,auditor_id:1,cierre:null,ev:null},
 {id:32,title:"Revisar racks retornables disponibles",who:"Sergio",area:"Embarques",area_id:5,proyecto_id:null,date:"2026-06-06",hora:"14:00",dur:45,tipo:"Por hacer",prio:"Media",estatus:"Hecho",avance:100,auditor_id:1,cierre:"2026-06-06",ev:null},
 {id:33,title:"Programar pagos a proveedores",who:"Paola",area:"Cuentas por pagar",area_id:2,proyecto_id:null,date:"2026-06-10",hora:"10:00",dur:90,tipo:"Por hacer",prio:"Media",estatus:"Por hacer",avance:0,auditor_id:6,cierre:null,ev:null},
 {id:34,title:"Conciliar saldos con proveedor de aluminio",who:"Paola",area:"Cuentas por pagar",area_id:2,proyecto_id:null,date:"2026-06-12",hora:null,dur:null,tipo:"Correo",prio:"Baja",estatus:"En progreso",avance:30,auditor_id:6,cierre:null,ev:null},
 {id:35,title:"Programar corte del lote para El Campanario",who:"Héctor",area:"Producción",area_id:8,proyecto_id:1,date:"2026-06-07",hora:"07:00",dur:240,tipo:"Por hacer",prio:"Alta",estatus:"En progreso",avance:40,auditor_id:2,cierre:null,ev:null},
 {id:36,title:"Mantenimiento del horno de templado",who:"Héctor",area:"Producción",area_id:8,proyecto_id:null,date:"2026-06-11",hora:"08:00",dur:120,tipo:"Por hacer",prio:"Media",estatus:"Por hacer",avance:0,auditor_id:2,cierre:null,ev:null},
 {id:37,title:"Diseñar publicación de Instagram (proyecto Lomas)",who:"Gabriela",area:"Mercadotecnia",area_id:9,proyecto_id:2,date:"2026-06-09",hora:"11:30",dur:120,tipo:"Por hacer",prio:"Baja",estatus:"En progreso",avance:65,auditor_id:8,cierre:null,ev:null},
 {id:38,title:"Editar video corporativo con cámara Sony",who:"Gabriela",area:"Mercadotecnia",area_id:9,proyecto_id:null,date:"2026-06-14",hora:null,dur:null,tipo:"Por hacer",prio:"Baja",estatus:"Por hacer",avance:0,auditor_id:1,cierre:null,ev:null},
 {id:39,title:"Entregar pedido a obra en Querétaro",who:"Ricardo",area:"Embarques",area_id:5,proyecto_id:1,date:"2026-06-10",hora:"06:30",dur:480,tipo:"Visita",prio:"Alta",estatus:"Por hacer",avance:0,auditor_id:10,cierre:null,ev:null},
 {id:40,title:"Gestionar cobranza vencida del mes",who:"Andrea",area:"Cuentas por cobrar",area_id:3,proyecto_id:null,date:"2026-06-08",hora:"15:30",dur:60,tipo:"Llamada",prio:"Alta",estatus:"En progreso",avance:50,auditor_id:6,cierre:null,ev:null},
 {id:41,title:"Instalar cancelería en departamento muestra",who:"Diego",area:"Acristala",area_id:4,proyecto_id:2,date:"2026-06-11",hora:"09:00",dur:240,tipo:"Visita",prio:"Alta",estatus:"Por hacer",avance:0,auditor_id:2,cierre:null,ev:null},
 {id:42,title:"Dar seguimiento a clientes post-venta",who:"Verónica",area:"Mercadotecnia",area_id:9,proyecto_id:null,date:"2026-06-06",hora:"12:48",dur:45,tipo:"Llamada",prio:"Media",estatus:"En progreso",avance:55,auditor_id:8,cierre:null,ev:null},
 {id:43,title:"Organizar agenda de dirección de la semana",who:"Karla",area:"Sistemas",area_id:1,proyecto_id:null,date:"2026-06-08",hora:"08:00",dur:60,tipo:"Por hacer",prio:"Media",estatus:"Hecho",avance:100,auditor_id:1,cierre:"2026-06-06",ev:null},
 {id:44,title:"Confirmar citas con proveedores PVC",who:"Karla",area:"Sistemas",area_id:1,proyecto_id:null,date:"2026-06-13",hora:"10:30",dur:30,tipo:"Llamada",prio:"Baja",estatus:"Por hacer",avance:0,auditor_id:1,cierre:null,ev:null},
];
tasks.forEach(t=>{if(!t.creado&&t.date){const d=new Date(t.date+'T00:00');d.setDate(d.getDate()-5);t.creado=d.toISOString().slice(0,10);}});
(function(){const H={6:'10:00',7:'09:30',8:'11:00',9:'13:00',10:'08:30',11:'12:00',12:'16:00',1:'11:30',2:'15:00',3:'09:00',4:'10:30',5:'14:00'};const TP={1:'Llamada',2:'Visita',3:'Correo',4:'Por hacer',5:'Correo',6:'Por hacer',7:'Visita',8:'Llamada',9:'Visita',10:'Llamada'};const AU={6:5,7:1,8:5,9:5,10:1,11:1,12:1};tasks.forEach(t=>{if(t.hora===undefined)t.hora=H[t.id]||null;if(t.dur===undefined)t.dur=t.hora?60:null;if(t.tipo===undefined)t.tipo=TP[t.id]||'Por hacer';if(t.auditor_id===undefined)t.auditor_id=AU[t.id]||null;if(t.avance===undefined)t.avance=t.estatus==='Hecho'?100:t.estatus==='En revisión'?80:t.estatus==='En progreso'?45:0;if(t.archivado===undefined)t.archivado=([1,32].indexOf(t.id)>=0)?1:0;if(t.colab===undefined){const C={1:[2,5],6:[3,4],7:[2,12],8:[7],9:[16],10:[14],11:[6],15:[3,16,12],17:[4,7],27:[8,13],29:[10],31:[14,10],35:[3,16],39:[10],41:[3,7]};t.colab=C[t.id]||[];}});})();
(function(){const t=tasks.find(x=>x.id==6);if(t){t.descripcion='Coordinar con el cliente la conciliación de la estimación y subir el expediente actualizado a Drive.';t.coms=[{autor:'Omar Vega',foto:'https://randomuser.me/api/portraits/men/32.jpg',texto:'Ya revisé los planos, falta el visto bueno de dirección.',fecha:'5 jun 10:20'},{autor:'Fernando Lovera',foto:'https://randomuser.me/api/portraits/men/45.jpg',texto:'De acuerdo, lo reviso hoy mismo.',fecha:'5 jun 11:05'}];t.adj=[{name:'Estimacion_3.pdf',img:null}];
 const who=t.who,ar=t.area;const base={area:ar,area_id:t.area_id,proyecto_id:t.proyecto_id,hora:null,dur:null,tipo:'Por hacer',auditor_id:null,colab:[],ev:null,creado:today.toISOString().slice(0,10),padre_id:6};
 tasks.push({id:101,title:'Revisar montos con Yazmín',who,estatus:'Hecho',avance:100,date:'2026-06-06',cierre:'2026-06-06',...base});
 tasks.push({id:102,title:'Actualizar expediente en Drive',who,estatus:'En progreso',avance:50,date:'2026-06-08',cierre:null,...base});
 tasks.push({id:103,title:'Enviar correo de confirmación',who,estatus:'Por hacer',avance:0,date:null,cierre:null,...base});}})();
(function(){const set=(id,v)=>{const u=users.find(x=>x.id==id);if(u)u.permisos=v;};set(1,'Dashboard:VECA|Actividades:VECA|Proyectos:VECA|KPIs:VECA|OKRs:VECA|Equipos:VECA|Usuarios:VECA');set(2,'Dashboard:V|Actividades:VEC|Proyectos:VE|KPIs:V|OKRs:V');set(3,'Dashboard:V|Actividades:VE|Proyectos:V');})();
(function(){const who='Fernando',area='Dirección',area_id=10;const c=(d)=>'2026-06-'+String(d).padStart(2,'0');
 const T=[
  {t:'Revisar cotización Vitro Solarban — AGS',e:'Por hacer',a:0,d:c(9),h:'10:00',du:60,ti:'Por hacer',pr:7,au:null,co:[]},
  {t:'Llamada con Fermín Medrano (Vitro USA)',e:'Por hacer',a:0,d:c(8),h:'12:00',du:30,ti:'Llamada',pr:7,au:2,co:[]},
  {t:'Aprobar inversión en maquinaria Forvet',e:'En progreso',a:40,d:c(11),h:'09:30',du:90,ti:'Por hacer',pr:5,au:3,co:[2,3]},
  {t:'Correo a Humberto Figueroa — proveeduría Vitro',e:'Por hacer',a:0,d:c(7),h:'17:00',du:15,ti:'Correo',pr:7,au:null,co:[]},
  {t:'Seguimiento NDA Extrusiones Metálicas',e:'En progreso',a:30,d:c(10),h:null,du:30,ti:'Llamada',pr:5,au:null,co:[]},
  {t:'Revisar contrato Casa Glass Houston',e:'En revisión',a:75,d:c(12),h:'16:00',du:120,ti:'Por hacer',pr:4,au:2,co:[]},
  {t:'Visita a obra El Campanario, Querétaro',e:'Por hacer',a:0,d:c(13),h:'08:00',du:480,ti:'Visita',pr:1,au:null,co:[4,5]},
  {t:'Conciliar comisión Jaime Torres (W-9)',e:'Hecho',a:100,d:c(4),h:'11:00',du:45,ti:'Por hacer',pr:null,au:3,co:[]},
  {t:'Llamada con Laura Fuentes (TUM) — Los Cabos',e:'En progreso',a:50,d:c(9),h:'13:00',du:30,ti:'Llamada',pr:6,au:null,co:[]},
  {t:'Revisar carta garantía FX-62 FENEX',e:'En revisión',a:80,d:c(10),h:'15:00',du:60,ti:'Por hacer',pr:null,au:null,co:[]},
  {t:'Aprobar nómina quincenal con Yazmín',e:'Por hacer',a:0,d:c(14),h:'10:00',du:60,ti:'Por hacer',pr:null,au:null,co:[]},
  {t:'Reunión con Daniela — altas IMSS',e:'En progreso',a:35,d:c(8),h:'09:00',du:45,ti:'Visita',pr:null,au:null,co:[]},
  {t:'Definir compensación vendedor Cancún',e:'Por hacer',a:0,d:c(15),h:null,du:90,ti:'Por hacer',pr:11,au:null,co:[]},
  {t:'Revisar prototipo control de obra',e:'En progreso',a:60,d:c(7),h:'18:00',du:60,ti:'Por hacer',pr:3,au:null,co:[]},
  {t:'Evaluar SAP Business One vs Acumatica',e:'En progreso',a:45,d:c(12),h:null,du:120,ti:'Por hacer',pr:3,au:null,co:[]},
  {t:'Correo a Spencer Lewis (AGS)',e:'Hecho',a:100,d:c(3),h:'09:00',du:15,ti:'Correo',pr:null,au:null,co:[]},
  {t:'Plan de embarque laminado Los Cabos',e:'En progreso',a:55,d:c(11),h:'11:30',du:90,ti:'Por hacer',pr:6,au:null,co:[5]},
  {t:'Revisar perfiles PVC Rehau (Apaseo)',e:'Por hacer',a:0,d:c(16),h:null,du:60,ti:'Visita',pr:null,au:null,co:[]},
  {t:'Cierre de mes — indicadores de dirección',e:'En revisión',a:70,d:c(6),h:'19:00',du:120,ti:'Por hacer',pr:null,au:3,co:[]},
  {t:'Preparar junta de consejo trimestral',e:'Hecho',a:100,d:c(5),h:'10:00',du:180,ti:'Por hacer',pr:null,au:null,co:[]}
 ];
 let nid=200;T.forEach(x=>{tasks.push({id:nid++,title:x.t,who,area,area_id,proyecto_id:x.pr,date:x.d,hora:x.h,dur:x.du,tipo:x.ti,auditor_id:x.au,colab:x.co,avance:x.a,estatus:x.e,cierre:x.e==='Hecho'?x.d:null,ev:null,creado:'2026-06-0'+(1+ (nid%5)),padre_id:null});});})();
(function(){const c=(d)=>'2026-06-'+String(d).padStart(2,'0');
 const N=[
  {w:'Omar',t:'Levantamiento de medidas en obra Las Lomas',e:'En progreso',a:55,d:c(9),h:'09:00',du:180,ti:'Visita',pr:2,au:1,co:[16],ds:'Acudir a Residencial Las Lomas para tomar medidas finales de los vanos antes de mandar a fabricar. Verificar plomos y niveles con el residente de obra, levantar fotos para el expediente y confirmar con producción los tiempos de corte y templado.'},
  {w:'Omar',t:'Cotización de muro cortina — El Campanario',e:'En revisión',a:80,d:c(10),h:'12:00',du:120,ti:'Por hacer',pr:1,au:1,co:[],ds:'Integrar la cotización del muro cortina con vidrio templado 6+6 y perfilería de aluminio. Cruzar precios de Winperfil y EasyGlass contra el catálogo de conceptos y dejar margen revisado por dirección antes de enviar al cliente.'},
  {w:'Raúl',t:'Programar fabricación de cancelería PVC',e:'En progreso',a:40,d:c(11),h:null,du:90,ti:'Por hacer',pr:2,au:null,co:[12],ds:'Generar la orden de fabricación de cancelería PVC para los 12 departamentos, validando perfiles, refuerzos y herrajes. Coordinar con Héctor la secuencia de producción para no frenar la línea de templado.'},
  {w:'Raúl',t:'Coordinar cuadrilla de instalación',e:'Por hacer',a:0,d:c(14),h:'08:00',du:240,ti:'Visita',pr:2,au:null,co:[16],ds:'Armar la cuadrilla y el rol de instalación de la semana, confirmando herramienta, andamios y equipo de seguridad. Dejar definidos los frentes de trabajo y las metas diarias por instalador.'},
  {w:'Liz',t:'Integrar expediente de obra — estimación 4',e:'En progreso',a:60,d:c(9),h:'16:00',du:120,ti:'Por hacer',pr:1,au:null,co:[],ds:'Reunir generadores, fotos y soporte para la estimación 4 y subir el expediente actualizado a Drive. Conciliar montos con Yazmín antes de enviar al cliente para firma.'},
  {w:'Liz',t:'Conciliar avance contra catálogo de conceptos',e:'Por hacer',a:0,d:c(12),h:null,du:90,ti:'Por hacer',pr:1,au:1,co:[],ds:'Cruzar el avance físico reportado en obra contra el catálogo de conceptos para detectar desviaciones. Marcar conceptos terminados, en proceso y pendientes para el corte quincenal.'},
  {w:'Orlando',t:'Migrar respaldos al nuevo NAS',e:'En progreso',a:35,d:c(10),h:'18:00',du:120,ti:'Por hacer',pr:3,au:1,co:[],ds:'Configurar el nuevo NAS y migrar los respaldos automáticos de Microsip, EasyGlass y los compartidos. Verificar integridad de la copia y dejar programada la rutina nocturna con alertas por correo.'},
  {w:'Orlando',t:'Configurar accesos del Sistema de Desempeño',e:'Por hacer',a:0,d:c(13),h:null,du:60,ti:'Por hacer',pr:3,au:1,co:[],ds:'Dar de alta a los usuarios del Sistema de Desempeño con sus permisos por módulo (ver, editar, comentar, autorizar). Validar el acceso por área y reimportar el esquema antes del despliegue.'},
  {w:'Yazmín',t:'Cierre contable de mayo',e:'En revisión',a:75,d:c(8),h:'17:00',du:180,ti:'Por hacer',pr:null,au:1,co:[11],ds:'Cerrar pólizas de mayo, conciliar bancos y revisar cuentas por pagar y por cobrar. Preparar el estado de resultados preliminar para revisión de dirección.'},
  {w:'Yazmín',t:'Timbrado de CFDI pendientes',e:'Por hacer',a:0,d:c(11),h:'10:00',du:60,ti:'Por hacer',pr:null,au:null,co:[],ds:'Revisar y timbrar los CFDI pendientes del periodo, validando RFC, uso de CFDI y método de pago. Enviar comprobantes a clientes y archivar los XML en el expediente fiscal.'},
  {w:'Citlali',t:'Prospección de arquitectos en Querétaro',e:'En progreso',a:45,d:c(9),h:'11:00',du:90,ti:'Llamada',pr:null,au:null,co:[],ds:'Contactar despachos de arquitectura en Querétaro para presentar las soluciones de vidrio y cancelería. Registrar cada contacto en HubSpot con su etapa y agendar seguimiento.'},
  {w:'Citlali',t:'Seguimiento a leads de la feria',e:'Por hacer',a:0,d:c(12),h:null,du:60,ti:'Correo',pr:null,au:null,co:[13],ds:'Dar seguimiento por correo a los prospectos capturados en la feria, enviando portafolio y casos de éxito. Calificar interés y canalizar los leads calientes a ventas.'},
  {w:'Alejandro',t:'Cotizar domos para cliente Covent',e:'En progreso',a:50,d:c(10),h:'13:00',du:90,ti:'Correo',pr:null,au:1,co:[],ds:'Preparar la cotización de domos de policarbonato y vidrio para Covent, considerando estructura y sellado. Confirmar disponibilidad de material y tiempo de entrega con compras.'},
  {w:'Alejandro',t:'Visita técnica — Península Residences',e:'Por hacer',a:0,d:c(13),h:'09:30',du:180,ti:'Visita',pr:null,au:null,co:[],ds:'Realizar visita técnica a Península Residences para validar alcance y condiciones de instalación. Tomar fotos y medidas de referencia y levantar requerimientos especiales del cliente.'},
  {w:'Mariana',t:'Orden de compra de vidrio flotado',e:'En progreso',a:40,d:c(9),h:null,du:45,ti:'Correo',pr:5,au:null,co:[],ds:'Generar la orden de compra de vidrio flotado claro y bronce según el consumo proyectado. Confirmar precios vigentes, condiciones de pago y fecha de entrega con el proveedor.'},
  {w:'Mariana',t:'Negociar flete con proveedor',e:'Por hacer',a:0,d:c(12),h:'12:30',du:30,ti:'Llamada',pr:5,au:null,co:[10],ds:'Negociar tarifa y tiempos de flete para el siguiente embarque, comparando al menos dos transportistas. Cerrar la mejor opción y documentar el acuerdo para JFC.'},
  {w:'Sergio',t:'Programar embarque a Los Cabos',e:'En progreso',a:50,d:c(11),h:'08:00',du:120,ti:'Por hacer',pr:6,au:1,co:[14],ds:'Programar el embarque de vidrio laminado insulado a Los Cabos, definiendo ruta, rack y aseguramiento de la carga. Coordinar con TUM la cita de entrega y el respaldo documental.'},
  {w:'Sergio',t:'Revisar documentación de aduana',e:'Por hacer',a:0,d:c(13),h:null,du:60,ti:'Por hacer',pr:6,au:null,co:[],ds:'Revisar que la documentación de exportación esté completa: factura, packing list y certificados. Validar con el agente aduanal para evitar demoras en el cruce.'},
  {w:'Héctor',t:'Plan de producción semanal de templado',e:'En progreso',a:60,d:c(8),h:'07:30',du:90,ti:'Por hacer',pr:null,au:null,co:[],ds:'Definir la secuencia semanal del horno de templado priorizando las obras con fecha comprometida. Balancear cargas para reducir mermas y tiempos muertos de la línea.'},
  {w:'Héctor',t:'Mantenimiento del horno de templado',e:'Por hacer',a:0,d:c(15),h:'17:00',du:120,ti:'Visita',pr:null,au:null,co:[],ds:'Programar el mantenimiento preventivo del horno de templado: rodillos, resistencias y calibración. Dejar bitácora del servicio y refacciones utilizadas.'},
  {w:'Gabriela',t:'Catálogo digital marca Acristala',e:'En progreso',a:30,d:c(12),h:null,du:180,ti:'Por hacer',pr:null,au:null,co:[17],ds:'Diseñar el catálogo digital de ventanería y cancelería Acristala con fichas técnicas y fotos de obra. Alinear identidad visual y preparar versión para redes y correo.'},
  {w:'Andrea',t:'Cobranza de facturas vencidas',e:'En progreso',a:55,d:c(9),h:'10:30',du:90,ti:'Llamada',pr:null,au:1,co:[],ds:'Dar seguimiento telefónico a clientes con facturas vencidas y acordar fechas de pago. Actualizar el estatus de cada cuenta y escalar los casos críticos a dirección.'},
  {w:'Diego',t:'Instalación de barandales — El Campanario',e:'Por hacer',a:0,d:c(14),h:'08:00',du:480,ti:'Visita',pr:1,au:null,co:[],ds:'Instalar barandales de vidrio templado con herrajes de acero inoxidable en El Campanario. Verificar anclajes, niveles y silicón estructural, y dejar la zona limpia y protegida.'},
  {w:'Verónica',t:'Atención de garantías y quejas',e:'En progreso',a:40,d:c(10),h:null,du:60,ti:'Llamada',pr:null,au:null,co:[],ds:'Atender las solicitudes de garantía y quejas de clientes, documentando cada caso en HubSpot. Coordinar con producción e instalación la solución y dar seguimiento hasta el cierre.'},
  {w:'Karla',t:'Agenda y minutas de dirección',e:'Hecho',a:100,d:c(5),h:'09:00',du:60,ti:'Por hacer',pr:null,au:1,co:[],ds:'Preparar la agenda de la semana de dirección y levantar minutas con acuerdos y responsables. Distribuir pendientes y dar seguimiento a los compromisos de la junta anterior.'}
 ];
 let nid=300;N.forEach(x=>{const u=users.find(y=>y.nombre===x.w)||{};tasks.push({id:nid++,title:x.t,who:x.w,area:u.area||'—',area_id:null,proyecto_id:x.pr||null,date:x.d,hora:x.h||null,dur:x.du||null,tipo:x.ti,auditor_id:x.au||null,colab:x.co||[],avance:x.a,estatus:x.e,cierre:x.e==='Hecho'?x.d:null,ev:null,creado:'2026-06-0'+(1+(nid%5)),descripcion:x.ds,padre_id:null});});})();
(function(){const ctx=['Coordinar con el área correspondiente y dejar la evidencia en el expediente.','Validar la información con el cliente y registrar los acuerdos en HubSpot.','Revisar medidas, especificaciones del vidrio y condiciones de entrega.','Confirmar tiempos con producción y logística antes de comprometer la fecha.','Asegurar que la documentación quede firmada y archivada en Drive.','Dar seguimiento puntual y avisar a dirección de cualquier desviación.'];
 const verb={'Llamada':'Realizar la llamada','Correo':'Enviar el correo','Visita':'Atender la visita en sitio','Por hacer':'Atender la tarea'};
 tasks.forEach(t=>{if(!t.descripcion){const v=verb[t.tipo]||'Atender la tarea';t.descripcion=`${v}: ${t.title}. Responsable: ${t.who}. ${ctx[t.id%ctx.length]}`;}});})();
let projects=[
 {id:1,nombre:"Fachada El Campanario",descripcion:"Muro cortina y fachada de vidrio templado",area:"Acristala",lider:"Omar",estado:"Activo"},
 {id:2,nombre:"Residencial Las Lomas",descripcion:"Ventanería PVC para 12 departamentos",area:"Acristala",lider:"Raúl",estado:"Activo"},
 {id:3,nombre:"Modernización TI",descripcion:"Respaldos y accesos del nuevo sistema",area:"Sistemas",lider:"Orlando",estado:"Activo"},
 {id:4,nombre:"Casa Glass Houston",descripcion:"Apertura de showroom y taller en Houston (Megaglass USA)",area:"Ventas",lider:"Fernando",estado:"Activo"},
 {id:5,nombre:"Premarco MIX-3327",descripcion:"Premarcos con Extrusiones Metálicas",area:"Compras",lider:"Omar",estado:"Activo"},
 {id:6,nombre:"Embarque Los Cabos",descripcion:"Vidrio laminado insulado para Los Cabos",area:"Embarques",lider:"Fernando",estado:"Activo"},
 {id:7,nombre:"Proveeduría Vitro USA",descripcion:"Alta como proveedor Vitro en el mercado de EE. UU.",area:"Ventas",lider:"Fernando",estado:"Activo"},
];
const kpis=[
 {persona:"Omar",area:"Acristala",kpis:[{n:"Presupuestos a tiempo",w:20,v:88},{n:"Exactitud de presupuesto",w:20,v:92},{n:"Proyectos a tiempo",w:20,v:78},{n:"Tasa de cierre",w:10,v:64},{n:"Cumplimiento del equipo",w:15,v:82},{n:"Tareas cumplidas en fecha",w:15,v:90,live:true}]},
 {persona:"Raúl",area:"Acristala",kpis:[{n:"Presupuestos a tiempo",w:25,v:80},{n:"Exactitud de presupuesto",w:25,v:85},{n:"Proyectos a tiempo",w:25,v:70},{n:"Tasa de cierre",w:10,v:55},{n:"Tareas cumplidas en fecha",w:15,v:90,live:true}]},
 {persona:"Liz",area:"Acristala",kpis:[{n:"Presupuestos a tiempo",w:20,v:90},{n:"Exactitud de presupuesto",w:15,v:88},{n:"Expediente de obra al día",w:25,v:72},{n:"Estimaciones a tiempo",w:25,v:68},{n:"Tareas cumplidas en fecha",w:15,v:90,live:true}]},
 {persona:"Orlando",area:"Sistemas",kpis:[{n:"Disponibilidad de sistemas",w:30,v:95},{n:"Tickets resueltos a tiempo",w:25,v:82},{n:"Respaldos verificados",w:20,v:100},{n:"Proyectos de TI a tiempo",w:10,v:70},{n:"Tareas cumplidas en fecha",w:15,v:90,live:true}]},
 {persona:"Yazmín",area:"Contabilidad",kpis:[{n:"Cierre mensual a tiempo",w:30,v:75},{n:"Exactitud contable",w:25,v:90},{n:"Cumplimiento CFDI/SAT",w:20,v:95},{n:"Conciliaciones al día",w:10,v:60},{n:"Tareas cumplidas en fecha",w:15,v:90,live:true}]},
 {persona:"Alejandro",area:"Mercadotecnia",kpis:[{n:"Cuota de ventas",w:35,v:84},{n:"Prospectos nuevos",w:20,v:78},{n:"Tasa de cierre",w:20,v:66},{n:"Cotizaciones a tiempo",w:10,v:88},{n:"Tareas cumplidas en fecha",w:15,v:90,live:true}]},
 {persona:"Héctor",area:"Producción",kpis:[{n:"Producción a tiempo",w:30,v:81},{n:"Merma de material",w:25,v:92},{n:"Reprocesos",w:20,v:70},{n:"Seguridad en planta",w:10,v:100},{n:"Tareas cumplidas en fecha",w:15,v:90,live:true}]},
 {persona:"Sergio",area:"Embarques",kpis:[{n:"Entregas a tiempo",w:35,v:88},{n:"Daños en transporte",w:25,v:95},{n:"Optimización de rutas",w:15,v:72},{n:"Documentación completa",w:10,v:90},{n:"Tareas cumplidas en fecha",w:15,v:90,live:true}]},
];
const okrs=[
 {nivel:"Área",owner:"Acristala",obj:"Consolidar la operación de ventanería para entrar a EE.UU.",krs:[{k:"Cerrar 8 proyectos de ventanería en el trimestre",p:50},{k:"Bajar reprocesos de fabricación al 5%",p:70},{k:"Certificar 1 línea de producto impacto",p:30}]},
 {nivel:"Área",owner:"Sistemas",obj:"Dejar la infraestructura lista para la nueva app de desempeño",krs:[{k:"Migrar respaldos a esquema automático",p:100},{k:"Habilitar accesos por área",p:55}]},
 {nivel:"Área",owner:"Contabilidad",obj:"Acelerar y blindar el cierre financiero",krs:[{k:"Cerrar el mes en 5 días hábiles",p:45},{k:"Cero observaciones de auditoría",p:80}]},
 {nivel:"Persona",owner:"Omar",obj:"Elevar la calidad y velocidad de presupuestos",krs:[{k:"Entregar 95% de presupuestos en 48h",p:72},{k:"Mantener desviación de costo bajo ±8%",p:85}]},
 {nivel:"Persona",owner:"Citlali",obj:"Activar la base de Inforte cargada en HubSpot",krs:[{k:"Contactar el 100% de la base (1,200 registros)",p:62},{k:"Generar 40 leads calificados",p:48}]},
 {nivel:"Persona",owner:"Liz",obj:"Tener el control administrativo de obra al día",krs:[{k:"100% de expedientes completos",p:74},{k:"Emitir estimaciones dentro de los 3 días",p:66}]},
];

function entrar(){document.getElementById('login').style.display='none';document.getElementById('appRoot').style.display='grid';}
function salir(){document.getElementById('appRoot').style.display='none';document.getElementById('login').style.display='flex';}
function toggleSidebar(){const a=document.querySelector('.app');if(!a)return;const c=a.classList.toggle('collapsed');try{localStorage.setItem('kafer_sidebar',c?'1':'0');}catch(e){}}
(function(){try{if(localStorage.getItem('kafer_sidebar')==='1'){const a=document.querySelector('.app');if(a)a.classList.add('collapsed');}}catch(e){}})();

const fa=document.getElementById('fArea'),ua=document.getElementById('uArea'),fw=document.getElementById('fWho'),pa=document.getElementById('pArea'),pl=document.getElementById('pLider'),fproj=document.getElementById('fProj');
AREAS.forEach(a=>{fa.add(new Option(a.nombre,a.id));ua.add(new Option(a.nombre,a.id));pa.add(new Option(a.nombre,a.id));});
let BOARD_VIEW='lista',CAL=null,CAL_MODE='semana';
const TIPOS=['Por hacer','Llamada','Correo','Visita'];
const TIPO_IC={'Por hacer':'📋','Llamada':'📞','Correo':'✉️','Visita':'📍'};
const ACWN={nombre:260,tipo:160,date:180,dur:120,who:160,colab:170,auditor:180,proyecto:190,estatus:150,avance:180,creado:150,descripcion:300};
let ACOLS=[{k:'nombre',label:'Nombre'},{k:'tipo',label:'Tipo de actividad'},{k:'date',label:'Fecha de entrega'},{k:'dur',label:'Duración'},{k:'who',label:'Responsable'},{k:'auditor',label:'Auditor'},{k:'colab',label:'Colaboradores'},{k:'proyecto',label:'Proyecto'},{k:'estatus',label:'Estatus'},{k:'avance',label:'Avance'},{k:'creado',label:'Fecha de creación'},{k:'descripcion',label:'Descripción'}].map(c=>({...c,on:true,frozen:c.k==='nombre',w:ACWN[c.k]||150}));
const ACOLS_MASTER=ACOLS.map(c=>({k:c.k,label:c.label}));
function reconcileCols(cols){cols=cols.filter(c=>ACOLS_MASTER.some(m=>m.k===c.k));cols.forEach(c=>{const m=ACOLS_MASTER.find(x=>x.k===c.k);if(m)c.label=m.label;c.w=Math.max(80,Math.min(c.w||ACWN[c.k]||150,560));});ACOLS_MASTER.forEach((m,idx)=>{if(!cols.some(c=>c.k===m.k)){let at=cols.length;for(let j=idx-1;j>=0;j--){const pi=cols.findIndex(c=>c.k===ACOLS_MASTER[j].k);if(pi>=0){at=pi+1;break;}}cols.splice(at,0,{k:m.k,label:m.label,on:true,w:ACWN[m.k]||150});}});const nm=cols.find(c=>c.k==='nombre');if(nm)nm.frozen=true;return cols;}
function userAva(u){if(!u)return '';const nm=(u.nombre+' '+(u.apellidos||'')).trim();const ini=(u.nombre||'?').charAt(0).toUpperCase();return u.foto?`<img class="ava-mini" src="${u.foto}" title="${nm}" alt="">`:`<span class="ava-mini ini" title="${nm}">${ini}</span>`;}
function fmtHora(h){if(!h)return'';const p=String(h).split(':');let H=+p[0],M=+p[1]||0;const ap=H>=12?'pm':'am';let hh=H%12;if(hh===0)hh=12;return `${hh}:${String(M).padStart(2,'0')}${ap}`;}
function fmtDur(m){if(!m)return'—';m=+m;if(m<60)return m+' min';return (m%60===0)?(m/60)+' h':Math.floor(m/60)+' h '+(m%60)+' min';}
let ASORT={k:null,dir:1};
let ASEARCH='';
let QADD=null;
let EXPANDED=new Set();
function onActSearch(v){ASEARCH=(v||'').trim().toLowerCase();const b=document.getElementById('board');if(b)renderListView(b,boardTasks().filter(taskPassesFilters).filter(t=>!t.archivado&&!t.padre_id));}
let ACTVIEWS=[{name:'Todas las columnas',cols:null,sort:{k:null,dir:1}}];
let ACTVIEW=0,_viewsInit=false;
function ensureViews(){if(_viewsInit)return;_viewsInit=true;try{const r=localStorage.getItem('kafer_actviews');if(r){const o=JSON.parse(r);if(o&&o.views&&o.views.length){ACTVIEWS=o.views;ACTVIEW=o.active||0;}}}catch(e){}
 if(!ACTVIEWS[ACTVIEW])ACTVIEW=0;if(!ACTVIEWS[0].cols)ACTVIEWS[0].cols=ACOLS.map(c=>({...c}));
 ACTVIEWS.forEach(v=>{if(v.cols)v.cols=reconcileCols(v.cols);});
 const v=ACTVIEWS[ACTVIEW];if(v.cols)ACOLS=v.cols.map(c=>({...c}));ASORT={k:(v.sort&&v.sort.k)||null,dir:(v.sort&&v.sort.dir)||1};}
function saveViews(){try{localStorage.setItem('kafer_actviews',JSON.stringify({views:ACTVIEWS,active:ACTVIEW}));}catch(e){}}
function syncView(){if(ACTVIEWS[ACTVIEW]){ACTVIEWS[ACTVIEW].cols=ACOLS.map(c=>({...c}));ACTVIEWS[ACTVIEW].sort={...ASORT};saveViews();}}
function applyView(i){if(i<0||i>=ACTVIEWS.length)i=0;ACTVIEW=i;const v=ACTVIEWS[i];if(v.cols)ACOLS=v.cols.map(c=>({...c}));ASORT={k:(v.sort&&v.sort.k)||null,dir:(v.sort&&v.sort.dir)||1};saveViews();renderBoard();}
function addView(){const n=prompt('Nombre de la nueva vista (configuración de columnas):');if(!n||!n.trim())return;ACTVIEWS.push({name:n.trim(),cols:ACOLS.map(c=>({...c})),sort:{...ASORT},filters:[]});ACTVIEW=ACTVIEWS.length-1;saveViews();renderBoard();openFilters();}
function renameView(i){const n=prompt('Nuevo nombre de la vista:',ACTVIEWS[i].name);if(n&&n.trim()){ACTVIEWS[i].name=n.trim();saveViews();renderBoard();}}
function delView(i){if(i===0)return;if(!confirm('¿Eliminar esta vista?'))return;ACTVIEWS.splice(i,1);if(ACTVIEW>=ACTVIEWS.length)ACTVIEW=ACTVIEWS.length-1;else if(ACTVIEW>i)ACTVIEW--;applyView(ACTVIEW);}
function renderViewsBar(){const bar=document.getElementById('actViews');if(!bar)return;const chips=ACTVIEWS.map((v,i)=>`<button class="vchip ${i===ACTVIEW?'on':''}" onclick="applyView(${i})" ondblclick="renameView(${i})" title="Doble clic para renombrar">${v.name}${i>0?`<span class="vx" onclick="event.stopPropagation();delView(${i})" title="Eliminar vista">×</span>`:''}</button>`).join('');bar.innerHTML=`${chips}<button class="vadd" onclick="addView()">＋ Agregar vista (${ACTVIEWS.length}/50)</button><div class="vall-wrap"><button class="vall-btn" onclick="toggleAllViews(event)">Todas las vistas ▾</button><div id="viewsAllPop" class="vall-pop" style="display:none"></div></div>`;}
const SHARED_VIEWS=[
 {name:'Llamadas de la semana',owner:'Citlali Ruíz',keys:['nombre','who','date','dur','estatus','avance'],sort:{k:'date',dir:1},filters:[{k:'tipo',type:'enum',values:['Llamada']}]},
 {name:'Visitas a obra',owner:'Omar Vega',keys:['nombre','who','date','proyecto','colab','estatus'],sort:{k:'date',dir:1},filters:[{k:'tipo',type:'enum',values:['Visita']}]},
 {name:'Pendientes de revisión',owner:'Yazmín Lara',keys:['nombre','who','auditor','proyecto','estatus','avance'],sort:{k:null,dir:1},filters:[{k:'estatus',type:'enum',values:['En revisión']}]},
 {name:'Cierre de dirección',owner:'Karla Estrada',keys:['nombre','who','proyecto','estatus','avance','creado'],sort:{k:'creado',dir:-1},filters:[{k:'who',type:'enum',values:['Fernando']}]}
];
function vlbl(k){const m=ACOLS_MASTER.find(x=>x.k===k);return m?m.label:k;}
function makeCols(keys){const set=new Set(keys);const inc=keys.map(k=>({k,label:vlbl(k),on:true,frozen:k==='nombre',w:ACWN[k]||150}));const rest=ACOLS_MASTER.filter(m=>!set.has(m.k)).map(m=>({k:m.k,label:m.label,on:false,frozen:false,w:ACWN[m.k]||150}));const cols=[...inc,...rest];if(!cols.some(c=>c.k==='nombre'))cols.unshift({k:'nombre',label:'Nombre',on:true,frozen:true,w:ACWN.nombre});const nm=cols.find(c=>c.k==='nombre');if(nm){nm.on=true;nm.frozen=true;}return cols;}
function toggleAllViews(e){if(e)e.stopPropagation();const pop=document.getElementById('viewsAllPop');if(!pop)return;if(pop.style.display==='none'||!pop.style.display){renderAllViewsPop();pop.style.display='block';setTimeout(()=>document.addEventListener('mousedown',vallOutside,true),0);}else closeAllViews();}
function closeAllViews(){const pop=document.getElementById('viewsAllPop');if(pop)pop.style.display='none';document.removeEventListener('mousedown',vallOutside,true);}
function vallOutside(e){if(!e.target.closest('.vall-wrap'))closeAllViews();}
function renderAllViewsPop(){const pop=document.getElementById('viewsAllPop');if(!pop)return;
 const mine=ACTVIEWS.map((v,i)=>`<button class="vall-item ${i===ACTVIEW?'on':''}" onclick="applyView(${i});closeAllViews()"><span>${esc(v.name)}${v.shared?' <span class=\"vall-tag\">importada</span>':''}</span>${i===ACTVIEW?'<span class=\"vall-ck\">\u2713</span>':''}</button>`).join('');
 const others=SHARED_VIEWS.map((v,i)=>`<button class="vall-item" onclick="importSharedView(${i})" title="Agregar a mis vistas"><span>${esc(v.name)}</span><span class="vall-owner">${esc(v.owner)}</span></button>`).join('');
 pop.innerHTML=`<div class="vall-h">Mis vistas</div>${mine}<div class="vall-h">De otros usuarios</div>${others||'<div class="vall-empty">Sin vistas compartidas.</div>'}`;}
function importSharedView(i){const v=SHARED_VIEWS[i];if(!v)return;const ex=ACTVIEWS.findIndex(x=>x.name===v.name&&x.owner===v.owner);if(ex>=0){applyView(ex);closeAllViews();return;}ACTVIEWS.push({name:v.name,cols:makeCols(v.keys),sort:v.sort||{k:null,dir:1},filters:JSON.parse(JSON.stringify(v.filters||[])),shared:true,owner:v.owner});ACTVIEW=ACTVIEWS.length-1;saveViews();closeAllViews();renderBoard();}
(function(){const pf=document.getElementById('personFilter');if(!pf)return;pf.add(new Option('Todas las personas',''));users.forEach(u=>pf.add(new Option((u.nombre+' '+(u.apellidos||'')).trim(),u.id)));pf.value=1;onPersonChange();})();
(function(){const ea=document.getElementById('eArea');if(ea)AREAS.forEach(a=>ea.add(new Option(a.nombre,a.id)));})();
function fillTeamSelect(){['uEquipo','eEquipo'].forEach(id=>{const s=document.getElementById(id);if(!s)return;s.innerHTML='<option value="">— Sin equipo —</option>';EQUIPOS.forEach(e=>s.add(new Option(e.nombre,e.id)));});}
fillTeamSelect();fillBulkTeam();
users.forEach(u=>{const lbl=(u.nombre+' '+(u.apellidos||'')).trim();fw.add(new Option(lbl,u.id));pl.add(new Option(lbl,u.id));});
projects.forEach(p=>fproj.add(new Option(p.nombre,p.id)));
document.getElementById('uFoto').onchange=function(){const f=this.files[0];const p=document.getElementById('uFotoPrev');if(f){const r=new FileReader();r.onload=e=>{p.src=e.target.result;p.classList.add('on');};r.readAsDataURL(f);}};

function status(t){if(t.estatus==="Hecho")return parse(t.cierre)<=parse(t.date)?"ok":"tarde";return parse(t.date)<today?"late":"pend";}
function cump(list){const e=list.filter(t=>["ok","tarde","late"].includes(status(t)));const o=e.filter(t=>status(t)==="ok").length;return{pct:e.length?o/e.length:null,evald:e.length,late:list.filter(t=>status(t)==="late").length};}
function nav(v){document.querySelectorAll('.nav').forEach(n=>n.classList.toggle('active',n.dataset.v===v));document.querySelectorAll('.view').forEach(s=>s.classList.toggle('show',s.id==='view-'+v));
 const T={dashboard:["Dashboard","Vista general del desempeño del equipo"],board:["Actividades","Actividades del personal por vista"],proyectos:["Proyectos","Tareas agrupadas por proyecto"],kpis:["KPIs","Indicadores por persona y área"],okrs:["OKRs","Objetivos y resultados clave"],equipos:["Equipos","Equipos del grupo y sus integrantes"],usuarios:["Usuarios","Altas de acceso al sistema"],cuenta:["Mi cuenta","Datos de tu acceso"]};
 if(T[v]){document.getElementById('ttl').textContent=T[v][0];document.getElementById('sub').textContent=T[v][1];}
 if(v==='dashboard')renderDash();if(v==='kpis')renderKpi();if(v==='okrs')renderOkr();if(v==='usuarios')renderUsers();if(v==='equipos')renderTeams();if(v==='proyectos')renderProjects();}
function bar(nm,v,c){return `<div class="barrow"><span class="nm">${nm}</span><div class="track"><div class="fill ${c}" style="width:${v}%"></div></div><span class="pv">${v}%</span></div>`;}
function renderDash(){const g=cump(tasks);const dp=document.getElementById('dPct');dp.textContent=g.pct!=null?Math.round(g.pct*100)+'%':'—';dp.className='num '+(g.pct>=.9?'ok':g.pct>=.7?'warn':'bad');
 document.getElementById('dLate').textContent=g.late;const sc=kpis.map(kpiScore);document.getElementById('dKpi').textContent=Math.round(avg(sc));
 document.getElementById('dOkr').textContent=okrs.filter(o=>avg(o.krs.map(k=>k.p))<50).length;
 let h='';AREAS.forEach(a=>{const c=cump(tasks.filter(t=>t.area_id===a.id));if(c.evald)h+=bar(a.nombre,Math.round(c.pct*100),cls(c.pct));});document.getElementById('dByArea').innerHTML=h||'<div class="ph">Sin datos</div>';
 const pe=[...new Set(tasks.map(t=>t.who))].map(w=>({w,c:cump(tasks.filter(t=>t.who===w))})).filter(x=>x.c.evald).sort((a,b)=>b.c.pct-a.c.pct);
 document.getElementById('dByPerson').innerHTML=pe.map(x=>bar(x.w,Math.round(x.c.pct*100),cls(x.c.pct))).join('');}
let kpiMode='persona';function setKpi(m){kpiMode=m;document.getElementById('kPer').classList.toggle('on',m==='persona');document.getElementById('kAr').classList.toggle('on',m==='area');renderKpi();}
function personPct(name){return cump(tasks.filter(t=>t.who===name)).pct;}
function kpiScore(k){let s=0;k.kpis.forEach(x=>{let v=x.live&&personPct(k.persona)!=null?Math.round(personPct(k.persona)*100):x.v;s+=x.w*v;});return Math.round(s/100);}
function renderKpi(){const body=document.getElementById('kpiBody');
 if(kpiMode==='persona'){body.className='kgrid';body.innerHTML=kpis.map(k=>{const sc=kpiScore(k),col=sc>=90?'var(--green)':sc>=70?'var(--amber)':'var(--red)';
  const lines=k.kpis.map(x=>{let v=x.live&&personPct(k.persona)!=null?Math.round(personPct(k.persona)*100):x.v;const cc=v>=90?'g':v>=70?'a':'r',bg=cc=='g'?'var(--green)':cc=='a'?'var(--amber)':'var(--red)';return `<div class="kpi-line"><div><span>${x.n}</span><div class="mini"><i class="fill ${cc}" style="width:${v}%;background:${bg}"></i></div></div><span style="text-align:right;font-weight:700">${v}</span><span class="kw">peso ${x.w}%</span></div>`;}).join('');
  return `<div class="kcard"><div class="head"><div><div class="who">${k.persona}</div><span class="ar">${k.area}</span></div><div class="score" style="color:${col}">${sc}</div></div>${lines}</div>`;}).join('');}
 else{body.className='';const byA={};kpis.forEach(k=>{(byA[k.area]=byA[k.area]||[]).push(kpiScore(k));});let h='<div class="panel"><h2>Calificación promedio por área</h2><div class="ph">promedio de las personas medidas</div>';Object.keys(byA).forEach(a=>{const v=Math.round(avg(byA[a]));h+=bar(a,v,v>=90?'g':v>=70?'a':'r');});body.innerHTML=h+'</div>';}}
let okrMode='Área';function setOkr(m){okrMode=m;document.getElementById('oArea').classList.toggle('on',m==='Área');document.getElementById('oPer').classList.toggle('on',m==='Persona');renderOkr();}
function renderOkr(){const list=okrs.filter(o=>o.nivel===okrMode);document.getElementById('okrBody').innerHTML=list.map(o=>{const ov=Math.round(avg(o.krs.map(k=>k.p)));const krs=o.krs.map(k=>`<div class="kr"><span>${k.k}</span><div class="track"><div class="fill ${cls(k.p/100)}" style="width:${k.p}%"></div></div><span class="pv">${k.p}%</span></div>`).join('');return `<div class="okr"><span class="tag ${o.nivel==='Área'?'area':'per'}">${o.nivel}: ${o.owner}</span><div class="obj">${o.obj}</div><div class="owner">Avance global: <b style="color:${ov>=70?'var(--green)':ov>=40?'var(--amber)':'var(--red)'}">${ov}%</b></div>${krs}</div>`;}).join('');}
function setBoardView(v){BOARD_VIEW=v;document.querySelectorAll('.act-tab').forEach(t=>t.classList.toggle('active',t.dataset.bv===v));renderBoard();}
function boardPerson(){const el=document.getElementById('personFilter');const v=el?el.value:'';return v?users.find(u=>u.id==v):null;}
function avatarMini(p){if(!p)return '<svg viewBox="0 0 24 24" class="pp-ic"><circle cx="8" cy="9" r="2.4"/><circle cx="16" cy="9" r="2.4"/><path d="M3.5 19c0-2.6 2-4.2 4.5-4.2s4.5 1.6 4.5 4.2"/><path d="M13.5 14.9c2.3-.2 4.5 1.4 4.5 4.1"/></svg>';const ini=(p.nombre||'?').charAt(0).toUpperCase();return p.foto?`<img src="${p.foto}">`:`<span class="pp-ini">${ini}</span>`;}
function onPersonChange(){const a=document.getElementById('boardAva');if(a)a.innerHTML=avatarMini(boardPerson());renderBoard();}
function boardTasks(){const p=boardPerson();let v=tasks.slice();if(p)v=v.filter(t=>t.who===p.nombre||(t.colab||[]).some(id=>id==p.id));return v;}
function renderBoard(){const board=document.getElementById('board');if(!board)return;ensureViews();const all=boardTasks().filter(taskPassesFilters),note=document.getElementById('boardNote');
 const vbar=document.getElementById('actViews');if(vbar){vbar.style.display=(BOARD_VIEW==='lista')?'':'none';if(BOARD_VIEW==='lista')renderViewsBar();}
 const sbar=document.getElementById('actSearch');if(sbar)sbar.style.display=(BOARD_VIEW==='lista')?'':'none';
 const _cb=document.getElementById('actColBtn');const _sv=document.getElementById('actSaveBtn');if(_cb)_cb.style.display=(BOARD_VIEW==='lista')?'':'none';if(_sv)_sv.style.display=(BOARD_VIEW==='lista')?'':'none';const _fb=document.getElementById('actFilterBtn');if(_fb)_fb.style.display=(BOARD_VIEW==='lista')?'':'none';updFilterCount();renderFilterSummary();
 const cb=document.getElementById('actColBtn');if(cb)cb.style.display=(BOARD_VIEW==='lista')?'':'none';
 if(BOARD_VIEW==='archivo'){renderArchive(board,all.filter(t=>t.archivado));if(note)note.textContent='Actividades archivadas. Puedes restaurarlas cuando lo necesites.';return;}
 const vis=all.filter(t=>!t.archivado&&!t.padre_id);
 if(BOARD_VIEW==='kanban'){renderKanban(board,vis);if(note)note.textContent='Arrastra las tarjetas entre columnas para cambiar su estatus.';}
 else if(BOARD_VIEW==='calendario'){renderCalendar(board,vis);if(note)note.textContent='Las actividades aparecen en su fecha de entrega.';}
 else{renderListView(board,vis);if(note)note.textContent='Cambia el estatus con el menú de la derecha. Al pasar a "Hecho" se recalcula el cumplimiento.';}}
function renderArchive(board,vis){
 if(!vis.length){board.innerHTML='<div class="ph" style="padding:24px">No hay actividades archivadas. Usa el icono 🗄 de una actividad (en la Lista) para archivarla.</div>';return;}
 const rows=vis.map(t=>{const badge=t.estatus==='Hecho'?'<span class="arch-est done">Hecho</span>':`<span class="arch-est">${t.estatus}</span>`;return `<div class="arch-row"><span class="tl-ic">${TIPO_IC[t.tipo]||'📋'}</span><div class="arch-main"><div class="arch-t">${t.title}</div><div class="arch-meta"><span class="tl-who">${t.who||'—'}</span>${t.date?`<span>📅 ${fmt(t.date)}${t.hora?(' · '+fmtHora(t.hora)):''}</span>`:''}${badge}<span>${t.avance||0}%</span></div></div><button class="btn ghost" onclick="restoreTask(${t.id})">↩ Restaurar</button></div>`;}).join('');
 board.innerHTML=`<div class="arch-wrap"><div class="arch-head">${vis.length} actividad(es) archivada(s)</div>${rows}</div>`;}
function archiveTask(id){const t=tasks.find(x=>x.id==id);if(t)t.archivado=1;renderBoard();}
function restoreTask(id){const t=tasks.find(x=>x.id==id);if(t)t.archivado=0;renderBoard();}
function actCols(){return ACOLS.filter(c=>c.on);}
function actGT(){return actCols().map(c=>(c.w||ACWN[c.k]||150)+'px').join(' ')+' minmax(24px,1fr)';}
function actValFor(t,k){if(k==='nombre')return(t.title||'').toLowerCase();if(k==='tipo')return t.tipo||'';if(k==='date')return(t.date||'')+(t.hora||'');if(k==='dur')return String(t.dur||0).padStart(6,'0');if(k==='who')return(t.who||'').toLowerCase();if(k==='colab')return((t.colab||[]).map(id=>{const u=users.find(x=>x.id==id);return u?u.nombre:'';}).join(' ')).toLowerCase();if(k==='auditor')return((users.find(u=>u.id==t.auditor_id)||{}).nombre||'').toLowerCase();if(k==='avance')return String(t.avance||0).padStart(3,'0');if(k==='creado')return(t.creado||'');if(k==='proyecto')return((projects.find(p=>p.id==t.proyecto_id)||{}).nombre||'').toLowerCase();if(k==='estatus')return String(COLS.indexOf(t.estatus));if(k==='descripcion')return(t.descripcion||'').toLowerCase();return'';}
function actCellFor(t,k){
 if(k==='nombre'){const done=t.estatus==='Hecho',st=status(t);const badge=st==='ok'?'<span class="tl-badge ok">A tiempo</span>':st==='tarde'?'<span class="tl-badge tarde">Tarde</span>':st==='late'?'<span class="tl-badge late">Atrasada</span>':'';const ev=t.ev?`<span class="tl-clip" title="${t.ev.name||'Evidencia'}">📎</span>`:`<button class="tl-clip" onclick="attach(${t.id})" title="Adjuntar evidencia">📎</button>`;const subs=subsOf(t.id);const ns=subs.length;const nd=subs.filter(s=>s.estatus==='Hecho').length;const subtog=ns?`<button class="tl-subtog ${EXPANDED.has(t.id)?'open':''}" onclick="event.stopPropagation();toggleSubs(${t.id})" title="Ver subtareas"><svg viewBox="0 0 24 24" class="tl-subchev"><polyline points="6 9 12 15 18 9"></polyline></svg>${nd}/${ns}</button>`:'';const subtag=t.padre_id?'<span class="tl-subtag">subtarea</span>':'';const _bp=boardPerson();const coltag=(_bp&&(t.colab||[]).some(id=>id==_bp.id)&&t.who!==_bp.nombre)?'<span class="tl-coltag" title="Participa como colaborador">Colaborador</span>':'';return `<button class="tl-check ${done?'done':''}" onclick="toggleDone(${t.id})" title="Marcar como hecho"></button><span class="tl-title ${done?'done':''}" onclick="openTask(${t.id})" title="Abrir tarea">${t.title}</span>${subtag}${coltag}${subtog}${badge}${ev}<button class="tl-clip" onclick="archiveTask(${t.id})" title="Archivar">🗄</button><button class="tl-open" onclick="event.stopPropagation();openTask(${t.id})" title="Abrir tarea">Abrir ↗</button>`;}
 if(k==='tipo'){const tp=t.tipo||'Por hacer';return `<span class="tl-ic">${TIPO_IC[tp]||'📋'}</span><select class="tl-sel" onchange="setTipo(${t.id},this.value)">${TIPOS.map(o=>`<option ${o===tp?'selected':''}>${o}</option>`).join('')}</select>`;}
 if(k==='date'){const lbl=t.date?(fmt(t.date)+(t.hora?(' · '+fmtHora(t.hora)):'')):'<span class="dp-empty">＋ Fecha</span>';return `<button class="tl-datebtn" onclick="openDatePicker(event,${t.id})">${lbl}</button>`;}
 if(k==='dur'){const o=[['','Sin definir'],['15','15 min'],['30','30 min'],['45','45 min'],['60','1 h'],['90','1.5 h'],['120','2 h'],['180','3 h'],['240','4 h'],['480','8 h']];const cur=t.dur!=null?String(t.dur):'';const extra=(cur&&!o.some(x=>x[0]===cur))?`<option value="${cur}" selected>${fmtDur(t.dur)}</option>`:'';return `<select class="tl-sel" onchange="setDur(${t.id},this.value)">${extra}${o.map(x=>`<option value="${x[0]}" ${cur===x[0]?'selected':''}>${x[1]}</option>`).join('')}</select>`;}
 if(k==='who')return `<span class="tl-who">${t.who}</span>`;
 if(k==='auditor'){const u=t.auditor_id?users.find(x=>x.id==t.auditor_id):null;const inner=u?`${userAva(u)}<span class="ava-name">${(u.nombre+' '+(u.apellidos||'')).trim()}</span>`:'<span class="ava-add">＋</span><span class="ava-name muted">Asignar</span>';return `<button class="ava-stack one" onclick="openPeoplePicker(event,${t.id},'auditor')" title="Asignar auditor">${inner}</button>`;}
 if(k==='colab'){const ids=t.colab||[];const avs=ids.slice(0,4).map(id=>{const u=users.find(x=>x.id==id);return u?userAva(u):'';}).join('');const more=ids.length>4?`<span class="ava-more">+${ids.length-4}</span>`:'';return `<button class="ava-stack" onclick="openPeoplePicker(event,${t.id},'colab')" title="Editar colaboradores">${avs||'<span class="ava-add">＋</span>'}${more}</button>`;}
 if(k==='avance'){const v=t.avance||0;const locked=(t.estatus==='Por hacer');return `<div class="tl-prog ${locked?'locked':''}" ${locked?'title="Disponible al pasar a En progreso o En revisión"':''}><div class="tl-track"><div class="tl-fill ${v>=100?'full':''}" style="width:${v}%"></div></div>${locked?'<span class="tl-lock">🔒</span>':`<input type="range" class="tl-rangeover" min="0" max="100" step="5" value="${v}" onchange="setAvance(${t.id},this.value)">`}<span class="tl-prog-n">${v}%</span></div>`;}
 if(k==='creado')return t.creado?fmt(String(t.creado).slice(0,10)):'—';
 if(k==='descripcion'){const d=t.descripcion||'';return d?`<span class="tl-desc" onclick="openTask(${t.id})" title="${esc(d)}">${esc(d)}</span>`:'<span class="muted">—</span>';}
 if(k==='proyecto'){const pj=t.proyecto_id?((projects.find(p=>p.id==t.proyecto_id)||{}).nombre||''):'';return pj?('📁 '+pj):'—';}
 if(k==='estatus')return `<select class="tl-sel" onchange="move(${t.id},this.value)">${COLS.map(c=>`<option ${c===t.estatus?'selected':''}>${c}</option>`).join('')}</select>`;
 return '';
}
function setTipo(id,v){const t=tasks.find(x=>x.id==id);if(t)t.tipo=v;renderBoard();}
function setAuditor(id,v){const t=tasks.find(x=>x.id==id);if(t)t.auditor_id=v?+v:null;}
function setAvance(id,v){const t=tasks.find(x=>x.id==id);if(t)t.avance=+v;renderBoard();}
function setDur(id,v){const t=tasks.find(x=>x.id==id);if(t)t.dur=(v===''||v==null)?null:+v;renderBoard();if(TASKOPEN)renderTaskDrawer();}
function calDurLbl(m){m=+m||0;if(m<60)return m+' min';const h=m/60;return (Number.isInteger(h)?h:h.toFixed(1))+' h';}
let CAL_RZ_DONE=0,CALRZ=null;
function calEvClick(e,id){if(Date.now()-CAL_RZ_DONE<300)return;openTask(id);}
function calResizeStart(e,id){e.preventDefault();e.stopPropagation();const el=e.target.closest('.cg-ev');if(!el)return;CALRZ={id:id,startY:e.clientY,el:el,startH:el.offsetHeight,dur:null};el.classList.add('rz');document.body.style.userSelect='none';document.addEventListener('mousemove',calResizeMove,true);document.addEventListener('mouseup',calResizeEnd,true);}
function calResizeMove(e){if(!CALRZ)return;const HH=56;let nh=Math.max(14,CALRZ.startH+(e.clientY-CALRZ.startY));CALRZ.el.style.height=nh+'px';let dur=Math.round((nh/HH*60)/15)*15;if(dur<15)dur=15;CALRZ.dur=dur;const lbl=CALRZ.el.querySelector('.cg-ev-h');if(lbl)lbl.textContent=calDurLbl(dur);}
function calResizeEnd(e){if(!CALRZ)return;document.removeEventListener('mousemove',calResizeMove,true);document.removeEventListener('mouseup',calResizeEnd,true);document.body.style.userSelect='';CAL_RZ_DONE=Date.now();const id=CALRZ.id,dur=CALRZ.dur;if(CALRZ.el)CALRZ.el.classList.remove('rz');CALRZ=null;if(dur!=null)setDur(id,dur);}
function actMatch(t,q){const pj=t.proyecto_id?((projects.find(p=>p.id==t.proyecto_id)||{}).nombre||''):'';const u=users.find(x=>x.id==t.auditor_id);const au=u?(u.nombre+' '+(u.apellidos||'')):'';const cn=(t.colab||[]).map(id=>{const c=users.find(x=>x.id==id);return c?c.nombre:'';}).join(' ');return [t.title,t.who,pj,t.tipo,au,cn,t.estatus,t.area].filter(Boolean).join(' ').toLowerCase().includes(q);}
function qaId(col){return 'qa_'+col.replace(/[^A-Za-z]/g,'');}
function quickAdd(col){QADD=col;renderBoard();}
function toggleSubs(id){if(EXPANDED.has(id))EXPANDED.delete(id);else EXPANDED.add(id);renderBoard();}
function subRowsHtml(pid,gt,cols,fst,depth){let h='';const subs=subsOf(pid);if(!subs.length)return '<div class="tl-subempty">Sin subtareas. Abre la tarea para agregar.</div>';subs.forEach(s=>{h+=`<div class="tl-row sub" style="grid-template-columns:${gt}">`+cols.map(c=>`<div class="tl-c ${c.k==='nombre'?'name':''} ${c.frozen?'frz':''}" style="${fst[c.k]||''}${c.k==='nombre'?(';padding-left:'+(14+depth*20)+'px'):''}">${actCellFor(s,c.k)}</div>`).join('')+`<div class="tl-c filler"></div></div>`;if(EXPANDED.has(s.id))h+=subRowsHtml(s.id,gt,cols,fst,depth+1);});return h;}
function quickAddBlur(col){setTimeout(()=>{if(QADD===col){QADD=null;renderBoard();}},160);}
function quickAddKey(e,col){if(e.key==='Enter'){const v=e.target.value.trim();QADD=null;if(v)createQuickTask(v,col);renderBoard();}else if(e.key==='Escape'){QADD=null;renderBoard();}}
function createQuickTask(title,status){const pf=document.getElementById('personFilter');const pid=pf&&pf.value?+pf.value:1;const u=users.find(x=>x.id==pid)||users[0];const av=status==='Hecho'?100:status==='En revisión'?80:status==='En progreso'?45:0;tasks.unshift({id:++id,title,who:u?u.nombre:'—',area:u?u.area:'—',area_id:null,proyecto_id:null,date:null,hora:null,dur:null,tipo:'Por hacer',auditor_id:null,colab:[],avance:av,estatus:status,cierre:status==='Hecho'?today.toISOString().slice(0,10):null,ev:null,creado:today.toISOString().slice(0,10)});renderBoard();renderDash();}
let PP={task:null,mode:null};
function openPeoplePicker(ev,id,mode){ev.stopPropagation();closePP();PP={task:id,mode};const pop=document.createElement('div');pop.className='datepop pp-pop';pop.id='ppPop';document.body.appendChild(pop);pop.onclick=e=>e.stopPropagation();ppRender();const r=ev.currentTarget.getBoundingClientRect();let left=r.left+window.scrollX;left=Math.min(left,window.innerWidth-272);pop.style.top=(r.bottom+6+window.scrollY)+'px';pop.style.left=Math.max(8,left)+'px';setTimeout(()=>document.addEventListener('mousedown',ppOutside,true),0);}
function ppOutside(e){const p=document.getElementById('ppPop');if(p&&!p.contains(e.target))closePP();}
function ppRender(){const pop=document.getElementById('ppPop');if(!pop)return;const t=tasks.find(x=>x.id==PP.task);if(!t)return;const mode=PP.mode;let rows='';
 if(mode==='auditor')rows+=`<button class="pp-row ${!t.auditor_id?'on':''}" onclick="ppSetAuditor(0)"><span class="ava-add">—</span><span class="pp-nm">Sin auditor</span></button>`;
 if(mode==='resp')rows+=`<button class="pp-row ${!t.who?'on':''}" onclick="ppSetResp(0)"><span class="ava-add">—</span><span class="pp-nm">Sin responsable</span></button>`;
 rows+=users.map(u=>{const on=(mode==='colab')?(t.colab||[]).includes(u.id):(mode==='resp')?(t.who===u.nombre):(t.auditor_id==u.id);const fn=(mode==='colab')?`ppToggleColab(${u.id})`:(mode==='resp')?`ppSetResp(${u.id})`:`ppSetAuditor(${u.id})`;return `<button class="pp-row ${on?'on':''}" onclick="${fn}">${userAva(u)}<span class="pp-nm">${(u.nombre+' '+(u.apellidos||'')).trim()}</span>${on?'<span class="pp-ck">✓</span>':''}</button>`;}).join('');
 const n=(t.colab||[]).length;const title=mode==='colab'?('Colaboradores'+(n?` · ${n}`:'')):mode==='resp'?'Responsable':'Auditor de la tarea';
 const hint=mode==='colab'?'<div class="pp-hint">Marca a todos los que participan. Puedes elegir varios.</div>':'';
 const footer=mode==='colab'?'<button class="pp-done" onclick="closePP()">Listo</button>':'';
 pop.innerHTML=`<div class="pp-title">${title}</div>${hint}<div class="pp-scroll">${rows}</div>${footer}`;}
function closePP(){const m=document.getElementById('ppPop');if(m)m.remove();document.removeEventListener('mousedown',ppOutside,true);}
function ppToggleColab(uid){const t=tasks.find(x=>x.id==PP.task);if(!t)return;t.colab=t.colab||[];const i=t.colab.indexOf(uid);if(i>=0)t.colab.splice(i,1);else t.colab.push(uid);renderBoard();ppRender();if(TASKOPEN)renderTaskDrawer();}
function ppSetAuditor(uid){const t=tasks.find(x=>x.id==PP.task);if(!t)return;t.auditor_id=uid?+uid:null;closePP();renderBoard();if(TASKOPEN)renderTaskDrawer();}
function ppSetResp(uid){const t=tasks.find(x=>x.id==PP.task);if(!t)return;const u=users.find(x=>x.id==uid);t.who=u?u.nombre:'';closePP();renderBoard();if(TASKOPEN)renderTaskDrawer();}
function setProyecto(id,v){const t=tasks.find(x=>x.id==id);if(t)t.proyecto_id=v?+v:null;renderBoard();if(TASKOPEN)renderTaskDrawer();}
function renderListView(board,vis){
 if(ASEARCH)vis=vis.filter(t=>actMatch(t,ASEARCH));
 if(ASEARCH&&!vis.length){board.innerHTML='<div class="ph" style="padding:24px">No hay actividades que coincidan con la búsqueda.</div>';return;}
 const cols=actCols(),gt=actGT();
 let off=0;const fst={};cols.forEach(c=>{if(c.frozen){fst[c.k]=`position:sticky;left:${off}px;z-index:2;background:#fff`;off+=(c.w||ACWN[c.k]||150);}});
 const hsty=k=>fst[k]?fst[k].replace('z-index:2','z-index:6'):'';
 let head=cols.map(c=>{const mv=(c.k!=='nombre');return `<div class="tl-c head ${c.k==='nombre'?'name':'movable'} ${c.frozen?'frz':''}" data-k="${c.k}" ${mv?'draggable="true"':''} style="${hsty(c.k)}"><span>${c.label}</span><button class="tl-cmenu" onclick="openActMenu(event,'${c.k}')">▾</button><span class="col-resizer" data-k="${c.k}"></span></div>`;}).join('');
 let html=`<div class="tl-scroll"><div class="tasklist"><div class="tl-head" style="grid-template-columns:${gt}">${head}<div class="tl-c head filler"></div></div>`;
 COLS.forEach(col=>{let items=vis.filter(t=>t.estatus===col);
  if(ASORT.k)items=items.slice().sort((a,b)=>{const x=actValFor(a,ASORT.k),y=actValFor(b,ASORT.k);return(x<y?-1:x>y?1:0)*ASORT.dir;});
  html+=`<div class="tl-group"><button class="tl-gh" onclick="toggleGroup(this)"><svg class="tl-chev" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg><span>${col}</span><span class="tl-gc">${items.length}</span></button><div class="tl-rows">`;
  items.forEach(t=>{html+=`<div class="tl-row" style="grid-template-columns:${gt}">`+cols.map(c=>`<div class="tl-c ${c.k==='nombre'?'name':''} ${c.frozen?'frz':''}" style="${fst[c.k]||''}">${actCellFor(t,c.k)}</div>`).join('')+`<div class="tl-c filler"></div></div>`;
   if(EXPANDED.has(t.id))html+=subRowsHtml(t.id,gt,cols,fst,1);});
  if(QADD===col)html+=`<div class="tl-addrow"><input class="tl-addinput" id="${qaId(col)}" placeholder="Escribe la tarea y presiona Enter…" onkeydown="quickAddKey(event,'${col}')" onblur="quickAddBlur('${col}')"></div>`;
  else html+=`<button class="tl-addbtn" onclick="quickAdd('${col}')">＋ Agregar tarea</button>`;
  html+='</div></div>';});
 html+='</div></div>';board.innerHTML=html;
 if(QADD){const qi=document.getElementById(qaId(QADD));if(qi)qi.focus();}
 board.querySelectorAll('.tl-head .tl-c[draggable="true"]').forEach(h=>{
  h.ondragstart=e=>{ADRAGK=h.dataset.k;e.dataTransfer.effectAllowed='move';};
  h.ondragover=e=>{e.preventDefault();h.classList.add('drag-over');};
  h.ondragleave=()=>h.classList.remove('drag-over');
  h.ondrop=e=>{e.preventDefault();h.classList.remove('drag-over');reorderActCol(ADRAGK,h.dataset.k);ADRAGK=null;};
 });
 board.querySelectorAll('.tl-head .col-resizer').forEach(r=>r.addEventListener('mousedown',e=>actStartResize(e,r.dataset.k)));}
let ARZ=null;
function actStartResize(e,k){e.preventDefault();e.stopPropagation();const c=ACOLS.find(x=>x.k===k);if(!c)return;const h=e.target.closest('.tl-c');if(h)h.setAttribute('draggable','false');ARZ={k,startX:e.clientX,startW:c.w||ACWN[k]||150};document.body.style.userSelect='none';document.body.style.cursor='col-resize';document.addEventListener('mousemove',actOnResize);document.addEventListener('mouseup',actEndResize);}
function actOnResize(e){if(!ARZ)return;const c=ACOLS.find(x=>x.k===ARZ.k);if(!c)return;c.w=Math.max(80,ARZ.startW+(e.clientX-ARZ.startX));const gt=actGT();document.querySelectorAll('#board .tl-head,#board .tl-row').forEach(el=>{el.style.gridTemplateColumns=gt;});}
function actEndResize(){if(!ARZ)return;ARZ=null;document.body.style.userSelect='';document.body.style.cursor='';document.removeEventListener('mousemove',actOnResize);document.removeEventListener('mouseup',actEndResize);syncView();renderBoard();}
function guardarVista(){syncView();const note=document.getElementById('boardNote');const nm=ACTVIEWS[ACTVIEW]?ACTVIEWS[ACTVIEW].name:'';if(note)note.textContent=`✓ Vista "${nm}" guardada: columnas (orden, anchos, inmovilizadas) y filtros quedaron fijos.`;}
/* ===== Filtros de vista (panel lateral) ===== */
const FFIELDS=[{k:'nombre',label:'Nombre',type:'text'},{k:'tipo',label:'Tipo de actividad',type:'enum'},{k:'estatus',label:'Estatus',type:'enum'},{k:'who',label:'Responsable',type:'enum'},{k:'auditor',label:'Auditor',type:'enum'},{k:'colab',label:'Colaboradores',type:'enum'},{k:'proyecto',label:'Proyecto',type:'enum'},{k:'avance',label:'Avance (%)',type:'num'},{k:'dur',label:'Duración (min)',type:'num'},{k:'date',label:'Fecha de entrega',type:'date'},{k:'creado',label:'Fecha de creación',type:'date'},{k:'descripcion',label:'Descripción',type:'text'}];
let FSEARCH='';
function ffOpts(k){if(k==='tipo')return TIPOS.slice();if(k==='estatus')return COLS.slice();if(k==='proyecto')return projects.map(p=>p.nombre);if(k==='who'||k==='auditor'||k==='colab')return [...new Set(users.map(u=>u.nombre))];return [];}
function ffVal(t,k){switch(k){case 'nombre':return t.title||'';case 'tipo':return t.tipo||'';case 'estatus':return t.estatus||'';case 'who':return t.who||'';case 'auditor':{const u=users.find(x=>x.id==t.auditor_id);return u?u.nombre:'';}case 'proyecto':{const p=projects.find(x=>x.id==t.proyecto_id);return p?p.nombre:'';}case 'colab':return (t.colab||[]).map(id=>{const u=users.find(x=>x.id==id);return u?u.nombre:'';}).filter(Boolean);case 'avance':return t.avance||0;case 'dur':return t.dur||0;case 'date':return t.date||'';case 'creado':return (t.creado||'').slice(0,10);case 'descripcion':return t.descripcion||'';}return '';}
function viewFilters(){const v=ACTVIEWS[ACTVIEW];if(!v)return [];if(!v.filters)v.filters=[];return v.filters;}
function ffActive(f){return (f.type==='enum'&&f.values&&f.values.length)||(f.type==='text'&&f.text)||(f.type==='num'&&((f.min!==''&&f.min!=null)||(f.max!==''&&f.max!=null)))||(f.type==='date'&&(f.from||f.to));}
function taskPassesFilters(t){return viewFilters().every(f=>{if(f.type==='enum'){const sel=f.values||[];if(!sel.length)return true;if(f.k==='colab'){const ns=ffVal(t,'colab');return ns.some(n=>sel.includes(n));}return sel.includes(String(ffVal(t,f.k)));}if(f.type==='text'){const q=(f.text||'').trim().toLowerCase();if(!q)return true;return String(ffVal(t,f.k)||'').toLowerCase().includes(q);}if(f.type==='num'){const x=Number(ffVal(t,f.k))||0;const mn=(f.min===''||f.min==null)?-Infinity:Number(f.min);const mx=(f.max===''||f.max==null)?Infinity:Number(f.max);return x>=mn&&x<=mx;}if(f.type==='date'){const dd=String(ffVal(t,f.k)||'');if(f.from){if(!dd||dd<f.from)return false;}if(f.to){if(dd&&dd>f.to)return false;}return true;}return true;});}
function openFilters(){FSEARCH='';document.getElementById('filterDrawerOv').classList.add('show');document.getElementById('filterDrawer').classList.add('show');renderFilterDrawer();}
function closeFilters(){document.getElementById('filterDrawerOv').classList.remove('show');document.getElementById('filterDrawer').classList.remove('show');}
function ffAdd(k){const fld=FFIELDS.find(x=>x.k===k);if(!fld)return;viewFilters().push({k:k,type:fld.type,values:[],text:'',min:'',max:'',from:'',to:''});FSEARCH='';renderBoard();renderFilterDrawer();}
function ffRemove(i){viewFilters().splice(i,1);renderBoard();renderFilterDrawer();}
function ffClear(){const v=ACTVIEWS[ACTVIEW];if(v)v.filters=[];renderBoard();renderFilterDrawer();}
function ffToggleVal(i,val){const f=viewFilters()[i];if(!f)return;f.values=f.values||[];const ix=f.values.indexOf(val);if(ix>=0)f.values.splice(ix,1);else f.values.push(val);renderBoard();renderFilterDrawer();}
function ffText(i,val){const f=viewFilters()[i];if(f){f.text=val;renderBoard();updFilterCount();}}
function ffNum(i,w,val){const f=viewFilters()[i];if(f){f[w]=val;renderBoard();updFilterCount();}}
function ffDate(i,w,val){const f=viewFilters()[i];if(f){f[w]=val;renderBoard();updFilterCount();}}
function ffSaveView(){closeFilters();guardarVista();}
function updFilterCount(){const cc=document.getElementById('actFilterCount');if(!cc)return;const n=viewFilters().filter(ffActive).length;cc.textContent=n||'';cc.style.display=n?'inline-block':'none';}
function ffSummaryVal(f){if(f.type==='enum')return (f.values||[]).join(', ');if(f.type==='text')return 'contiene "'+(f.text||'')+'"';if(f.type==='num')return ((f.min===''||f.min==null)?'\u2013':f.min)+' a '+((f.max===''||f.max==null)?'\u2013':f.max);if(f.type==='date')return (f.from||'\u2026')+' a '+(f.to||'\u2026');return '';}
function renderFilterSummary(){const bar=document.getElementById('actFilterSummary');if(!bar)return;if(BOARD_VIEW!=='lista'){bar.style.display='none';return;}const fs=viewFilters().map((f,i)=>({f,i})).filter(o=>ffActive(o.f));if(!fs.length){bar.style.display='none';bar.innerHTML='';return;}bar.style.display='';const pills=fs.map(({f,i})=>{const fld=FFIELDS.find(x=>x.k===f.k)||{label:f.k};return `<button class="fsum-pill" onclick="openFilters()" title="Editar filtros">${fld.label}: <b>${esc(ffSummaryVal(f))}</b><span class="fsum-x" onclick="event.stopPropagation();ffRemove(${i})" title="Quitar filtro">\u2715</span></button>`;}).join('');bar.innerHTML=`<span class="fsum-lbl">Filtros de esta vista:</span>${pills}<button class="fsum-edit" onclick="openFilters()">Editar filtros</button>`;}
function ffCard(f,i){const fld=FFIELDS.find(x=>x.k===f.k)||{label:f.k,type:f.type};let body='';
 if(f.type==='enum'){const opts=ffOpts(f.k);const checks=opts.map(o=>`<label class="fopt"><input type="checkbox" value="${esc(o)}" ${(f.values||[]).includes(o)?'checked':''} onchange="ffToggleVal(${i},this.value)"><span>${esc(o)}</span></label>`).join('')||'<div class="fmuted">Sin opciones</div>';body=`<div class="fop">es cualquiera de${(f.values&&f.values.length)?(' ('+f.values.length+')'):''}</div><div class="fopt-list">${checks}</div>`;}
 else if(f.type==='text'){body=`<div class="fop">contiene</div><input class="field ffull" type="text" value="${esc(f.text||'')}" oninput="ffText(${i},this.value)" placeholder="Escribe texto…">`;}
 else if(f.type==='num'){body=`<div class="fop">entre</div><div class="frow"><input class="field" type="number" value="${f.min==null?'':f.min}" oninput="ffNum(${i},'min',this.value)" placeholder="mín"><span>y</span><input class="field" type="number" value="${f.max==null?'':f.max}" oninput="ffNum(${i},'max',this.value)" placeholder="máx"></div>`;}
 else if(f.type==='date'){body=`<div class="fop">entre</div><div class="frow"><input class="field" type="date" value="${f.from||''}" oninput="ffDate(${i},'from',this.value)"><span>y</span><input class="field" type="date" value="${f.to||''}" oninput="ffDate(${i},'to',this.value)"></div>`;}
 return `<div class="fcard"><div class="fcard-h"><span class="fcard-t">${fld.label}</span><button class="fcard-x" onclick="ffRemove(${i})" title="Quitar filtro">✕</button></div>${body}</div>`;}
function ffPropsHtml(){const used=viewFilters().map(f=>f.k);const propList=FFIELDS.filter(f=>!used.includes(f.k)&&f.label.toLowerCase().includes(FSEARCH.toLowerCase()));return propList.map(f=>`<button class="fprop" onclick="ffAdd('${f.k}')">${f.label}<span class="fprop-add">＋ Agregar</span></button>`).join('')||'<div class="fmuted">No hay más columnas para filtrar.</div>';}
function ffRefreshProps(){const box=document.getElementById('fPropList');if(box)box.innerHTML=ffPropsHtml();}
function renderFilterDrawer(){const d=document.getElementById('filterDrawer');if(!d)return;const v=ACTVIEWS[ACTVIEW]||{};const fs=viewFilters();const cards=fs.length?fs.map((f,i)=>ffCard(f,i)).join(''):'<div class="fmuted">Aún no agregas filtros. Elige una columna abajo para empezar (por ejemplo, \u201cTipo de actividad\u201d).</div>';
 d.innerHTML=`<div class="fd-head"><div><div class="fd-title">Filtros</div><div class="fd-sub">Vista: <b>${esc(v.name||'\u2014')}</b></div></div><button class="fd-x" onclick="closeFilters()">\u2715</button></div><div class="fd-section">${cards}</div><div class="fd-addbox"><div class="fd-lbl">Agregar filtro por columna</div><div class="fd-search"><span>\ud83d\udd0d</span><input id="fSearch" type="text" placeholder="Buscar columna\u2026" value="${esc(FSEARCH)}" oninput="FSEARCH=this.value;ffRefreshProps()"></div><div class="fprop-list" id="fPropList">${ffPropsHtml()}</div></div><div class="fd-foot"><button class="btn ghost" onclick="ffClear()">Limpiar</button><button class="btn primary" onclick="ffSaveView()">\ud83d\udcbe Guardar vista</button></div>`;}

let ADRAGK=null;
function reorderActCol(from,to){if(!from||from===to)return;const cf=ACOLS.find(c=>c.k===from),ct=ACOLS.find(c=>c.k===to);if(!cf||!ct||cf.k==='nombre'||ct.k==='nombre')return;const ci=ACOLS.indexOf(cf);ACOLS.splice(ci,1);const ti=ACOLS.indexOf(ct);ACOLS.splice(ti,0,cf);syncView();renderBoard();}
function openActMenu(ev,k){ev.stopPropagation();closeActMenu();const col=ACOLS.find(c=>c.k===k);const fixed=(k==='nombre');
 const it=[];
 it.push(`<button onclick="actSort('${k}',1)">↑ Orden ascendente</button>`);
 it.push(`<button onclick="actSort('${k}',-1)">↓ Orden descendente</button>`);
 it.push(`<button onclick="actAddFromMenu()">＋ Agregar columna</button>`);
 if(!fixed){it.push('<div class="am-sep"></div>');
  it.push(`<button onclick="actFreeze('${k}')">📌 ${col&&col.frozen?'Liberar columna':'Inmovilizar columna'}</button>`);
  it.push(`<button onclick="actHide('${k}')">🗑 Eliminar columna</button>`);}
 const m=document.createElement('div');m.className='act-menu';m.id='actMenu';m.innerHTML=it.join('');document.body.appendChild(m);
 const r=ev.target.getBoundingClientRect();m.style.top=(r.bottom+4+window.scrollY)+'px';m.style.left=Math.min(r.left+window.scrollX,window.innerWidth-230)+'px';
 setTimeout(()=>document.addEventListener('click',closeActMenu,{once:true}),0);}
function closeActMenu(){const m=document.getElementById('actMenu');if(m)m.remove();}
function actSort(k,dir){ASORT={k,dir};syncView();renderBoard();}
function actFreeze(k){const c=ACOLS.find(x=>x.k===k);if(c)c.frozen=!c.frozen;syncView();renderBoard();}
function actHide(k){const c=ACOLS.find(x=>x.k===k);if(c)c.on=false;syncView();renderBoard();}
function actShow(k){const c=ACOLS.find(x=>x.k===k);if(c)c.on=true;syncView();renderBoard();}
function actAddFromMenu(){closeActMenu();openActColModal();}
function renderActColPanel(){const p=document.getElementById('actColPanel');if(!p)return;p.innerHTML=ACOLS.map((c,i)=>`<label class="colchk"><input type="checkbox" ${c.on?'checked':''} ${c.k==='nombre'?'disabled':''} onchange="actToggleCol(${i})"> ${c.label}${c.k==='nombre'?' · fija':''}</label>`).join('');}
function openActColModal(){renderActColPanel();document.getElementById('actColOverlay').classList.add('show');}
function closeActColModal(){document.getElementById('actColOverlay').classList.remove('show');}
function actToggleCol(i){const c=ACOLS[i];if(!c||c.k==='nombre')return;c.on=!c.on;syncView();renderBoard();renderActColPanel();}
let DP={task:null,month:null,sel:null,hora:null,dur:null};const DPTODAY='2026-06-06';
function openDatePicker(ev,id){ev.stopPropagation();closeDP();const t=tasks.find(x=>x.id==id);if(!t)return;DP.task=id;DP.sel=t.date||null;DP.hora=t.hora||'';DP.dur=(t.dur!=null?String(t.dur):'');DP.month=new Date((DP.sel||'2026-06-01')+'T00:00');DP.month=new Date(DP.month.getFullYear(),DP.month.getMonth(),1);
 const pop=document.createElement('div');pop.className='datepop';pop.id='dpPop';document.body.appendChild(pop);pop.onclick=e=>e.stopPropagation();dpRender();
 const r=ev.currentTarget.getBoundingClientRect();let left=r.left+window.scrollX;left=Math.min(left,window.innerWidth-316);pop.style.top=(r.bottom+6+window.scrollY)+'px';pop.style.left=Math.max(8,left)+'px';
 setTimeout(()=>document.addEventListener('click',closeDP,{once:true}),0);}
function dpRender(){const pop=document.getElementById('dpPop');if(!pop)return;const y=DP.month.getFullYear(),mo=DP.month.getMonth();
 const startDow=(new Date(y,mo,1).getDay()+6)%7,days=new Date(y,mo+1,0).getDate();
 const title=DP.month.toLocaleDateString('es-MX',{month:'long',year:'numeric'});
 const dows=['L','M','M','J','V','S','D'].map(d=>`<span class="dp-dow">${d}</span>`).join('');
 let cells='';for(let i=0;i<startDow;i++)cells+='<span class="dp-cell empty"></span>';
 for(let d=1;d<=days;d++){const ds=`${y}-${String(mo+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;cells+=`<button class="dp-cell ${ds===DP.sel?'sel':''} ${ds===DPTODAY?'tod':''}" onclick="dpPick('${ds}')">${d}</button>`;}
 const durOpts=[['','Sin definir'],['15','15 min'],['30','30 min'],['45','45 min'],['60','1 h'],['90','1.5 h'],['120','2 h'],['180','3 h'],['240','4 h'],['480','8 h']].map(o=>`<option value="${o[0]}" ${String(DP.dur)===o[0]?'selected':''}>${o[1]}</option>`).join('');
 pop.innerHTML=`<div class="dp-head"><span class="dp-title">${title}</span><div class="dp-nav"><button onclick="dpMove(-1)">‹</button><button onclick="dpMove(1)">›</button></div></div><div class="dp-grid">${dows}${cells}</div>
 <div class="dp-row"><span class="dp-ico">🕒</span><input type="time" class="dp-time" value="${DP.hora||''}" oninput="DP.hora=this.value"></div>
 <div class="dp-row"><span class="dp-ico">⏳</span><select class="dp-dursel" onchange="DP.dur=this.value">${durOpts}</select></div>
 <div class="dp-actions"><button class="dp-cancel" onclick="closeDP()">Cancelar</button><button class="dp-ok" onclick="dpApply()">Listo</button></div>`;}
function dpPick(ds){DP.sel=(DP.sel===ds?null:ds);dpRender();}
function dpMove(d){DP.month=new Date(DP.month.getFullYear(),DP.month.getMonth()+d,1);dpRender();}
function closeDP(){const m=document.getElementById('dpPop');if(m)m.remove();}
function dpApply(){const t=tasks.find(x=>x.id==DP.task);if(t){t.date=DP.sel;t.hora=DP.sel?(DP.hora||null):null;t.dur=DP.sel&&DP.dur?+DP.dur:null;}closeDP();renderBoard();if(TASKOPEN)renderTaskDrawer();}
function renderKanban(board,vis){board.innerHTML='';const wrap=document.createElement('div');wrap.className='board';
 COLS.forEach((col,ci)=>{const items=vis.filter(t=>t.estatus===col);const el=document.createElement('div');el.className='col c'+ci;
  el.ondragover=e=>{e.preventDefault();el.classList.add('drag-over');};el.ondragleave=()=>el.classList.remove('drag-over');el.ondrop=e=>{e.preventDefault();el.classList.remove('drag-over');move(+e.dataTransfer.getData('id'),col);};
  el.innerHTML=`<div class="col-head"><span class="name"><span class="dot"></span>${col}</span><span class="count">${items.length}</span></div>`;items.forEach(t=>el.appendChild(cardEl(t)));wrap.appendChild(el);});
 board.appendChild(wrap);}
function calDS(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
function calChips(items){return items.map(t=>{const done=t.estatus==='Hecho';return `<div class="cal-chip ${done?'done':status(t)==='late'?'late':''}" title="${t.title} · ${t.who||''}"><button class="cal-dot ${done?'on':''}" onclick="event.stopPropagation();toggleDone(${t.id})" title="Marcar como realizada"></button><span class="${done?'struck':''}">${t.title}</span></div>`;}).join('');}
function calHourGrid(days,byDay,tod){
 const H0=0,H1=23,HH=56;const dn=['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];
 let hlabels='';for(let h=H0;h<=H1;h++){const ap=h>=12?'pm':'am';let hh=h%12;if(hh===0)hh=12;hlabels+=`<div class="cg-hr"><span>${hh} ${ap}</span></div>`;}
 let adHas=false;const adCols=days.map(d=>{const ds=calDS(d);const uns=(byDay[ds]||[]).filter(t=>!t.hora);if(uns.length)adHas=true;return `<div class="cg-adc">${calChips(uns)}</div>`;}).join('');
 const headCols=days.map(d=>{const ds=calDS(d);return `<div class="cg-dhead ${ds===tod?'tod':''}"><span class="cg-dn">${dn[d.getDay()]}</span> <b>${d.getDate()}</b></div>`;}).join('');
 const bodyCols=days.map(d=>{const ds=calDS(d);
  const evs=(byDay[ds]||[]).filter(t=>t.hora).map(t=>{const p=String(t.hora).split(':');const sh=(+p[0])+((+p[1]||0)/60);const top=Math.max(0,(sh-H0))*HH;const h=Math.max(20,((t.dur||60)/60)*HH);const done=t.estatus==='Hecho';const cl=done?'done':status(t)==='late'?'late':'';return `<div class="cg-ev ${cl}" style="top:${top}px;height:${h}px" onclick="calEvClick(event,${t.id})" title="${t.title} · ${fmtHora(t.hora)} — clic para abrir"><div class="cg-ev-top"><button class="cal-dot ${done?'on':''}" onclick="event.stopPropagation();toggleDone(${t.id})" title="Marcar como realizada"></button><div class="cg-ev-t ${done?'struck':''}">${t.title}</div></div><div class="cg-ev-h">${fmtHora(t.hora)}${t.dur?(' · '+calDurLbl(t.dur)):''}</div><div class="cg-ev-rz" onmousedown="calResizeStart(event,${t.id})" title="Arrastra para cambiar la duración"></div></div>`;}).join('');
  let lines='';for(let h=H0;h<=H1;h++)lines+='<div class="cg-slot"></div>';
  return `<div class="cg-col">${lines}${evs}</div>`;}).join('');
 const tc=`60px repeat(${days.length},1fr)`;
 return `${adHas?`<div class="cg-allday" style="grid-template-columns:${tc}"><div class="cg-ad-l">Sin hora</div>${adCols}</div>`:''}<div class="cg-head" style="grid-template-columns:${tc}"><div></div>${headCols}</div><div class="cg-body" style="grid-template-columns:${tc}"><div class="cg-hours">${hlabels}</div>${bodyCols}</div>`;
}
function renderCalendar(board,vis){
 if(!CAL)CAL=new Date(2026,5,6);
 const tod=DPTODAY;
 const byDay={};vis.forEach(t=>{if(t.date)(byDay[t.date]=byDay[t.date]||[]).push(t);});
 const modes=`<div class="cal-modes"><button class="cm ${CAL_MODE==='año'?'on':''}" onclick="setCalMode('año')">Año</button><button class="cm ${CAL_MODE==='mes'?'on':''}" onclick="setCalMode('mes')">Mes</button><button class="cm ${CAL_MODE==='semana'?'on':''}" onclick="setCalMode('semana')">Semana</button><button class="cm ${CAL_MODE==='dia'?'on':''}" onclick="setCalMode('dia')">Día</button></div>`;
 let title='',body='';
 if(CAL_MODE==='mes'){
  const y=CAL.getFullYear(),mo=CAL.getMonth();
  const startDow=(new Date(y,mo,1).getDay()+6)%7,days=new Date(y,mo+1,0).getDate();
  title=CAL.toLocaleDateString('es-MX',{month:'long',year:'numeric'});
  const dows=['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'].map(d=>`<div class="cal-dow">${d}</div>`).join('');
  let cells='';for(let i=0;i<startDow;i++)cells+='<div class="cal-cell empty"></div>';
  for(let d=1;d<=days;d++){const ds=`${y}-${String(mo+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;cells+=`<div class="cal-cell ${ds===tod?'tod':''}"><div class="cal-d">${d}</div>${calChips(byDay[ds]||[])}</div>`;}
  body=`<div class="cal-dows">${dows}</div><div class="cal-grid">${cells}</div>`;
 } else if(CAL_MODE==='semana'){
  const wd=(CAL.getDay()+6)%7,mon=new Date(CAL);mon.setDate(CAL.getDate()-wd);const sun=new Date(mon);sun.setDate(mon.getDate()+6);
  title=`${mon.toLocaleDateString('es-MX',{day:'numeric',month:'short'})} – ${sun.toLocaleDateString('es-MX',{day:'numeric',month:'short',year:'numeric'})}`;
  const days=[];for(let i=0;i<7;i++){const dd=new Date(mon);dd.setDate(mon.getDate()+i);days.push(dd);}
  body=calHourGrid(days,byDay,tod);
 } else if(CAL_MODE==='año'){
  title=String(CAL.getFullYear());
  body=calYearGrid(CAL.getFullYear(),byDay,tod);
 } else {
  title=CAL.toLocaleDateString('es-MX',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  body=calHourGrid([new Date(CAL)],byDay,tod);
 }
 board.innerHTML=`<div class="cal-bar"><button class="btn ghost" onclick="calMove(-1)">‹</button><span class="cal-title">${title}</span><button class="btn ghost" onclick="calMove(1)">›</button>${modes}</div>${body}`;
 const _b=board.querySelector('.cg-body');if(_b)_b.scrollTop=7*56;}
function calYearGrid(year,byDay,tod){
 const mn=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
 const dows=['L','M','M','J','V','S','D'].map(d=>`<span class="cal-yw">${d}</span>`).join('');
 let months='';
 for(let mo=0;mo<12;mo++){
  const startDow=(new Date(year,mo,1).getDay()+6)%7,days=new Date(year,mo+1,0).getDate();
  let cells='';for(let i=0;i<startDow;i++)cells+='<span class="cal-yd empty"></span>';
  for(let d=1;d<=days;d++){const ds=`${year}-${String(mo+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;const n=(byDay[ds]||[]).length;cells+=`<button class="cal-yd ${n?'has':''} ${ds===tod?'tod':''}" onclick="calOpenDay('${ds}')" ${n?`title="${n} actividad(es)"`:''}>${d}${n?'<i></i>':''}</button>`;}
  months+=`<div class="cal-ym"><div class="cal-ym-t">${mn[mo]}</div><div class="cal-ygrid">${dows}${cells}</div></div>`;
 }
 return `<div class="cal-year">${months}</div>`;}
function calOpenDay(ds){CAL=new Date(ds+'T00:00');CAL_MODE='dia';renderBoard();}
function setCalMode(m){CAL_MODE=m;renderBoard();}
function calMove(d){if(!CAL)CAL=new Date(2026,5,6);const n=new Date(CAL);if(CAL_MODE==='mes')n.setMonth(n.getMonth()+d);else if(CAL_MODE==='semana')n.setDate(n.getDate()+7*d);else if(CAL_MODE==='año')n.setFullYear(n.getFullYear()+d);else n.setDate(n.getDate()+d);CAL=n;renderBoard();}
function toggleGroup(btn){btn.parentElement.classList.toggle('collapsed');}
function toggleDone(id){const t=tasks.find(x=>x.id==id);if(!t)return;move(t.id,t.estatus==='Hecho'?'Por hacer':'Hecho');}
function cardEl(t){const c=document.createElement('div');c.className='card p-'+t.prio;c.draggable=true;c.ondragstart=e=>e.dataTransfer.setData('id',t.id);const st=status(t);
 const badge=st==='ok'?'<span class="chip ok">✓ A tiempo</span>':st==='tarde'?'<span class="chip tarde">Entregada tarde</span>':st==='late'?'<span class="chip late">⚠ Atrasada</span>':'';
 const ev=t.ev?`<div class="ev">${t.ev.img?`<img src="${t.ev.img}">`:'📄'}<span class="fname">${t.ev.name}</span></div>`:`<div class="ev"><button class="attach" onclick="attach(${t.id})">📎 Adjuntar evidencia</button></div>`;
 c.innerHTML=`<div class="title">${t.title}</div><div class="row"><span class="chip who">${t.who}</span><span class="chip area">${t.area}</span><span class="chip date">📅 ${fmt(t.date)}</span></div>${t.proyecto_id?`<div class="row"><span class="chip proj">📁 ${(projects.find(p=>p.id==t.proyecto_id)||{}).nombre||''}</span></div>`:''}<div class="row">${badge}</div>${ev}`;return c;}
function applyTheme(){const d=(localStorage.getItem('kafer_theme')==='dark');document.body.classList.toggle('dark',d);const b=document.getElementById('themeBtn');if(b)b.textContent=d?'☀️':'🌙';}
function toggleTheme(){const d=!document.body.classList.contains('dark');document.body.classList.toggle('dark',d);try{localStorage.setItem('kafer_theme',d?'dark':'light');}catch(e){}const b=document.getElementById('themeBtn');if(b)b.textContent=d?'☀️':'🌙';}
function move(tid,col){const t=tasks.find(x=>x.id===tid);if(!t)return;t.estatus=col;t.cierre=col==="Hecho"?today.toISOString().slice(0,10):null;if(t.padre_id&&col!=='Por hacer'){const p=tasks.find(x=>x.id==t.padre_id);if(p&&p.estatus==='Por hacer'){p.estatus='En progreso';p.cierre=null;}}renderBoard();renderDash();if(TASKOPEN)renderTaskDrawer();}
function subsOf(pid){return tasks.filter(t=>t.padre_id==pid);}
function createSub(pid,title){title=(title||'').trim();if(!title)return;const p=tasks.find(x=>x.id==pid);if(!p)return;const nid=tasks.reduce((m,t)=>Math.max(m,t.id),0)+1;tasks.push({id:nid,title,who:p.who,area:p.area,area_id:p.area_id,proyecto_id:p.proyecto_id,date:null,hora:null,dur:null,tipo:'Por hacer',auditor_id:null,colab:[],avance:0,estatus:'Por hacer',cierre:null,ev:null,creado:today.toISOString().slice(0,10),padre_id:pid});EXPANDED.add(pid);renderBoard();renderDash();if(TASKOPEN)renderTaskDrawer();}
function delTask(tid){const rm=new Set([tid]);let added=true;while(added){added=false;tasks.forEach(t=>{if(t.padre_id!=null&&rm.has(t.padre_id)&&!rm.has(t.id)){rm.add(t.id);added=true;}});}for(let i=tasks.length-1;i>=0;i--){if(rm.has(tasks[i].id))tasks.splice(i,1);}if(TASKOPEN&&rm.has(TASKOPEN))closeTask();renderBoard();renderDash();if(TASKOPEN)renderTaskDrawer();}
let attachId=null;const fp=document.getElementById('filePicker');function attach(tid){attachId=tid;fp.value='';fp.click();}
fp.onchange=()=>{const f=fp.files[0];if(!f)return;const t=tasks.find(x=>x.id===attachId);if(!t)return;t.adj=t.adj||[];const img=f.type.startsWith('image/');const done=src=>{t.adj.push({name:f.name,img:src});t.ev={name:f.name,img:src};renderBoard();if(TASKOPEN)renderTaskDrawer();};if(img){const r=new FileReader();r.onload=e=>done(e.target.result);r.readAsDataURL(f);}else done(null);};
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
const ME=users[0];
let TASKOPEN=null;
function openTask(id){TASKOPEN=id;document.getElementById('taskDrawerOv').classList.add('show');document.getElementById('taskDrawer').classList.add('show');renderTaskDrawer();}
function closeTask(){TASKOPEN=null;document.getElementById('taskDrawerOv').classList.remove('show');document.getElementById('taskDrawer').classList.remove('show');}
function tdNow(){return new Date().toLocaleDateString('es-MX',{day:'numeric',month:'short'})+' '+new Date().toLocaleTimeString('es-MX',{hour:'2-digit',minute:'2-digit'});}
function setDesc(id,v){const t=tasks.find(x=>x.id==id);if(t)t.descripcion=v;}
function addSub(id,v){v=(v||'').trim();if(!v)return;const t=tasks.find(x=>x.id==id);if(!t)return;t.subs=t.subs||[];const sid=t.subs.reduce((m,s)=>Math.max(m,s.id),0)+1;t.subs.push({id:sid,titulo:v,hecha:false});EXPANDED.add(id);renderTaskDrawer();renderBoard();}
function toggleSub(id,sid){const t=tasks.find(x=>x.id==id);if(!t)return;const s=(t.subs||[]).find(x=>x.id==sid);if(s)s.hecha=!s.hecha;renderTaskDrawer();renderBoard();}
function delSub(id,sid){const t=tasks.find(x=>x.id==id);if(!t)return;t.subs=(t.subs||[]).filter(x=>x.id!=sid);renderTaskDrawer();renderBoard();}
function delAdj(id,i){const t=tasks.find(x=>x.id==id);if(!t)return;(t.adj||[]).splice(i,1);renderTaskDrawer();renderBoard();}
function addComment(id,v){v=(v||'').trim();if(!v)return;const t=tasks.find(x=>x.id==id);if(!t)return;t.coms=t.coms||[];t.coms.push({autor:(ME.nombre+' '+(ME.apellidos||'')).trim(),foto:ME.foto,texto:v,fecha:tdNow()});renderTaskDrawer();}
function setDrawerField(id,field,val){const t=tasks.find(x=>x.id==id);if(!t)return;if(field==='title')t.title=val;renderBoard();}
function renderTaskDrawer(){const t=tasks.find(x=>x.id==TASKOPEN);const d=document.getElementById('taskDrawer');if(!t||!d)return;
 const resp=users.find(u=>u.nombre===t.who);const aud=t.auditor_id?users.find(u=>u.id==t.auditor_id):null;
 const subs=subsOf(t.id),coms=t.coms||[],adj=t.adj||[];const done=subs.filter(s=>s.estatus==='Hecho').length;
 const padre=t.padre_id?tasks.find(x=>x.id==t.padre_id):null;
 const chip=(u,lbl)=>u?`${userAva(u)}<span>${esc((u.nombre+' '+(u.apellidos||'')).trim())}</span>`:`<span class="ava-add">＋</span><span class="muted">${lbl}</span>`;
 const colab=(t.colab||[]).map(cid=>{const c=users.find(x=>x.id==cid);return c?userAva(c):'';}).join('');
 const durOpts=[['','Sin definir'],['15','15 min'],['30','30 min'],['45','45 min'],['60','1 h'],['90','1.5 h'],['120','2 h'],['180','3 h'],['240','4 h'],['480','8 h']];const curd=t.dur!=null?String(t.dur):'';
 d.innerHTML=`
  <div class="td-bar"><select class="tl-sel" onchange="move(${t.id},this.value);renderTaskDrawer()">${COLS.map(c=>`<option ${c===t.estatus?'selected':''}>${c}</option>`).join('')}</select><div class="grow"></div><button class="td-x" onclick="closeTask()">✕</button></div>
  <input class="td-title" id="tdTitle" value="${esc(t.title)}" onchange="setDrawerField(${t.id},'title',this.value)">
  ${padre?`<div class="td-parent" onclick="openTask(${padre.id})" title="Abrir tarea madre">↰ Subtarea de: <b>${esc(padre.title)}</b></div>`:''}
  <div class="td-meta">
    <div class="td-mrow"><span class="td-k">Responsable</span><button class="td-v av td-edit" onclick="openPeoplePicker(event,${t.id},'resp')">${chip(resp,'Asignar')}</button></div>
    <div class="td-mrow"><span class="td-k">Auditor</span><button class="td-v av td-edit" onclick="openPeoplePicker(event,${t.id},'auditor')">${chip(aud,'Asignar')}</button></div>
    <div class="td-mrow"><span class="td-k">Colaboradores</span><button class="td-v av td-edit" onclick="openPeoplePicker(event,${t.id},'colab')">${colab||'<span class="ava-add">＋</span><span class="muted">Agregar</span>'}</button></div>
    <div class="td-mrow"><span class="td-k">Fecha</span><button class="td-v td-edit" onclick="openDatePicker(event,${t.id})">${t.date?(fmt(t.date)+(t.hora?(' · '+fmtHora(t.hora)):'')):'<span class="muted">＋ Fecha</span>'}</button></div>
    <div class="td-mrow"><span class="td-k">Duración</span><span class="td-v"><select class="tl-sel" onchange="setDur(${t.id},this.value)">${durOpts.map(o=>`<option value="${o[0]}" ${curd===o[0]?'selected':''}>${o[1]}</option>`).join('')}</select></span></div>
    <div class="td-mrow"><span class="td-k">Proyecto</span><span class="td-v"><select class="tl-sel" onchange="setProyecto(${t.id},this.value)"><option value="">— Sin proyecto —</option>${projects.map(p=>`<option value="${p.id}" ${t.proyecto_id==p.id?'selected':''}>${esc(p.nombre)}</option>`).join('')}</select></span></div>
  </div>
  <div class="td-sec"><div class="td-label">Descripción</div><textarea class="td-desc" id="tdDesc" placeholder="Agrega más detalles sobre esta tarea…" onchange="setDesc(${t.id},this.value)">${esc(t.descripcion||'')}</textarea></div>
  <div class="td-sec"><div class="td-label">Subtareas <span class="td-count">${done}/${subs.length}</span></div>
    <div class="td-subs">${subs.map(s=>`<div class="td-sub"><button class="cal-dot ${s.estatus==='Hecho'?'on':''}" onclick="toggleDone(${s.id})"></button><span class="${s.estatus==='Hecho'?'struck':''}" onclick="openTask(${s.id})" style="cursor:pointer;flex:1">${esc(s.title)}</span><span class="td-substatus">${s.estatus}</span><button class="td-del" onclick="delTask(${s.id})" title="Eliminar">✕</button></div>`).join('')}</div>
    <input class="td-add" id="tdSubInput" placeholder="＋ Agregar subtarea (Enter o Guardar)" onkeydown="if(event.key==='Enter'){createSub(${t.id},this.value);this.value='';}"><div class="td-subhint">Cada subtarea es una tarea con todas sus propiedades. Da clic en su nombre para asignar responsable, fecha, etc. Si una subtarea inicia, la tarea madre pasa a “En progreso”.</div></div>
  <div class="td-sec"><div class="td-label">Archivos adjuntos</div>
    <div class="td-files">${adj.length?adj.map((a,i)=>`<div class="td-file"><span>📎 ${esc(a.name)}</span><button class="td-del" onclick="delAdj(${t.id},${i})" title="Quitar">✕</button></div>`).join(''):'<div class="ph">Sin archivos</div>'}</div>
    <button class="btn ghost" onclick="attach(${t.id})">📎 Adjuntar archivo</button></div>
  <div class="td-sec"><div class="td-label">Comentarios</div>
    <div class="td-coms">${coms.length?coms.map(c=>`<div class="td-com">${c.foto?`<img class="ava-mini" src="${c.foto}">`:'<span class="ava-mini ini">'+esc((c.autor||'?').charAt(0))+'</span>'}<div class="td-com-b"><div class="td-com-h"><b>${esc(c.autor)}</b> <span>${esc(c.fecha)}</span></div><div class="td-com-t">${esc(c.texto)}</div></div></div>`).join(''):'<div class="ph">Sé el primero en comentar. Todo el equipo puede participar aquí.</div>'}</div>
    <div class="td-addcom"><input id="comInput" placeholder="Escribe un comentario…" onkeydown="if(event.key==='Enter'){addComment(${t.id},this.value);this.value='';}"><button class="btn primary" onclick="var i=document.getElementById('comInput');addComment(${t.id},i.value);i.value='';">Comentar</button></div></div>
  <div class="td-foot"><button class="btn primary" onclick="saveTask(${t.id})">Guardar</button><button class="btn ghost" onclick="closeTask()">Cancelar</button><span id="tdMsg" class="note"></span></div>
 `;}
function saveTask(id){const t=tasks.find(x=>x.id==id);if(!t)return;const ti=document.getElementById('tdTitle');if(ti&&ti.value.trim())t.title=ti.value.trim();const de=document.getElementById('tdDesc');if(de)t.descripcion=de.value;const si=document.getElementById('tdSubInput');if(si&&si.value.trim()){createSub(id,si.value.trim());si.value='';}renderBoard();closeTask();}
function openModal(){document.getElementById('overlay').classList.add('show');document.getElementById('fDate').value=today.toISOString().slice(0,10);}
function closeModal(){document.getElementById('overlay').classList.remove('show');}
function addTask(){const title=document.getElementById('fTitle').value.trim();if(!title){alert('Escribe la tarea');return;}const wid=+fw.value,aid=+fa.value;
 tasks.unshift({id:++id,title,who:(users.find(u=>u.id===wid)||{}).nombre||'—',area:(AREAS.find(a=>a.id===aid)||{}).nombre||'—',area_id:aid,proyecto_id:fproj.value?+fproj.value:null,date:document.getElementById('fDate').value,prio:document.getElementById('fPrio').value,estatus:"Por hacer",cierre:null,ev:null});
 document.getElementById('fTitle').value='';closeModal();renderBoard();renderDash();}
document.getElementById('overlay').onclick=e=>{if(e.target.id==='overlay')closeModal();};
function openUserModal(){document.getElementById('uMsg').textContent='';document.getElementById('userOverlay').classList.add('show');}
function closeUserModal(){document.getElementById('userOverlay').classList.remove('show');}
document.getElementById('userOverlay').onclick=e=>{if(e.target.id==='userOverlay')closeUserModal();};
function fdt(s){if(!s)return'—';const d=new Date(String(s).replace(' ','T'));return isNaN(d)?'—':d.toLocaleString('es-MX',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'});}
function fd(s){if(!s)return'—';const d=new Date(String(s).replace(' ','T'));return isNaN(d)?'—':d.toLocaleDateString('es-MX',{day:'2-digit',month:'short',year:'numeric'});}
const COLDEF=[
 {k:'foto',label:'Foto',fixed:true},{k:'nombre',label:'Nombre',fixed:true},
 {k:'cargo',label:'Cargo',fixed:true},{k:'area',label:'Área',fixed:true},
 {k:'equipo',label:'Equipo'},{k:'email',label:'Correo'},{k:'telefono',label:'Teléfono'},{k:'rol',label:'Rol'},{k:'estatus',label:'Estatus'},
 {k:'ultima',label:'Última actividad'},{k:'creado',label:'Creado'},{k:'inv',label:'Invitación'}
];
function defOf(k){return COLDEF.find(c=>c.k===k);}
let userCols=COLDEF.map(c=>({k:c.k,label:c.label,fixed:!!c.fixed,on:true,frozen:false}));
let colW={};
function isFrozen(c){return c.fixed||c.frozen;}
function cellFor(u,k){
 if(k==='foto'){const ini=(u.nombre||'?').charAt(0).toUpperCase();return u.foto?`<img class="uava sm" src="${u.foto}">`:`<span class="uava sm ini">${ini}</span>`;}
 if(k==='nombre'){const full=(u.nombre+' '+(u.apellidos||'')).trim();return `<span class="uname" onclick="openProfile(${u.id})">${full}</span>`;}
 if(k==='apellidos')return u.apellidos||'—';if(k==='cargo')return u.cargo||'—';
 if(k==='email')return u.email||'—';if(k==='telefono')return u.telefono||'—';if(k==='area')return u.area||'—';
 if(k==='equipo')return u.equipo||'—';
 if(k==='rol')return u.rol==='admin'?'<span class="urol admin">Admin</span>':'<span class="urol">Usuario</span>';
 if(k==='estatus'){const s=u.estatus||'Activo';const c=s==='Activo'?'ok':s==='Suspendido'?'warn':'bad';return `<span class="est ${c}">${s}</span>`;}
 if(k==='ultima')return fdt(u.ultima_actividad);if(k==='creado')return fd(u.creado_en);
 if(k==='inv'){const est=u.estado_invitacion||'Pendiente';const eb=est==='Aceptada'?'<span class="inv ok">Aceptada</span>':est==='Enviada'?'<span class="inv sent">Enviada</span>':'<span class="inv pend">Pendiente</span>';const btn=est==='Aceptada'?'':`<button class="inv-btn" onclick="sendInvite(${u.id})">${est==='Enviada'?'Reenviar':'Invitar'}</button>`;return `<div class="invcell">${eb}${btn}</div>`;}
 return '';}
function colOrder(){const vis=userCols.filter(c=>c.on);return [...vis.filter(isFrozen),...vis.filter(c=>!isFrozen(c))];}
function wStyle(k){const w=colW[k];return w?` style="width:${w}px;min-width:${w}px;max-width:${w}px"`:'';}
function wStyleTd(k){const w=colW[k];return w?` style="width:${w}px;min-width:${w}px;max-width:${w}px;overflow:hidden;text-overflow:ellipsis"`:'';}
function thHtml(c){
 const rz=`<span class="col-resizer" data-k="${c.k}"></span>`;
 if(c.k==='foto')return `<th class="uth frz" data-k="foto"${wStyle('foto')}>${rz}</th>`;
 const drag=c.fixed?'':'draggable="true"';const cls='uth'+(isFrozen(c)?' frz':'')+(c.fixed?'':' movable');
 return `<th class="${cls}" data-k="${c.k}" ${drag}${wStyle(c.k)}><span class="uth-lbl">${c.label}</span><button class="uth-kebab" data-k="${c.k}" title="Opciones">⋯</button>${rz}</th>`;}
let SEL=new Set();
function filteredUsers(){const q=(document.getElementById('userSearch')?.value||'').trim().toLowerCase();if(!q)return users;return users.filter(u=>[u.nombre,u.apellidos,u.cargo,u.area,u.equipo,u.email,u.telefono,u.rol,u.estado_invitacion,u.estatus].some(v=>(v||'').toString().toLowerCase().includes(q)));}
function renderUsers(){const el=document.getElementById('userList');if(!el)return;
 if(!users.length){el.innerHTML='<div class="ph">Aún no hay usuarios.</div>';updateBulkBar();return;}
 const order=colOrder();
 if(!order.length){el.innerHTML='<div class="ph">No hay columnas visibles. Usa "Editar columnas".</div>';return;}
 const list=filteredUsers();
 const selHead=`<th class="uth frz selcol"><input type="checkbox" id="selAll" onclick="toggleSelAll(this)"></th>`;
 const head='<tr>'+selHead+order.map(thHtml).join('')+'</tr>';
 const body=list.length?list.map(u=>{const ck=SEL.has(u.id)?'checked':'';const sel=`<td class="selcol"><input type="checkbox" class="rowsel" value="${u.id}" ${ck} onclick="onRowSel(this)"></td>`;return '<tr'+(SEL.has(u.id)?' class="rowon"':'')+'>'+sel+order.map(c=>`<td data-k="${c.k}"${wStyleTd(c.k)}>${cellFor(u,c.k)}</td>`).join('')+'</tr>';}).join(''):`<tr><td colspan="${order.length+1}"><div class="ph">Sin resultados para la búsqueda.</div></td></tr>`;
 el.innerHTML=`<div class="utable-wrap"><table class="utable"><thead>${head}</thead><tbody>${body}</tbody></table></div>`;
 bindColHeaders();applyFrozen(order.filter(isFrozen).length+1);
 const sa=document.getElementById('selAll');if(sa){const vis=list.map(u=>u.id);sa.checked=vis.length>0&&vis.every(id=>SEL.has(id));}
 updateBulkBar();}
function onRowSel(cb){const id=+cb.value;if(cb.checked)SEL.add(id);else SEL.delete(id);cb.closest('tr')?.classList.toggle('rowon',cb.checked);const sa=document.getElementById('selAll');if(sa){const vis=filteredUsers().map(u=>u.id);sa.checked=vis.length>0&&vis.every(x=>SEL.has(x));}updateBulkBar();}
function toggleSelAll(cb){filteredUsers().forEach(u=>{if(cb.checked)SEL.add(u.id);else SEL.delete(u.id);});renderUsers();}
function updateBulkBar(){const bar=document.getElementById('bulkBar');if(!bar)return;const n=SEL.size;bar.style.display=n?'flex':'none';const c=document.getElementById('bulkCount');if(c)c.textContent=n+(n===1?' usuario seleccionado':' usuarios seleccionados');}
function fillBulkTeam(){const s=document.getElementById('bulkTeam');if(!s)return;s.innerHTML='<option value="">— Sin equipo —</option>';EQUIPOS.forEach(e=>s.add(new Option(e.nombre,e.id)));}
function bulkSetTeam(){const ids=[...SEL];if(!ids.length)return;const eq=+document.getElementById('bulkTeam').value||null;const en=(EQUIPOS.find(e=>e.id===eq)||{}).nombre||null;ids.forEach(id=>{const u=users.find(x=>x.id==id);if(u){u.equipo_id=eq;u.equipo=en;}});SEL.clear();renderUsers();renderTeams();}
function bulkSetEstatus(){const ids=[...SEL];if(!ids.length)return;const est=document.getElementById('bulkEstatus').value;if(est!=='Activo'&&!confirm('¿Cambiar a "'+est+'" a '+ids.length+' usuario(s)? Mientras tengan ese estatus no podrán iniciar sesión.'))return;ids.forEach(id=>{const u=users.find(x=>x.id==id);if(u)u.estatus=est;});SEL.clear();renderUsers();}
function bulkDelete(){const ids=[...SEL];if(!ids.length)return;if(!confirm('¿Eliminar definitivamente a '+ids.length+' usuario(s)? Esta acción no se puede deshacer.'))return;const done=new Set(ids);users=users.filter(u=>!done.has(u.id));SEL.clear();renderUsers();renderTeams();}
function bindColHeaders(){
 document.querySelectorAll('#userList .uth-kebab').forEach(b=>{b.onclick=e=>openColMenu(e,b.dataset.k);});
 document.querySelectorAll('#userList th[draggable="true"]').forEach(th=>{
  th.ondragstart=e=>{DRAGK=th.dataset.k;e.dataTransfer.effectAllowed='move';};
  th.ondragover=e=>{e.preventDefault();};
  th.ondrop=e=>{e.preventDefault();reorderCol(DRAGK,th.dataset.k);DRAGK=null;};});
 document.querySelectorAll('#userList .col-resizer').forEach(r=>{r.addEventListener('mousedown',e=>startResize(e,r.dataset.k));});}
let RZ=null;
function startResize(e,key){e.preventDefault();e.stopPropagation();const th=e.target.closest('th');if(!th)return;th.setAttribute('draggable','false');RZ={key,startX:e.clientX,startW:th.offsetWidth};document.body.style.userSelect='none';document.body.style.cursor='col-resize';document.addEventListener('mousemove',onResize);document.addEventListener('mouseup',endResize);}
function onResize(e){if(!RZ)return;const w=Math.max(60,RZ.startW+(e.clientX-RZ.startX));colW[RZ.key]=w;document.querySelectorAll(`#userList [data-k="${RZ.key}"]`).forEach(el=>{el.style.width=w+'px';el.style.minWidth=w+'px';el.style.maxWidth=w+'px';if(el.tagName==='TD'){el.style.overflow='hidden';el.style.textOverflow='ellipsis';}});applyFrozen(colOrder().filter(isFrozen).length+1);}
function endResize(){if(!RZ)return;RZ=null;document.body.style.userSelect='';document.body.style.cursor='';document.removeEventListener('mousemove',onResize);document.removeEventListener('mouseup',endResize);saveCols();renderUsers();}
function applyFrozen(n){const tbl=document.querySelector('#userList .utable');if(!tbl)return;
 const head=tbl.querySelectorAll('thead th');const offs=[];let acc=0;
 for(let i=0;i<n;i++){offs.push(acc);acc+=head[i]?head[i].offsetWidth:0;}
 tbl.querySelectorAll('tr').forEach(tr=>{const cells=tr.children;
  for(let i=0;i<n;i++){const c=cells[i];if(!c)continue;c.style.position='sticky';c.style.left=offs[i]+'px';c.style.background='#fff';c.style.zIndex=(c.tagName==='TH')?'4':'1';c.style.borderRight=(i===n-1)?'2px solid var(--line)':'';}});}
let DRAGK=null;
function reorderCol(from,to){if(!from||from===to)return;const cf=userCols.find(c=>c.k===from),ct=userCols.find(c=>c.k===to);if(!cf||!ct||cf.fixed||ct.fixed)return;const ci=userCols.indexOf(cf);userCols.splice(ci,1);const ti=userCols.indexOf(ct);userCols.splice(ti,0,cf);saveCols();renderUsers();}
function getColMenu(){let m=document.getElementById('colMenu');if(!m){m=document.createElement('div');m.id='colMenu';document.body.appendChild(m);}return m;}
function closeColMenu(){const m=document.getElementById('colMenu');if(m)m.classList.remove('show');}
function openColMenu(e,key){e.stopPropagation();const c=userCols.find(x=>x.k===key);if(!c)return;const m=getColMenu();let it='';
 it+=`<button onclick="sortUsers('${key}','asc')">↑ Orden ascendente</button>`;
 it+=`<button onclick="sortUsers('${key}','desc')">↓ Orden descendente</button>`;
 it+=`<button onclick="addColumnFromMenu()">＋ Agregar columna</button>`;
 if(!c.fixed){it+=`<button onclick="toggleFreeze('${key}')">${c.frozen?'🔓 Liberar columna':'📌 Inmovilizar columna'}</button>`;it+=`<button onclick="removeColumn('${key}')">🗑 Eliminar columna</button>`;}
 m.innerHTML=it;const r=e.currentTarget.getBoundingClientRect();m.style.top=(r.bottom+4)+'px';m.style.left=Math.max(8,Math.min(r.left-150,window.innerWidth-200))+'px';m.classList.add('show');}
function valFor(u,k){
 if(k==='nombre')return((u.nombre||'')+' '+(u.apellidos||'')).trim().toLowerCase();if(k==='apellidos')return(u.apellidos||'').toLowerCase();
 if(k==='cargo')return(u.cargo||'').toLowerCase();if(k==='area')return(u.area||'').toLowerCase();
 if(k==='equipo')return(u.equipo||'').toLowerCase();
 if(k==='email')return(u.email||'').toLowerCase();if(k==='telefono')return(u.telefono||'');
 if(k==='rol')return(u.rol||'');if(k==='inv')return(u.estado_invitacion||'');
 if(k==='estatus')return(u.estatus||'');
 if(k==='ultima')return u.ultima_actividad?new Date(String(u.ultima_actividad).replace(' ','T')).getTime():0;
 if(k==='creado')return u.creado_en?new Date(String(u.creado_en).replace(' ','T')).getTime():0;return'';}
function sortUsers(key,dir){closeColMenu();users.sort((a,b)=>{const x=valFor(a,key),y=valFor(b,key);if(x<y)return dir==='asc'?-1:1;if(x>y)return dir==='asc'?1:-1;return 0;});renderUsers();}
function toggleFreeze(key){closeColMenu();const c=userCols.find(x=>x.k===key);if(c&&!c.fixed){c.frozen=!c.frozen;saveCols();renderUsers();}}
function removeColumn(key){closeColMenu();const c=userCols.find(x=>x.k===key);if(c&&!c.fixed){c.on=false;saveCols();renderUsers();}}
function addColumnFromMenu(){closeColMenu();openColModal();}
function renderColPanel(){const p=document.getElementById('colPanel');if(!p)return;p.innerHTML=userCols.map((c,i)=>`<label class="colchk"><input type="checkbox" ${c.on?'checked':''} ${c.fixed?'disabled':''} onchange="toggleCol(${i})"> ${c.label}${c.fixed?' · fija':''}</label>`).join('');}
function openColModal(){renderColPanel();document.getElementById('colOverlay').classList.add('show');}
function closeColModal(){document.getElementById('colOverlay').classList.remove('show');}
document.getElementById('colOverlay').onclick=e=>{if(e.target.id==='colOverlay')closeColModal();};
function toggleCol(i){const c=userCols[i];if(!c||c.fixed)return;c.on=!c.on;saveCols();renderUsers();}
function saveCols(){try{localStorage.setItem('kafer_ucols2',JSON.stringify(userCols.map(c=>({k:c.k,on:c.on,frozen:c.frozen,w:colW[c.k]||null}))));}catch(e){}}
function loadCols(){try{const s=JSON.parse(localStorage.getItem('kafer_ucols2'));if(Array.isArray(s)&&s.length===COLDEF.length){const a=s.map(x=>x.k).sort().join(','),b=COLDEF.map(c=>c.k).sort().join(',');if(a===b){userCols=s.map(x=>{const d=defOf(x.k);if(x.w)colW[x.k]=x.w;return{k:d.k,label:d.label,fixed:!!d.fixed,on:x.on!==false,frozen:!d.fixed&&!!x.frozen};});}}}catch(e){}}
loadCols();document.addEventListener('click',closeColMenu);
function sendInvite(uid){const u=users.find(x=>x.id==uid);if(u){u.estado_invitacion='Enviada';renderUsers();}}
function addUser(){const m=document.getElementById('uMsg');const n=document.getElementById('uName').value.trim();if(!n){m.textContent='Escribe al menos el nombre';m.style.color='var(--red)';return;}
 const aid=+document.getElementById('uArea').value;const eid=+document.getElementById('uEquipo').value;const ff=document.getElementById('uFoto').files[0];
 const push=(foto)=>{const now=new Date().toISOString().slice(0,19).replace('T',' ');users.push({id:++id,nombre:n,apellidos:document.getElementById('uLast').value,cargo:document.getElementById('uCargo').value,telefono:document.getElementById('uTel').value,email:document.getElementById('uEmail').value,area:(AREAS.find(a=>a.id===aid)||{}).nombre||'—',equipo_id:eid||null,equipo:(EQUIPOS.find(e=>e.id===eid)||{}).nombre||null,rol:document.getElementById('uRol').value,foto,estado_invitacion:'Pendiente',estatus:document.getElementById('uEstatus').value,ultima_actividad:null,creado_en:now});
  users.sort((a,b)=>a.nombre.localeCompare(b.nombre));renderUsers();renderTeams();m.textContent='✓ (Demo) Usuario agregado.';m.style.color='var(--green)';
  ['uName','uLast','uCargo','uEmail','uTel','uPass'].forEach(i=>document.getElementById(i).value='');const p=document.getElementById('uFotoPrev');p.src='';p.classList.remove('on');document.getElementById('uFoto').value='';closeUserModal();};
 if(ff){const r=new FileReader();r.onload=e=>push(e.target.result);r.readAsDataURL(ff);}else push(null);}
let TEAMSEL=new Set();
function teamOpts(u){return '<option value="">Sin equipo</option>'+EQUIPOS.map(e=>`<option value="${e.id}" ${u.equipo_id==e.id?'selected':''}>${e.nombre}</option>`).join('');}
function renderMemberPicker(){const mp=document.getElementById('memberPicker');if(!mp)return;
 if(!users.length){mp.innerHTML='<div class="ph">No hay usuarios.</div>';return;}
 mp.innerHTML=users.map(u=>{const lbl=(u.nombre+' '+(u.apellidos||'')).trim();return `<div class="mp-row"><label class="mp-item"><input type="checkbox" ${TEAMSEL.has(u.id)?'checked':''} onchange="toggleMember(${u.id},this.checked)"><span>${lbl}</span></label><div class="mp-edit"><select class="mp-teamsel" onchange="changeUserTeam(${u.id},this.value)">${teamOpts(u)}</select><button type="button" class="mp-rm" onclick="removeUserTeam(${u.id})">Quitar</button></div></div>`;}).join('');}
function toggleMember(id,ck){if(ck)TEAMSEL.add(id);else TEAMSEL.delete(id);}
function changeUserTeam(id,eq){const e=+eq||null;const en=(EQUIPOS.find(x=>x.id===e)||{}).nombre||null;const u=users.find(x=>x.id==id);if(u){u.equipo_id=e;u.equipo=en;}renderMemberPicker();renderTeams();renderUsers();}
function removeUserTeam(id){changeUserTeam(id,'');}
function renderTeams(){const tb=document.getElementById('teamRows');if(!tb)return;
 if(!EQUIPOS.length){tb.innerHTML='<tr><td colspan="2"><div class="ph">Aún no hay equipos. Crea el primero.</div></td></tr>';return;}
 tb.innerHTML=EQUIPOS.map(e=>{const mem=users.filter(u=>u.equipo_id==e.id);
  const chips=mem.length?mem.map(u=>{const ini=(u.nombre||'?').charAt(0).toUpperCase();const av=u.foto?`<img class="uava sm" src="${u.foto}">`:`<span class="uava sm ini">${ini}</span>`;return `<span class="member-chip" draggable="true" data-uid="${u.id}" ondragstart="teamDragStart(event,${u.id})">${av}${(u.nombre+' '+(u.apellidos||'')).trim()}<button class="mc-x" onclick="teamRemove(${u.id})" title="Quitar del equipo">×</button></span>`;}).join(''):'<span class="ph">Sin integrantes</span>';
  const info=e.descripcion?`<span class="team-info" tabindex="0" onclick="event.stopPropagation();this.classList.toggle('open')" title="Ver descripción">i<span class="team-tip">${esc(e.descripcion)}</span></span>`:'';
  return `<tr ondragover="event.preventDefault();this.classList.add('drop-hl')" ondragleave="this.classList.remove('drop-hl')" ondrop="this.classList.remove('drop-hl');teamDrop(event,${e.id})"><td><strong>${e.nombre}</strong> <span class="team-count">${mem.length}</span></td><td><div class="mcell-wrap"><div class="member-cell">${chips}</div>${info}</div></td></tr>`;}).join('');}
let TEAMDRAG=null;
function teamDragStart(e,uid){TEAMDRAG=uid;e.dataTransfer.effectAllowed='move';}
function teamDrop(e,teamId){e.preventDefault();if(TEAMDRAG!=null){changeUserTeam(TEAMDRAG,teamId);TEAMDRAG=null;}}
function teamRemove(uid){changeUserTeam(uid,'');}
function openTeamModal(){TEAMSEL=new Set();document.getElementById('tName').value='';const td=document.getElementById('tDesc');if(td)td.value='';document.getElementById('tMsg').textContent='';renderMemberPicker();document.getElementById('teamOverlay').classList.add('show');}
function closeTeamModal(){document.getElementById('teamOverlay').classList.remove('show');}
document.getElementById('teamOverlay').onclick=e=>{if(e.target.id==='teamOverlay')closeTeamModal();};
function addTeam(){const msg=document.getElementById('tMsg');const nombre=document.getElementById('tName').value.trim();if(!nombre){msg.textContent='Escribe el nombre del equipo';msg.style.color='var(--red)';return;}
 const descripcion=((document.getElementById('tDesc')||{}).value||'').trim();
 const ids=[...TEAMSEL];
 const nid=(EQUIPOS.reduce((m,e)=>Math.max(m,e.id),0)+1);EQUIPOS.push({id:nid,nombre,descripcion});EQUIPOS.sort((a,b)=>a.nombre.localeCompare(b.nombre));
 ids.forEach(id=>{const u=users.find(x=>x.id==id);if(u){u.equipo_id=nid;u.equipo=nombre;}});
 fillTeamSelect();renderTeams();renderUsers();fillBulkTeam();closeTeamModal();}
const PERMISOS=['Ver','Editar','Comentar','Autorizar'];
const ACCESS_MODULES=['Dashboard','Actividades','Proyectos','KPIs','OKRs','Equipos','Usuarios'];
const ACCESS_PERMS=[['V','Ver'],['E','Editar'],['C','Comentar'],['A','Autorizar']];
function parseAccess(str){const map={};(str||'').split('|').forEach(p=>{const i=p.indexOf(':');if(i>0)map[p.slice(0,i)]=p.slice(i+1);});return map;}
function accMatrixHtml(u){const map=parseAccess(u.permisos);
 const head=`<tr><th>Módulo</th>${ACCESS_PERMS.map(p=>`<th>${p[1]}</th>`).join('')}</tr>`;
 const rows=ACCESS_MODULES.map(m=>{const codes=map[m]||'';return `<tr><td class="acc-mod">${m}</td>${ACCESS_PERMS.map(p=>`<td><label class="acc-cb"><input type="checkbox" class="pf-acc" data-mod="${m}" data-perm="${p[0]}" ${codes.includes(p[0])?'checked':''}></label></td>`).join('')}</tr>`;}).join('');
 return `<table class="acc-table"><thead>${head}</thead><tbody>${rows}</tbody></table>`;}
function collectAccess(){return ACCESS_MODULES.map(m=>{const codes=ACCESS_PERMS.filter(p=>{const cb=document.querySelector('.pf-acc[data-mod="'+m+'"][data-perm="'+p[0]+'"]');return cb&&cb.checked;}).map(p=>p[0]).join('');return codes?m+':'+codes:'';}).filter(Boolean).join('|');}
const SISTEMAS=['Calendario de Google','Correo Google','Chat Google','Microsip','EasyGlass','Winperfil','HubSpot'];
let PROFILE_ID=null;
function openProfile(id){const u=users.find(x=>x.id==id);if(!u)return;PROFILE_ID=id;
 document.querySelectorAll('.view').forEach(s=>s.classList.toggle('show',s.id==='view-perfil'));
 document.getElementById('ttl').textContent='Perfil del empleado';document.getElementById('sub').textContent=(u.nombre+' '+(u.apellidos||'')).trim();renderProfile(id);}
function renderProfile(id){const u=users.find(x=>x.id==id);if(!u)return;
 const full=(u.nombre+' '+(u.apellidos||'')).trim();const ini=(u.nombre||'?').charAt(0).toUpperCase();
 const ava=u.foto?`<img class="pf-photo" src="${u.foto}">`:`<div class="pf-photo ini">${ini}</div>`;
 const est=u.estatus||'Activo';const ec=est==='Activo'?'ok':est==='Suspendido'?'warn':'bad';
 const perm=(u.permisos||'').split(',').filter(Boolean);const sist=(u.sistemas||'').split(',').filter(Boolean);
 const permHtml=PERMISOS.map(p=>`<label class="chip-check"><input type="checkbox" class="pf-perm" value="${p}" ${perm.includes(p)?'checked':''}> ${p}</label>`).join('');
 const sistHtml=SISTEMAS.map(s=>`<label class="chip-check"><input type="checkbox" class="pf-sist" value="${s}" ${sist.includes(s)?'checked':''}> ${s}</label>`).join('');
 const info=[['Correo',u.email],['Teléfono',u.telefono],['Área',u.area],['Equipo',u.equipo],['Rol',u.rol==='admin'?'Administrador':'Usuario'],['Última actividad',fdt(u.ultima_actividad)],['Creado',fd(u.creado_en)]];
 const infoHtml=info.map(([k,v])=>`<div class="pf-field"><span class="pf-k">${k}</span><span class="pf-v">${v||'—'}</span></div>`).join('');
 const kp=kpis.find(k=>k.persona===u.nombre);
 const evalHtml=(kp&&kp.kpis.length)?kp.kpis.map(x=>`<div class="barrow"><span class="nm">${x.n}</span><div class="track"><div class="fill ${x.v>=90?'ok':x.v>=70?'warn':'bad'}" style="width:${x.v}%"></div></div><span class="pv">${x.v}%</span></div>`).join(''):'<div class="ph">Aún no hay indicadores configurados para esta persona.</div>';
 const ts=tasks.filter(t=>t.who===u.nombre);
 const histHtml=ts.length?ts.map(t=>`<div class="pf-hist"><span class="pf-hist-t">${t.title}</span><span class="pill">${t.estatus}</span><span class="pf-hist-d">${t.date||''}</span></div>`).join(''):'<div class="ph">Sin actividad registrada todavía.</div>';
 const chev='<svg class="chev" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>';
 document.getElementById('perfilBody').innerHTML=`
   <div class="pf-topbar"><button class="btn ghost" onclick="nav('usuarios')">← Volver a Usuarios</button></div>
   <div class="panel pf-head">${ava}<div class="pf-id"><h2>${full}</h2><div class="pf-meta"><span class="est ${ec}">${est}</span><span class="pf-dot">·</span>${u.email||'—'}<span class="pf-dot">·</span>${u.cargo||'—'}</div></div><div class="grow"></div><button class="btn ghost" onclick="openEditUser(${u.id})">Editar datos</button></div>
   <div class="pf-tabs">
     <button class="pf-tab active" onclick="profTab(this,'info')">Información del empleado</button>
     <button class="pf-tab" onclick="profTab(this,'perm')">Accesos</button>
     <button class="pf-tab" onclick="profTab(this,'sist')">Sistemas conectados</button>
     <button class="pf-tab" onclick="profTab(this,'eval')">Evaluación</button>
     <button class="pf-tab" onclick="profTab(this,'hist')">Historial</button>
   </div>
   <div class="pf-pane show" data-p="info"><div class="panel"><div class="pf-grid">${infoHtml}<div class="pf-field"><span class="pf-k">Horario laboral</span><input class="field pf-input" id="pfHorario" value="${(u.horario||'').replace(/"/g,'&quot;')}" placeholder="Ej. Lun–Vie 9:00–18:00"></div><div class="pf-field"><span class="pf-k">Salario</span><input class="field pf-input" id="pfSalario" type="number" step="0.01" value="${u.salario!=null?u.salario:''}" placeholder="0.00"></div></div><div class="pf-save"><button class="btn primary" onclick="saveProfile()">Guardar cambios</button><span id="pfMsg" class="note"></span></div></div></div>
   <div class="pf-pane" data-p="perm"><div class="panel"><div class="ph">Define qué puede hacer cada usuario en cada módulo del sistema</div>${accMatrixHtml(u)}<div class="pf-save"><button class="btn primary" onclick="saveProfile()">Guardar cambios</button></div></div></div>
   <div class="pf-pane" data-p="sist"><div class="panel"><div class="ph">Fuentes de datos para medir su desempeño</div><div class="chip-row">${sistHtml}</div><div class="pf-save"><button class="btn primary" onclick="saveProfile()">Guardar cambios</button></div></div></div>
   <div class="pf-pane" data-p="eval"><div class="panel">${evalHtml}</div></div>
   <div class="pf-pane" data-p="hist"><div class="panel">${histHtml}</div></div>`;}
function profTab(btn,key){const root=document.getElementById('perfilBody');root.querySelectorAll('.pf-tab').forEach(t=>t.classList.toggle('active',t===btn));root.querySelectorAll('.pf-pane').forEach(p=>p.classList.toggle('show',p.dataset.p===key));}
function saveProfile(){const id=PROFILE_ID;if(!id)return;const u=users.find(x=>x.id==id);
 if(u){u.horario=document.getElementById('pfHorario').value;const s=document.getElementById('pfSalario').value;u.salario=s===''?null:parseFloat(s);u.permisos=collectAccess();u.sistemas=[...document.querySelectorAll('.pf-sist:checked')].map(c=>c.value).join(',');}
 const m=document.getElementById('pfMsg');m.textContent='✓ (Demo) Guardado.';m.style.color='var(--green)';}
function openEditUser(id){const u=users.find(x=>x.id==id);if(!u)return;
 document.getElementById('eId').value=u.id;document.getElementById('eName').value=u.nombre||'';document.getElementById('eLast').value=u.apellidos||'';document.getElementById('eCargo').value=u.cargo||'';document.getElementById('eTel').value=u.telefono||'';document.getElementById('eEmail').value=u.email||'';document.getElementById('eArea').value=(AREAS.find(a=>a.nombre===u.area)||{}).id||'';document.getElementById('eEquipo').value=u.equipo_id||'';document.getElementById('eRol').value=u.rol||'usuario';document.getElementById('eEstatus').value=u.estatus||'Activo';document.getElementById('eMsg').textContent='';document.getElementById('editOverlay').classList.add('show');}
function closeEditUser(){document.getElementById('editOverlay').classList.remove('show');}
document.getElementById('editOverlay').onclick=e=>{if(e.target.id==='editOverlay')closeEditUser();};
function saveEditUser(){const msg=document.getElementById('eMsg');const id=+document.getElementById('eId').value;const nombre=document.getElementById('eName').value.trim();if(!nombre){msg.textContent='El nombre es obligatorio';msg.style.color='var(--red)';return;}
 const aid=+document.getElementById('eArea').value||null;const eid=+document.getElementById('eEquipo').value||null;const u=users.find(x=>x.id==id);
 if(u){u.nombre=nombre;u.apellidos=document.getElementById('eLast').value;u.cargo=document.getElementById('eCargo').value;u.telefono=document.getElementById('eTel').value;u.email=document.getElementById('eEmail').value;u.area=(AREAS.find(a=>a.id===aid)||{}).nombre||'—';u.equipo_id=eid;u.equipo=(EQUIPOS.find(e=>e.id===eid)||{}).nombre||null;u.rol=document.getElementById('eRol').value;u.estatus=document.getElementById('eEstatus').value;}
 renderUsers();renderTeams();if(document.getElementById('view-perfil').classList.contains('show'))renderProfile(id);closeEditUser();}
function changePass(){const m=document.getElementById('cMsg');m.textContent='✓ (Demo) Contraseña actualizada.';m.style.color='var(--green)';document.getElementById('cAct').value='';document.getElementById('cNue').value='';}
function projStats(pid){const ts=tasks.filter(t=>t.proyecto_id==pid);const hechas=ts.filter(t=>t.estatus==='Hecho').length;const atras=ts.filter(t=>status(t)==='late').length;return{total:ts.length,hechas,atras,pct:ts.length?Math.round(hechas/ts.length*100):0};}
function renderProjects(){const el=document.getElementById('projList');if(!el)return;
 if(!projects.length){el.innerHTML='<div class="panel" style="margin-top:16px"><div class="ph">Aún no hay proyectos.</div></div>';return;}
 el.innerHTML='<div class="pgrid">'+projects.map(p=>{const s=projStats(p.id);const ec=p.estado==='Activo'?'act':p.estado==='En pausa'?'pau':'cer';
  return `<div class="pcard"><div class="phead"><div class="pnom">${p.nombre}</div><span class="pest ${ec}">${p.estado}</span></div>`+(p.descripcion?`<div class="pdesc">${p.descripcion}</div>`:'')+`<div class="pmeta">${p.area||'—'}${p.lider?' · Líder: '+p.lider:''}</div><div class="track" style="margin:10px 0 6px"><div class="fill ${s.pct>=80?'g':s.pct>=40?'a':'r'}" style="width:${s.pct}%"></div></div><div class="pstats">${s.total} tareas · ${s.hechas} hechas · <b style="color:var(--red)">${s.atras} atrasadas</b> · <b>${s.pct}%</b></div></div>`;}).join('')+'</div>';}
function addProject(){const m=document.getElementById('pMsg');const n=document.getElementById('pName').value.trim();if(!n){m.textContent='Escribe el nombre del proyecto';m.style.color='var(--red)';return;}
 const aid=+document.getElementById('pArea').value,lid=+document.getElementById('pLider').value;
 const np={id:++id,nombre:n,descripcion:document.getElementById('pDesc').value,area:(AREAS.find(a=>a.id===aid)||{}).nombre||'—',lider:(users.find(u=>u.id===lid)||{}).nombre||'',estado:document.getElementById('pEstado').value};
 projects.push(np);fproj.add(new Option(np.nombre,np.id));renderProjects();m.textContent='✓ (Demo) Proyecto creado.';m.style.color='var(--green)';['pName','pDesc'].forEach(i=>document.getElementById(i).value='');}
applyTheme();renderBoard();renderDash();renderUsers();renderProjects();renderTeams();

/* --- Exponer API a window para los handlers inline (onclick="...") del HTML --- */
Object.assign(window, {ACCESS_MODULES,ACCESS_PERMS,ACOLS,ACOLS_MASTER,ACTVIEW,ACTVIEWS,ACWN,ADRAGK,AREAS,ARZ,ASEARCH,ASORT,BOARD_VIEW,CAL_RZ_DONE,COLDEF,COLS,DP,DRAGK,EQUIPOS,EXPANDED,FFIELDS,FSEARCH,ME,PERMISOS,PP,PROFILE_ID,QADD,RZ,SEL,SHARED_VIEWS,SISTEMAS,TASKOPEN,TEAMDRAG,TEAMSEL,TIPOS,TIPO_IC,accMatrixHtml,actAddFromMenu,actCellFor,actCols,actEndResize,actFreeze,actGT,actHide,actMatch,actOnResize,actShow,actSort,actStartResize,actToggleCol,actValFor,addColumnFromMenu,addComment,addProject,addSub,addTask,addTeam,addUser,addView,applyFrozen,applyTheme,applyView,archiveTask,attach,attachId,avatarMini,avg,bar,bindColHeaders,boardPerson,boardTasks,bulkDelete,bulkSetEstatus,bulkSetTeam,calChips,calDS,calDurLbl,calEvClick,calHourGrid,calMove,calOpenDay,calResizeEnd,calResizeMove,calResizeStart,calYearGrid,cardEl,cellFor,changePass,changeUserTeam,closeActColModal,closeActMenu,closeAllViews,closeColMenu,closeColModal,closeDP,closeEditUser,closeFilters,closeModal,closePP,closeTask,closeTeamModal,closeUserModal,colOrder,colW,collectAccess,createQuickTask,createSub,cump,defOf,delAdj,delSub,delTask,delView,dpApply,dpMove,dpPick,dpRender,endResize,ensureViews,entrar,esc,fa,fd,fdt,ffActive,ffAdd,ffCard,ffClear,ffDate,ffNum,ffOpts,ffPropsHtml,ffRefreshProps,ffRemove,ffSaveView,ffSummaryVal,ffText,ffToggleVal,ffVal,fillBulkTeam,fillTeamSelect,filteredUsers,fmtDur,fmtHora,getColMenu,guardarVista,id,importSharedView,isFrozen,kpiMode,kpiScore,kpis,loadCols,makeCols,move,nav,okrMode,okrs,onActSearch,onPersonChange,onResize,onRowSel,openActColModal,openActMenu,openColMenu,openColModal,openDatePicker,openEditUser,openFilters,openModal,openPeoplePicker,openProfile,openTask,openTeamModal,openUserModal,parseAccess,personPct,ppOutside,ppRender,ppSetAuditor,ppSetResp,ppToggleColab,profTab,projStats,projects,qaId,quickAdd,quickAddBlur,quickAddKey,reconcileCols,removeColumn,removeUserTeam,renameView,renderActColPanel,renderAllViewsPop,renderArchive,renderBoard,renderCalendar,renderColPanel,renderDash,renderFilterDrawer,renderFilterSummary,renderKanban,renderKpi,renderListView,renderMemberPicker,renderOkr,renderProfile,renderProjects,renderTaskDrawer,renderTeams,renderUsers,renderViewsBar,reorderActCol,reorderCol,restoreTask,salir,saveCols,saveEditUser,saveProfile,saveTask,saveViews,sendInvite,setAuditor,setAvance,setBoardView,setCalMode,setDesc,setDrawerField,setDur,setKpi,setOkr,setProyecto,setTipo,sortUsers,startResize,status,subRowsHtml,subsOf,syncView,taskPassesFilters,tasks,tdNow,teamDragStart,teamDrop,teamOpts,teamRemove,thHtml,today,toggleAllViews,toggleCol,toggleDone,toggleFreeze,toggleGroup,toggleMember,toggleSelAll,toggleSidebar,toggleSub,toggleSubs,toggleTheme,updFilterCount,updateBulkBar,userAva,userCols,users,valFor,vallOutside,viewFilters,vlbl,wStyle,wStyleTd});
