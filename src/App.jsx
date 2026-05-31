import { useMemo, useState } from 'react';
import {
  Heart,
  Menu,
  Package,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  X,
} from 'lucide-react';

const plans = [
  {
    id: 'essencial',
    name: 'PetBox Essencial',
    price: 'R$ 49,90/mês',
    description: 'Perfeito para começar a surpreender o seu pet todos os meses.',
  },
  {
    id: 'club',
    name: 'PetBox Club',
    price: 'R$ 79,90/mês',
    description: 'Nosso plano mais amado, com uma experiência completa de personalização.',
    featured: true,
  },
  {
    id: 'premium',
    name: 'PetBox Premium',
    price: 'R$ 109,90/mês',
    description: 'Uma experiência ainda mais especial para quem quer oferecer mais carinho e exclusividade.',
  },
];

const initialForm = {
  tutorName: '',
  email: '',
  petName: '',
  petType: '',
  petAge: '',
  petSize: '',
  notes: '',
};

function Logo({ compact = false }) {
  return (
    <a className="logo" href="#inicio" aria-label="PetBox Club - início">
      <img src="/petbox-mark.png" alt="Ícone da PetBox Club" className="logo-mark" />
      <span>
        <strong>PetBox</strong>
        <small>Club</small>
      </span>
      {compact && <span className="logo-compact-note">Carinho em cada box</span>}
    </a>
  );
}

