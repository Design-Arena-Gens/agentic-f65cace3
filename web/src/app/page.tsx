import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  FileText,
  Mail,
  PlayCircle,
  Rocket,
  Sparkles,
  Store,
  Users,
} from "lucide-react";

const problemPoints = [
  "Tu manques de temps pour rédiger des fiches produits qui convertissent.",
  "Les angles publicitaires Meta prennent des heures à tester et peaufiner.",
  "Créer des scripts UGC et des hooks viraux demande une équipe dédiée.",
  "Les emails de lancement tombent à plat faute d'une narration impactante.",
];

const steps = [
  {
    title: "Tu importes ton produit",
    description:
      "Ajoute simplement l'URL de ta fiche produit existante ou décris ton offre en quelques lignes.",
    icon: <Rocket className="h-6 w-6 text-cyan-300" aria-hidden />, 
  },
  {
    title: "L’IA génère ton Pack",
    description:
      "[APP NAME] transforme ton brief en contenus prêts à l’emploi : angles, scripts, annonces et séquences.",
    icon: <Sparkles className="h-6 w-6 text-fuchsia-300" aria-hidden />, 
  },
  {
    title: "Tu exportes et tu lances",
    description:
      "Export en PDF ou push direct vers Shopify. Ton pack est prêt à nourrir ads, réseaux et emails.",
    icon: <Download className="h-6 w-6 text-sky-300" aria-hidden />, 
  },
];

const deliverables = [
  {
    label: "Fiche produit optimisée SEO",
    description: "Structure convaincante + bénéfices + FAQs pour maximiser la conversion.",
    icon: FileText,
  },
  {
    label: "Campagnes Meta Ads",
    description: "Titres, descriptions, hooks visuels et audiences suggérées pour performer.",
    icon: PlayCircle,
  },
  {
    label: "Hooks TikTok & Reels",
    description: "Scripts courts, angles d'accroche et call-to-action pensés pour le scroll.",
    icon: Users,
  },
  {
    label: "Scripts UGC complets",
    description: "Storyboard, tonalité, objections et transitions pour creators.",
    icon: Sparkles,
  },
  {
    label: "Posts réseaux sociaux",
    description: "Calendrier de 7 publications multi-plateformes avec visuels recommandés.",
    icon: Store,
  },
  {
    label: "Emails de lancement",
    description: "Séquence 3 emails (teasing, lancement, FOMO) déjà rédigés.",
    icon: Mail,
  },
];

const testimonials = [
  {
    name: "Sofia M.",
    role: "Head of Growth, Maison Lune",
    quote:
      "On passe de l'idée au lancement en 48h. [APP NAME] nous fournit tout le narratif, il ne reste plus qu'à lancer.",
  },
  {
    name: "Hugo R.",
    role: "Fondateur, Atelier Rivage",
    quote:
      "Les scripts UGC sont dingues. Les creators ont adoré et nos CPM ont chuté de 32% dès la première campagne.",
  },
  {
    name: "Camille M.",
    role: "Brand Manager, Club Rosé",
    quote:
      "La fiche produit + les emails ont boosté nos conversions Shopify +28%. C'est devenu notre process standard.",
  },
];

