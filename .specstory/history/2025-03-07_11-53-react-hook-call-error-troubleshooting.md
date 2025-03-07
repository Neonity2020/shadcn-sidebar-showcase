## SpecStory

## React Hook Call Error Troubleshooting (2025/3/7 11:53:24)

_**User**_

Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.
    at Object.throwInvalidHookError (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1f56dc._.js:2956:15)
    at exports.useContext (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_107ce8._.js:1843:27)
    at useSession (http://localhost:3000/_next/static/chunks/node_modules_5cf4ee._.js:1789:23)
    at [project]/components/app-sidebar.tsx [app-client] (ecmascript) (http://localhost:3000/_next/static/chunks/_44c2eb._.js:2515:191)
    at http://localhost:3000/_next/static/chunks/_d95469._.js:693:27
    at runModuleExecutionHooks (http://localhost:3000/_next/static/chunks/_d95469._.js:738:9)
    at instantiateModule (http://localhost:3000/_next/static/chunks/_d95469._.js:691:9)
    at getOrInstantiateModuleFromParent (http://localhost:3000/_next/static/chunks/_d95469._.js:624:12)
    at commonJsRequire (http://localhost:3000/_next/static/chunks/_d95469._.js:157:20)
    at requireModule (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_107ce8._.js:2676:29)
    at initializeModuleChunk (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_107ce8._.js:3218:25)
    at readChunk (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_107ce8._.js:3123:17)
    at react-stack-bottom-frame (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1f56dc._.js:13468:20)
    at beginWork (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1f56dc._.js:5343:77)
    at runWithFiberInDEV (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1f56dc._.js:631:20)
    at performUnitOfWork (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1f56dc._.js:7955:97)
    at workLoopSync (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1f56dc._.js:7847:40)
    at renderRootSync (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1f56dc._.js:7830:13)
    at performWorkOnRoot (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1f56dc._.js:7565:211)
    at performWorkOnRootViaSchedulerTask (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1f56dc._.js:8394:9)
    at MessagePort.performWorkUntilDeadline (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_107ce8._.js:2353:64)

---

_**Assistant**_

我看到您遇到了一个 React Hook 相关的错误。这个错误表明 `useSession` Hook 被调用在了不正确的位置。根据错误信息，问题出在 `components/app-sidebar.tsx` 文件中。

让我先查看一下这个文件的完整内容，以便更好地理解问题。

---

_****_

Read file: components/app-sidebar.tsx

---

_****_

我发现了问题所在。在 `components/app-sidebar.tsx` 文件中，`useSession` Hook 被调用在了组件外部：

```typescript
const { data: session } = useSession()  // 这行在组件外部调用了 Hook
```

根据 React 的规则，Hooks 只能在以下情况下调用：
1. 在 React 函数组件内部调用
2. 在自定义 Hook 内部调用

我需要修改这个文件，将 `useSession` 的调用移到 `AppSidebar` 组件内部。

---

_****_

```diff
  import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"
  
- const { data: session } = useSession()
  // This is sample data.
  const data = {
-   user: {
-     name: session?.user?.name || "shadcn",
-     email: session?.user?.email || "m@example.com",
-     avatar: session?.user?.image || "/avatars/shadcn.jpg",
-   },
    teams: [
      {
  
  export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
+   const { data: session } = useSession()
+   
+   const userData = {
+     name: session?.user?.name || "shadcn",
+     email: session?.user?.email || "m@example.com",
+     avatar: session?.user?.image || "/avatars/shadcn.jpg",
+   }
+ 
    return (
      <Sidebar collapsible="icon" {...props}>
        </SidebarContent>
        <SidebarFooter>
-         <NavUser user={data.user} />
+         <NavUser user={userData} />
        </SidebarFooter>
        <SidebarRail />
```

---

_****_

很好！我已经修复了问题。以下是我所做的更改：

1. 将 `useSession` Hook 的调用从组件外部移到了 `AppSidebar` 组件内部，这符合 React Hooks 的使用规则。
2. 创建了一个新的 `userData` 对象，它使用 session 数据来设置用户信息。
3. 更新了 `NavUser` 组件的 `user` 属性，使其使用新的 `userData` 对象而不是之前的 `data.user`。
4. 从全局 `data` 对象中移除了 `user` 属性，因为它现在在组件内部定义。

这些更改应该解决了您遇到的 "Invalid hook call" 错误。React Hooks 必须在函数组件内部调用，而不能在组件外部或普通 JavaScript 函数中调用。

现在您可以重新运行应用程序，错误应该已经解决了。如果您还有其他问题或需要进一步的帮助，请随时告诉我。

---



---

