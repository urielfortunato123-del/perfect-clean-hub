import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface PageShellProps {
  title: string;
  children: ReactNode;
}

const PageShell = ({ title, children }: PageShellProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao início
        </Link>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
          {title}
        </h1>
        <div className="prose prose-lg max-w-3xl text-foreground/90 space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageShell;
