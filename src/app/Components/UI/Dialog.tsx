import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import "./Dialog.css"
/* import { X } from "lucide-react" */

/* import { cn } from "@/lib/utils" */

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = ({
  className,
  children,
  ...props
}: DialogPrimitive.DialogPortalProps) => (
    <DialogPrimitive.Portal className={`${className}`} {...props}>
      <div className="dialog-primitive">
        {children}
      </div>
    </DialogPrimitive.Portal>
  )
DialogPortal.displayName = DialogPrimitive.Portal.displayName

const DialogOverlay = React.forwardRef<
React.ElementRef<typeof DialogPrimitive.Overlay>,
React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={`dialog-overlay ${className}`}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
React.ElementRef<typeof DialogPrimitive.Content>,
React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={`dialog-content ${className}` }
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="dialog-close">
        {/* <X style={{ */}
        {/*   height: "1rem", */}
        {/*   width: "1rem" */}
        {/* }}/> */}
        {/* X */}
        {/* <span className="sr-only">Close</span> */}
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
      className={ `dialog-header ${className}`}
      {...props}
    />
  )
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
      className={ `dialog-footer ${className} `}
      {...props}
    />
  )
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
React.ElementRef<typeof DialogPrimitive.Title>,
React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={ `dialog-title ${className}`}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
React.ElementRef<typeof DialogPrimitive.Description>,
React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={ `dialog-description ${className}` }
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
