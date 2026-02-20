import { Sparkles, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg gradient-hero flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl text-foreground">
            Faxina Perfeita
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Como Funciona
          </a>
          <a href="#funcionalidades" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Funcionalidades
          </a>
          <a href="#depoimentos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Depoimentos
          </a>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="hidden sm:inline text-sm text-muted-foreground truncate max-w-[150px]">
                {user.user_metadata?.full_name || user.email}
              </span>
              <button
                onClick={signOut}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2 flex items-center gap-1"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Sair</span>
              </button>
            </>
          ) : (
            <>
              <Link to="/auth" className="hidden sm:inline-flex text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2">
                Entrar
              </Link>
              <Link to="/auth" className="gradient-hero text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
                Cadastre-se
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
