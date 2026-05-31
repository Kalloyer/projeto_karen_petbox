import { useMemo, useState } from 'react';
import {
  Heart,
  Menu,
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
    description:
      'A escolha ideal para começar a surpreender seu pet todos os meses com carinho, diversão e cuidado.',
    image: '/images/petbox-essencial.png',
    imageAlt: 'Imagem da PetBox Essencial aberta com produtos para pet',
    products: [
      '1 brinquedo surpresa para pet',
      '1 pacote de petisco',
      '1 item de cuidado básico',
      '1 cartão temático do mês',
    ],
  },
  {
    id: 'club',
    name: 'PetBox Club',
    price: 'R$ 69,90/mês',
    description:
      'O plano mais escolhido para quem quer uma experiência mensal mais completa, divertida e personalizada.',
    image: '/images/petbox-club.png',
    imageAlt: 'Imagem da PetBox Club aberta com brinquedos, petiscos e itens de cuidado',
    products: [
      '3 brinquedos surpresa para pet',
      '4 pacotes de petiscos',
      '3 itens de cuidados básicos',
      '1 cartão temático do mês para adestramento',
    ],
    featured: true,
  },
  {
    id: 'premium',
    name: 'PetBox Premium',
    price: 'R$ 89,90/mês',
    description:
      'Uma experiência especial para tutores que querem oferecer mais variedade, cuidado e surpresa para o pet.',
    image: '/images/petbox-premium.png',
    imageAlt: 'Imagem da PetBox Premium aberta com produtos premium para pet',
    products: [
      '4 brinquedos surpresa para pet',
      '5 pacotes de petiscos selecionados',
      '4 itens de cuidado e higiene',
      '1 acessório especial',
      '1 cartão temático premium do mês',
    ],
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

    let base = 'Selecionamos itens adaptados para criar uma experiência especial para o seu pet.';

    if (form.petType === 'Cachorro') {
      base = 'Selecionamos brinquedos resistentes, petiscos saborosos e itens de cuidado pensados para cães.';
    }

    if (form.petType === 'Gato') {
      base = 'Selecionamos brinquedos interativos, petiscos especiais e itens de cuidado pensados para gatos.';
    }

    const extras = [];

    if (form.petAge === 'Filhote') {
      extras.push('Incluímos uma seleção mais leve e adequada para pets em fase de crescimento.');
    }

    if (form.petAge === 'Idoso') {
      extras.push('Incluímos itens pensados para conforto, cuidado e uma rotina mais tranquila.');
    }

    if (form.petSize === 'Grande') {
      extras.push('Os itens foram pensados em tamanhos maiores para acompanhar o porte do seu pet.');
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
          <h1>Todo mês, uma box especial para o seu pet.</h1>
          <p>
            Brinquedos, petiscos e cuidados selecionados para cães e gatos,
            com uma experiência pensada para cada perfil.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#planos">Ver planos</a>
            <button className="secondary-button" type="button" onClick={() => openPlan(plans[1])}>
              Montar minha box
            </button>
          </div>
          <div className="quick-tags">
            <span>Entrega mensal</span>
            <span>Curadoria especial</span>
            <span>Para cães e gatos</span>
            <span>Personalização por perfil</span>
          </div>
        </div>

        <div className="hero-card" aria-label="Resumo da experiência PetBox Club">
          <img
            src="/images/petbox-club.png"
            alt="PetBox Club com brinquedos, petiscos e itens de cuidado"
            className="hero-photo"
          />
          <h2>Carinho em cada detalhe</h2>
          <p>
            Boxes com produtos selecionados, carinho em cada detalhe e personalização
            de acordo com o perfil do seu pet.
          </p>
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
            <p>Cada plano possui uma composição própria de produtos.</p>
          </article>
          <article>
            <PawPrint />
            <h3>Conte sobre o seu pet</h3>
            <p>Preencha o perfil para personalizar sua próxima PetBox.</p>
          </article>
          <article>
            <Truck />
            <h3>Receba em casa</h3>
            <p>Todo mês, uma seleção criada para surpreender com conforto e diversão.</p>
          </article>
        </div>
      </section>

      <section id="planos" className="section plans-section">
        <div className="section-heading">
          <span className="eyebrow">Planos</span>
          <h2>Escolha o plano que combina com você e seu pet.</h2>
          <p>
            Cada plano possui uma composição própria de produtos,
            e a personalização acontece depois que você preenche o perfil do pet.
          </p>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <article key={plan.id} className={plan.featured ? 'plan-card featured' : 'plan-card'}>
              <img src={plan.image} alt={plan.imageAlt} className="plan-image" loading="lazy" />
              {plan.featured && <span className="badge">Mais escolhido</span>}
              <h3>{plan.name}</h3>
              <strong className="price">{plan.price}</strong>
              <p>{plan.description}</p>
              <h4>Produtos incluídos</h4>
              <ul className="plan-products">
                {plan.products.map((product) => (
                  <li key={product}>{product}</li>
                ))}
              </ul>
              <button type="button" onClick={() => openPlan(plan)}>Personalizar minha box</button>
            </article>
          ))}
        </div>
      </section>

      <section id="beneficios" className="section benefits-section">
        <PawTrail className="trail-benefits" />

        <div className="section-heading">
          <span className="eyebrow">Confiança em cada detalhe</span>
          <h2>Atendimento próximo, cuidado com dados e experiências personalizadas.</h2>
        </div>

        <div className="trust-grid">
          <article>
            <Heart />
            <h3>Atendimento próximo</h3>
            <p>Suporte acolhedor para ajudar na escolha do plano ideal para o seu pet.</p>
          </article>

          <article>
            <ShieldCheck />
            <h3>Dados protegidos</h3>
            <p>
              Seus dados são usados apenas para contato e personalização da experiência PetBox Club,
              com cuidado, segurança e respeito à sua privacidade.
            </p>
          </article>

          <article>
            <img src="/ra1000.png" alt="Selo de referência em reputação e atendimento" className="ra-image" />
            <h3>Reputação e cuidado com o cliente</h3>
            <p>Buscamos sempre altos padrões de atendimento para oferecer confiança em toda a jornada.</p>
          </article>

          <article>
            <Sparkles />
            <h3>Experiência personalizada</h3>
            <p>Cada box é preparada para combinar com o perfil e a rotina do seu melhor amigo.</p>
          </article>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="section-heading">
          <span className="eyebrow">Quem já recebeu uma PetBox adorou</span>
          <h2>Histórias de tutores e pets felizes</h2>
        </div>

        <div className="testimonials-grid">
          <article>
            <p>“A Luna ficou animada assim que viu a caixa. Foi uma experiência muito divertida!”</p>
            <strong>Rafaela e Luna</strong>
          </article>
          <article>
            <p>“Gostei da praticidade de receber tudo selecionado para o Thor.”</p>
            <strong>Mariana e Thor</strong>
          </article>
          <article>
            <p>“A personalização deixou a box com muito mais sentido para a rotina do meu gato.”</p>
            <strong>João e Mingau</strong>
          </article>
        </div>
      </section>

      <section id="contato" className="section contact-section">
        <div>
          <span className="eyebrow">Contato</span>
          <h2>Fale com a PetBox Club</h2>
          <p>Nossa equipe está pronta para ajudar você a encontrar o melhor plano para o seu pet.</p>
          <div className="contact-info">
            <strong>contato@petboxclub.com.br</strong>
            <strong>(44) 99999-9999</strong>
            <span>Segunda a sexta, das 9h às 18h</span>
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
          {contactSent && <p className="success-message">Mensagem enviada com sucesso! Em breve entraremos em contato.</p>}
        </form>
      </section>

      <footer className="footer">
        <Logo compact />
        <p>© 2026 PetBox Club. Todos os direitos reservados.</p>
        <div>
          <a href="#inicio">Início</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#planos">Planos</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#contato">Contato</a>
          <a href="#beneficios">Política de Privacidade</a>
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
                <p>Conte um pouco sobre o seu pet para prepararmos uma experiência combinando com o perfil dele.</p>

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
                    Idade
                    <select name="petAge" value={form.petAge} onChange={updateField} required>
                      <option value="" disabled>Selecione</option>
                      <option>Filhote</option>
                      <option>Adulto</option>
                      <option>Idoso</option>
                    </select>
                  </label>
                  <label>
                    Porte
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

                  <button type="submit">Montar minha PetBox</button>
                </form>
              </>
            ) : (
              <div className="result-card">
                <Sparkles />
                <h2>Pronto! A PetBox do(a) {form.petName} foi personalizada com base no perfil informado.</h2>
                <dl>
                  <div><dt>Plano escolhido</dt><dd>{selectedPlan.name}</dd></div>
                  <div><dt>Nome do pet</dt><dd>{form.petName}</dd></div>
                  <div><dt>Tipo</dt><dd>{form.petType}</dd></div>
                  <div><dt>Idade</dt><dd>{form.petAge}</dd></div>
                  <div><dt>Porte</dt><dd>{form.petSize}</dd></div>
                  <div><dt>Preferências</dt><dd>{form.notes}</dd></div>
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
