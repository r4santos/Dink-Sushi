// Translations object
const translations = {
    pt: {
        // Navigation
        combos: "Combos",
        promotions: "Promoções",
        sushiTypes: "Tipos de Sushi",
        drinks: "Bebidas",
        search: "Buscar...",
        login: "Login",
        register: "Cadastro",
        
        // Hero
        heroTitle: "Experimente o melhor do sushi em um ambiente de alto padrão",
        viewMenu: "Ver Cardápio",
        orderNow: "Faça seu Pedido",
        
        // About
        aboutUs: "Quem Somos",
        aboutText1: "O Dink Sushi nasceu da paixão pela culinária japonesa e do desejo de oferecer uma experiência gastronômica única e sofisticada.",
        aboutText2: "Fundado em 2015, nosso restaurante combina técnicas tradicionais japonesas com toques contemporâneos, criando pratos que são verdadeiras obras de arte.",
        aboutText3: "Nossos chefs são mestres na arte do sushi, com anos de experiência e treinamento especializado no Japão. Utilizamos apenas ingredientes frescos e de alta qualidade, selecionados diariamente para garantir o sabor autêntico e refinado que nos caracteriza.",
        
        // Menu Items
        comboSpecial: "Combo Especial",
        comboSpecialDesc: "Seleção premium com 32 peças incluindo sashimis, niguiris e hossomakis.",
        comboFamily: "Combo Família",
        comboFamilyDesc: "50 peças variadas perfeitas para compartilhar, com hot rolls e temakis.",
        comboExecutive: "Combo Executivo",
        comboExecutiveDesc: "16 peças selecionadas com sashimi de salmão e atum, ideal para almoço.",
        
        happyHour: "Happy Hour",
        happyHourDesc: "De segunda a quinta, das 17h às 19h, 30% de desconto em todos os rolls.",
        temakiFestival: "Festival de Temaki",
        temakiFestivalDesc: "Às terças, compre um temaki e ganhe outro de igual valor ou menor.",
        discount: "30% OFF",
        
        temakiDesc: "Enrolado em formato de cone feito com alga marinha (nori). O cone é recheado principalmente com arroz para sushi (shari) e uma variedade de ingredientes frescos ou grelhados.",
        hotrollDesc: "Rolinhos de sushi empanados e fritos, com diversos recheios.",
        uramakiDesc: "Roll com arroz por fora e nori por dentro, com diversos recheios.",
        
        water: "Água",
        refri: "Refrigerante.",
        juice: "Suco",
        umeshuDesc: "Licor japonês de ameixa, doce e refrescante.",
        
        order: "Pedir",
        
        // Contact
        contactUs: "Fale com a gente",
        openingHours: "Horário de Atendimento",
        openingDays: "Segunda a Sábado",
        openingTimes: "11h às 22h",
        phone: "Telefone",
        address: "Endereço",
        addressLine: "Av. Paulista, 1000 - São Paulo, SP",
        
        // Auth
        email: "E-mail",
        password: "Senha",
        confirmPassword: "Confirmar Senha",
        name: "Nome",
        forgotPassword: "Esqueceu a senha?",
        
        // Footer
        quickMenu: "Menu Rápido",
        about: "Sobre",
        contact: "Contato",
        privacyPolicy: "Política de Privacidade",
        paymentMethods: "Formas de Pagamento",
        securitySeals: "Selos de Segurança",
        copyright: "© 2023 Dink Sushi. Todos os direitos reservados a Rafael Santos."
    },
    en: {
        // Navigation
        combos: "Combos",
        promotions: "Promotions",
        sushiTypes: "Sushi Types",
        drinks: "Drinks",
        search: "Search...",
        login: "Login",
        register: "Sign Up",
        
        // Hero
        heroTitle: "Experience the best sushi in a high-end environment",
        viewMenu: "View Menu",
        orderNow: "Order Now",
        
        // About
        aboutUs: "About Us",
        aboutText1: "Dink Sushi was born from a passion for Japanese cuisine and the desire to offer a unique and sophisticated gastronomic experience.",
        aboutText2: "Founded in 2015, our restaurant combines traditional Japanese techniques with contemporary touches, creating dishes that are true works of art.",
        aboutText3: "Our chefs are masters in the art of sushi, with years of experience and specialized training in Japan. We use only fresh, high-quality ingredients, selected daily to ensure the authentic and refined flavor that characterizes us.",
        
        // Menu Items
        comboSpecial: "Special Combo",
        comboSpecialDesc: "Premium selection with 32 pieces including sashimis, niguiris and hossomakis.",
        comboFamily: "Family Combo",
        comboFamilyDesc: "50 varied pieces perfect for sharing, with hot rolls and temakis.",
        comboExecutive: "Executive Combo",
        comboExecutiveDesc: "16 selected pieces with salmon and tuna sashimi, ideal for lunch.",
        
        happyHour: "Happy Hour",
        happyHourDesc: "Monday to Thursday, from 5pm to 7pm, 30% off on all rolls.",
        temakiFestival: "Temaki Festival",
        temakiFestivalDesc: "On Tuesdays, buy one temaki and get another of equal or lesser value.",
        discount: "30% OFF",
        
        temakiDesc: "Rolled into a cone shape made from seaweed (nori). The cone is filled primarily with sushi rice (shari) and a variety of fresh or grilled ingredients.",
        hotrollDesc: "Breaded and fried sushi rolls with various fillings.",
        uramakiDesc: "Roll with rice on the outside and nori on the inside, with various fillings.",
        
        water: "Water",
        refri: "Refri",
        juice: "Juice",
        umeshuDesc: "Japanese plum liqueur, sweet and refreshing.",
        
        order: "Order",
        
        // Contact
        contactUs: "Contact Us",
        openingHours: "Opening Hours",
        openingDays: "Monday to Saturday",
        openingTimes: "11am to 10pm",
        phone: "Phone",
        address: "Address",
        addressLine: "Paulista Ave, 1000 - São Paulo, Brazil",
        
        // Auth
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm Password",
        name: "Name",
        forgotPassword: "Forgot password?",
        
        // Footer
        quickMenu: "Quick Menu",
        about: "About",
        contact: "Contact",
        privacyPolicy: "Privacy Policy",
        paymentMethods: "Payment Methods",
        securitySeals: "Security Seals",
        copyright: "© 2023 Dink Sushi. All rights reserved to Rafael Santos."
    }
};

// Language switcher functionality
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = 'pt'; // Default language
    
    // Function to update all translations
    function updateTranslations(lang) {
        // Update elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Update placeholders
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });
        
        // Update active language button
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Save language preference
        localStorage.setItem('dinkSushiLang', lang);
        currentLang = lang;
    }
    
    // Check for saved language preference
    const savedLang = localStorage.getItem('dinkSushiLang');
    if (savedLang) {
        updateTranslations(savedLang);
    }
    
    // Add click event to language buttons
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            updateTranslations(lang);
        });
    });
});