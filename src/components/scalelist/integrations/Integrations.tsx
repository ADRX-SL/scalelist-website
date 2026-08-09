import makeLogo from "@/assets/integrations/integration-make-icon.webp";
import zapierLogo from "@/assets/integrations/integration-zapier-icon.svg";
import n8nLogo from "@/assets/integrations/integration-n8n-icon.webp";
import clayLogo from "@/assets/integrations/integration-clay.png";
import hubspotLogo from "@/assets/integrations/integration-hubspot-icon.webp";
import salesforceLogo from "@/assets/integrations/integration-salesforce-icon.webp";
import pipedriveLogo from "@/assets/integrations/integration-pipedrive-icon.webp";
import folkLogo from "@/assets/integrations/integration-folk-icon.webp";
import attioLogo from "@/assets/integrations/integration-attio-icon.png";
import breakcoldLogo from "@/assets/integrations/integration-breakcold-icon.webp";
import googleSheetsLogo from "@/assets/integrations/integration-google-sheets-icon.webp";
import lemlistLogo from "@/assets/integrations/integration-lemlist.png";
import instantlyLogo from "@/assets/integrations/integration-instantly.png";
import smartleadLogo from "@/assets/integrations/integration-smartlead.png";
import woodpeckerLogo from "@/assets/integrations/integration-woodpecker.png";
import saleshandyLogo from "@/assets/integrations/integration-saleshandy.png";

interface IntegrationCard {
  icon: React.ReactNode;
  name: string;
  badge: string;
  badgeVariant: "direct" | "coming" | "twoway";
  description: string;
}

