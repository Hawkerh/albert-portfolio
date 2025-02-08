
import * as React from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



export function MainNav() {
  return (
    <NavigationMenu className="py-2">
      <NavigationMenuList className=" gap-1">
      <NavigationMenuItem>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "h-8 px-3 font-semibold cursor-pointer")}>Accueil</NavigationMenuLink>
        </NavigationMenuItem>        <NavigationMenuItem>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "h-8 px-3 font-semibold cursor-pointer")}>Experiences</NavigationMenuLink>
        </NavigationMenuItem>
        
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

