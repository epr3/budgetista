import { Dialog as DialogPrimitive } from "bits-ui";

const Root = DialogPrimitive.Root;
const Trigger = DialogPrimitive.Trigger;

import Title from "./Title.svelte";
import Portal from "./Portal.svelte";
import Footer from "./Footer.svelte";
import Header from "./Header.svelte";
import Overlay from "./Overlay.svelte";
import Content from "./Content.svelte";
import Description from "./Description.svelte";

export {
  Root,
  Title,
  Portal,
  Footer,
  Header,
  Trigger,
  Overlay,
  Content,
  Description,
  //
  Root as Dialog,
  Title as DialogTitle,
  Portal as DialogPortal,
  Footer as DialogFooter,
  Header as DialogHeader,
  Trigger as DialogTrigger,
  Overlay as DialogOverlay,
  Content as DialogContent,
  Description as DialogDescription,
};
