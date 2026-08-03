// server/api/seed-projects.post.ts
// iwr -Uri "http://localhost:3000/api/seed-projects" -Method POST | Select-Object -ExpandProperty Content
import { prisma } from "~~/server/utils/prisma";

export default defineEventHandler(async () => {
  // Nettoyage uniquement des projets et leurs relations
  await prisma.projectImage.deleteMany();
  await prisma.projectStack.deleteMany();
  await prisma.projectService.deleteMany();
  await prisma.projectDomain.deleteMany();
  await prisma.project.deleteMany();

  // Récupération des données existantes (déjà seedées)
  const domains = await prisma.domain.findMany();
  const stacks = await prisma.stack.findMany();
  const services = await prisma.service.findMany();

  const serviceUIUX = services.find((s) => s.title === "UI/UX Design");
  const serviceWeb = services.find((s) => s.title === "Développement");
  const serviceBranding = services.find((s) => s.title === "Branding");

  const projects = [
    
    {
      slug: "marketplace-agricole-digitale",
      titre: "Marketplace Agricole Digitale",
      description: `
      Développement d'une plateforme web de marketplace destinée à structurer les échanges entre les différents acteurs du secteur agricole au sein d'un environnement numérique unique.
      

      L'objectif principal était de proposer une solution évolutive, maintenable et suffisamment flexible pour accompagner l'évolution des besoins fonctionnels tout en garantissant une expérience utilisateur fluide. Au-delà du développement fonctionnel, une attention particulière a été portée à la cohérence de l'architecture applicative, à l'organisation du backend et à la séparation claire des responsabilités entre les différentes couches du système.
      `,
      problem: `
        Les échanges entre producteurs, acheteurs et autres acteurs reposaient principalement sur des processus dispersés et peu structurés. Les informations étaient réparties sur plusieurs canaux de communication, rendant difficile la consultation des offres, le suivi des échanges et la coordination des différentes opérations.
        
        #### Cette fragmentation entraînait plusieurs difficultés:
        
        - Manque de visibilité sur les produits disponibles.
        - Multiplication des intermédiaires.
        - Absence d'une source unique de données.
        - Difficultés de suivi des interactions entre utilisateurs.
        - Faible évolutivité des processus existants.
        
        Le principal défi consistait donc à concevoir une plateforme capable de centraliser ces interactions tout en conservant une architecture suffisamment modulaire pour intégrer de nouvelles fonctionnalités sans remettre en cause l'ensemble du système.
        `,
      solution: `
        L'architecture a été pensée autour d'une séparation claire entre le frontend, l'API et la couche de persistance afin de garantir une meilleure maintenabilité du projet.
        
        Le backend a été conçu pour centraliser la logique métier, gérer les autorisations selon les différents rôles utilisateurs et assurer la cohérence des échanges de données entre les différents modules de l'application.
        
        Côté frontend, l'interface a été organisée autour de parcours utilisateurs simplifiés afin de réduire les frictions lors de la navigation et de faciliter les principales actions de la plateforme.
        
        Plusieurs services externes ont également été intégrés afin d'étendre les fonctionnalités du système, notamment pour la gestion des paiements et du stockage de fichiers.
        
        #### Une attention particulière a été portée à:
        
        - Organisation du code en composants réutilisables.
        - Séparation entre logique métier et interface utilisateur.
        - Scalabilité de l'architecture.
        - Cohérence des flux de données entre les différents modules.
        - Facilité d'évolution pour les futures fonctionnalités.
        `,
      result: `
        Le projet a abouti à une plateforme fonctionnelle permettant de centraliser l'ensemble des échanges entre les différents acteurs du secteur agricole au sein d'un environnement unique. La nouvelle architecture améliore la cohérence des données, simplifie la gestion des interactions entre utilisateurs et facilite l'évolution du système grâce à une organisation modulaire.
        
        #### Les principaux bénéfices obtenus sont :
        
        - Réduction de la fragmentation des informations.
        - Meilleure visibilité des produits disponibles.
        - Simplification des parcours utilisateurs.
        - Amélioration de la maintenabilité du code.
        - Architecture extensible permettant d'ajouter de nouvelles fonctionnalités avec un impact limité sur l'existant.

        Cette base technique constitue désormais une fondation solide pour accompagner les évolutions futures de la plateforme.
        `,
      category: "Application web",
      isSelected: false,
      isFeatured: true,
      metric1: "10+ Pages",
      metric2: "98 Lighthouse",
      domains: ["full-stack", "bdd", "api", "deploiement", "recherche", "user-flow", "prototypes", "ui-design", "design-system", "responsive-design"],
      services: [serviceWeb?.id, serviceUIUX?.id].filter(Boolean) as number[],
      stacks: ["Django", "Nuxt.js", "Tailwind CSS", "PostgreSQL", "Figma"],
      images: [
        "/img/realisations/dev_mp.png",
        "/img/realisations/dev_mp_1.png",
        "/img/realisations/dev_mp_2.png",
        "/img/realisations/dev_mp_3.png",
        "/img/realisations/dev_mp_4.png",
        "/img/realisations/dev_mp_5.png",
        "/img/realisations/dev_mp_6.png",
        "/img/realisations/dev_mp_7.png",
        "/img/realisations/dev_mp_8.png",
        "/img/realisations/maquette.png"
      ],
    },
    {
      slug: "identite-visuelle-nerah-agency",
      titre: "Nerah Agency - Identité Visuelle & Branding",
      description:
        `

        Nerah Agency est une identité de marque conçue pour une agence freelance spécialisée dans le design, la création digitale et l'accompagnement de projets visuels.
        
        Le projet avait pour objectif de construire une image de marque capable d'inspirer immédiatement confiance tout en reflétant la créativité et la flexibilité propres à une structure indépendante. Dans un secteur où les agences digitales adoptent souvent des identités très similaires, l'enjeu était de développer une identité distinctive, cohérente et suffisamment évolutive pour accompagner la croissance future de l'agence.
        
        Au-delà de la conception d'une identité graphique, le projet consistait à créer un véritable système de communication visuelle permettant d'assurer une expérience homogène sur l'ensemble des supports numériques et commerciaux.`,
      problem:
        `

        Le marché des agences freelances est particulièrement concurrentiel. Les clients disposent d'un grand nombre d'alternatives proposant des services similaires, ce qui fait de l'image de marque un facteur déterminant dans la perception de crédibilité et de professionnalisme.
        
        L'un des principaux défis consistait à éviter les codes graphiques génériques fréquemment utilisés par les studios créatifs, tout en conservant une identité suffisamment sobre pour rassurer une clientèle professionnelle.
        
        L'identité devait répondre à plusieurs objectifs :
        
        - renforcer la crédibilité de l'agence dès le premier contact ;
        - exprimer une expertise en design sans tomber dans une esthétique surchargée ;
        - créer une identité facilement reconnaissable dans un environnement fortement concurrentiel ;
        - garantir une cohérence graphique sur les supports digitaux, les présentations commerciales et les réseaux sociaux ;
        - concevoir un système suffisamment flexible pour accompagner l'évolution future de la marque.`,
      solution:
        `
        L'identité a été développée autour d'un principe fondamental : **la clarté comme expression du professionnalisme**.
        
        La direction artistique privilégie une approche minimaliste afin de mettre en avant les contenus et les réalisations de l'agence plutôt que les éléments décoratifs. Chaque choix graphique a été pensé pour améliorer la lisibilité, renforcer la perception de qualité et créer une image de marque durable.
        
        L'ensemble du système repose sur plusieurs décisions de conception :
        
        - une typographie moderne apportant stabilité, lisibilité et caractère ;
        - une palette chromatique évoquant à la fois la technologie, la créativité et la confiance ;
        - une hiérarchie visuelle claire facilitant la compréhension des contenus ;
        - un système graphique modulable permettant de produire des supports variés tout en conservant une identité homogène.
        
        Une attention particulière a également été portée aux supports digitaux. Des animations légères réalisées avec Lottie viennent enrichir l'expérience visuelle sans compromettre la simplicité de l'identité, renforçant ainsi son caractère contemporain et interactif.
        
        

        Plusieurs choix stratégiques ont orienté la conception de cette identité.

        - **Construire la confiance avant la créativité**

        L'identité devait avant tout rassurer les futurs clients. Une approche sobre et structurée a donc été privilégiée afin de renforcer la perception de professionnalisme dès les premiers points de contact.

        - **Créer un système plutôt qu'un simple logo**

        L'objectif n'était pas uniquement de concevoir un symbole graphique, mais de développer un langage visuel complet capable de garantir une cohérence sur tous les supports de communication.

        - **Valoriser les réalisations de l'agence**

        L'identité adopte volontairement une esthétique épurée afin de laisser les projets occuper une place centrale dans la communication de la marque.

        - **Introduire du mouvement**

        L'intégration d'animations légères apporte une dimension plus vivante à l'identité tout en renforçant son positionnement digital et son caractère moderne.
        `,
      result:
        `
        Le projet aboutit à une identité de marque cohérente, professionnelle et facilement identifiable, permettant à Nerah Agency de renforcer son positionnement dans un marché fortement concurrentiel.
        
        La nouvelle identité améliore la perception de crédibilité de l'agence tout en offrant un système graphique suffisamment flexible pour accompagner ses différents supports de communication et ses futures évolutions.
        
        Les principaux bénéfices obtenus sont :
        
        - une image de marque plus professionnelle et plus crédible ;
        - une meilleure différenciation face aux autres agences freelances ;
        - une cohérence visuelle renforcée sur l'ensemble des supports ;
        - un système graphique facilement adaptable aux futurs projets ;
        - une identité capable d'évoluer sans remettre en question ses fondations visuelles.
        
        Au-delà de son aspect esthétique, cette identité constitue un véritable outil stratégique permettant à l'agence de communiquer avec davantage de cohérence, de renforcer la confiance des prospects et de valoriser la qualité de ses services.`,
      category: "Identité de marque",
      isSelected: true,
      isFeatured: false,
      domains: ["logo", "identite"],
      services: [serviceBranding?.id].filter(Boolean) as number[],
      stacks: ["Illustrator", "Photoshop", "Lottie"],
      images: [
        "/img/realisations/brand_identity_nerah – 1.png",
        "/img/realisations/brand_identity_nerah – 2.png",
        "/img/realisations/brand_identity_nerah – 3.png",
        "/img/realisations/brand_identity_nerah – 4.png",
        "/img/realisations/brand_identity_nerah – 5.png",
        "/img/realisations/brand_identity_nerah – 6.png",
        "/img/realisations/brand_identity_nerah.png",
      ],
    },
    {
      slug: "plateforme-gestion-bibliotheque",
      titre: "Plateforme de Gestion de Bibliothèque",
      description: `

        Le projet consiste en la conception et le développement d'un système de gestion de bibliothèque destiné à centraliser l'ensemble des opérations liées aux ouvrages, aux utilisateurs et aux emprunts au sein d'une plateforme unique.

        L'objectif principal était de remplacer une gestion fragmentée par un système capable de garantir la cohérence des données, d'automatiser les processus métier et de faciliter le travail quotidien des bibliothécaires.

        L'application couvre l'ensemble du cycle de vie des ouvrages : catalogage, gestion des exemplaires, inscription des membres, emprunts, retours, renouvellements et suivi des disponibilités. L'architecture a été pensée pour assurer une séparation claire entre la logique métier, la persistance des données et l'interface utilisateur afin de garantir la maintenabilité et l'évolutivité du projet.

        Au-delà de la simple gestion des livres, le système devait être capable d'appliquer automatiquement les règles propres au fonctionnement d'une bibliothèque (conditions d'emprunt, limitations, disponibilité des exemplaires, abonnements), tout en offrant une interface simple pour les administrateurs.
        `,

      problem: `

        La gestion d'une bibliothèque implique de nombreuses opérations interdépendantes qui deviennent rapidement difficiles à maintenir lorsqu'elles reposent sur des traitements manuels ou des outils insuffisamment structurés.

        L'absence d'un système centralisé entraîne souvent une dispersion des informations concernant les ouvrages, les membres et les emprunts, rendant le suivi quotidien complexe et augmentant les risques d'erreurs.

        ## Problématiques identifiées

        - Difficulté à suivre précisément la disponibilité des exemplaires.
        - Gestion manuelle des emprunts et des retours pouvant générer des incohérences.
        - Absence de contrôle automatique des règles d'emprunt selon le type d'utilisateur.
        - Risque de doublons et d'incohérences dans les données.
        - Manque de visibilité sur les ouvrages les plus empruntés ou indisponibles.
        - Processus administratifs chronophages nécessitant de nombreuses vérifications manuelles.

        Le principal défi consistait donc à concevoir une architecture capable de modéliser fidèlement les relations entre les ouvrages, les exemplaires, les utilisateurs et les emprunts, tout en garantissant la cohérence des données et l'automatisation des règles métier.
        `,

      solution: `

        L'application a été conçue selon une architecture client-serveur avec une séparation claire entre l'interface utilisateur, la logique métier et la base de données.

        Le backend développé avec **Spring Boot** centralise l'ensemble des traitements métier tandis que PostgreSQL assure la persistance et l'intégrité des données.

        ## Modélisation métier

        La structure de la base de données distingue plusieurs entités indépendantes mais liées :

        - ouvrages ;
        - exemplaires ;
        - membres ;
        - abonnements ;
        - emprunts ;
        - retours.

        Cette modélisation permet de représenter fidèlement le fonctionnement réel d'une bibliothèque et de garantir la cohérence des relations entre les différentes ressources.

        ## Gestion des emprunts

        Une logique métier spécifique a été développée afin de gérer automatiquement :

        - la disponibilité des exemplaires ;
        - les emprunts ;
        - les retours ;
        - les renouvellements ;
        - les limitations d'emprunt selon le type d'abonnement ;
        - la durée maximale des prêts.

        Chaque opération applique automatiquement les règles définies afin d'éviter les incohérences et les erreurs de manipulation.

        ## Gestion des utilisateurs

        Le système prend en compte plusieurs profils de membres disposant de droits et de conditions d'emprunt différents.

        Les abonnements déterminent automatiquement :

        - le nombre maximal d'ouvrages pouvant être empruntés ;
        - la durée autorisée des prêts ;
        - les restrictions éventuelles.

        ## Fiabilité des données

        Des contraintes ont été intégrées au niveau applicatif et de la base de données afin de garantir :

        - l'intégrité des informations ;
        - l'absence de doublons ;
        - la cohérence des relations entre les différentes entités ;
        - la sécurisation des opérations critiques.

        Cette approche permet d'assurer un fonctionnement fiable même lorsque le volume de données augmente.
        `,

      result: `

        Le projet a abouti à un système de gestion complet permettant de centraliser l'ensemble des opérations d'une bibliothèque au sein d'une plateforme unique.

        Les processus auparavant réalisés manuellement sont désormais automatisés, ce qui améliore la fiabilité des opérations et réduit considérablement les risques d'erreurs.


        - Centralisation de la gestion des ouvrages, des exemplaires et des membres.
        - Automatisation des règles d'emprunt et de retour.
        - Suivi en temps réel de la disponibilité des ouvrages.
        - Amélioration de la cohérence et de l'intégrité des données.
        - Réduction des erreurs liées aux traitements manuels.
        - Architecture évolutive facilitant l'ajout de nouvelles fonctionnalités.

        Au-delà de la réalisation technique, ce projet m'a permis d'approfondir la conception de modèles relationnels complexes, la mise en œuvre d'une logique métier robuste avec Spring Boot et l'organisation d'une architecture backend maintenable reposant sur des règles métier clairement définies.
        `,
      category: "Application web",
      isSelected: true,
      isFeatured: false,
      domains: ["full-stack", "bdd", "api"],
      services: [serviceWeb?.id].filter(Boolean) as number[],
      stacks: ["Spring Boot", "HTML", "CSS", "JavaScript", "PostgreSQL"],
      images: [
        "/img/realisations/dev_biblio_1.png",
        "/img/realisations/dev_biblio_2.png",
        "/img/realisations/dev_biblio_3.png",
        "/img/realisations/dev_biblio_4.png",
        "/img/realisations/dev_biblio_5.png",
      ],
    },
    {
      slug: "identite-visuelle-flens",
      titre: "Flens - Identité Visuelle & Expérience de Marque",
      description: `
        Flens est un projet de création d'identité de marque imaginé pour accompagner une nouvelle génération de créateurs indépendants évoluant dans les domaines du design, du numérique et de la photographie.
        
        Le projet est né d'un constat simple : si les outils de création sont aujourd'hui largement accessibles, construire une identité visuelle cohérente et professionnelle reste un défi pour de nombreux créatifs émergents. L'objectif était donc de concevoir une marque capable d'incarner cette nouvelle génération tout en offrant un cadre graphique suffisamment flexible pour accompagner son évolution.
        
        Au-delà de la conception d'un logo, le projet consistait à développer un véritable système d'identité visuelle capable de fonctionner sur différents supports digitaux et de maintenir une cohérence forte dans l'ensemble de la communication de la marque.`,
      problem: `
        Les jeunes créateurs possèdent souvent des compétences techniques solides mais rencontrent des difficultés à construire une image de marque claire, cohérente et mémorable.
        
        L'absence de direction artistique conduit généralement à une communication fragmentée où chaque support adopte un style différent. Cette incohérence nuit à la perception de professionnalisme, diminue la reconnaissance de la marque et rend plus difficile la création d'une relation de confiance avec les clients ou les recruteurs.
        
        Le principal défi était donc de concevoir une identité capable de structurer la communication visuelle sans limiter la liberté créative des utilisateurs.
        
        L'identité devait également répondre à plusieurs contraintes :
        
        - transmettre une image moderne et professionnelle ;
        - rester suffisamment expressive pour représenter un univers créatif ;
        - être facilement déclinable sur des supports variés (portfolio, réseaux sociaux, communication digitale) ;
        - conserver une cohérence visuelle tout en laissant une grande liberté d'utilisation.`,
      solution: `
        L'ensemble du projet a été construit autour d'un principe directeur : **structurer sans contraindre**.
        
        Plutôt que de créer un simple logo, l'objectif était de développer un système graphique complet reposant sur des règles visuelles cohérentes et facilement réutilisables.
        
        La direction artistique privilégie une approche minimaliste afin de mettre en valeur les contenus produits par les créateurs plutôt que de leur faire concurrence. Cette simplicité volontaire améliore la lisibilité tout en renforçant l'identité de la marque.
        
        Les principaux choix de conception comprennent :
        
        - une identité typographique moderne favorisant la lisibilité sur tous les supports ;
        - une palette chromatique équilibrant créativité, dynamisme et professionnalisme ;
        - un système graphique modulable permettant de créer de nombreuses compositions sans perdre en cohérence ;
        - une hiérarchie visuelle claire afin de guider naturellement la lecture des contenus.
        
        Chaque élément du système a été pensé comme une composante d'un langage visuel global plutôt qu'un élément isolé, garantissant une identité capable d'évoluer dans le temps tout en restant immédiatement reconnaissable.


        Plusieurs décisions ont guidé la conception de l'identité :

        **Minimalisme fonctionnel**

        Réduire les éléments graphiques afin de laisser davantage de place aux créations des utilisateurs et améliorer la lisibilité.

        **Système avant logo**

        Construire une identité reposant sur un ensemble de règles graphiques plutôt que sur un seul symbole afin d'assurer une meilleure adaptabilité.

        **Modularité**

        Créer des composants graphiques pouvant être facilement réorganisés selon les supports tout en conservant une cohérence visuelle.

        **Équilibre émotionnel**

        Associer une esthétique contemporaine à une image suffisamment professionnelle pour inspirer confiance auprès de futurs clients et partenaires.
        `,
      result: `

        Le projet aboutit à une identité de marque moderne, cohérente et évolutive, capable d'accompagner la croissance de Flens sur différents canaux de communication.

        La nouvelle identité offre un cadre graphique clair qui améliore la reconnaissance de la marque tout en conservant la flexibilité nécessaire à la mise en valeur des créations de sa communauté.

        Les principaux bénéfices obtenus sont :

        - amélioration de la cohérence visuelle de la marque ;
        - meilleure reconnaissance sur les supports numériques ;
        - système graphique facilement déclinable ;
        - identité capable d'évoluer sans remise en question complète de la direction artistique ;
        - image plus crédible auprès d'un public professionnel.

        Au-delà de l'aspect esthétique, le projet fournit une base stratégique solide permettant à Flens de développer durablement sa communication et de renforcer son positionnement auprès des créateurs indépendants.`,
      category: "Identité de marque",
      isSelected: false,
      isFeatured: false,
      domains: ["identite", "logo"],
      services: [serviceBranding?.id].filter(Boolean) as number[],
      stacks: ["Illustrator", "Photoshop"],
      images: [
        "/img/realisations/brand_identity_flens – 1.png",
        "/img/realisations/brand_identity_flens – 2.png",
        "/img/realisations/brand_identity_flens – 3.png",
        "/img/realisations/brand_identity_flens – 4.png",
        "/img/realisations/brand_identity_flens – 5.png",
        "/img/realisations/brand_identity_flens.png",
      ],
    },
    {
      slug: "plateforme-e-commerce-huiles-essentielles",
      titre: "Plateforme E-commerce d'Huiles Essentielles",
      description: `
      
      Développement d'une plateforme e-commerce destinée à la commercialisation d'huiles essentielles et d'épices de Madagascar au sein d'un environnement numérique unique.
      
      L'objectif principal était de concevoir une solution permettant de centraliser l'ensemble du processus de vente, depuis la présentation des produits jusqu'au suivi des commandes, tout en proposant une expérience utilisateur fluide et une interface d'administration simple à maintenir.
      
      Au-delà de la création d'une boutique en ligne, le projet devait mettre en place une architecture suffisamment robuste pour gérer les produits, les catégories, les utilisateurs, les commandes et les interactions entre ces différents modules. L'ensemble a été pensé afin d'assurer la cohérence des données, la maintenabilité du système et son évolution vers de nouvelles fonctionnalités.
      `,
      
      problem: `
      
      Le processus de commercialisation reposait principalement sur des échanges directs avec les clients, sans plateforme centralisée permettant de gérer efficacement les produits et les commandes.
      
      Les informations étaient dispersées entre différents supports, rendant difficile le suivi des ventes, la mise à jour des produits et la gestion quotidienne de l'activité.
      
      
      - Absence d'un catalogue centralisé permettant de présenter les produits.
      - Gestion manuelle des commandes générant des risques d'erreurs.
      - Difficulté à suivre les stocks et les disponibilités.
      - Manque de visibilité sur les commandes et les clients.
      - Parcours d'achat peu structuré limitant l'expérience utilisateur.
      - Difficulté à faire évoluer l'activité sans une architecture adaptée.
      
      Le principal défi consistait donc à concevoir une plateforme capable d'automatiser le processus de vente tout en proposant une architecture évolutive et suffisamment flexible pour accompagner le développement futur de l'entreprise.
      `,
      
      solution: `
      
      La solution repose sur le développement d'une architecture e-commerce organisée autour d'une séparation claire entre l'interface utilisateur, la logique métier et la couche de persistance des données afin de garantir une meilleure maintenabilité du projet.
      
      L'application permet de gérer l'ensemble du cycle de vente à travers une organisation cohérente des produits, des catégories, des utilisateurs et des commandes.
      
      La logique métier a été conçue pour assurer la gestion des paniers, la validation des commandes, le suivi des informations clients ainsi que la circulation des données entre les différents modules du système.
      
      Une interface d'administration a également été développée afin de simplifier la gestion des produits, des catégories et des commandes, tout en permettant une mise à jour rapide du catalogue.
      
      La structure de la base de données a été pensée pour garantir l'intégrité des informations, faciliter les relations entre les différentes entités et permettre l'ajout futur de nouvelles fonctionnalités telles que le paiement en ligne, les promotions ou la gestion avancée des stocks.
      
      L'ensemble de l'application a été développé dans une logique d'évolutivité afin de permettre au système de s'adapter facilement aux futurs besoins de la plateforme.
      `,
      
      result: `
      
      Le projet a abouti à une plateforme e-commerce complète permettant de centraliser l'ensemble des activités commerciales au sein d'un environnement unique.
      
      La nouvelle architecture facilite la gestion quotidienne des produits, améliore le suivi des commandes et offre une meilleure visibilité sur les informations commerciales.
      
      
      - Centralisation de la gestion des produits et des catégories.
      - Structuration complète du parcours d'achat.
      - Amélioration du suivi des commandes.
      - Simplification de l'administration du catalogue.
      - Cohérence renforcée des données métier.
      - Architecture évolutive facilitant les futures évolutions de la plateforme.
      
      Cette réalisation m'a permis d'approfondir la conception d'une application e-commerce complète avec Laravel, la modélisation d'une base de données relationnelle, l'implémentation d'une logique métier structurée ainsi que la conception d'une architecture maintenable capable d'accompagner l'évolution du projet.
      `,
      category: "e-commerce",
      isSelected: false,
      isFeatured: false,
      domains: ["full-stack", "bdd", "deploiement"],
      services: [serviceWeb?.id].filter(Boolean) as number[],
      stacks: ["Laravel", "HTML", "CSS", "Javascript", "MySQL"],
      images: [
        "/img/realisations/dev_madarom_1.png",
        "/img/realisations/dev_madarom_2.png",
        "/img/realisations/dev_madarom_3.png",
      ],
    },

    {
      slug: "identite-visuelle-alasoa",
      titre: "Alasoa - Identité Visuelle & Branding",
      description: `
      
      Alasoa est une marque malgache spécialisée dans les cosmétiques naturels, proposant des produits de soin élaborés à partir d'ingrédients locaux. Le projet avait pour objectif de concevoir une identité visuelle capable de refléter les valeurs fondamentales de la marque : naturalité, authenticité, bien-être et qualité.
      
      Au-delà de la création d'un logo, il s'agissait de construire un véritable univers graphique permettant à la marque de se différencier dans un secteur fortement concurrentiel tout en renforçant sa crédibilité auprès de ses futurs consommateurs.
      
      L'identité devait être suffisamment cohérente et flexible pour être déclinée sur différents supports tels que les packagings, les réseaux sociaux, les supports de communication et les futures campagnes marketing, tout en conservant une image homogène et immédiatement reconnaissable.
      `,
      
        problem: `
      
      Le marché des cosmétiques naturels connaît une croissance importante et rassemble de nombreuses marques partageant des codes visuels similaires. Cette homogénéité rend la différenciation particulièrement difficile, notamment pour une jeune marque souhaitant construire sa notoriété.
      
      L'absence d'une identité forte limite la capacité d'une marque à transmettre ses valeurs et à instaurer une relation de confiance avec ses consommateurs.
      
      
      - Difficulté à se différencier dans un univers graphique très concurrentiel.
      - Nécessité de transmettre simultanément les notions de naturalité, de qualité et de professionnalisme.
      - Construction d'une identité suffisamment mémorable pour favoriser la reconnaissance de la marque.
      - Assurer une cohérence graphique sur l'ensemble des supports physiques et digitaux.
      - Valoriser les produits sans surcharger la communication visuelle.
      
      Le principal défi consistait donc à créer une identité capable d'exprimer l'univers naturel de la marque tout en lui apportant un positionnement premium, moderne et crédible auprès de son public cible.
      `,
      
        solution: `
      
      La solution repose sur la conception d'un système d'identité visuelle construit autour d'un principe directeur : **valoriser la naturalité à travers une esthétique élégante, épurée et durable**.
      
      Une direction artistique inspirée des éléments naturels a été développée afin de traduire les valeurs de douceur, de pureté et d'authenticité portées par la marque. Les formes, la typographie et les choix graphiques ont été pensés pour créer une expérience visuelle apaisante tout en renforçant la perception de qualité.
      
      La palette chromatique s'inspire directement des matières premières naturelles utilisées dans les produits. Les différentes teintes évoquent la végétation, les matières organiques et le bien-être, permettant d'établir un lien immédiat entre l'identité de marque et son univers.
      
      L'ensemble du système graphique a été conçu comme une identité évolutive pouvant être déclinée sur différents supports : packagings, réseaux sociaux, communication imprimée, supports digitaux et futurs lancements de produits.
      
      Chaque élément visuel participe à la construction d'une image cohérente, professionnelle et facilement identifiable, capable d'accompagner la croissance future de la marque.
      `,
      
        result: `
      
      Le projet a permis de doter Alasoa d'une identité visuelle complète, cohérente et facilement reconnaissable, renforçant son positionnement dans l'univers des cosmétiques naturels.
      
      La nouvelle identité améliore la perception de qualité de la marque tout en mettant en avant ses valeurs d'authenticité et de naturalité.
      
      
      - Construction d'une identité de marque forte et cohérente.
      - Positionnement plus crédible sur le marché des cosmétiques naturels.
      - Renforcement de la reconnaissance visuelle de la marque.
      - Système graphique facilement déclinable sur différents supports.
      - Amélioration de la perception de qualité et de confiance auprès des consommateurs.
      - Base visuelle évolutive permettant d'accompagner les futurs développements de la marque.
      
      Au-delà de la réalisation graphique, ce projet m'a permis d'approfondir ma démarche de branding stratégique, en concevant une identité visuelle pensée comme un véritable système de communication plutôt qu'un simple ensemble d'éléments graphiques. Il m'a également permis de renforcer mes compétences en direction artistique, en conception de systèmes visuels cohérents et en création d'identités capables de s'adapter durablement aux différents supports de communication.
      `,
      category: "Identité de marque",
      isSelected: false,
      isFeatured: false,
      domains: ["identite", "logo"],
      services: [serviceBranding?.id].filter(Boolean) as number[],
      stacks: ["Illustrator", "Photoshop"],
      images: [
        "/img/realisations/brand_identity_alasoa – 1.png",
        "/img/realisations/brand_identity_alasoa – 2.png",
        "/img/realisations/brand_identity_alasoa – 3.png",
        "/img/realisations/brand_identity_alasoa – 4.png",
        "/img/realisations/brand_identity_alasoa.png",
      ],
    },

    {
      slug: "identite-visuelle-running-mezanning",
      titre: "Running Mezanning - Identité Visuelle & Branding",
      description: `
      
      Running Mezanning est une marque spécialisée dans la transformation alimentaire vegan, proposant des produits conçus autour d'une alimentation plus saine, responsable et accessible. Le projet avait pour objectif de concevoir une identité visuelle capable de traduire les valeurs de la marque tout en affirmant un positionnement moderne, dynamique et différenciant.
      
      L'enjeu principal ne se limitait pas à la création d'un logo, mais consistait à développer un véritable système d'identité visuelle capable d'incarner un mode de vie où nutrition, bien-être et mouvement sont étroitement liés.
      
      L'identité devait fonctionner sur l'ensemble des supports de communication de la marque, notamment les packagings, les réseaux sociaux, les supports promotionnels et les futurs développements marketing, tout en conservant une cohérence graphique forte et une reconnaissance immédiate.
      `,
      
        problem: `
      
      Le marché des produits alimentaires vegan connaît une forte croissance, mais il est également marqué par une uniformisation des identités visuelles. De nombreuses marques utilisent les mêmes codes graphiques, privilégiant des univers très minimalistes ou fortement orientés vers la nature, rendant la différenciation plus difficile.
      
      Dans ce contexte, Running Mezanning devait construire une image de marque capable de sortir de ces conventions sans perdre les repères de confiance propres au secteur alimentaire.
      
      
      - Difficulté à se différencier dans un marché fortement concurrentiel.
      - Construire une identité capable d'associer naturalité, modernité et énergie.
      - Éviter une image trop classique ou trop statique souvent associée aux marques vegan.
      - Inspirer confiance tout en affirmant une personnalité visuelle forte.
      - Concevoir un système graphique facilement déclinable sur différents supports de communication.
      
      Le principal défi consistait donc à créer une identité capable de repositionner la marque autour d'un mode de vie actif et positif, où l'alimentation devient un levier de bien-être plutôt qu'un simple choix de consommation.
      `,
      
        solution: `
      
      La solution repose sur la création d'un système d'identité visuelle construit autour d'un principe directeur : **associer l'énergie du mouvement à la naturalité de l'alimentation**.
      
      Une direction artistique contemporaine a été développée afin de transmettre une image plus dynamique que les standards habituellement rencontrés dans l'univers vegan. Les formes graphiques, la composition visuelle et les choix typographiques ont été pensés pour évoquer le mouvement, la vitalité et l'engagement, tout en conservant une forte lisibilité.
      
      La palette de couleurs a été élaborée pour rappeler les notions de fraîcheur, de santé et de naturalité, tout en apportant suffisamment de contraste pour renforcer la personnalité de la marque. L'équilibre entre couleurs, typographie et éléments graphiques permet de créer un univers à la fois vivant, rassurant et facilement identifiable.
      
      L'ensemble de l'identité a été conçu comme un système graphique flexible pouvant être appliqué de manière cohérente sur les packagings alimentaires, les supports imprimés, les réseaux sociaux, les campagnes de communication et les futurs produits de la marque.
      
      Cette approche permet d'assurer une continuité visuelle tout en laissant suffisamment de flexibilité pour accompagner l'évolution de Running Mezanning dans le temps.
      `,
      
        result: `
      
      Le projet a permis de doter Running Mezanning d'une identité visuelle forte, cohérente et différenciante, capable de renforcer son positionnement sur le marché de l'alimentation vegan.
      
      La nouvelle identité apporte une meilleure visibilité à la marque, facilite sa reconnaissance et traduit de manière plus claire les valeurs qu'elle souhaite transmettre autour du bien-être, de la santé et d'un mode de vie actif.

      
      - Construction d'une identité de marque moderne et distinctive.
      - Renforcement du positionnement dans le secteur de l'alimentation vegan.
      - Meilleure reconnaissance visuelle auprès de la cible.
      - Cohérence graphique sur l'ensemble des supports de communication.
      - Valorisation des produits grâce à un univers visuel plus engageant.
      - Mise en place d'un système d'identité évolutif capable d'accompagner le développement futur de la marque.
      
      Au-delà de la création graphique, ce projet m'a permis d'approfondir ma réflexion sur le branding appliqué au secteur agroalimentaire, en concevant une identité visuelle pensée comme un véritable outil stratégique de différenciation. Il m'a également permis de renforcer mes compétences en direction artistique, en conception de systèmes graphiques cohérents et en création d'identités capables de traduire des valeurs de marque de manière claire, durable et impactante.
      `,
      category: "Identité de marque",
      isSelected: false,
      isFeatured: false,
      domains: ["identite", "logo"],
      services: [serviceBranding?.id].filter(Boolean) as number[],
      stacks: ["Illustrator", "Photoshop"],
      images: [
        "/img/realisations/brand_identity_running – 1.png",
        "/img/realisations/brand_identity_running – 2.png",
        "/img/realisations/brand_identity_running – 3.png",
        "/img/realisations/brand_identity_running – 4.png",
        "/img/realisations/brand_identity_running – 5.png",
        "/img/realisations/brand_identity_running.png",
      ],
    },

    {
      slug: "communication-visuelle-smartsaha",
      titre: "SmartSaha - Communication Visuelle & Design Produit",
      description: `

      SmartSaha est une initiative dédiée à la digitalisation du secteur agricole à Madagascar, avec pour ambition de rendre les technologies numériques accessibles aux différents acteurs de la filière : producteurs, coopératives, acheteurs et partenaires institutionnels.

      Contrairement à un projet de branding complet, cette mission portait sur la conception d'un système de communication visuelle destiné à accompagner la présentation et la compréhension de la plateforme. L'objectif était de traduire des concepts techniques liés à l'agriculture numérique en supports graphiques simples, cohérents et accessibles.

      Le projet devait permettre de communiquer efficacement auprès de publics très variés, allant d'utilisateurs peu familiers avec les outils digitaux à des partenaires techniques ou institutionnels. Les supports devaient ainsi transmettre une image professionnelle tout en restant pédagogiques et facilement compréhensibles.
      `,

      problem: `

      La digitalisation du secteur agricole implique l'introduction de concepts parfois complexes : géolocalisation des parcelles, collecte de données, suivi des cultures, marketplace, météo agricole ou encore outils d'aide à la décision.

      Présenter ces fonctionnalités de manière purement technique risquait de créer une barrière de compréhension pour une partie importante des utilisateurs.

      Les principaux défis étaient donc de :

      - traduire des fonctionnalités numériques en messages visuels simples ;
      - rendre l'information rapidement compréhensible malgré la diversité des profils utilisateurs ;
      - construire une communication suffisamment cohérente pour renforcer la crédibilité du projet ;
      - produire des supports facilement adaptables à différents contextes (présentations, démonstrations, réseaux sociaux, documentation et communication institutionnelle) ;
      - conserver une identité graphique homogène malgré la diversité des contenus présentés.
      `,

      solution: `

      La démarche de conception s'est appuyée sur une approche centrée sur la lisibilité et la hiérarchisation de l'information.

      Chaque support a été pensé pour guider naturellement la lecture en mettant en avant les messages essentiels avant les informations secondaires.

      Le travail a notamment consisté à :

      - définir une direction graphique cohérente avec les valeurs du projet (innovation, agriculture, confiance et accessibilité) ;
      - construire une hiérarchie visuelle claire grâce à une utilisation maîtrisée de la typographie, des couleurs et des espaces ;
      - créer des illustrations et éléments graphiques permettant de simplifier la représentation des services numériques proposés ;
      - développer plusieurs supports de communication adaptés à différents usages (présentations, visuels promotionnels, supports institutionnels et communication digitale) ;
      - assurer une cohérence graphique entre tous les supports afin de renforcer l'identité visuelle globale du projet ;
      - optimiser chaque composition afin de faciliter la compréhension rapide des informations, même pour un public peu habitué aux outils numériques.

      L'ensemble des supports a été réalisé sous Illustrator et Photoshop, avec une attention particulière portée à la modularité afin de permettre leur réutilisation et leur adaptation dans différents contextes de communication.
      `,

      result: `

      Les supports conçus permettent aujourd'hui de présenter SmartSaha de manière plus claire, structurée et professionnelle.

      Ils facilitent la compréhension des objectifs du projet en transformant des notions techniques en contenus visuellement accessibles.

      Cette approche apporte plusieurs bénéfices :

      - amélioration de la lisibilité des messages ;
      - meilleure compréhension des fonctionnalités proposées par la plateforme ;
      - communication plus homogène sur l'ensemble des supports ;
      - renforcement de la crédibilité du projet auprès des partenaires et institutions ;
      - valorisation de l'innovation numérique à travers une identité graphique cohérente.

      Au-delà de l'aspect esthétique, ce travail démontre comment le design de communication peut devenir un véritable outil de médiation entre une solution technologique complexe et ses futurs utilisateurs, en facilitant l'adoption du projet grâce à une communication claire et accessible.
      `,
      category: "Supports visuels",
      isSelected: false,
      isFeatured: false,
      domains: ["identite"],
      services: [serviceBranding?.id].filter(Boolean) as number[],
      stacks: ["Illustrator", "Photoshop"],
      images: [
        "/img/realisations/brand_identity_smartsaha – 1.png",
        "/img/realisations/brand_identity_smartsaha – 2.png",
        "/img/realisations/brand_identity_smartsaha – 3.png",
        "/img/realisations/brand_identity_smartsaha – 4.png",
        "/img/realisations/brand_identity_smartsaha.png",
      ],
    },

    {
      slug: "communication-visuelle-stellar-z",
      titre: "Stellar Z - Communication Visuelle & Direction Artistique",
      description: `
      
      Stellar Z est une marque spécialisée dans la vente et la location de vélos tout-terrain, évoluant dans l'univers du sport, de la mobilité et des expériences outdoor.
      
      L'objectif du projet était de concevoir un ensemble de supports de communication visuelle capables de renforcer la présence de la marque auprès de son audience, sans entreprendre une refonte complète de son identité visuelle.
      
      L'enjeu principal consistait à traduire les valeurs associées au cyclisme outdoor — mouvement, performance, exploration et liberté — à travers des supports graphiques modernes, cohérents et adaptés aux différents canaux de communication.
      `,
      
      problem: `
      
      Le marché du vélo et des activités outdoor est fortement concurrentiel, avec de nombreuses marques utilisant des codes visuels similaires basés sur la performance, l'aventure et la nature.
      
      Stellar Z avait besoin de supports de communication permettant de :
      
      - renforcer sa visibilité auprès de son public cible ;
      - transmettre une image sportive et dynamique ;
      - différencier la marque dans un environnement visuel très concurrentiel ;
      - présenter clairement ses services de vente et de location.
      
      Le principal défi était donc de transformer des valeurs abstraites comme l'énergie, le mouvement et l'expérience outdoor en compositions graphiques statiques, tout en conservant une forte lisibilité et une cohérence visuelle.
      `,
      
      solution: `
      
      La solution a consisté à développer une direction artistique orientée autour du mouvement, de l'énergie et de la performance sportive.
      
      Les supports de communication ont été conçus avec :
      
      - une composition graphique dynamique afin de suggérer la vitesse et l'action ;
      - une hiérarchie visuelle claire permettant une compréhension rapide du message ;
      - une typographie forte adaptée à l'univers sportif ;
      - des éléments graphiques renforçant l'aspect aventure et outdoor.
      
      Chaque support a été pensé pour être facilement décliné sur différents formats, notamment :
      
      - affiches promotionnelles ;
      - contenus destinés aux réseaux sociaux ;
      - supports marketing liés à la location et à la vente de vélos.
      
      L'approche graphique vise à créer une communication visuelle accessible, impactante et cohérente avec le positionnement de Stellar Z.
      `,
      
      result: `
      
      Le projet a abouti à la création d'un ensemble de supports de communication visuelle cohérents avec l'univers sportif et outdoor de Stellar Z.
      
      Les principaux bénéfices obtenus :
      
      - une présence visuelle plus structurée ;
      - une meilleure mise en valeur des services proposés ;
      - une communication plus attractive auprès des utilisateurs ;
      - une base graphique adaptable pour les futures campagnes marketing.
      
      Ces supports permettent à Stellar Z de renforcer son image de marque et d'améliorer la perception de son activité dans un secteur où l'impact visuel joue un rôle essentiel.
      `,
      category: "Supports de communication",
      isSelected: false,
      isFeatured: false,
      domains: ["identite"],
      services: [serviceBranding?.id].filter(Boolean) as number[],
      stacks: ["Illustrator", "Photoshop"],
      images: [
        "/img/realisations/brand_identity_stellar – 1.png",
        "/img/realisations/brand_identity_stellar – 2.png",
        "/img/realisations/brand_identity_stellar – 3.png",
        "/img/realisations/brand_identity_stellar.png",
      ],
    },

    {
      slug: "plateforme-e-commerce-velos",
      titre: "Plateforme E-commerce de Vente de Vélos",
    
      description: `
    
    Conception et développement d'une plateforme web dédiée à la gestion de vente de vélos tout terrain.
    
    Le projet avait pour objectif de centraliser la présentation des produits, la gestion du catalogue et le suivi des transactions commerciales dans un environnement numérique unique.
    
    La plateforme a été pensée afin de structurer les interactions entre les clients et les gestionnaires, tout en garantissant une meilleure organisation des données liées aux vélos, aux stocks et aux informations commerciales.
    
    L'approche adoptée repose sur la création d'un système évolutif permettant d'accompagner les besoins d'une activité de vente de vélos et de faciliter la gestion quotidienne des opérations commerciales.
    `,
    
      problem: `
    
    La gestion traditionnelle d'une activité de vente de vélos repose souvent sur des processus manuels ou sur plusieurs outils indépendants, ce qui entraîne plusieurs difficultés :
    
    - manque de visibilité sur les produits disponibles ;
    - difficulté à maintenir un catalogue produit structuré ;
    - suivi complexe des informations liées aux vélos ;
    - absence d'une source centralisée pour les données commerciales ;
    - gestion moins efficace des interactions entre clients et gestionnaires.
    
    Le principal défi consistait donc à concevoir une plateforme capable de centraliser les informations produits et les opérations commerciales tout en conservant une architecture fiable, maintenable et facilement évolutive.
    `,
    
      solution: `
    
    La solution repose sur une architecture applicative permettant de séparer clairement la gestion des données, la logique métier et l'expérience utilisateur.
    
    Le système a été structuré autour des principales entités métier :
    
    - vélos ;
    - catégories de produits ;
    - utilisateurs ;
    - commandes ;
    - transactions.
    
    Une attention particulière a été portée à l'organisation du catalogue afin de permettre une gestion efficace des informations liées aux vélos :
    
    - caractéristiques techniques ;
    - catégories ;
    - prix ;
    - disponibilité des produits ;
    - informations commerciales.
    
    La plateforme propose une expérience utilisateur simplifiée permettant aux clients de consulter les produits disponibles et aux gestionnaires d'administrer facilement les données commerciales.
    
    L'ensemble du système a été conçu avec une approche modulaire afin de faciliter l'évolution future de la plateforme, notamment avec l'ajout possible de fonctionnalités comme le paiement en ligne, la gestion avancée des commandes ou les statistiques commerciales.
    `,
    
      result: `
    
    Le projet a abouti à une plateforme fonctionnelle permettant de centraliser la gestion d'une activité de vente de vélos tout terrain.
    
    Les principaux résultats obtenus :
    
    - meilleure organisation du catalogue produit ;
    - centralisation des informations liées aux vélos ;
    - amélioration de la visibilité sur l'offre disponible ;
    - simplification de la gestion commerciale ;
    - meilleure structuration des échanges entre clients et gestionnaires.
    
    La plateforme constitue une base technique stable et extensible permettant d'accompagner le développement futur de l'activité commerciale.
    `,
    
      category: "Plateforme web",
      isSelected: false,
      isFeatured: false,
      domains: ["full-stack", "recherche", "prototypes"],
      services: [serviceWeb?.id, serviceUIUX?.id].filter(Boolean) as number[],
      stacks: ["Dolibarr", "Vue.js", "CSS", "Node.js", "PostgreSQL", "Adobe XD"],
      images: [
        "/img/realisations/dev_stellar_1.png",
        "/img/realisations/uiux_1.png"
      ],
    },

    {
      slug: "my-bank",
    
      titre: "My Bank - Application de Gestion Bancaire",
    
      description: `
    
    Conception de l'expérience utilisateur et réalisation de la maquette interactive d'une application bancaire moderne destinée à faciliter la gestion des comptes et des opérations financières.
    
    Le projet avait pour objectif de proposer une interface intuitive permettant aux utilisateurs de consulter leurs comptes, d'effectuer des transferts, de suivre leurs transactions et d'accéder à un tableau de bord offrant une vue d'ensemble de leur situation financière.
    
    L'ensemble de l'application a été conçu en mettant l'accent sur la simplicité de navigation, la clarté des informations financières et une expérience utilisateur fluide adaptée à une utilisation quotidienne sur mobile et sur ordinateur.
    
    La phase de conception s'est concentrée sur la création d'une interface cohérente, moderne et évolutive répondant aux exigences d'une application bancaire numérique.
    `,
    
      problem: `
    
    Les applications bancaires doivent permettre aux utilisateurs d'accéder rapidement à leurs informations financières tout en garantissant une navigation simple et rassurante.
    
    Plusieurs défis ont été identifiés lors de la conception :
    
    - organisation claire des informations financières ;
    - accès rapide aux comptes et aux soldes ;
    - simplification des opérations de transfert ;
    - consultation fluide de l'historique des transactions ;
    - création d'un tableau de bord synthétique facilitant le suivi des finances personnelles.
    
    Le principal objectif consistait à concevoir une interface capable de rendre les opérations bancaires quotidiennes plus accessibles tout en offrant une expérience utilisateur intuitive et cohérente.
    `,
    
      solution: `
    
    Une démarche centrée sur l'utilisateur a été adoptée afin de concevoir une interface répondant aux principaux besoins liés à la gestion bancaire.
    
    Le travail de conception a couvert plusieurs fonctionnalités clés :
    
    - tableau de bord financier ;
    - gestion des comptes bancaires ;
    - consultation des transactions ;
    - transferts d'argent entre comptes ;
    - suivi des opérations récentes ;
    - navigation simplifiée entre les différents services.
    
    Des wireframes puis des maquettes haute fidélité ont été réalisés afin de définir les parcours utilisateurs et de valider l'organisation des différents écrans.
    
    Une attention particulière a été portée à la hiérarchisation des informations, à la lisibilité des données financières et à la cohérence de l'identité visuelle afin d'offrir une expérience moderne et rassurante.
    
    L'ensemble des écrans a ensuite été transformé en prototype interactif permettant de simuler les principales interactions de l'application et de visualiser les différents parcours utilisateurs.
    `,
    
      result: `
    
    Le projet a abouti à un prototype fonctionnel illustrant les principaux usages d'une application bancaire numérique moderne.
    
    Les principaux résultats obtenus :
    
    - conception d'une expérience utilisateur fluide et intuitive ;
    - réalisation de maquettes haute fidélité cohérentes ;
    - création d'un prototype interactif facilitant la démonstration des parcours utilisateurs ;
    - amélioration de la lisibilité des informations financières ;
    - structuration efficace des fonctionnalités bancaires autour d'un tableau de bord central.
    
    Le projet constitue une base solide pour le développement futur d'une application bancaire intégrant des fonctionnalités avancées telles que les paiements en ligne, les notifications en temps réel ou encore la gestion budgétaire personnalisée.
    `,
    
      category: "UI/UX Design",
    
      isSelected: false,
      isFeatured: false,
    
      domains: [
        "recherche",
        "user-flow",
        "wireframes",
        "prototypes",
        "ui-design",
      ],
    
      services: [serviceUIUX?.id].filter(Boolean) as number[],
    
      stacks: [
        "Adobe XD"
      ],
    
      images: [
        "/img/realisations/uiux_2.png",
      ],
    },

    {
      slug: "communication-visuelle-madarom",
      titre: "Mad'arom - Communication Visuelle & Design de Marque",
    
      description: `
    
    Mad'arom est une marque spécialisée dans l’exportation et la distribution d’huiles essentielles naturelles issues de Madagascar. Son positionnement repose sur la qualité, l’authenticité et la valorisation de ressources naturelles.
    
    L’objectif du projet était de concevoir un ensemble de supports de communication visuelle permettant de renforcer la présence professionnelle de la marque sans créer une nouvelle identité complète.
    
    L’approche consistait à traduire les valeurs de la marque à travers des supports cohérents, élégants et adaptés à un contexte commercial, notamment pour la présentation des produits, la communication digitale et les échanges avec des partenaires potentiels.
    
    Le projet s’inscrit dans une démarche de **communication de marque**, visant à améliorer la perception visuelle et la compréhension de l’offre.
    `,
    
      problem: `
    
    Dans le secteur des huiles essentielles et des produits naturels, la perception de qualité joue un rôle essentiel dans la confiance accordée à une marque.
    
    Mad'arom devait disposer de supports de communication capables de transmettre une image professionnelle, authentique et premium tout en restant cohérente avec son positionnement naturel.
    
    Les principaux défis étaient :
    
    - Structurer une communication visuelle plus professionnelle ;
    - Valoriser les caractéristiques naturelles et qualitatives des produits ;
    - Améliorer la lisibilité des informations commerciales ;
    - Créer une cohérence graphique entre les différents supports ;
    - Adapter les contenus à un contexte local et international.
    
    Le défi principal consistait donc à créer une expérience visuelle capable de transformer une présentation produit classique en une communication de marque plus crédible et différenciante.
    `,
    
      solution: `
    
    La solution repose sur la conception d’un système de communication visuelle mettant en avant l’équilibre entre **naturalité, élégance et professionnalisme**.
    
    Une direction artistique minimaliste a été développée afin de renforcer la perception premium de la marque tout en conservant une connexion avec l’univers des produits naturels.
    
    Les choix graphiques se sont concentrés sur :
    
    - Une hiérarchie visuelle claire pour faciliter la lecture ;
    - Une composition équilibrée mettant en valeur les produits ;
    - Une utilisation cohérente des couleurs, typographies et éléments graphiques ;
    - Une organisation adaptée aux supports commerciaux et digitaux.
    
    Les supports ont été conçus pour différents usages :
    
    - Présentation commerciale ;
    - Communication digitale ;
    - Supports promotionnels ;
    - Documents destinés aux partenaires et clients.
    
    Les outils utilisés pour la réalisation incluent **Adobe Illustrator, Photoshop et InDesign**, permettant de produire des supports professionnels adaptés aux besoins de la marque.
    `,
    
      result: `
    
    Le projet a abouti à un ensemble de supports de communication visuelle cohérents, professionnels et alignés avec le positionnement de Mad'arom.
    
    Les principaux résultats obtenus :
    
    - Renforcement de l’image professionnelle de la marque ;
    - Meilleure présentation de l’offre produit ;
    - Communication plus claire et structurée ;
    - Valorisation du caractère naturel et premium des produits ;
    - Création d’une base visuelle adaptable aux futures communications.
    
    Ces supports permettent désormais à Mad'arom de présenter ses produits avec une image plus crédible auprès de ses clients et partenaires, tout en facilitant son développement commercial dans un contexte local et international.
    `,
    
      category: "Communication visuelle",
      isSelected: false,
      isFeatured: false,
      domains: ["identite", "communication"],
      services: [serviceBranding?.id].filter(Boolean) as number[],
      stacks: ["Illustrator", "Photoshop", "InDesign"],
      images: [
        "/img/realisations/brand_identity_madarom – 1.png",
        "/img/realisations/brand_identity_madarom – 2.png",
        "/img/realisations/brand_identity_madarom – 3.png",
        "/img/realisations/brand_identity_madarom – 4.png",
        "/img/realisations/brand_identity_madarom – 5.png",
        "/img/realisations/brand_identity_madarom – 6.png",
        "/img/realisations/brand_identity_madarom.png",
      ],
    },
    {
      slug: "refonte-site-republique-malagasy",
    
      titre: "Refonte du Site de la République Malagasy",
    
      description: `
    
    Conception d'une proposition de refonte de l'interface du site officiel de la République Malagasy dans le cadre d'un projet de design UX/UI.
    
    L'objectif était de repenser l'expérience utilisateur en proposant une interface plus moderne, accessible et intuitive, tout en conservant le caractère institutionnel de la plateforme.
    
    Le projet s'est concentré sur l'amélioration de la navigation, la valorisation des informations publiques et l'optimisation de la consultation des contenus sur différents types d'appareils.
    
    Cette proposition visait à démontrer comment une approche centrée sur l'utilisateur pouvait renforcer la qualité des services numériques proposés aux citoyens.
    `,
    
      problem: `
    
    Les plateformes institutionnelles regroupent une grande quantité d'informations destinées à différents profils d'utilisateurs, ce qui peut rendre la navigation complexe.
    
    Les principaux enjeux identifiés étaient :
    
    - organisation peu intuitive des contenus ;
    - difficulté d'accès aux informations essentielles ;
    - hiérarchisation visuelle perfectible ;
    - navigation nécessitant plusieurs étapes pour atteindre certains services ;
    - interface nécessitant une modernisation afin d'améliorer l'expérience utilisateur.
    
    Le défi consistait à concevoir une nouvelle interface capable de faciliter l'accès aux informations tout en respectant l'identité d'un site gouvernemental.
    `,
    
      solution: `
    
    Une démarche UX/UI a été mise en œuvre afin de repenser entièrement l'organisation des contenus et les parcours utilisateurs.
    
    Le travail a porté sur plusieurs aspects :
    
    - restructuration de l'architecture de l'information ;
    - création de wireframes ;
    - conception de maquettes haute fidélité ;
    - amélioration de la navigation principale ;
    - mise en valeur des actualités, services et informations administratives ;
    - adaptation de l'interface aux usages sur ordinateur, tablette et mobile.
    
    Une attention particulière a été portée à la lisibilité des contenus, à la cohérence graphique et à la simplicité des interactions afin de proposer une expérience plus fluide et accessible.
    
    L'ensemble des écrans a été intégré dans un prototype interactif permettant de simuler les principaux parcours de navigation.
    `,
    
      result: `
    
    Le projet a abouti à une proposition complète de refonte visuelle et fonctionnelle du site institutionnel.
    
    Les principaux résultats obtenus :
    
    - amélioration de la navigation entre les différentes rubriques ;
    - meilleure hiérarchisation des informations publiques ;
    - interface moderne et cohérente avec les standards actuels du web ;
    - expérience utilisateur plus intuitive ;
    - prototype interactif facilitant la présentation et l'évaluation des parcours utilisateurs.
    
    Cette proposition démontre comment une refonte centrée sur les besoins des utilisateurs peut améliorer l'accessibilité et la qualité des services numériques proposés par une administration publique.
    `,
    
      category: "UI/UX Design",
    
      isSelected: false,
      isFeatured: false,
    
      domains: [
        "recherche",
        "architecture-information",
        "user-flow",
        "wireframes",
        "prototypes",
        "ui-design",
      ],
    
      services: [serviceUIUX?.id].filter(Boolean) as number[],
    
      stacks: [
        "Adobe XD"
      ],
    
      images: [
        "/img/realisations/uiux_4.png",
      ],
    },
  ];

  for (const p of projects) {
    const project = await prisma.project.create({
      data: {
        slug: p.slug,
        titre: p.titre,
        description: p.description,
        problem: p.problem,
        solution: p.solution,
        result: p.result,
        category: p.category,
        isSelected: p.isSelected ?? false,
        isFeatured: p.isFeatured ?? false,
        metric1: p.metric1 ?? null,
        metric2: p.metric2 ?? null,
      },
    });

    for (const domainKey of p.domains) {
      const domain = domains.find((d) => d.key === domainKey);
      if (domain) {
        await prisma.projectDomain.create({
          data: { projectId: project.id, domainId: domain.id },
        });
      }
    }

    for (const serviceId of p.services) {
      await prisma.projectService.create({
        data: { projectId: project.id, serviceId },
      });
    }

    for (const stackName of p.stacks) {
      const stack = stacks.find((s) => s.name === stackName);
      if (stack) {
        await prisma.projectStack.create({
          data: { projectId: project.id, stackId: stack.id },
        });
      }
    }

    for (const url of p.images) {
      await prisma.projectImage.create({
        data: { url, projectId: project.id },
      });
    }
  }

  return {
    success: true,
    message: `${projects.length} projets seedés avec succès`,
  };
});
