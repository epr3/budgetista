import { Select as SelectPrimitive } from "bits-ui";

import Root from "./Select.svelte";
import Label from "./Label.svelte";
import Item from "./Item.svelte";
import Content from "./Content.svelte";
import Trigger from "./Trigger.svelte";
import Separator from "./Separator.svelte";

const Group = SelectPrimitive.Group;
const Input = SelectPrimitive.Input;
const Value = SelectPrimitive.Value;
export {
  Root,
  Group,
  Input,
  Label,
  Item,
  Value,
  Content,
  Trigger,
  Separator,
  //
  Root as Select,
  Group as SelectGroup,
  Input as SelectInput,
  Label as SelectLabel,
  Item as SelectItem,
  Value as SelectValue,
  Content as SelectContent,
  Trigger as SelectTrigger,
  Separator as SelectSeparator,
};
