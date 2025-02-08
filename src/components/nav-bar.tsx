import type React from "react" // Added import for React

export function NavBar() {
  return (
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-center space-x-6">
        <NavLink href="#Accueil">Accueil</NavLink>
        <NavLink href="#Experiences">Expérience</NavLink>
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-gray-800 hover:text-gray-600 font-medium">
      {children}
    </a>
  )
}

