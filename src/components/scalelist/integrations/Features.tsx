import { Mail, CheckCircle, XCircle } from "lucide-react";

const EmailRow = ({
  email,
  percentage,
  valid,
}: {
  email: string;
  percentage: string;
  valid: boolean;
}) => (
  <div className="flex items-center justify-between rounded-xl bg-white px-5 py-3 shadow-sm">
    <div className="flex items-center gap-2">
      <Mail className="h-4 w-4 text-muted-foreground/60" />
      <span className="text-sm font-medium text-foreground">{email}</span>
    </div>
    <div className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold ${
      valid ? "bg-green-100 text-green-700" : "bg-primary/10 text-primary"
    }`}>
      {percentage}
      {valid ? (
        <CheckCircle className="h-4 w-4 text-green-600" />
      ) : (
        <XCircle className="h-4 w-4 text-primary" />
      )}
    </div>
  </div>
);

const Features = () => {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
          Find up to <span className="text-primary">95%</span> professional email addresses
        </h2>
        <div className="flex justify-center">
          <div className="max-w-xl">
            <div className="rounded-2xl bg-card p-6">
              <div className="space-y-3 rounded-xl bg-gradient-to-br from-orange-50/60 via-white to-pink-50/40 p-4">
                <EmailRow email="calebdrayton@slack.com" percentage="83%" valid={false} />
                <EmailRow email="samcruz@salesforce.com" percentage="99%" valid={true} />
                <EmailRow email="eliasgranger@monday.com" percentage="100%" valid={true} />
                <EmailRow email="danielferrera@apple.io" percentage="87%" valid={false} />
              </div>
            </div>
            <h3 className="mt-6 text-2xl font-bold text-foreground">
              Pay for valid email addresses only.
            </h3>
            <p className="mt-3 text-muted-foreground">
              With our email verification system, never pay for catch-all or emails you already found. We guarantee email validity and deliverability, or it's on us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
