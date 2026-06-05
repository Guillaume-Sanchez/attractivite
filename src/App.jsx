import { 
  Building, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Server,
  Code,
  Tent,
  Coffee,
  Ticket
} from 'lucide-react';

export default function App() {
  return (
    // La classe scroll-smooth permet le défilement fluide vers les ancres
    <div className="font-sans text-slate-900 scroll-smooth">
      
      {/* --- HERO SECTION --- */}
      <section className="min-h-[90vh] bg-white flex flex-col justify-center items-center px-4 text-center relative">
        <div className="max-w-4xl mx-auto">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-6 block">
            Territoire d'Avenir
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8">
            Changez de <span className="text-rose-500">code.</span> <br />
            Changez de <span className="text-blue-600">vie.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto font-light">
            Une agglomération qui recrute vos talents tech et industriels, sans vous faire payer le prix fort sur votre qualité de vie.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Lien d'ancrage vers l'économie */}
            <a 
              href="#economie"
              className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 px-8 rounded-full transition-transform hover:-translate-y-1 shadow-lg hover:shadow-rose-500/30 flex items-center justify-center gap-2"
            >
              Entreprises & Emplois <ArrowRight size={20} />
            </a>
            
            {/* Lien d'ancrage vers le lifestyle */}
            <a 
              href="#lifestyle"
              className="bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 font-bold py-4 px-8 rounded-full transition-transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Cadre de vie & Sorties
            </a>
          </div>
        </div>
      </section>

      {/* --- SECTION 1 : ECONOMIE --- */}
      <section id="economie" className="py-24 bg-slate-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">L'écosystème <span className="text-rose-500">Tech & Industriel</span>.</h2>
            <p className="text-xl text-slate-500 max-w-2xl">
              Des PME innovantes aux grands groupes, notre bassin d'emploi recherche activement des profils qualifiés (Titres RNCP de niveau 7, Ingénieurs) pour soutenir sa croissance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-rose-100 text-rose-500 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Cybersécurité</h3>
              <p className="text-slate-600">
                Rejoignez des équipes dédiées à la protection des infrastructures. Audits, pentesting, maîtrise d'outils comme Nessus ou Metasploit pour sécuriser les réseaux industriels.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Server size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Infrastructures IT</h3>
              <p className="text-slate-600">
                Devenez l'architecte du SI de demain. Les entreprises locales déploient des environnements virtualisés massifs (Proxmox, Kubernetes) et recherchent des experts pour les maintenir.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <Code size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">DevOps & Numérique</h3>
              <p className="text-slate-600">
                Développement web, automatisation de pipelines de déploiement et création d'outils internes sur-mesure pour accompagner l'industrie 4.0.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2 : LIFESTYLE --- */}
      <section id="lifestyle" className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">La vraie <span className="text-blue-600">déconnexion</span>.</h2>
            <p className="text-xl text-slate-500 max-w-2xl">
              Fini les deux heures de transports par jour et les petits espaces. Ici, on prend le temps de vivre.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                <Tent size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Espace & Logement</h3>
                <p className="text-slate-600 text-lg">
                  Profitez d'un marché immobilier accessible. Optez pour une maison avec un vrai jardin, parfait pour vous, votre partenaire de PACS, et pour voir grandir vos animaux (les chats adorent !).
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center shrink-0">
                <Ticket size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Culture & Sport</h3>
                <p className="text-slate-600 text-lg">
                  Un tissu associatif ultra-dynamique. Des salles de concert aux tournois sportifs (on est fiers de nos événements de handball !), il se passe toujours quelque chose le week-end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-white py-12 px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Building className="text-blue-500" size={24} />
          <span className="font-bold text-xl">Agglomération Partenaire</span>
        </div>
        <p className="text-slate-400">
          Un projet soutenu par les acteurs publics et privés du territoire pour attirer les jeunes talents.
        </p>
      </footer>

    </div>
  );
}