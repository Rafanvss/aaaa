import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle2,
  BookOpen,
  TrendingUp,
  Award,
  Heart,
  Sparkles,
  Activity,
  Apple,
  Shirt,
  Scale,
  Shield,
  Star,
  X,
  ArrowRight,
} from "lucide-react";
import heroImage from "@assets/generated_images/happy_dog_with_natural_food_bowl_cc08fd45.png";

export default function Home() {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer-section');
    offerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-success/5 to-background py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground"
                data-testid="heading-hero"
              >
                Mesmo escolhendo a ração certa, ele continua <span className="text-primary">sem energia</span>, <span className="text-primary">ganhando peso</span>, com <span className="text-primary">problemas digestivos</span> ou <span className="text-primary">problemas de pele</span>? <span className="text-success">Tem jeito, e é mais simples do que você imagina!</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Aprenda <span className="text-success font-semibold">passo a passo</span> como montar o <span className="text-success font-semibold">cardápio ideal</span>, evitar erros e garantir <span className="text-success font-semibold">mais anos de vida</span> ao seu melhor amigo.
              </p>
              <Button
                size="lg"
                onClick={scrollToOffer}
                className="text-lg px-8 py-6 bg-gradient-to-r from-success to-primary shadow-lg transform hover:scale-105 active:scale-95 transition-transform duration-200"
                data-testid="button-hero-cta"
              >
                Quero o Guia Agora
              </Button>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                <img 
                  src={heroImage} 
                  alt="Cachorro feliz ao lado de uma tigela de comida natural e colorida"
                  className="w-full h-full object-cover"
                  data-testid="image-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-primary/10 via-success/10 to-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <div className="text-center mb-12 space-y-4">
            <Badge className="text-lg px-6 py-2 bg-gradient-to-r from-success to-primary text-white shadow-lg" data-testid="badge-content">
              CONTEÚDO COMPLETO
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent" data-testid="heading-what-learn">
              O Que Você Vai Aprender
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tudo que você precisa para transformar a alimentação do seu cão
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { title: "Introdução à Alimentação Natural", icon: BookOpen },
              { title: "Alimentos Permitidos e Proibidos", icon: Shield },
              { title: "Receitas Caseiras e Saudáveis", icon: Apple },
              { title: "Como Montar o Cardápio do Seu Pet", icon: Heart },
              { title: "Hidratação e Cuidados Extras", icon: Activity },
              { title: "Suplementos Naturais e Vitaminas", icon: Sparkles },
            ].map((item, index) => (
              <Card key={index} className="hover-elevate transition-all border-2" data-testid={`item-learn-${index}`}>
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-success to-primary rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bonus Section */}
          <Card className="border-4 border-success/50 bg-gradient-to-br from-success/10 via-primary/10 to-background shadow-2xl" data-testid="card-bonus">
            <CardContent className="p-8 text-center space-y-4">
              <div className="flex justify-center">
                <Badge className="text-xl px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg animate-pulse" data-testid="badge-bonus">
                  🎁 BÔNUS EXCLUSIVOS
                </Badge>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                +3 Materiais Extras de Presente!
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ganhe acesso imediato a conteúdos complementares que vão potencializar os resultados do seu cão
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-testid="heading-benefits">
            A Transformação do Seu Cão
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Veja como a alimentação natural pode mudar completamente a vida do seu melhor amigo
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* ANTES */}
            <Card className="border-2" data-testid="card-before">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-2">
                  <Badge variant="destructive" className="text-base px-4 py-2" data-testid="badge-before">
                    ANTES
                  </Badge>
                  <h3 className="text-2xl font-bold">Como Está Agora</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    "Digestão lenta e desconforto",
                    "Baixa energia e disposição",
                    "Alergias e coceiras frequentes",
                    "Sobrepeso ou obesidade",
                    "Pelagem opaca e sem brilho",
                    "Ração industrializada e processada",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3" data-testid={`item-before-${index}`}>
                      <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* DEPOIS */}
            <Card className="border-2 border-success/50 bg-gradient-to-br from-success/5 to-background" data-testid="card-after">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-2">
                  <Badge className="text-base px-4 py-2 bg-gradient-to-r from-success to-primary text-white" data-testid="badge-after">
                    DEPOIS
                  </Badge>
                  <h3 className="text-2xl font-bold">Com o Guia</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    "Digestão perfeita e saudável",
                    "Muita energia e vitalidade",
                    "Pele saudável, sem alergias",
                    "Peso ideal e corpo saudável",
                    "Pelagem brilhante e sedosa",
                    "Alimentação 100% natural",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3" data-testid={`item-after-${index}`}>
                      <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Arrow indicator for mobile */}
          <div className="flex justify-center mt-8 md:hidden">
            <ArrowRight className="w-8 h-8 text-success" data-testid="icon-arrow-transformation" />
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section 
        id="offer-section"
        className="py-20 md:py-24 bg-gradient-to-br from-primary/10 via-success/5 to-background"
      >
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Card className="shadow-xl border-2" data-testid="card-offer">
            <CardContent className="p-8 md:p-12 space-y-8">
              <div className="text-center space-y-4">
                <Badge className="text-lg px-4 py-2 bg-gradient-to-r from-success to-primary text-white" data-testid="badge-special-offer">
                  Oferta Especial — Somente Hoje
                </Badge>
                <div className="space-y-2">
                  <div className="text-2xl text-muted-foreground line-through" data-testid="text-price-old">
                    R$ 97,00
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-foreground" data-testid="text-price-new">
                    R$ 14,90
                  </div>
                </div>
                <p className="text-lg text-muted-foreground">
                  Acesso imediato ao guia completo e conteúdo passo a passo.
                </p>
              </div>

              <Button
                size="lg"
                className="w-full text-xl py-7 bg-gradient-to-r from-success to-primary shadow-lg transform hover:scale-105 active:scale-95 transition-transform duration-200"
                data-testid="button-offer-cta"
              >
                Quero Garantir o Meu Agora
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="heading-testimonials">
            O que dizem os tutores
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                text: "Meu cachorro finalmente come sem enjoar da comida!",
                initials: "MS"
              },
              {
                name: "João Santos",
                text: "Em duas semanas já notei melhora na energia e no pelo!",
                initials: "JS"
              },
              {
                name: "Ana Costa",
                text: "Guia fácil, direto e vale muito mais que o preço.",
                initials: "AC"
              },
            ].map((testimonial, index) => (
              <Card key={index} className="hover-elevate transition-all" data-testid={`card-testimonial-${index}`}>
                <CardContent className="pt-6 pb-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-success to-primary flex items-center justify-center text-white font-semibold" data-testid={`avatar-testimonial-${index}`}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold" data-testid={`text-testimonial-name-${index}`}>
                        {testimonial.name}
                      </div>
                      <div className="flex gap-1" data-testid={`stars-testimonial-${index}`}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic" data-testid={`text-testimonial-${index}`}>"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 md:py-20 bg-success/10">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <Shield className="w-16 h-16 text-success flex-shrink-0" data-testid="icon-guarantee-shield" />
            <div className="space-y-2">
              <h3 className="text-2xl font-bold" data-testid="heading-guarantee">Compra 100% Segura</h3>
              <p className="text-lg text-muted-foreground" data-testid="text-guarantee">
                Compra protegida | Acesso imediato | Garantia de 7 dias
              </p>
            </div>
            <CheckCircle2 className="w-16 h-16 text-success flex-shrink-0" data-testid="icon-guarantee-check" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="heading-faq">
            Perguntas Frequentes
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6" data-testid="accordion-faq-1">
              <AccordionTrigger className="text-left" data-testid="button-faq-1">
                Como recebo o guia?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground" data-testid="text-faq-answer-1">
                Assim que o pagamento for confirmado, você receberá um e-mail com o link para download do guia em PDF. O acesso é imediato!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-lg px-6" data-testid="accordion-faq-2">
              <AccordionTrigger className="text-left" data-testid="button-faq-2">
                Serve para todas as raças?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground" data-testid="text-faq-answer-2">
                Sim! O guia foi desenvolvido para atender cães de todas as raças e portes, com orientações que podem ser adaptadas às necessidades específicas do seu pet.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-lg px-6" data-testid="accordion-faq-3">
              <AccordionTrigger className="text-left" data-testid="button-faq-3">
                Tem receitas caseiras?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground" data-testid="text-faq-answer-3">
                Sim! O guia inclui diversas receitas caseiras, saudáveis e fáceis de preparar, com ingredientes naturais e nutritivos para o seu pet.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border rounded-lg px-6" data-testid="accordion-faq-4">
              <AccordionTrigger className="text-left" data-testid="button-faq-4">
                Posso acessar pelo celular?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground" data-testid="text-faq-answer-4">
                Claro! O guia está em formato PDF e pode ser acessado de qualquer dispositivo: celular, tablet ou computador.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted/50 border-t">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © 2025 – Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#termos" className="text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded" data-testid="link-terms">
                Termos de Uso
              </a>
              <a href="#privacidade" className="text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded" data-testid="link-privacy">
                Política de Privacidade
              </a>
              <a href="#suporte" className="text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded" data-testid="link-support">
                Suporte
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