function PawTrail({ className = '' }) {
  return (
    <div className={`paw-trail ${className}`} aria-hidden="true">
      <PawPrint size={20} />
      <PawPrint size={16} />
      <PawPrint size={18} />
      <PawPrint size={15} />
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [contactSent, setContactSent] = useState(false);

  const suggestion = useMemo(() => {
    if (!submitted) return '';

    let base = 'Itens adaptados ao perfil informado para proporcionar uma experiência especial.';

    if (form.petType === 'Cachorro') {
      base = 'Brinquedo resistente, petisco sabor carne e item de cuidado especial para cães.';
    }

    if (form.petType === 'Gato') {
      base = 'Brinquedo interativo, petisco sabor peixe e item de cuidado especial para gatos.';
    }

    const extras = [];
    if (form.petAge === 'Filhote') {
      extras.push('Itens selecionados para acompanhar a fase de crescimento com mais conforto e diversão.');
    }
    if (form.petAge === 'Idoso') {
      extras.push('Itens pensados para uma rotina mais tranquila, confortável e cheia de carinho.');
    }
    if (form.petSize === 'Grande') {
      extras.push('Selecionamos uma composição compatível com pets de porte maior.');
    }

    return [base, ...extras].join(' ');
  }, [form, submitted]);

  function openPlan(plan) {
    setSelectedPlan(plan);
    setSubmitted(false);
    setForm(initialForm);
  }

  function closeModal() {
    setSelectedPlan(null);
    setSubmitted(false);
    setForm(initialForm);
  }

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function submitPetForm(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="page-shell">
      <header className="site-header">
        <Logo />
        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a>
          <a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como funciona</a>
          <a href="#planos" onClick={() => setMenuOpen(false)}>Planos</a>
          <a href="#beneficios" onClick={() => setMenuOpen(false)}>Benefícios</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
          <button type="button" className="nav-cta" onClick={() => openPlan(plans[1])}>
            Personalizar minha box
          </button>
        </nav>
      </header>

      <section id="inicio" className="hero section">
        <PawTrail className="trail-hero-left" />
        <PawTrail className="trail-hero-right" />

        <div className="hero-copy">
          <span className="eyebrow">Assinatura mensal para pets</span>
          <h1>Todo mês, uma surpresa especial para o seu pet.</h1>
          <p>
            Brinquedos, petiscos e itens especiais escolhidos para combinar com o estilo,
            porte e fase da vida do seu melhor amigo.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#planos">Ver planos</a>
            <button className="secondary-button" type="button" onClick={() => openPlan(plans[1])}>
              Personalizar minha box
            </button>
          </div>
          <div className="quick-tags">
            <span>Entrega mensal</span>
            <span>Seleção premium</span>
            <span>Para cães e gatos</span>
            <span>Personalização por pet</span>
          </div>
        </div>

        <div className="hero-card" aria-label="Resumo da box do mês">
          <div className="box-lid"><Sparkles /></div>
          <Package className="box-icon" size={88} />
          <h2>PetBox do mês</h2>
          <p>1 brinquedo + 1 petisco + 1 item de cuidado + 1 cartão temático.</p>
          <div className="floating-paw"><PawPrint /></div>
        </div>
      </section>

      <section id="como-funciona" className="section">
        <PawTrail className="trail-between" />

        <div className="section-heading">
          <span className="eyebrow">Como funciona</span>
          <h2>Do plano ideal à box perfeita em poucos passos.</h2>
        </div>

        <div className="steps-grid">
          <article>
            <Star />
            <h3>Escolha um plano</h3>
            <p>Selecione a opção ideal para o momento do seu pet.</p>
          </article>
          <article>
            <PawPrint />
            <h3>Conte sobre o seu pet</h3>
            <p>Preencha o perfil para uma curadoria mais certeira.</p>
          </article>
          <article>
            <Package />
            <h3>Receba em casa</h3>
            <p>Todo mês, uma seleção pensada para surpreender com carinho.</p>
          </article>
        </div>
      </section>

      <section id="planos" className="section plans-section">
        <div className="section-heading">
          <span className="eyebrow">Planos</span>
          <h2>Escolha o plano que combina com você e seu pet.</h2>
          <p>Todos os planos incluem o nosso kit base e curadoria personalizada.</p>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <article key={plan.id} className={plan.featured ? 'plan-card featured' : 'plan-card'}>
              {plan.featured && <span className="badge">Mais escolhido</span>}
              <h3>{plan.name}</h3>
              <strong className="price">{plan.price}</strong>
              <p>{plan.description}</p>
              <button type="button" onClick={() => openPlan(plan)}>Personalizar minha box</button>
            </article>
          ))}
        </div>
      </section>

      <section id="beneficios" className="section benefits-section">
        <PawTrail className="trail-benefits" />

        <div className="section-heading">
          <span className="eyebrow">Benefícios e confiança</span>
          <h2>Compromisso com qualidade, cuidado e experiência.</h2>
        </div>

        <div className="trust-grid">
          <article>
            <ShieldCheck />
            <h3>Privacidade em primeiro lugar</h3>
            <p>
              As informações do seu cadastro são tratadas com segurança para entregar uma experiência
              personalizada e protegida em cada etapa.
            </p>
          </article>

          <article>
            <img src="/ra1000.png" alt="Selo RA1000" className="ra-image" />
            <h3>Referência em atendimento</h3>
            <p>
              Inspirados por altos padrões de atendimento e confiança para oferecer uma jornada ainda mais especial.
            </p>
          </article>

          <article>
            <Truck />
            <h3>Entrega mensal e curadoria especial</h3>
            <p>
              Uma seleção feita com carinho para transformar a rotina do seu pet com novidades todos os meses.
            </p>
          </article>

          <article>
            <Heart />
            <h3>Carinho em cada detalhe</h3>
            <p>
              Cada box é pensada para criar momentos de conexão e alegria entre você e seu melhor amigo.
            </p>
          </article>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="section-heading">
          <span className="eyebrow">Clientes felizes</span>
          <h2>O que dizem sobre a experiência PetBox Club</h2>
        </div>

        <div className="testimonials-grid">
          <article>
            <p>“Meu cão ficou animado com os brinquedos e os petiscos chegaram certinhos para o porte dele.”</p>
            <strong>Mariana e Thor</strong>
          </article>
          <article>
            <p>“A personalização faz toda diferença. Minha gata adorou a combinação da última box.”</p>
            <strong>Rafaela e Luna</strong>
          </article>
          <article>
            <p>“Visual lindo, atendimento rápido e uma experiência muito carinhosa desde a primeira entrega.”</p>
            <strong>João e Max</strong>
          </article>
        </div>
      </section>

      <section id="contato" className="section contact-section">
        <div>
          <span className="eyebrow">Contato</span>
          <h2>Fale com a equipe PetBox Club</h2>
          <p>Estamos prontos para ajudar você a encontrar o melhor plano para o seu pet.</p>
          <div className="contact-info">
            <strong>contato@petboxclub.com.br</strong>
            <strong>(44) 99999-9999</strong>
            <span>Atendimento: segunda a sexta, das 9h às 18h</span>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            setContactSent(true);
          }}
        >
          <label>
            Nome
            <input required placeholder="Seu nome" />
          </label>
          <label>
            E-mail
            <input type="email" required placeholder="seu@email.com" />
          </label>
          <label>
            Tipo de pet
            <select required defaultValue="">
              <option value="" disabled>Selecione</option>
              <option>Cachorro</option>
              <option>Gato</option>
              <option>Outro</option>
            </select>
          </label>
          <label>
            Mensagem
            <textarea required placeholder="Como podemos ajudar?" />
          </label>
          <button type="submit">Enviar mensagem</button>
          {contactSent && <p className="success-message">Mensagem enviada com sucesso! Nossa equipe retornará em breve.</p>}
        </form>
      </section>

      <footer className="footer">
        <Logo compact />
        <p>© 2026 PetBox Club. Todos os direitos reservados.</p>
        <div>
          <a href="#inicio">Início</a>
          <a href="#planos">Planos</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#contato">Contato</a>
        </div>
      </footer>

      {selectedPlan && (
        <div className="modal-backdrop" role="presentation">
          <section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button className="close-button" type="button" onClick={closeModal} aria-label="Fechar formulário">
              <X />
            </button>

            {!submitted ? (
              <>
                <span className="eyebrow">{selectedPlan.name}</span>
                <h2 id="modal-title">Personalize a box do seu pet</h2>
                <p>
                  Responda os campos abaixo para criarmos uma sugestão personalizada para o perfil do seu melhor amigo.
                </p>

                <form className="pet-form" onSubmit={submitPetForm}>
                  <label>
                    Nome do tutor
                    <input name="tutorName" value={form.tutorName} onChange={updateField} required />
                  </label>
                  <label>
                    E-mail
                    <input name="email" type="email" value={form.email} onChange={updateField} required />
                  </label>
                  <label>
                    Nome do pet
                    <input name="petName" value={form.petName} onChange={updateField} required />
                  </label>
                  <label>
                    Tipo de pet
                    <select name="petType" value={form.petType} onChange={updateField} required>
                      <option value="" disabled>Selecione</option>
                      <option>Cachorro</option>
                      <option>Gato</option>
                      <option>Outro</option>
                    </select>
                  </label>
                  <label>
                    Idade do pet
                    <select name="petAge" value={form.petAge} onChange={updateField} required>
                      <option value="" disabled>Selecione</option>
                      <option>Filhote</option>
                      <option>Adulto</option>
                      <option>Idoso</option>
                    </select>
                  </label>
                  <label>
                    Porte do animal
                    <select name="petSize" value={form.petSize} onChange={updateField} required>
                      <option value="" disabled>Selecione</option>
                      <option>Pequeno</option>
                      <option>Médio</option>
                      <option>Grande</option>
                    </select>
                  </label>
                  <label className="full">
                    Preferências ou observações
                    <textarea
                      name="notes"
                      value={form.notes}
                      onChange={updateField}
                      required
                      placeholder="Conte as preferências do seu pet para melhorar a curadoria."
                    />
                  </label>

                  <button type="submit">Ver minha box personalizada</button>
                </form>
              </>
            ) : (
              <div className="result-card">
                <Sparkles />
                <h2>Pronto! A box do(a) {form.petName} foi personalizada com base nas informações preenchidas.</h2>
                <dl>
                  <div><dt>Plano escolhido</dt><dd>{selectedPlan.name}</dd></div>
                  <div><dt>Tipo</dt><dd>{form.petType}</dd></div>
                  <div><dt>Idade</dt><dd>{form.petAge}</dd></div>
                  <div><dt>Porte</dt><dd>{form.petSize}</dd></div>
                </dl>
                <p><strong>Sugestão da box:</strong> {suggestion}</p>
                <button type="button" onClick={closeModal}>Finalizar</button>
              </div>
            )}
          </section>
        </div>
      )}
    </main>
  );
}

export default App;
