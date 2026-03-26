document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Reveal Animations on Scroll
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeMenu = document.querySelector('.close-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav .nav-link');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        const hideMenu = () => {
            mobileNav.classList.remove('active');
            document.body.style.overflow = 'auto';
        };

        closeMenu.addEventListener('click', hideMenu);
        mobileLinks.forEach(link => link.addEventListener('click', hideMenu));
    }

    // Language Switch Logic
    const translations = {
        pt: {
            nav_portfolio: "PORTFÓLIO",
            nav_sobre: "SOBRE",
            nav_contato: "CONTATO",
            btn_iniciar_projeto: "INICIAR PROJETO",
            hero_label: "BRANDING & POSICIONAMENTO",
            hero_title_line1: "Construímos marcas com",
            hero_title_line2: "clareza, consistência e valor",
            hero_subtitle: "Branding pensado para estruturar marcas com mais direção,<br class='hero-br'> diferenciação e presença no mercado.",
            btn_ver_projetos: "VER PROJETOS",
            marquee_text: "STRATEGIC BRANDING • GLOBAL VISION • PREMIUM DESIGN • CORPORATE EXCELLENCE • STRATEGIC BRANDING • GLOBAL VISION • PREMIUM DESIGN • CORPORATE EXCELLENCE •",
            section_projects_label: "TRABALHOS SELECIONADOS",
            section_projects_title: "Projetos em destaque",
            nav_ver_todos_projetos: "VER TODOS PROJETOS",
            section_methodology_title: "Metodologia",
            section_methodology_subtitle: "Trabalhamos para alinhar estratégia e identidade de forma prática e consistente.",
            method_01_title: "Diagnóstico",
            method_01_desc: "Entendimento da marca, do contexto e das oportunidades de posicionamento.",
            method_02_title: "Estratégia",
            method_02_desc: "Definição de direção, posicionamento e proposta de valor clara.",
            method_03_title: "Identidade",
            method_03_desc: "Tradução visual e verbal da estratégia em elementos proprietários.",
            section_about_label: "ESTRATÉGIA E CONSTRUÇÃO DE MARCA",
            section_about_title: "Construindo marcas com clareza e direção.",
            section_about_desc: "A Versatto Brands trabalha com branding para estruturar marcas de forma mais clara, consistente e relevante. Nosso foco está em alinhar estratégia e linguagem visual para construir marcas que funcionam no longo prazo.",
            stat_brands: "MARCAS ATENDIDAS",
            stat_countries: "PAÍSES",
            section_why_title: "Por que Versatto?",
            section_why_subtitle: "Nossa abordagem é o que nos separa das agências convencionais. Focamos no que realmente importa: o valor do seu negócio.",
            why_01_title: "Foco em Valor",
            why_01_desc: "Não criamos apenas logos; construímos percepção de valor e autoridade para sua marca.",
            why_02_title: "Visão Global",
            why_02_desc: "Linguagem e estratégia alinhadas aos padrões internacionais de design e comunicação.",
            why_03_title: "Agilidade Estratégica",
            why_03_desc: "Processos otimizados para entregar resultados de alta qualidade em tempo recorde.",
            section_cta_title: "Vamos estruturar <br>sua marca?",
            section_cta_desc: "Se você busca mais clareza, consistência e posicionamento, podemos conversar.",
            footer_desc: "Consultoria Estratégica de Branding.",
            footer_local: "LOCAL",
            footer_contact: "CONTATO",
            footer_social: "SOCIAL",
            footer_rights: "&copy; 2026 Versatto Brands. Todos os direitos reservados.",
            footer_tagline: "Consultoria de Branding Premium",
            // Portfolio Page
            portfolio_hero_label: "PORTFÓLIO",
            portfolio_hero_title: "Trabalhos Selecionados",
            portfolio_hero_subtitle: "Uma seleção de projetos onde estratégia e design se encontram para criar marcas de alto impacto.",
            portfolio_cta_title: "Pronto para elevar <br>sua marca?",
            // Project Pages
            next_project: "PRÓXIMO PROJETO",
            project_client: "CLIENTE",
            project_year: "ANO",
            project_services: "SERVIÇOS",
            // Contact Page
            contact_hero_label: "PRÉ-BRIEFING",
            contact_hero_title: "Formulário para Proposta de Investimento",
            contact_hero_subtitle: "Este formulário é o primeiro passo para entender melhor os desafios e objetivos do projeto.",
            contact_sec1_title: "01. DADOS DE CONTATO",
            contact_name_label: "Qual é o seu nome completo?",
            contact_name_placeholder: "Seu nome aqui",
            contact_email_label: "Informe seu melhor email",
            contact_email_placeholder: "exemplo@empresa.com",
            contact_whatsapp_label: "Whatsapp com DDD (opcional)",
            contact_whatsapp_placeholder: "(00) 00000-0000",
            contact_insta_label: "Instagram da sua empresa (se houver)",
            contact_insta_placeholder: "@suaempresa",
            contact_sec2_title: "02. DADOS DA EMPRESA",
            contact_company_label: "Nome da sua empresa?",
            contact_company_placeholder: "Nome da empresa",
            contact_employees_label: "Quantos funcionários sua empresa possui atualmente?",
            contact_employees_1_5: "1 a 5 funcionários",
            contact_employees_6_20: "6 a 20 funcionários",
            contact_employees_21_50: "21 a 50 funcionários",
            contact_employees_50plus: "Mais de 50 funcionários",
            contact_services_label: "Quais produtos ou serviços sua empresa oferece?",
            contact_services_placeholder: "Ex: Consultoria, E-commerce, etc.",
            contact_sec3_title: "03. INFORMAÇÕES FINAIS",
            contact_origin_label: "Como nos encontrou?",
            contact_origin_referral: "Indicação",
            contact_origin_insta: "Instagram",
            contact_origin_linkedin: "LinkedIn",
            contact_origin_google: "Google",
            contact_origin_others: "Outros",
            contact_revenue_label: "Qual faturamento mensal da sua empresa?",
            contact_revenue_up_50k: "Até R$ 50k",
            contact_revenue_50k_200k: "R$ 50k - R$ 200k",
            contact_revenue_200k_1m: "R$ 200k - R$ 1M",
            contact_revenue_above_1m: "Acima de R$ 1M",
            contact_challenges_label: "Fale um pouco sobre a sua empresa e os principais desafios que enfrentam hoje",
            contact_challenges_placeholder: "Descreva brevemente seus objetivos e dores atuais...",
            contact_btn_send: "Enviar Proposta",
            contact_select_option: "Selecione uma opção",
            contact_success_msg: "Obrigado! Recebemos suas informações e entraremos em contato em breve.",
            // Project: Luxe Residences
            luxe_title: "Luxe Residences",
            luxe_subtitle: "Redefinindo o conceito de moradia de alto padrão.",
            luxe_desc1: "O desafio para a Luxe Residences era criar uma marca que transmitisse exclusividade sem cair nos clichês do mercado imobiliário tradicional. Desenvolvemos um posicionamento focado na 'experiência do silêncio' e na sofisticação minimalista.",
            luxe_desc2: "A identidade visual utiliza uma paleta sóbria e tipografia personalizada, refletindo a precisão arquitetônica dos empreendimentos. O resultado é uma marca que fala diretamente com um público que valoriza o tempo e o bem-estar acima de tudo.",
            luxe_services: "Naming, Estratégia, Identidade Visual, Digital",
            // Project: Nexus Capital
            nexus_title: "Nexus Capital",
            nexus_subtitle: "Estratégia financeira com visão de futuro.",
            nexus_desc1: "A Nexus Capital precisava de uma identidade que equilibrasse solidez institucional com inovação tecnológica. O projeto focou em criar uma linguagem visual que transmitisse confiança e clareza em um mercado complexo.",
            nexus_desc2: "O símbolo desenvolvido representa a conexão entre dados e decisões estratégicas. A paleta de cores azul profundo e prata reforça a autoridade da marca, enquanto o design limpo garante legibilidade em todas as plataformas digitais.",
            nexus_services: "Estratégia de Marca, Identidade Visual, Website",
            // Project: Aether Cosmetics
            aether_title: "Aether Cosmetics",
            aether_subtitle: "A essência da beleza em sua forma mais pura.",
            aether_desc1: "Aether é uma marca de cosméticos premium que valoriza ingredientes naturais e processos sustentáveis. O branding foi construído para refletir essa pureza, utilizando materiais táteis e uma estética etérea.",
            aether_desc2: "O design de embalagem foi central para o projeto, utilizando formas orgânicas e acabamentos foscos. A marca se posiciona como um ritual de autocuidado, elevando a rotina diária a um momento de conexão e luxo consciente.",
            aether_services: "Branding, Packaging, Direção de Arte"
        },
        en: {
            nav_portfolio: "PORTFOLIO",
            nav_sobre: "ABOUT",
            nav_contato: "CONTACT",
            btn_iniciar_projeto: "START PROJECT",
            hero_label: "BRANDING & POSITIONING",
            hero_title_line1: "We build brands with",
            hero_title_line2: "clarity, consistency and value",
            hero_subtitle: "Branding designed to structure brands with more direction,<br class='hero-br'> differentiation and market presence.",
            btn_ver_projetos: "VIEW PROJECTS",
            marquee_text: "STRATEGIC BRANDING • GLOBAL VISION • PREMIUM DESIGN • CORPORATE EXCELLENCE • STRATEGIC BRANDING • GLOBAL VISION • PREMIUM DESIGN • CORPORATE EXCELLENCE •",
            section_projects_label: "SELECTED WORKS",
            section_projects_title: "Featured Projects",
            nav_ver_todos_projetos: "VIEW ALL PROJECTS",
            section_methodology_title: "Methodology",
            section_methodology_subtitle: "We work to align strategy and identity in a practical and consistent way.",
            method_01_title: "Diagnosis",
            method_01_desc: "Understanding the brand, the context and the positioning opportunities.",
            method_02_title: "Strategy",
            method_02_desc: "Definition of direction, positioning and clear value proposition.",
            method_03_title: "Identity",
            method_03_desc: "Visual and verbal translation of the strategy into proprietary elements.",
            section_about_label: "STRATEGY AND BRAND BUILDING",
            section_about_title: "Building brands with clarity and direction.",
            section_about_desc: "Versatto Brands works with branding to structure brands in a clearer, more consistent and relevant way. Our focus is on aligning strategy and visual language to build brands that work in the long term.",
            stat_brands: "BRANDS SERVED",
            stat_countries: "COUNTRIES",
            section_why_title: "Why Versatto?",
            section_why_subtitle: "Our approach is what separates us from conventional agencies. We focus on what really matters: the value of your business.",
            why_01_title: "Focus on Value",
            why_01_desc: "We don't just create logos; we build perception of value and authority for your brand.",
            why_02_title: "Global Vision",
            why_02_desc: "Language and strategy aligned with international standards of design and communication.",
            why_03_title: "Strategic Agility",
            why_03_desc: "Optimized processes to deliver high quality results in record time.",
            section_cta_title: "Let's structure <br>your brand?",
            section_cta_desc: "If you are looking for more clarity, consistency and positioning, let's talk.",
            footer_desc: "Strategic Branding Consultancy.",
            footer_local: "LOCAL",
            footer_contact: "CONTACT",
            footer_social: "SOCIAL",
            footer_rights: "&copy; 2026 Versatto Brands. All rights reserved.",
            footer_tagline: "Premium Branding Consultancy",
            // Portfolio Page
            portfolio_hero_label: "PORTFOLIO",
            portfolio_hero_title: "Selected Works",
            portfolio_hero_subtitle: "A selection of projects where strategy and design meet to create high-impact brands.",
            portfolio_cta_title: "Ready to elevate <br>your brand?",
            // Project Pages
            next_project: "NEXT PROJECT",
            project_client: "CLIENT",
            project_year: "YEAR",
            project_services: "SERVICES",
            // Contact Page
            contact_hero_label: "PRE-BRIEFING",
            contact_hero_title: "Investment Proposal Form",
            contact_hero_subtitle: "This form is the first step to better understand the challenges and goals of the project.",
            contact_sec1_title: "01. CONTACT DETAILS",
            contact_name_label: "What is your full name?",
            contact_name_placeholder: "Your name here",
            contact_email_label: "Enter your best email",
            contact_email_placeholder: "example@company.com",
            contact_whatsapp_label: "WhatsApp with country code (optional)",
            contact_whatsapp_placeholder: "+00 00 00000-0000",
            contact_insta_label: "Your company's Instagram (if any)",
            contact_insta_placeholder: "@yourcompany",
            contact_sec2_title: "02. COMPANY DATA",
            contact_company_label: "Your company name?",
            contact_company_placeholder: "Company name",
            contact_employees_label: "How many employees does your company currently have?",
            contact_employees_1_5: "1 to 5 employees",
            contact_employees_6_20: "6 to 20 employees",
            contact_employees_21_50: "21 to 50 employees",
            contact_employees_50plus: "More than 50 employees",
            contact_services_label: "What products or services does your company offer?",
            contact_services_placeholder: "Ex: Consultancy, E-commerce, etc.",
            contact_sec3_title: "03. FINAL INFORMATION",
            contact_origin_label: "How did you find us?",
            contact_origin_referral: "Referral",
            contact_origin_insta: "Instagram",
            contact_origin_linkedin: "LinkedIn",
            contact_origin_google: "Google",
            contact_origin_others: "Others",
            contact_revenue_label: "What is your company's monthly revenue?",
            contact_revenue_up_50k: "Up to $ 10k",
            contact_revenue_50k_200k: "$ 10k - $ 40k",
            contact_revenue_200k_1m: "$ 40k - $ 200k",
            contact_revenue_above_1m: "Above $ 200k",
            contact_challenges_label: "Tell us a bit about your company and the main challenges you face today",
            contact_challenges_placeholder: "Briefly describe your goals and current pain points...",
            contact_btn_send: "Send Proposal",
            contact_select_option: "Select an option",
            contact_success_msg: "Thank you! We have received your information and will contact you soon.",
            // Project: Luxe Residences
            luxe_title: "Luxe Residences",
            luxe_subtitle: "Redefining the concept of high-end living.",
            luxe_desc1: "The challenge for Luxe Residences was to create a brand that conveyed exclusivity without falling into the clichés of the traditional real estate market. We developed a positioning focused on the 'experience of silence' and minimalist sophistication.",
            luxe_desc2: "The visual identity uses a sober palette and custom typography, reflecting the architectural precision of the developments. The result is a brand that speaks directly to an audience that values time and well-being above all else.",
            luxe_services: "Naming, Strategy, Visual Identity, Digital",
            // Project: Nexus Capital
            nexus_title: "Nexus Capital",
            nexus_subtitle: "Financial strategy with a vision for the future.",
            nexus_desc1: "Nexus Capital needed an identity that balanced institutional solidity with technological innovation. The project focused on creating a visual language that conveyed trust and clarity in a complex market.",
            nexus_desc2: "The developed symbol represents the connection between data and strategic decisions. The deep blue and silver color palette reinforces the brand's authority, while the clean design ensures legibility across all digital platforms.",
            nexus_services: "Brand Strategy, Visual Identity, Website",
            // Project: Aether Cosmetics
            aether_title: "Aether Cosmetics",
            aether_subtitle: "The essence of beauty in its purest form.",
            aether_desc1: "Aether is a premium cosmetics brand that values natural ingredients and sustainable processes. The branding was built to reflect this purity, using tactile materials and an ethereal aesthetic.",
            aether_desc2: "Packaging design was central to the project, using organic shapes and finishes. The brand positions itself as a self-care ritual, elevating the daily routine to a moment of connection and conscious luxury.",
            aether_services: "Branding, Packaging, Art Direction"
        }
    };

    const langSpans = document.querySelectorAll('.lang-switch span');
    
    const setLanguage = (lang) => {
        localStorage.setItem('preferredLang', lang);
        
        // Update active class on spans
        langSpans.forEach(span => {
            if (span.getAttribute('data-lang') === lang) {
                span.classList.add('active');
            } else {
                span.classList.remove('active');
            }
        });

        // Update content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                const translation = translations[lang][key];
                
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (key.includes('placeholder')) {
                        el.placeholder = translation;
                    } else {
                        el.value = translation;
                    }
                } else {
                    el.innerHTML = translation;
                }
            }
        });
    };

    // Initialize language
    const savedLang = localStorage.getItem('preferredLang') || 'pt';
    setLanguage(savedLang);

    langSpans.forEach(span => {
        span.addEventListener('click', () => {
            const lang = span.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    
    const animateCounter = (el) => {
        const target = parseInt(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 2000; // 2 seconds
        let startTime = null;

        // easeOutCubic
        const easing = (t) => 1 - Math.pow(1 - t, 3);

        const step = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const currentCount = Math.floor(easing(progress) * target);
            
            el.innerText = currentCount + suffix;

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                el.innerText = target + suffix;
            }
        };

        window.requestAnimationFrame(step);
        el.classList.add('active');
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    counters.forEach(counter => counterObserver.observe(counter));
});
