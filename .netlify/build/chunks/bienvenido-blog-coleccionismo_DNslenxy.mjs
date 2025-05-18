import { n as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DP9oE6b1.mjs';
import { a as $$Paragraph, $ as $$H2 } from './Paragraph_BDAw6C_V.mjs';
import { $ as $$List } from './List_IS_G1Lwy.mjs';
import { $ as $$CTA } from './CTA_8rwlxj7P.mjs';
import 'clsx';

const frontmatter = {
  "title": "Bienvenido al Baúl del Friki: coleccionismo e inversión alternativa",
  "date": "2025-04-10",
  "category": "general",
  "tags": "coleccionismo, inversión alternativa, cartas coleccionables, whisky de colección, arte emergente, activos alternativos, el baúl del friki",
  "excerpt": "Coleccionismo, inversión alternativa y cultura pop en un solo blog. Cartas, whisky, arte y consejos reales para empezar con estrategia.",
  "featuredImage": {
    "src": "images/posts/BIENVENIDO.png",
    "width": 1920,
    "height": 1088,
    "format": "jpg"
  },
  "featured": true,
  "slug": "bienvenido-blog-coleccionismo"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "qué-encontrarás-aquí",
    "text": "¿Qué encontrarás aquí?"
  }, {
    "depth": 2,
    "slug": "por-qué-este-proyecto",
    "text": "¿Por qué este proyecto?"
  }, {
    "depth": 2,
    "slug": "qué-puedes-esperar",
    "text": "¿Qué puedes esperar?"
  }];
}
const components = {
  h2: $$H2,
  p: $$Paragraph,
  ul: $$List
};
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Hola, soy Richard Armuelles 👋🏼 y te doy la bienvenida a este espacio donde el coleccionismo y la inversión inteligente se cruzan para ofrecer algo más que simple nostalgia: un refugio con propósito."
    }), "\n", createVNode(_components.h2, {
      id: "qué-encontrarás-aquí",
      children: "¿Qué encontrarás aquí?"
    }), "\n", createVNode(_components.p, {
      children: ["En ", createVNode(_components.strong, {
        children: "El Baúl del Friki"
      }), " te compartiré ideas, noticias con análisis y herramientas de utilidad en el fascinante mundo de las inversiones alternativas:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Cartas coleccionables"
        }), ": Pokémon, One Piece, Magic y otros TCG con potencial real de valorización."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Whiskies de colección"
        }), ": ediciones limitadas, rendimiento en subastas y consejos para quienes empiezan."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Arte y objetos únicos"
        }), ": piezas físicas y digitales de artistas emergentes con mirada de futuro."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Guías de preservación y cuidado"
        }), ": desde condiciones ambientales hasta almacenamiento seguro."]
      }), "\n", createVNode(_components.li, {
        children: "Seguimiento de precios y oportunidades en mercados poco explorados."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "por-qué-este-proyecto",
      children: "¿Por qué este proyecto?"
    }), "\n", createVNode(_components.p, {
      children: "Porque coleccionar es más que acumular cosas: es entender historias, valorar contextos y, sí, también detectar oportunidades.\nCreo firmemente en el poder de los activos alternativos para diversificar, aprender e incluso protegerse de la inflación mientras uno se divierte.\nAdemás, quiero compartir consejos que me hubiera encantado tener al comenzar, porque esto no es solo especulación: es disfrutar el viaje."
    }), "\n", createVNode(_components.h2, {
      id: "qué-puedes-esperar",
      children: "¿Qué puedes esperar?"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Contenido ", createVNode(_components.strong, {
          children: "curado, analítico y sin copy-paste"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Inspiración real para coleccionistas e inversionistas por igual."
      }), "\n", createVNode(_components.li, {
        children: "Herramientas, seguimiento de precios y recomendaciones basadas en datos y experiencia propia."
      }), "\n", createVNode(_components.li, {
        children: "Una comunidad enfocada en el largo plazo y el valor cultural de lo que coleccionamos."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Gracias por leer. Puedes escribirme al ", createVNode(_components.a, {
        href: "/contacto",
        children: "formulario de contacto"
      }), ", te prometo que responderé lo más pronto posible y juntos encaminaremos tu colección."]
    }), "\n", createVNode(_components.p, {
      children: "¡Vamos a construir juntos algo que tenga sentido, historia y valor!."
    }), "\n", createVNode($$CTA, {
      category: frontmatter.category
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/posts/bienvenido-blog-coleccionismo.mdx";
const file = "/Users/richardarmuelles/Projects/el-baul-del-friki/src/content/posts/bienvenido-blog-coleccionismo.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...components, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/richardarmuelles/Projects/el-baul-del-friki/src/content/posts/bienvenido-blog-coleccionismo.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, components, Content as default, file, frontmatter, getHeadings, url };
