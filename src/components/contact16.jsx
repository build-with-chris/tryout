import { CornerDownRight, Mail, Smartphone } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Contact16 = ({
  className
}) => {
  return (
    <section 
      className={cn("py-24 text-foreground", className)}
      style={{
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(204, 7, 30, 0.03) 50%, rgba(255, 255, 255, 0) 100%)',
      }}
    >
      <div className="container">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
          Kontakt aufnehmen
        </h1>
        <div className="mt-12 md:mt-16 lg:mt-20 flex flex-col justify-between gap-10 lg:flex-row">
          <div className="w-full max-w-md">
            <p className="tracking-tight text-gray-700 text-base md:text-lg leading-relaxed">
              Hast du Fragen zu deiner Karriere bei REWE? Wir helfen dir gerne weiter. 
              Nimm Kontakt mit uns auf und wir finden gemeinsam den passenden Weg für dich.
            </p>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 sm:justify-between">
              <a
                className="flex items-center gap-2 text-gray-700 hover:text-[#CC071E] transition-colors font-medium"
                href="tel:+4922134910">
                <Smartphone className="h-5 w-5 text-[#CC071E]" /> 
                <span>+49 221 34 91-0</span>
              </a>
              <a
                className="flex items-center gap-2 text-gray-700 hover:text-[#CC071E] transition-colors font-medium"
                href="mailto:karriere@rewe.de">
                <Mail className="h-5 w-5 text-[#CC071E]" /> 
                <span>karriere@rewe.de</span>
              </a>
            </div>
          </div>
          <form className="col-span-4 flex w-full flex-col gap-4 lg:pl-8">
            <Input
              type="text"
              placeholder="Name*"
              className="h-14 rounded-none border-0 border-b-2 border-gray-300 !bg-transparent placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-[#CC071E] text-gray-900" 
              aria-label="Name"
              required
            />
            <Input
              type="email"
              placeholder="E-Mail*"
              className="h-14 rounded-none border-0 border-b-2 border-gray-300 !bg-transparent placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-[#CC071E] text-gray-900"
              aria-label="E-Mail"
              required
            />
            <Input
              type="text"
              placeholder="Nachricht (Erzähl uns von deinem Interesse)"
              className="h-14 rounded-none border-0 border-b-2 border-gray-300 !bg-transparent placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-[#CC071E] text-gray-900"
              aria-label="Nachricht"
            />
            <Button
              type="submit"
              className="mt-6 flex h-14 w-fit items-center justify-start gap-2 text-base bg-[#CC071E] hover:bg-[#9E0012] text-white px-8 rounded-md transition-colors"
              style={{ backgroundColor: '#CC071E' }}
            >
              <CornerDownRight className="size-5" />
              Nachricht senden
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export { Contact16 };
