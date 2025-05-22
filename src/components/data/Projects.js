import NextIcon from "../icons/Next.astro"
import TailwindIcon from "../icons/Tailwind.astro"
import PrismaIcon from "../icons/Prisma.astro"
import TypeScriptIcon from "../icons/TypeScript.astro"
import MysqlIcon from "../icons/MySql.astro"
import JavaScriptIcon from "../icons/JavaScript.astro"
import SupaBaseIcon from "../icons/SupaBase.astro"

export const TAGS = {
    NEXT: {
        name: 'Next.js',
        class: 'bg-black/80 text-white',
        icon:NextIcon
    },
    TAILWIND: {
        name: 'Tailwind CSS',
        class: 'bg-[#003159] text-white',
        icon: TailwindIcon
    },
    PRISMA: {
        name: 'Prisma',
        class: 'bg-[#1B5299] text-white',
        icon: PrismaIcon
    },
    SUPABASE: {
        name: 'Supabase',
        class: 'bg-[#497763] text-white',
        icon: SupaBaseIcon
    },
    TYPESCRIPT: {
        name: 'TypeScript',
        class: 'bg-[#003159] text-white',
        icon: TypeScriptIcon
    },
    JAVASCRIPT: {
        name: 'JavaScript',
        class: 'bg-[#cbb714]',
        icon: JavaScriptIcon
    },
    MYSQL: {
        name: 'MySQL',
        class: 'bg-[#003159] text-white',
        icon: MysqlIcon
    },
}



export const ProjectsEs = [
    {
        title: 'Página Web Taxi Bargain',
        description: 'Una página web para un servicio de reserva de taxis con una interfaz fácil de usar e integración de solicitudes.',
        image: '/projects/taxiBargain-mk.png',
        link: 'https://sakura-coffee-shop-admin-test.vercel.app',
        github: 'https://github.com/Bricret/sakura-coffee-admin',
        details: 'Usuario: admin Contraseña: 123',
        tags: [TAGS.NEXT,  TAGS.TYPESCRIPT, TAGS.TAILWIND, TAGS.PRISMA, TAGS.MYSQL ]
    },
    {
        title: 'Sistema de inventario y manejo de caja de cafeteria Sakura Coffe Shop',
        description: 'El proyecto consiste en un sistema de inventario y gestión de caja para una cafetería. Este sistema posibilita llevar un control detallado de los productos vendidos, gestionar pedidos, monitorizar el efectivo disponible en caja y registrar las ganancias diarias. Además, facilita la realización de cierres de caja y proporciona acceso al historial completo de ventas. La aplicación genera múltiples archivos Excel con informes filtrados por fechas, ofreciendo así un análisis detallado de las transacciones. Destaca por su alto nivel de seguridad en el manejo de datos, asegurando la confidencialidad y integridad de la información.',
        image: '/projects/Project_SakuraCoffee.webp',
        link: 'https://sakura-coffee-shop-admin-test.vercel.app',
        github: 'https://github.com/Bricret/sakura-coffee-admin',
        details: 'Usuario: admin Contraseña: 123',
        tags: [TAGS.NEXT,  TAGS.TYPESCRIPT, TAGS.TAILWIND, TAGS.PRISMA, TAGS.MYSQL ]
    },
    {
        title: 'Repositorio de Tesis de la facultad de Ciencias y Tecnologias de la UNAN-Leon',
        description: 'Sitio web diseñado con el fin de ayudar al cuerpo estudiantil de la Facultad de Ciencias y Tecnologías a encontrar cualquier tesis de su facultad de manera rápida y sencilla. Cuenta con un potente buscador con filtros para facilitar la búsqueda de la tesis deseada y poder descargarla.',
        image: '/projects/repositorio.png',
        link: 'https://repositorio-unan-leon.vercel.app/',
        github: 'https://github.com/Bricret/repositorio-UNAN-Leon',
        tags: [TAGS.NEXT,  TAGS.JAVASCRIPT, TAGS.TAILWIND, TAGS.SUPABASE ]
    },
]

export const ProjectsEn = [
    {
        title: 'Sakura Coffe Shop Inventory and Cash Management System',
        description: 'The project consists of an inventory and cash management system for a coffee shop. This system allows detailed control of the products sold, order management, monitoring of the cash available in the cash register, and recording of daily profits. In addition, it facilitates the closing of the cash register and provides access to the complete sales history. The application generates multiple Excel files with reports filtered by dates, offering a detailed analysis of the transactions. It stands out for its high level of security in data management, ensuring the confidentiality and integrity of the information.',
        image: '/projects/Project_SakuraCoffee.webp',
        link: 'https://sakura-coffee-shop-admin-test.vercel.app',
        github: 'https://github.com/Bricret/sakura-coffee-admin',
        details: 'Usuario: admin Contraseña: 123',
        tags: [TAGS.NEXT,  TAGS.TYPESCRIPT, TAGS.TAILWIND, TAGS.PRISMA, TAGS.MYSQL ]
    },
    {
        title: 'UNAN-Leon Faculty of Science and Technology Thesis Repository',
        description: 'Website designed to help the student body of the Faculty of Science and Technology find any thesis from their faculty quickly and easily. It has a powerful search engine with filters to facilitate the search for the desired thesis and be able to download it.',
        image: '/projects/repositorio.png',
        link: 'https://repositorio-unan-leon.vercel.app/',
        github: 'https://github.com/Bricret/repositorio-UNAN-Leon',
        tags: [TAGS.NEXT,  TAGS.JAVASCRIPT, TAGS.TAILWIND, TAGS.SUPABASE ]
    },
]