const BadgeLabel = ({ type, label }: { type: string; label: string }) => {
  const styles =
    type === "direct"
      ? "bg-muted text-foreground border-border"
      : type === "twoway"
      ? "bg-muted text-foreground border-border"
      : "bg-primary text-primary-foreground border-primary";
  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium ${styles}`}>
      {label}
    </span>
  );
};

const BrandIcon = ({
  src,
  alt,
  imageClassName,
  wrapperClassName,
}: {
  src: string;
  alt: string;
  imageClassName?: string;
  wrapperClassName?: string;
}) => (
  <div className="flex h-12 items-center">
    <div className={wrapperClassName ?? "flex h-12 w-12 items-center justify-center"}>
      <img
        src={src}
        alt={`${alt} logo`}
        className={imageClassName ?? "h-10 w-10 object-contain"}
        loading="lazy"
      />
    </div>
  </div>
);

const GoogleSheetsIcon = () => <BrandIcon src={googleSheetsLogo} alt="Google Sheets" />;

const integrationSections = [
  {
    title: "Automation & No-code",
    cards: [
      {
        icon: <BrandIcon src={makeLogo} alt="Make" />, 
        name: "Make",
        badge: "Direct sync",
        badgeVariant: "direct" as const,
        description: "Find the right leads based on multiple filters. Send multichannel campaigns with Scalelist.",
      },
      {
        icon: <BrandIcon src={zapierLogo} alt="Zapier" />,
        name: "Zapier",
        badge: "Direct sync",
        badgeVariant: "direct" as const,
        description: "Use Zapier to connect Scalelist to 5,000+ tools you use in your business to increase your productivity.",
      },
      {
        icon: <BrandIcon src={n8nLogo} alt="n8n" />,
        name: "n8n",
        badge: "Coming soon",
        badgeVariant: "coming" as const,
        description: "Use n8n to connect Scalelist and set up outreach automation. It's the most popular workflow automation platform.",
      },
      {
        icon: <BrandIcon src={clayLogo} alt="Clay" imageClassName="h-16 w-16 object-contain" wrapperClassName="flex h-16 w-16 items-center justify-center" />,
        name: "Clay",
        badge: "via API",
        badgeVariant: "direct" as const,
        description: "Automate data enrichment in Clay and build highly targeted, dynamic lead lists.",
      },
    ],
  },
  {
    title: "CRM",
    cards: [
      {
        icon: <BrandIcon src={hubspotLogo} alt="HubSpot" />,
        name: "HubSpot",
        badge: "2-way sync",
        badgeVariant: "twoway" as const,
        description: "Sync your outbound activities, like new leads, email interactions, etc., to HubSpot. Easily transfer leads between HubSpot and Scalelist.",
      },
      {
        icon: <BrandIcon src={salesforceLogo} alt="Salesforce" />,
        name: "Salesforce",
        badge: "Coming soon",
        badgeVariant: "coming" as const,
        description: "Forward outbound activities (new leads, email opens, replies, etc.) to Salesforce. Easily transfer leads between Salesforce and Scalelist.",
      },
      {
        icon: <BrandIcon src={pipedriveLogo} alt="Pipedrive" />,
        name: "Pipedrive",
        badge: "Coming soon",
        badgeVariant: "coming" as const,
        description: "Forward outbound activities (new leads, email opens, replies, etc.) to Pipedrive. Easily transfer leads between Pipedrive and Scalelist.",
      },
      {
        icon: <BrandIcon src={folkLogo} alt="folk" />,
        name: "Folk",
        badge: "Coming soon",
        badgeVariant: "coming" as const,
        description: "Centralize your contacts and sync Scalelist enrichment data directly to your folk CRM.",
      },
      {
        icon: <BrandIcon src={attioLogo} alt="Attio" />,
        name: "Attio",
        badge: "Coming soon",
        badgeVariant: "coming" as const,
        description: "Build powerful workflows by syncing Scalelist prospects into your Attio workspace.",
      },
      {
        icon: <BrandIcon src={breakcoldLogo} alt="Breakcold" />,
        name: "Breakcold",
        badge: "Coming soon",
        badgeVariant: "coming" as const,
        description: "Centralize social and email interactions, then sync key insights into Scalelist.",
      },
    ],
  },
  {
    title: "Email Sequencer",
    cards: [
      {
        icon: <BrandIcon src={lemlistLogo} alt="lemlist" />,
        name: "lemlist",
        badge: "Direct sync",
        badgeVariant: "direct" as const,
        description: "Send enriched leads from Scalelist to lemlist and launch personalized multichannel outbound campaigns.",
      },
      {
        icon: <BrandIcon src={instantlyLogo} alt="Instantly" />,
        name: "Instantly",
        badge: "Direct sync",
        badgeVariant: "direct" as const,
        description: "Push Scalelist leads into Instantly and start email campaigns with verified contact data.",
      },
      {
        icon: <BrandIcon src={smartleadLogo} alt="Smartlead" />,
        name: "Smartlead",
        badge: "Direct sync",
        badgeVariant: "direct" as const,
        description: "Connect Scalelist with Smartlead to send enriched leads into your outbound campaigns.",
      },
      {
        icon: <BrandIcon src={woodpeckerLogo} alt="Woodpecker" />,
        name: "Woodpecker",
        badge: "Direct sync",
        badgeVariant: "direct" as const,
        description: "Sync Scalelist leads with Woodpecker and run cold email campaigns using fresh contact data.",
      },
      {
        icon: <BrandIcon src={saleshandyLogo} alt="Saleshandy" />,
        name: "Saleshandy",
        badge: "Direct sync",
        badgeVariant: "direct" as const,
        description: "Send Scalelist leads to Saleshandy and launch outbound sequences with verified emails.",
      },
    ],
  },
  {
    title: "Google Sheet Automation",
    cards: [
      {
        icon: <GoogleSheetsIcon />,
        name: "Google Sheets",
        badge: "Direct sync",
        badgeVariant: "direct" as const,
        description: "Send leads to your Scalelist campaigns from Google Sheets and all the Scalelist activities back to Google Sheets.",
      },
    ],
  },
];

const IntegrationCard = ({ card }: { card: IntegrationCard }) => (
  <div className="rounded-xl border border-border bg-white p-6 flex flex-col gap-3">
    <div>{card.icon}</div>
    <hr className="border-border" />
    <div className="flex items-center gap-2">
      <span className="text-base font-semibold text-foreground">{card.name}</span>
      <BadgeLabel type={card.badgeVariant} label={card.badge} />
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{card.description}</p>
    <a href="https://app.scalelist.com/auth/login?redirectUrl=%2Fapp%2Fdashboard" className="inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:underline mt-2">
      Connect now <span aria-hidden="true">›</span>
    </a>
  </div>
);

const Integrations = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        {integrationSections.map((section) => (
          <div key={section.title} className="mb-16 last:mb-0">
            <h2 className="mb-8 text-2xl font-bold text-foreground">{section.title}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {section.cards.map((card) => (
                <IntegrationCard key={card.name} card={card} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Integrations;