const faqs = [
  {
    question: "Combien de temps pour recevoir un Pack Produit ?",
    answer:
      "Moins de 10 minutes après soumission de ton produit. Tu reçois un lien de téléchargement + un export Shopify.",
  },
  {
    question: "Puis-je modifier les contenus générés ?",
    answer:
      "Oui, chaque bloc est éditable directement dans [APP NAME] et tu peux re-générer des variantes à volonté.",
  },
  {
    question: "Est-ce que ça marche pour tous les secteurs ?",
    answer:
      "Nous avons entraîné le modèle sur plus de 2M de fiches produits, y compris beauté, maison, tech et food.",
  },
  {
    question: "Comment fonctionne l’export Shopify ?",
    answer:
      "Connecte ta boutique, sélectionne le produit cible et publie ta nouvelle fiche + assets en un clic.",
  },
];

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 py-16 text-slate-100 sm:px-10 lg:px-16">
      <section
        id="hero"
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/40 px-8 py-16 shadow-[0_40px_120px_-30px_rgba(14,165,233,0.4)] sm:px-12 lg:flex lg:items-center lg:justify-between"
      >
        <div className="relative z-10 max-w-xl space-y-8">
          <span className="badge light-pill">Pack Produit IA</span>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
              Transforme n’importe quel produit en système de vente complet.
            </h1>
            <p className="text-lg leading-relaxed text-slate-200/80">
              [APP NAME] génère pour toi la fiche produit, les pubs, les scripts UGC, les posts et les emails.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#commande"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-sky-400 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Commander un Pack Produit
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden />
            </Link>
            <Link
              href="#exemple"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-sky-300/70 hover:text-sky-200"
            >
              Voir un exemple
              <PlayCircle className="h-5 w-5" aria-hidden />
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-300" aria-hidden />
              <span>Export PDF & Shopify</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-300" aria-hidden />
              <span>Variantes multi-langues</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-300" aria-hidden />
              <span>IA entraînée sur 2M+ d’assets</span>
            </div>
          </div>
        </div>

        <div className="relative mt-12 max-w-sm shrink-0 lg:mt-0 lg:max-w-md">
          <div className="glass-panel grid-outline relative rounded-[32px] p-6">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-300/60">
              <span>Dashboard</span>
              <span>Pack Produit</span>
            </div>
            <div className="mt-6 space-y-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner">
                <p className="text-sm font-medium text-sky-200">Fiche Produit</p>
                <p className="mt-2 text-sm text-slate-200/70">
                  Structure AIDA, bénéfices, storytelling, objections + réponses. Optimisée pour SEO et conversion.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner">
                <p className="text-sm font-medium text-fuchsia-200">Scripts UGC</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-200/70">
                  <li>• 3 hooks vidéo pour TikTok/Reels</li>
                  <li>• Scénario 45 secondes avec CTA</li>
                  <li>• Plan de tournage + émotions clés</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner">
                <p className="text-sm font-medium text-emerald-200">Emails</p>
                <p className="mt-2 text-sm text-slate-200/70">
                  Séquence teasing, lancement, dernier rappel + PS FOMO. Taux d’ouverture moyen 48%.
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-900/70 px-5 py-3 text-sm text-slate-100">
              <span>Export prêt</span>
              <div className="flex items-center gap-2 text-sky-200">
                <Download className="h-4 w-4" aria-hidden />
                <span>PDF & Shopify</span>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-sky-400/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -right-6 h-32 w-32 rounded-full bg-fuchsia-400/30 blur-3xl" />
        </div>
      </section>

      <section id="probleme" className="section-gradient relative overflow-hidden rounded-3xl px-8 py-14 sm:px-12">
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_top,_rgba(56,189,248,0.4),_transparent_55%)]" />
        <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-slate-100">
          <h2 className="text-3xl font-semibold sm:text-4xl">Le problème, ce n’est pas le produit.</h2>
          <p className="text-lg text-slate-200/80">
            Tu as les bonnes offres, mais ton équipe sature. Les lancements prennent du retard, les créas manquent de cohérence et les campagnes perdent en impact.
          </p>
          <ul className="grid gap-4 text-base text-slate-200/75 sm:grid-cols-2">
            {problemPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-300" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="solution" className="relative rounded-3xl border border-white/10 bg-white/5 px-8 py-16 sm:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
            Du produit brut au pack marketing complet.
          </h2>
          <p className="mt-4 text-lg text-slate-200/80">
            Automatise tout le storytelling de ton e-commerce : de la fiche produit aux campagnes multi-formats.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-950/60 p-6 transition hover:border-sky-300/60 hover:shadow-[0_20px_60px_-25px_rgba(56,189,248,0.5)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 shadow-inner">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-50">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-200/70">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="exemple" className="rounded-3xl border border-white/10 bg-white/5 px-8 py-16 sm:px-12">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">Tout ce que contient ton Pack Produit.</h2>
            <p className="text-lg text-slate-200/75">
              Chaque livrable est prêt à copier-coller ou à exporter. Adapté à ton ton de marque et à ton audience.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {deliverables.map(({ label, description, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-950/60 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Icon className="h-6 w-6 text-sky-200" aria-hidden />
                </div>
                <h3 className="text-lg font-medium text-slate-50">{label}</h3>
                <p className="text-sm text-slate-200/70">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-950/60 px-8 py-16 sm:px-12">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <div className="flex items-center justify-center gap-2 text-sm uppercase tracking-[0.3em] text-slate-300/70">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300" /> Résultats
          </div>
          <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">
            Des marques e-commerce qui passent de la fiche brute au lancement éclair.
          </h2>
          <p className="text-lg text-slate-200/75">
            Les équipes growth et brand utilisent [APP NAME] pour industrialiser leurs packs produits sans sacrifier la qualité.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-left"
            >
              <p className="text-base leading-relaxed text-slate-100/90">“{testimonial.quote}”</p>
              <div className="mt-auto text-sm text-slate-400">
                <p className="font-medium text-slate-200">{testimonial.name}</p>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="commande" className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/80 via-slate-950/60 to-sky-900/60 px-8 py-16 sm:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="badge mx-auto mb-6 bg-white/10 text-slate-100">Lancement express</div>
          <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">Commander ton Pack Produit</h2>
          <p className="mt-4 text-lg text-slate-200/80">
            Réception instantanée, révisions illimitées, export PDF & Shopify inclus. On s’occupe du storytelling complet.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-950/75 p-6 text-left shadow-lg sm:w-80">
              <div className="text-sm uppercase tracking-[0.3em] text-slate-400">Starter</div>
              <div className="flex items-baseline gap-2 text-4xl font-semibold text-slate-50">
                <span>149€</span>
                <span className="text-base text-slate-400">/ pack</span>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-200/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-emerald-300" aria-hidden />
                  <span>1 produit e-commerce</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-emerald-300" aria-hidden />
                  <span>Fiche produit + 3 annonces Meta + 2 scripts UGC</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-emerald-300" aria-hidden />
                  <span>1 séquence email de lancement</span>
                </li>
              </ul>
              <Link
                href="mailto:hello@app-name.ai?subject=Commande%20Pack%20Produit%20Starter"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                Choisir Starter
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="flex flex-col gap-3 rounded-3xl border border-sky-300/60 bg-white/10 p-6 text-left shadow-lg sm:w-80">
              <div className="light-pill inline-flex items-center gap-2 self-start rounded-full px-4 py-1 text-xs font-semibold uppercase text-slate-900">
                <Sparkles className="h-4 w-4" aria-hidden /> Populaire
              </div>
              <div className="text-sm uppercase tracking-[0.3em] text-slate-200/80">Scale</div>
              <div className="flex items-baseline gap-2 text-4xl font-semibold text-slate-50">
                <span>249€</span>
                <span className="text-base text-slate-200/70">/ pack</span>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-200/85">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-emerald-300" aria-hidden />
                  <span>Jusqu’à 3 déclinaisons produit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-emerald-300" aria-hidden />
                  <span>Scripts UGC + hooks TikTok/Reels + 5 posts réseaux</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-emerald-300" aria-hidden />
                  <span>Exports PDF & Shopify + Notion workspace</span>
                </li>
              </ul>
              <Link
                href="mailto:hello@app-name.ai?subject=Commande%20Pack%20Produit%20Scale"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
              >
                Choisir Scale
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
          <p className="mt-6 text-sm text-slate-300/70">
            Tu as besoin d’un volume mensuel ? Contacte-nous pour un plan sur mesure et un espace collaboratif brand + créa.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 px-8 py-16 sm:px-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">Questions fréquentes</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-white/10 bg-slate-950/60 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-100">{faq.question}</h3>
                <p className="mt-3 text-sm text-slate-200/75">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="flex flex-col items-center gap-4 py-10 text-center text-sm text-slate-400">
        <div className="flex items-center gap-2 text-slate-200/80">
          <Sparkles className="h-4 w-4" aria-hidden />
          <span>[APP NAME] — Pack Produit automatisé pour e-commerce.</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link href="#hero" className="hover:text-sky-200">
            Retour en haut
          </Link>
          <Link href="mailto:hello@app-name.ai" className="hover:text-sky-200">
            Contact
          </Link>
          <span>Export PDF et intégration Shopify inclus</span>
        </div>
      </footer>
    </main>
  );
}
