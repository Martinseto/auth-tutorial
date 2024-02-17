import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { Children } from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className={cn(
          "text-6xl font-semibold text-white drop-shadow-md",
          font.className,
        )}>
           🔐 Next Auth
        </h1>
        <p className="text-white text-lg">
          Titulo de Ejemplo: Bienvenido a NextAuth, aquí podrás ver todas las funcionalidades de Next Auth.
        </p>
        <div>
          <LoginButton asChild >
            <Button variant="secondary" size="lg">
              Iniciar Sesión
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}