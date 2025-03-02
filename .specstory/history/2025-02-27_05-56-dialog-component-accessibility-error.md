## SpecStory

## Dialog Component Accessibility Error (2025/2/27 05:56:02)

_**User**_

Error: `DialogContent` requires a `DialogTitle` for the component to be accessible for screen reader users.

If you want to hide the `DialogTitle`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/dialog
    at createUnhandledError (http://localhost:3000/_next/static/chunks/7d341_next_dist_client_ea142b._.js:689:49)
    at handleClientError (http://localhost:3000/_next/static/chunks/7d341_next_dist_client_ea142b._.js:856:56)
    at console.error (http://localhost:3000/_next/static/chunks/7d341_next_dist_client_ea142b._.js:991:56)
    at TitleWarning.useEffect (http://localhost:3000/_next/static/chunks/node_modules__pnpm_968a6e._.js:8287:40)
    at react-stack-bottom-frame (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:13454:22)
    at runWithFiberInDEV (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:631:20)
    at commitHookEffectListMount (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:5825:628)
    at commitHookPassiveMountEffects (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:5860:60)
    at commitPassiveMountOnFiber (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6765:33)
    at recursivelyTraversePassiveMountEffects (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6756:106)
    at commitPassiveMountOnFiber (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6798:17)
    at recursivelyTraversePassiveMountEffects (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6756:106)
    at commitPassiveMountOnFiber (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6764:17)
    at recursivelyTraversePassiveMountEffects (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6756:106)
    at commitPassiveMountOnFiber (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6764:17)
    at recursivelyTraversePassiveMountEffects (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6756:106)
    at commitPassiveMountOnFiber (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6764:17)
    at recursivelyTraversePassiveMountEffects (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6756:106)
    at commitPassiveMountOnFiber (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6764:17)
    at recursivelyTraversePassiveMountEffects (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6756:106)
    at commitPassiveMountOnFiber (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6764:17)
    at recursivelyTraversePassiveMountEffects (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6756:106)
    at commitPassiveMountOnFiber (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6764:17)
    at recursivelyTraversePassiveMountEffects (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6756:106)
    at commitPassiveMountOnFiber (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6764:17)
    at recursivelyTraversePassiveMountEffects (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6756:106)
    at commitPassiveMountOnFiber (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6798:17)
    at recursivelyTraversePassiveMountEffects (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6756:106)
    at commitPassiveMountOnFiber (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6764:17)
    at recursivelyTraversePassiveMountEffects (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6756:106)
    at commitPassiveMountOnFiber (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6764:17)
    at recursivelyTraversePassiveMountEffects (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6756:106)
    at commitPassiveMountOnFiber (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6798:17)
    at recursivelyTraversePassiveMountEffects (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6756:106)
    at commitPassiveMountOnFiber (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6764:17)
    at recursivelyTraversePassiveMountEffects (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6756:106)
    at commitPassiveMountOnFiber (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6764:17)
    at recursivelyTraversePassiveMountEffects (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6756:106)
    at commitPassiveMountOnFiber (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6764:17)
    at recursivelyTraversePassiveMountEffects (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6756:106)
    at commitPassiveMountOnFiber (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6798:17)
    at recursivelyTraversePassiveMountEffects (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6756:106)
    at commitPassiveMountOnFiber (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6764:17)
    at recursivelyTraversePassiveMountEffects (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6756:106)
    at commitPassiveMountOnFiber (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6764:17)
    at recursivelyTraversePassiveMountEffects (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6756:106)
    at commitPassiveMountOnFiber (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6764:17)
    at recursivelyTraversePassiveMountEffects (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6756:106)
    at commitPassiveMountOnFiber (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6764:17)
    at recursivelyTraversePassiveMountEffects (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:6756:106)

---

_**Assistant**_

根据错误信息，DialogContent 组件需要一个 DialogTitle 组件来确保屏幕阅读器的可访问性。我们需要修改 DialogContent 组件来检查是否包含 DialogTitle，如果没有则显示警告。以下是修改建议：

```typescript:components/ui/dialog.tsx
// ... existing code ...

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const hasTitle = React.Children.toArray(children).some(
    child => React.isValidElement(child) && child.type === DialogTitle
  );

  if (!hasTitle) {
    console.warn(
      "DialogContent 必须包含 DialogTitle 组件以确保屏幕阅读器的可访问性。" +
      "如果需要隐藏标题，可以使用 VisuallyHidden 组件进行包装。"
    );
  }

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
})

// ... existing code ...
```

这个修改添加了一个检查，用于验证 DialogContent 的子组件中是否包含 DialogTitle。如果没有找到 DialogTitle，将在控制台显示警告信息。

使用 Dialog 组件时，请确保始终包含一个 DialogTitle：

```tsx
<Dialog>
  <DialogContent>
    <DialogTitle>对话框标题</DialogTitle>
    {/* 其他内容 */}
  </DialogContent>
</Dialog>
```

如果需要隐藏标题但仍然保持可访问性，可以使用 VisuallyHidden 组件：

```tsx
<Dialog>
  <DialogContent>
    <VisuallyHidden>
      <DialogTitle>隐藏的标题</DialogTitle>
    </VisuallyHidden>
    {/* 其他内容 */}
  </DialogContent>
</Dialog>
```

---



---

