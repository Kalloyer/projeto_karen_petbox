import { useMemo, useState } from 'react';
import { Check, Heart, Menu, Package, PawPrint, ShieldCheck, Sparkles, Star, X } from 'lucide-react';

const plans = [
  {
    id: 'essencial',
    name: 'PetBox Essencial',
    price: 'R$ 49,90/mês',
    description: 'Uma box mensal com itens essenciais para deixar a rotina do seu pet mais divertida.',
    benefits: ['Kit base PetBox Club', 'Personalização por tipo de pet', 'Ideal para testar a experiência'],
  },
  {
    id: 'club',
    name: 'PetBox Club',
    price: 'R$ 79,90/mês',
    description: 'A experiência principal da PetBox Club, com uma box personalizada para o perfil do seu pet.',
    benefits: ['Kit base PetBox Club', 'Personalização por idade e porte', 'Tema especial do mês', 'Plano mais escolhido'],
    featured: true,
  },
  {
    id: 'premium',
    name: 'PetBox Premium',
    price: 'R$ 119,90/mês',
    description: 'Uma experiência mais completa de personalização, ideal para tutores que querem uma box mais alinhada ao perfil do pet.',
    benefits: ['Kit base PetBox Club', 'Personalização por tipo, idade e porte', 'Seleção fictícia mais cuidadosa', 'Atendimento prioritário fictício'],
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
      <span className="logo-mark" aria-hidden="true">
        <PawPrint size={compact ? 22 : 26} />
      </span>
      <span>
        <strong>PetBox</strong>
        <small>Club</small>
      </span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [contactSent, setContactSent] = useState(false);

  const boxSuggestion = useMemo(() => {
    if (!submitted) return null;

    const base = {
      Cachorro: 'brinquedo resistente, petisco sabor carne e item de cuidado básico.',
      Gato: 'brinquedo interativo, petisco sabor peixe e item de cuidado básico.',
      Outro: 'brinquedo adaptado, petisco selecionado e item de cuidado básico.',
    }[form.petType] || 'brinquedo surpresa, petisco selecionado e item de cuidado básico.';

    const details = [];
    if (form.petAge === 'Filhote') details.push('Selecionamos itens mais leves e adequados para pets em fase de crescimento.');
    if (form.petAge === 'Idoso') details.push('Selecionamos itens pensados para conforto e rotina tranquila.');
    if (form.petSize === 'Grande') details.push('Os itens foram simulados em tamanho maior para acompanhar o porte do pet.');

    return `${base} ${details.join(' ')}`.trim();
  }, [submitted, form]);

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
    <main>
      <header className="site-header">
        <Logo />
        <button className="menu-button" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label="Abrir menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {['inicio', 'como-funciona', 'planos', 'confianca', 'contato'].map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>
              {item === 'como-funciona' ? 'Como funciona' : item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <button type="button" className="nav-cta" onClick={() => openPlan(plans[1])}>Personalizar minha box</button>
        </nav>
      </header>

      <section id="inicio" className="hero section">
        <div className="hero-copy">
          <span className="eyebrow">Projeto acadêmico fictício</span>
          <h1>Todo mês, uma surpresa especial para o seu pet.</h1>
          <p>A PetBox Club entrega brinquedos, petiscos e itens de cuidado em caixas pensadas para deixar cães e gatos mais felizes.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#planos">Ver planos</a>
            <button className="secondary-button" type="button" onClick={() => openPlan(plans[1])}>Personalizar minha box</button>
          </div>
          <div className="quick-tags">
            <span>Entrega mensal</span>
            <span>Produtos selecionados</span>
            <span>Para cães e gatos</span>
            <span>Personalização por pet</span>
          </div>
        </div>
        <div className="hero-card" aria-label="Mockup da PetBox Club">
          <div className="box-lid"><Sparkles /></div>
          <Package className="box-icon" size={92} />
          <h2>PetBox do mês</h2>
          <p>Kit base + personalização fictícia pelo perfil do pet.</p>
          <div className="floating-paw"><PawPrint /></div>
        </div>
      </section>

      <section id="como-funciona" className="section">
        <div className="section-heading">
          <span className="eyebrow">Como funciona</span>
          <h2>Uma experiência simples, visual e personalizada.</h2>
        </div>
        <div className="steps-grid">
          <article><Star /><h3>Escolha um plano</h3><p>Selecione uma assinatura fictícia da PetBox Club.</p></article>
          <article><PawPrint /><h3>Preencha o perfil do pet</h3><p>Informe nome, tipo, idade e porte para simular a personalização.</p></article>
          <article><Package /><h3>Veja sua box personalizada</h3><p>A página mostra uma sugestão fictícia de box pensada para o seu pet.</p></article>
        </div>
      </section>

      <section id="planos" className="section plans-section">
        <div className="section-heading">
          <span className="eyebrow">Planos</span>
          <h2>Três opções, o mesmo kit base e personalização por cliente.</h2>
          <p>Todos os planos incluem brinquedo surpresa, petisco, item de cuidado básico e cartão temático do mês.</p>
        </div>
        <div className="plans-grid">
          {plans.map((plan) => (
            <article key={plan.id} className={plan.featured ? 'plan-card featured' : 'plan-card'}>
              {plan.featured && <span className="badge">Mais escolhido</span>}
              <h3>{plan.name}</h3>
              <strong className="price">{plan.price}</strong>
              <p>{plan.description}</p>
              <ul>
                {plan.benefits.map((benefit) => <li key={benefit}><Check size={18} />{benefit}</li>)}
              </ul>
              <button type="button" onClick={() => openPlan(plan)}>Personalizar minha box</button>
            </article>
          ))}
        </div>
      </section>

      <section id="confianca" className="section trust-section">
        <div className="section-heading">
          <span className="eyebrow">Confiança e privacidade</span>
          <h2>Informações demonstrativas para o projeto.</h2>
        </div>
        <div className="trust-grid">
          <article><ShieldCheck /><h3>Privacidade em primeiro lugar</h3><p>Seus dados são tratados com responsabilidade. A PetBox Club respeita boas práticas de privacidade e proteção de dados, usando as informações apenas para simular cadastro, contato e personalização da experiência.</p></article>
          <article><div className="ra-seal">RA1000</div><h3>Referência de reputação</h3><p>Referência visual inspirada no selo RA1000 do ReclameAQUI, utilizada apenas para fins acadêmicos.</p></article>
          <article><Heart /><h3>Projeto fictício</h3><p>A PetBox Club é uma proposta acadêmica e não realiza vendas, cobranças ou entregas reais.</p></article>
        </div>
      </section>

      <section id="contato" className="section contact-section">
        <div>
          <span className="eyebrow">Contato</span>
          <h2>Fale com a PetBox Club</h2>
          <p>Canal demonstrativo para simular o contato com a marca.</p>
          <div className="contact-info">
            <strong>contato@petboxclub.com.br</strong>
            <strong>(44) 99999-9999</strong>
            <span>Atendimento fictício: segunda a sexta, das 9h às 18h</span>
          </div>
        </div>
        <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setContactSent(true); }}>
          <label>Nome<input required placeholder="Seu nome" /></label>
          <label>E-mail<input type="email" required placeholder="seu@email.com" /></label>
          <label>Tipo de pet<select required defaultValue=""><option value="" disabled>Selecione</option><option>Cachorro</option><option>Gato</option><option>Outro</option></select></label>
          <label>Mensagem<textarea required placeholder="Como podemos ajudar?" /></label>
          <button type="submit">Enviar mensagem</button>
          {contactSent && <p className="success-message">Mensagem enviada com sucesso em ambiente demonstrativo.</p>}
        </form>
      </section>

      <footer className="footer">
        <Logo compact />
        <p>© 2026 PetBox Club. Projeto acadêmico fictício desenvolvido para fins educacionais.</p>
        <div><a href="#inicio">Início</a><a href="#planos">Planos</a><a href="#confianca">LGPD</a><a href="#contato">Contato</a></div>
      </footer>

      {selectedPlan && (
        <div className="modal-backdrop" role="presentation">
          <section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button className="close-button" type="button" onClick={closeModal} aria-label="Fechar formulário"><X /></button>
            {!submitted ? (
              <>
                <span className="eyebrow">{selectedPlan.name}</span>
                <h2 id="modal-title">Personalize a box do seu pet</h2>
                <p>Conte um pouco sobre o seu pet para montarmos uma box fictícia combinando com ele.</p>
                <form className="pet-form" onSubmit={submitPetForm}>
                  <label>Nome do tutor<input name="tutorName" value={form.tutorName} onChange={updateField} required /></label>
                  <label>E-mail<input name="email" type="email" value={form.email} onChange={updateField} required /></label>
                  <label>Nome do pet<input name="petName" value={form.petName} onChange={updateField} required /></label>
                  <label>Tipo de pet<select name="petType" value={form.petType} onChange={updateField} required><option value="" disabled>Selecione</option><option>Cachorro</option><option>Gato</option><option>Outro</option></select></label>
                  <label>Idade do pet<select name="petAge" value={form.petAge} onChange={updateField} required><option value="" disabled>Selecione</option><option>Filhote</option><option>Adulto</option><option>Idoso</option></select></label>
                  <label>Porte do animal<select name="petSize" value={form.petSize} onChange={updateField} required><option value="" disabled>Selecione</option><option>Pequeno</option><option>Médio</option><option>Grande</option></select></label>
                  <label className="full">Preferências ou observações<textarea name="notes" value={form.notes} onChange={updateField} placeholder="Exemplo: alergias, brinquedos favoritos, nível de energia..." /></label>
                  <button type="submit">Ver minha box personalizada</button>
                </form>
              </>
            ) : (
              <div className="result-card">
                <Sparkles />
                <h2>Pronto! A box do(a) {form.petName} foi personalizada.</h2>
                <dl>
                  <div><dt>Plano escolhido</dt><dd>{selectedPlan.name}</dd></div>
                  <div><dt>Tipo</dt><dd>{form.petType}</dd></div>
                  <div><dt>Idade</dt><dd>{form.petAge}</dd></div>
                  <div><dt>Porte</dt><dd>{form.petSize}</dd></div>
                </dl>
                <p><strong>Sugestão fictícia:</strong> {boxSuggestion}</p>
                <small>Este é um projeto acadêmico fictício. Nenhuma compra real será realizada.</small>
                <button type="button" onClick={closeModal}>Finalizar demonstração</button>
              </div>
            )}
          </section>
        </div>
      )}
    </main>
  );
}

export default App;
