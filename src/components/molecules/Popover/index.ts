import { Popover as PopoverPrimitive } from "bits-ui";
import Content from "./Content.svelte";
const Root = PopoverPrimitive.Root;
const Trigger = PopoverPrimitive.Trigger;

export {
  Root,
  Content,
  Trigger,
  //
  Root as Popover,
  Content as PopoverContent,
  Trigger as PopoverTrigger,
};
