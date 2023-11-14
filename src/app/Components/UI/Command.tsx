import * as React from "react"
/* import { DialogProps } from "@radix-ui/react-dialog" */
import { Command as CommandPrimitive } from "cmdk"
/* import { Search } from "lucide-react" */
import './Command.css';

/* import { Dialog, DialogContent } from "@/components/ui/dialog" */

const Command = React.forwardRef<
React.ElementRef<typeof CommandPrimitive>,
React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={`command-container ${className}`}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

/* interface CommandDialogProps extends DialogProps {} */

/* const CommandDialog = ({ children, ...props }: CommandDialogProps) => { */
/*   return ( */
/*     <Dialog {...props}> */
/*       <DialogContent className="overflow-hidden p-0 shadow-2xl"> */
/*         <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"> */
/*           {children} */
/*         </Command> */
/*       </DialogContent> */
/*     </Dialog> */
/*   ) */
/* } */

const CommandInput = React.forwardRef<
React.ElementRef<typeof CommandPrimitive.Input>,
React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="command-input-container" cmdk-input-wrapper="">
    {/* <Search */}
    {/*   style={{ */}
    {/*     width: "1rem", */}
    {/*     height: "1rem", */}
    {/*     marginRight: "0.5rem", */}
    {/*     flexShrink: "0", */}
    {/*     opacity: "0.5" */}
    {/*   }} */}
    {/* /> */}
    <CommandPrimitive.Input
      ref={ref}
      className={`command-input ${className}`}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
React.ElementRef<typeof CommandPrimitive.List>,
React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={ 'a' }
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

/* TODO: Style this */
const CommandEmpty = React.forwardRef<
React.ElementRef<typeof CommandPrimitive.Empty>,
React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
React.ElementRef<typeof CommandPrimitive.Group>,
React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={`command-group ${className}`}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
React.ElementRef<typeof CommandPrimitive.Separator>,
React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={`command-separator ${className}`}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
React.ElementRef<typeof CommandPrimitive.Item>,
React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={`command-item ${className}`}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={ 'a' }
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  /* CommandDialog, */
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}

