// Public contact address.
export const site = {
  name: 'Mechaiah',
  email: 'hellomechaiah@gmail.com',
  description:
    'Mechaiah designs and builds business websites and custom software.',
  sentence: 'We design and build business websites and custom software.',
};

export function gmailTo(address = site.email) {
  const url = new URL('https://mail.google.com/mail/');
  url.searchParams.set('view', 'cm');
  url.searchParams.set('fs', '1');
  url.searchParams.set('to', address);
  return url.href;
}

export const nav = [
  { href: '/', label: 'Home', cta: false },
  { href: '/services', label: 'Services', cta: false },
  { href: '/projects', label: 'Projects', cta: false },
  { href: '/about', label: 'About', cta: false },
  { href: '/contact', label: 'Contact', cta: true },
];

export const serviceLines = [
  {
    id: 'web',
    index: '01',
    title: 'Web development',
    lede: 'Public sites that explain a business and give people a clear next step.',
    offerings: [
      {
        slug: 'business-websites',
        title: 'Business websites',
        body: 'For companies that need a public home: what you do, who it is for, and a way to begin a conversation. A finished engagement includes the page structure, a responsive layout, and a handoff you can keep updated.',
      },
      {
        slug: 'ecommerce',
        title: 'E-commerce platforms',
        body: 'For businesses that sell from a catalogue and need the shop to stay clear for the buyer and for the person running it. A finished engagement includes the product structure, the path to an order, and the basics of looking after the shop after launch.',
      },
      {
        slug: 'landing-pages',
        title: 'Landing pages',
        body: 'For a single offer that has to be read quickly and acted on. A finished engagement includes the story of the page, the layout, and one clear way to enquire or buy.',
      },
      {
        slug: 'redesigns',
        title: 'Website redesigns',
        body: 'For a site that already exists and no longer explains the business clearly, or no longer holds up on the screens people use. A finished engagement includes a review of what to keep, a new layout, and the move onto it.',
      },
      {
        slug: 'responsive',
        title: 'Responsive web experiences',
        body: 'For pages and products that have to work in the hand and on a wide display. A finished engagement includes layout, type, and interaction that hold together across screen sizes.',
      },
    ],
  },
  {
    id: 'software',
    index: '02',
    title: 'Custom software development',
    lede: 'Systems for work that has outgrown a spreadsheet, a shared inbox, or a tool bent out of shape.',
    offerings: [
      {
        slug: 'business-systems',
        title: 'Business management systems',
        body: 'For operations that have outgrown a spreadsheet: records, status, and more than one person using them. A finished engagement includes the records, the screens people work in, and a handoff so you can run it.',
      },
      {
        slug: 'inventory',
        title: 'Inventory management',
        body: 'For teams that need a clear account of what they have, where it is, and what changed. A finished engagement includes item records, stock movements, and a view for the people responsible.',
      },
      {
        slug: 'dashboards',
        title: 'Admin dashboards',
        body: 'For people who need one place to see an operation and act on it. A finished engagement includes the views that matter, the actions behind them, and access for the right people.',
      },
      {
        slug: 'workflows',
        title: 'Workflow automation',
        body: 'For repeated steps that still move by hand: intake, status, and the handoff between them. A finished engagement includes the flow, what starts it, and a record of what ran.',
      },
      {
        slug: 'apps-and-apis',
        title: 'Custom web applications and APIs',
        body: 'For a specific operation that needs its own application and a way for other tools to connect. A finished engagement includes the application, an API, and notes on how the pieces fit.',
      },
    ],
  },
] as const;

export const processSteps = [
  {
    n: '01',
    title: 'Scope',
    text: 'We\'ll discuss your goals, explore your ideas and build a plan that works for you.',
  },
  {
    n: '02',
    title: 'Build',
    text: 'We\'ll build your solution together, keeping you involved through feedback and updates along the way.',
  },
  {
    n: '03',
    title: 'Handoff',
    text: 'We\'ll deliver your finished project, along with the access and guidance you need to get started.',
  },
] as const;

export const approach = [
  {
    title: 'Direct contact',
    text: 'You talk with the person who designs and builds the work.',
  },
  {
    title: 'Scoped builds',
    text: 'Each engagement starts from a written scope: what is included, what is left out, and what done means.',
  },
  {
    title: 'Yours to run',
    text: 'When the work is finished, the website or the software is yours to run, with the access and the notes that go with it.',
  },
] as const;

export const values = [
  {
    title: 'Clarity',
    text: 'A page, a screen, and a scope should be understandable on their own.',
  },
  {
    title: 'Craft',
    text: 'Type, structure, and behavior are decided with the work, from the start.',
  },
  {
    title: 'Honest scope',
    text: 'What is included is written down. What is left out is written down too.',
  },
] as const;

export const quoteSteps = [
  'The request is read.',
  'You get questions if the scope needs them, or a quotation if it is already clear.',
  'If you want to proceed, the scope is written down and the build starts.',
] as const;

export const streams = [
  'Web development',
  'Custom software',
  'Not sure yet',
] as const;

export const timelines = [
  'As soon as you can start',
  'Within a month',
  'One to three months',
  'Flexible',
] as const;

export const budgets = [
  'Prefer to discuss',
  'Small — a page or a tight tool',
  'Medium — a website or a single system',
  'Large — a broader product',
] as const;
